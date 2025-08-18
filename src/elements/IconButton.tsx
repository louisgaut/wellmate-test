import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native"
import Icon from "./Icon";
import { IconType } from "../types/theme";

type Props = { style?: ViewStyle, icon: IconType, iconSize?: number, iconColor?: string } & PressableProps

export default function IconButton({ style, icon, iconSize, iconColor, ...pressableProps }: Props) {

    return (
        <Pressable style={[styles.container, style]} {...pressableProps}>
            <Icon variant={icon} size={iconSize} color={iconColor} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:0,
        justifyContent: 'center',
        alignItems: 'center',
        width:48,
        height:48,
        borderRadius:999,
    }
})