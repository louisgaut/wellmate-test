import Ionicons from '@expo/vector-icons/Ionicons';
import useTheme from '../hooks/useTheme';
import { IconType } from '../types/theme';

type Props = {variant: IconType , size?: number, color?: string}

export default function Icon ({variant , size = 24 , color}:Props){

    const colors = useTheme()

    return(
        <Ionicons name={variant} size={size} color={color ?? colors.icon.base} />
    )
}