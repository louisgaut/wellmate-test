import typography from "../theme/typography"
import { Text, TextProps } from "react-native"
import useTheme from "../hooks/useTheme"

const styles = {
    regularS: typography.regular.s,

    regularM: typography.regular.m,

    regularL: typography.regular.l,

    regularXL: typography.regular.xl,

    semiBoldS: typography.semiBold.s,

    semiBoldM: typography.semiBold.m,

    semiBoldL: typography.semiBold.l,

    semiBoldXL: typography.semiBold.xl,
}

type Props = {content: string, variant?: keyof typeof styles} & TextProps

export default function ThemedText({content, variant = 'regularM', style, ...textProps}:Props){
    const colors = useTheme()
    return(
        <Text style={[styles[variant], {color:colors.black.dark} ,style]} {...textProps}>{content}</Text>
    )
}