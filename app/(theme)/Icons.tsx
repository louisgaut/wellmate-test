import ThemedText from "@/src/elements/ThemedText";
import colors from "@/src/theme/colors";
import icons from "@/src/theme/icons";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

interface IconDemoProps {
    iconName: keyof typeof Ionicons.glyphMap;
    name: string;
    category?: string;
}

function IconDemo({ iconName, name, category }: IconDemoProps) {
    return (
        <View style={styles.iconContainer}>
            <View style={styles.iconDisplay}>
                <Ionicons name={iconName} size={32} color={colors.icon.base} />
            </View>
            <View style={styles.iconInfo}>
                <ThemedText content={name} variant="semiBoldS" style={styles.iconName} />
                <ThemedText content={iconName} variant="regularS" style={styles.iconValue} />
            </View>
        </View>
    )
}

interface IconSectionProps {
    title: string;
    iconGroup: Record<string, string>;
}

function IconSection({ title, iconGroup }: IconSectionProps) {
    return (
        <View style={styles.section}>
            <ThemedText content={title} variant="semiBoldL" style={styles.sectionTitle} />
            <View style={styles.iconGrid}>
                {Object.entries(iconGroup).map(([key, value]) => (
                    <IconDemo 
                        key={key} 
                        iconName={value as keyof typeof Ionicons.glyphMap}
                        name={`icons.${key}`}
                    />
                ))}
            </View>
        </View>
    )
}

export default function Icons() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    // Organiser les icônes par catégorie
    const networkIcons = {
        mail: icons.mail,
        phone: icons.phone,
        facebook: icons.facebook,
        instagram: icons.instagram,
    };

    const navigationIcons = {
        back: icons.back,
        close: icons.close,
    };

    const utilityIcons = {
        eye: icons.eye,
        eyeOff: icons.eyeOff,
        lock: icons.lock,
    };

    const appIcons = {
        people: icons.people,
        calendar: icons.calendar,
        barbell: icons.barbell,
        money: icons.money,
        grid: icons.grid,
        home: icons.home,
        chat: icons.chat,
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                        <Ionicons name="arrow-back" size={24} color={colors.icon.base} />
                    </TouchableOpacity>
                    <ThemedText content="Icônes" variant="semiBoldXL" style={styles.title} />
                </View>
                
                <IconSection title="Réseaux sociaux" iconGroup={networkIcons} />
                <IconSection title="Navigation" iconGroup={navigationIcons} />
                <IconSection title="Utilitaires" iconGroup={utilityIcons} />
                <IconSection title="Application" iconGroup={appIcons} />
            </ScrollView>
        </View>
    )
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
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        marginBottom: 15,
        color: colors.text.base,
    },
    iconGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
    },
    iconContainer: {
        backgroundColor: colors.background.card,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.black.extraLight,
        shadowColor: colors.black.base,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
        width: 110,
        padding: 12,
        alignItems: 'center',
    },
    iconDisplay: {
        backgroundColor: colors.white.base,
        borderRadius: 6,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    iconInfo: {
        alignItems: 'center',
    },
    iconName: {
        color: colors.pro.base,
        textAlign: 'center',
        marginBottom: 2,
    },
    iconValue: {
        color: colors.text.light,
        textAlign: 'center',
        fontSize: 10,
    },
});
