import ThemedText from "@/src/elements/ThemedText";
import colors from "@/src/theme/colors";
import spacing from "@/src/theme/spacing";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

interface SpacingDemoProps {
    spacingValue: number;
    name: string;
}

function SpacingDemo({ spacingValue, name }: SpacingDemoProps) {
    return (
        <View style={styles.spacingContainer}>
            <View style={styles.spacingHeader}>
                <ThemedText content={name} variant="semiBoldS" style={styles.spacingName} />
                <ThemedText content={`${spacingValue}px`} variant="regularS" style={styles.spacingValue} />
            </View>
            
            {/* Démonstration visuelle du spacing */}
            <View style={styles.demoContainer}>
                <View style={styles.demoLabel}>
                    <ThemedText content="Padding:" variant="regularS" style={styles.labelText} />
                </View>
                <View style={[styles.paddingDemo, { padding: spacingValue }]}>
                    <View style={styles.innerBox}>
                        <ThemedText content="Contenu" variant="regularS" style={styles.contentText} />
                    </View>
                </View>
            </View>

            <View style={styles.demoContainer}>
                <View style={styles.demoLabel}>
                    <ThemedText content="Margin:" variant="regularS" style={styles.labelText} />
                </View>
                <View style={styles.marginDemoContainer}>
                    <View style={[styles.marginDemo, { margin: spacingValue }]}>
                        <ThemedText content="Élément" variant="regularS" style={styles.contentText} />
                    </View>
                </View>
            </View>

            <View style={styles.demoContainer}>
                <View style={styles.demoLabel}>
                    <ThemedText content="Gap:" variant="regularS" style={styles.labelText} />
                </View>
                <View style={[styles.gapDemo, { gap: spacingValue }]}>
                    <View style={styles.gapItem}>
                        <ThemedText content="1" variant="regularS" style={styles.contentText} />
                    </View>
                    <View style={styles.gapItem}>
                        <ThemedText content="2" variant="regularS" style={styles.contentText} />
                    </View>
                    <View style={styles.gapItem}>
                        <ThemedText content="3" variant="regularS" style={styles.contentText} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default function Spacing() {
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
                    <ThemedText content="Espacement" variant="semiBoldXL" style={styles.title} />
                </View>
                
                <View style={styles.section}>
                    <ThemedText content="Valeurs d'espacement" variant="semiBoldL" style={styles.sectionTitle} />
                    <View style={styles.spacingList}>
                        {Object.entries(spacing).map(([key, value]) => (
                            <SpacingDemo 
                                key={key} 
                                spacingValue={value} 
                                name={`spacing.${key}`}
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
    spacingList: {
        gap: 20,
    },
    spacingContainer: {
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
    spacingHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    spacingName: {
        color: colors.pro.base,
    },
    spacingValue: {
        color: colors.text.light,
    },
    demoContainer: {
        marginBottom: 12,
    },
    demoLabel: {
        marginBottom: 5,
    },
    labelText: {
        color: colors.text.light,
        fontSize: 11,
    },
    paddingDemo: {
        backgroundColor: colors.training.light,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.training.base,
        borderStyle: 'dashed',
    },
    innerBox: {
        backgroundColor: colors.white.light,
        borderRadius: 4,
        padding: 8,
        alignItems: 'center',
    },
    marginDemoContainer: {
        backgroundColor: colors.orange.light,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.orange.base,
        borderStyle: 'dashed',
        padding: 8,
    },
    marginDemo: {
        backgroundColor: colors.white.light,
        borderRadius: 4,
        padding: 8,
        alignItems: 'center',
    },
    gapDemo: {
        flexDirection: 'row',
        backgroundColor: colors.green.light,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.green.base,
        borderStyle: 'dashed',
        padding: 8,
    },
    gapItem: {
        backgroundColor: colors.white.light,
        borderRadius: 4,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 30,
    },
    contentText: {
        color: colors.text.base,
        fontSize: 11,
    },
});
