import ThemedText from "@/src/elements/ThemedText";
import colors from "@/src/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

interface ThemeButtonProps {
    title: string;
    route: string;
    icon: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
}

function ThemeButton({ title, icon, onPress }: ThemeButtonProps) {
    return (
        <TouchableOpacity style={styles.themeButton} onPress={onPress}>
            <View style={styles.buttonContent}>
                <View style={styles.iconContainer}>
                    <Ionicons name={icon} size={24} color={colors.pro.base} />
                </View>
                <ThemedText content={title} variant="semiBoldM" style={styles.buttonText} />
                <Ionicons name="chevron-forward" size={20} color={colors.text.light} />
            </View>
        </TouchableOpacity>
    );
}

export default function ThemeMenu() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    const themeItems = [
        { title: "Couleurs", route: "/(theme)/Colors", icon: "color-palette-outline" as const },
        { title: "Typographie", route: "/(theme)/Typography", icon: "text-outline" as const },
        { title: "Icônes", route: "/(theme)/Icons", icon: "shapes-outline" as const },
        { title: "Espacements", route: "/(theme)/Spacing", icon: "resize-outline" as const },
        { title: "Border Radius", route: "/(theme)/Radii", icon: "radio-button-off-outline" as const },
        { title: "Ombres", route: "/(theme)/Shadows", icon: "layers-outline" as const },
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                        <Ionicons name="arrow-back" size={24} color={colors.icon.base} />
                    </TouchableOpacity>
                    <ThemedText content="Thème WellMate" variant="semiBoldXL" style={styles.title} />
                </View>

                <View style={styles.buttonsList}>
                    {themeItems.map((item) => (
                        <ThemeButton
                            key={item.route}
                            title={item.title}
                            route={item.route}
                            icon={item.icon}
                            onPress={() => router.push(item.route as any)}
                        />
                    ))}

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.page,
    },
    contentContainer: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        position: 'relative',
    },
    title: {
        color: colors.text.base,
        flex: 1,
        textAlign: 'center',
    },
    backButton: {
        backgroundColor: colors.background.card,
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.black.base,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        marginRight: 10,
    },
    subtitle: {
        color: colors.text.light,
        textAlign: 'center',
        marginBottom: 30,
    },
    buttonsList: {
        gap: 15,
    },
    themeButton: {
        backgroundColor: colors.background.card,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.black.extraLight,
        shadowColor: colors.black.base,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    iconContainer: {
        marginRight: 15,
    },
    buttonText: {
        flex: 1,
        color: colors.text.base,
    },
});