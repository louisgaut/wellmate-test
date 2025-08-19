import ThemedText from "@/src/elements/ThemedText";
import colors from "@/src/theme/colors";
import radii from "@/src/theme/radii";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

interface RadiiDemoProps {
    radiusValue: number;
    name: string;
}

function RadiiDemo({ radiusValue, name }: RadiiDemoProps) {
    return (
        <View style={styles.radiiContainer}>
            <View style={styles.radiiHeader}>
                <ThemedText content={name} variant="semiBoldS" style={styles.radiiName} />
                <ThemedText content={`${radiusValue}px`} variant="regularS" style={styles.radiiValue} />
            </View>
            
            {/* Démonstration visuelle du border radius */}
            <View style={styles.demoContainer}>
                <View style={[styles.radiusDemo, { borderRadius: radiusValue }]}>
                    <ThemedText content="Exemple" variant="regularM" style={styles.demoText} />
                </View>
            </View>
        </View>
    )
}

export default function Radii() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                        <Ionicons name="arrow-back" size={24} color={colors.icon.base} />
                    </TouchableOpacity>
                    <ThemedText content="Border Radius" variant="semiBoldXL" style={styles.title} />
                </View>
                
                <View style={styles.section}>
                    <ThemedText content="Valeurs de border radius" variant="semiBoldL" style={styles.sectionTitle} />
                    <View style={styles.radiiList}>
                        {Object.entries(radii).map(([key, value]) => (
                            <RadiiDemo 
                                key={key} 
                                radiusValue={value} 
                                name={`radii.${key}`}
                            />
                        ))}
                    </View>
                </View>
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
    radiiList: {
        gap: 20,
    },
    radiiContainer: {
        backgroundColor: colors.background.card,
        padding: 15,
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
    },
    radiiHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    radiiName: {
        color: colors.pro.base,
    },
    radiiValue: {
        color: colors.text.light,
    },
    demoContainer: {
        alignItems: 'center',
        padding: 10,
    },
    radiusDemo: {
        backgroundColor: colors.training.light,
        borderWidth: 2,
        borderColor: colors.training.base,
        width: 120,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    demoText: {
        color: colors.text.base,
        textAlign: 'center',
    },
});
