import ThemedText from "@/src/elements/ThemedText";
import colors from "@/src/theme/colors";
import shadows from "@/src/theme/shadows";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

interface ShadowDemoProps {
    shadowStyle: any;
    name: string;
}

function ShadowDemo({ shadowStyle, name }: ShadowDemoProps) {
    return (
        <View style={styles.shadowContainer}>
            <View style={styles.shadowHeader}>
                <ThemedText content={name} variant="semiBoldS" style={styles.shadowName} />
                <ThemedText content={`elevation: ${shadowStyle.elevation}`} variant="regularS" style={styles.shadowValue} />
            </View>
            
            {/* Démonstration visuelle de l'ombre */}
            <View style={styles.demoContainer}>
                <View style={[styles.shadowDemo, shadowStyle]}>
                    <ThemedText content="Exemple" variant="regularM" style={styles.demoText} />
                </View>
            </View>

            {/* Détails techniques */}
            <View style={styles.technicalDetails}>
                <ThemedText content={`Offset: ${shadowStyle.shadowOffset.width}, ${shadowStyle.shadowOffset.height}`} variant="regularS" style={styles.detailText} />
                <ThemedText content={`Opacity: ${shadowStyle.shadowOpacity}`} variant="regularS" style={styles.detailText} />
                <ThemedText content={`Radius: ${shadowStyle.shadowRadius}`} variant="regularS" style={styles.detailText} />
            </View>
        </View>
    )
}

export default function Shadows() {
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
                    <ThemedText content="Ombres" variant="semiBoldXL" style={styles.title} />
                </View>
                
                <View style={styles.section}>
                    <ThemedText content="Variantes d'ombres" variant="semiBoldL" style={styles.sectionTitle} />
                    <View style={styles.shadowsList}>
                        {Object.entries(shadows).map(([key, value]) => (
                            <ShadowDemo 
                                key={key} 
                                shadowStyle={value} 
                                name={`shadows.${key}`}
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
    shadowsList: {
        gap: 30,
    },
    shadowContainer: {
        backgroundColor: colors.background.card,
        padding: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.black.extraLight,
    },
    shadowHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    shadowName: {
        color: colors.pro.base,
    },
    shadowValue: {
        color: colors.text.light,
    },
    demoContainer: {
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: colors.white.base,
        borderRadius: 8,
        marginBottom: 15,
    },
    shadowDemo: {
        backgroundColor: colors.white.light,
        borderRadius: 8,
        width: 150,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    demoText: {
        color: colors.text.base,
        textAlign: 'center',
    },
    technicalDetails: {
        gap: 2,
    },
    detailText: {
        color: colors.text.light,
        fontSize: 11,
    },
});
