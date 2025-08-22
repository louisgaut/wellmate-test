import { useMemo, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import useTheme from "../hooks/useTheme";
import icons from "../theme/icons";
import { AppType } from "../types/app";
import Icon from "./Icon";

type Props = {type: AppType, size?: number}

export default function ThemedCheckbox({type, size = 24}:Props) {
    const colors = useTheme()
    const [isChecked, setIsChecked] = useState(false)

    const iconSize = size * 0.9

    const handleChecked = () => {
        setIsChecked(!isChecked)
    }

    //Styles
    const styles = useMemo(() => {
        return StyleSheet.create({
            mainContainer: {
                borderRadius: 4,
                borderWidth: isChecked ? 0 : 1,
                borderColor: colors.black.dark,
                width: size,
                height: size,
                alignItems:"center",
                justifyContent:"center",
                backgroundColor: isChecked ? (type === "pro" ? colors.pro.base : colors.training.base) : "transparent",
            }
        })
    }, [colors, type, isChecked, size])

    return (
        <Pressable onPress={handleChecked}>
            <View style={styles.mainContainer}>
                {isChecked && <Icon color={colors.white.light} size={iconSize} variant={icons.check} />}
            </View>
        </Pressable>
    )
}