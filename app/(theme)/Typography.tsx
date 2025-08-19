import ThemedText from "@/src/elements/ThemedText";
import colors from "@/src/theme/colors";
import typography from "@/src/theme/typography";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

interface TypographyDemoProps {
    style: any;
    name: string;
    sampleText?: string;
}

function TypographyDemo({ style, name, sampleText = "The quick brown fox jumps over the lazy dog" }: TypographyDemoProps) {
    return (
        <View style={styles.typographyContainer}>
            <View style={styles.typographyHeader}>
                <ThemedText content={name} variant="semiBoldS" style={styles.typographyName} />
                <ThemedText content={`${style.fontSize}px - ${style.fontFamily}`} variant="regularS" style={styles.typographyDetails} />
            </View>
            <ThemedText content={sampleText} style={[style, styles.sampleText]} />
        </View>
    )
}

interface TypographySectionProps {
    title: string;
    typographyGroup: Record<string, any>;
    prefix: string;
}

function TypographySection({ title, typographyGroup, prefix }: TypographySectionProps) {
    return (
        <View style={styles.section}>
            <ThemedText content={title} variant="semiBoldL" style={styles.sectionTitle} />
            <View style={styles.typographyList}>
                {Object.entries(typographyGroup).map(([key, value]) => (
                    <TypographyDemo 
                        key={key} 
                        style={value} 
                        name={`${prefix}.${key}`}
                        sampleText={`Exemple de texte en ${prefix} ${key}`}
                    />
                ))}
            </View>
        </View>
    )
}

export default function Typography() {
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
                    <ThemedText content="Typographie" variant="semiBoldXL" style={styles.title} />
                </View>
                
                <TypographySection 
                    title="Regular" 
                    typographyGroup={typography.regular} 
                    prefix="regular" 
                />
                
                <TypographySection 
                    title="Semi Bold" 
                    typographyGroup={typography.semiBold} 
                    prefix="semiBold" 
                />
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
    typographyList: {
        gap: 20,
    },
    typographyContainer: {
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
    typographyHeader: {
        marginBottom: 10,
    },
    typographyName: {
        color: colors.pro.base,
        marginBottom: 2,
    },
    typographyDetails: {
        color: colors.text.light,
    },
    sampleText: {
        color: colors.text.base,
        lineHeight: 22,
    },
});
