import typography from "../theme/typography"
import { Text, TextProps } from "react-native"
import useTheme from "../hooks/useTheme"

const styles = {
    bodySmall: typography.body.small,

    bodySmallBold: typography.body.smallBold,

    bodyBase: typography.body.base,

    bodyBaseBold: typography.body.baseBold,

    labelSmall: typography.label.small,

    labelBase: typography.label.base,

    title: typography.title,

    headline: typography.headline,
}

type Props = {content: string, variant?: keyof typeof styles} & TextProps

export default function ThemedText({content, variant = 'bodyBase', style, ...textProps}:Props){
    const colors = useTheme()
    return(
        <Text style={[styles[variant], {color:colors.black.dark} ,style]} {...textProps}>{content}</Text>
    )
}