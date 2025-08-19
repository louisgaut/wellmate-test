import ThemedText from "@/src/elements/ThemedText";
import colors from "@/src/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

interface ColorSquareProps {
    color: string;
    name: string;
}

function ColorSquare({ color, name }: ColorSquareProps) {
    return (
        <View style={styles.colorContainer}>
            <View style={[styles.colorSquare, { backgroundColor: color }]} />
            <ThemedText content={name} style={styles.colorName} />
            <ThemedText content={color} style={styles.colorValue} />
        </View>
    )
}

interface ColorSectionProps {
    title: string;
    colorGroup: Record<string, string>;
    prefix?: string;
}

function ColorSection({ title, colorGroup, prefix = "" }: ColorSectionProps) {
    return (
        <View style={styles.section}>
            <ThemedText content={title} style={styles.sectionTitle} />
            <View style={styles.colorsGrid}>
                {Object.entries(colorGroup).map(([key, value]) => (
                    <ColorSquare 
                        key={key} 
                        color={value} 
                        name={prefix ? `${prefix}.${key}` : key} 
                    />
                ))}
            </View>
        </View>
    )
}

export default function Colors() {
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
                    <ThemedText content="Couleurs" style={styles.title} />
                </View>
                
                <ColorSection title="Texte" colorGroup={colors.text} prefix="text" />
                <ColorSection title="Arrière-plan" colorGroup={colors.background} prefix="background" />
                <ColorSection title="Icônes" colorGroup={colors.icon} prefix="icon" />
                <ColorSection title="Pro" colorGroup={colors.pro} prefix="pro" />
                <ColorSection title="Training" colorGroup={colors.training} prefix="training" />
                <ColorSection title="Blanc" colorGroup={colors.white} prefix="white" />
                <ColorSection title="Noir" colorGroup={colors.black} prefix="black" />
                <ColorSection title="Vert" colorGroup={colors.green} prefix="green" />
                <ColorSection title="Orange" colorGroup={colors.orange} prefix="orange" />
                <ColorSection title="Rouge" colorGroup={colors.red} prefix="red" />
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
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.text.base,
        flex: 1,
        textAlign: 'center',
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 15,
        color: colors.text.base,
    },
    colorsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
    },
    colorContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    colorSquare: {
        width: 80,
        height: 80,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.black.extraLight,
        shadowColor: colors.black.base,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    colorName: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 8,
        textAlign: 'center',
        color: colors.text.base,
    },
    colorValue: {
        fontSize: 10,
        marginTop: 2,
        textAlign: 'center',
        color: colors.text.light,
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
})