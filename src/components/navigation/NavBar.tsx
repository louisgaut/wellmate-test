import IconButton from "@/src/elements/IconButton";
import useTheme from "@/src/hooks/useTheme";
import icons from "@/src/theme/icons";
import { AppType } from "@/src/types/app";
import { useEffect, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';

type Props = { type: AppType }

const proTabs = [
    icons.people,
    icons.calendar,
    icons.barbell,
    icons.money,
    icons.grid
]

const trainingTabs = [
    icons.home,
    icons.grid,
    icons.chat
]

export default function NavBar({ type }: Props) {

    //styles
    const colors = useTheme()
    const styles = useMemo(
        () =>
            StyleSheet.create({
                mainContainer: {
                    borderRadius: 999,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 24,
                    padding: 2,
                },
                selectedContainer: {
                    backgroundColor: type === "pro" ? colors.pro.base : colors.training.base,
                    borderRadius: 999,
                    width: 48,
                    height: 48,
                    position: "absolute",
                }
            }),
        [colors, type]
    );

    //States
    const [navIndex, setNavIndex] = useState(0);

    const tabs = type === 'pro' ? proTabs : trainingTabs

    //Animation
    const positionX = useSharedValue(0)

    useEffect(()=>{
        const target = navIndex*(48+24)
        positionX.value = withTiming(target,{duration: 200});
    },[navIndex , positionX])

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: positionX.value }],
    }))


    const handleNavIndex = (newIndex: number) => {
        if (newIndex !== navIndex) setNavIndex(newIndex);
    }


    return (
        <BlurView
            style={styles.mainContainer}
            intensity={40}
        >
            <Animated.View
                style={[styles.selectedContainer, animatedStyles]}
            />
            {tabs.map((icon, index) => {
                const selected = index === navIndex
                const iconColor = selected ? colors.icon.light : colors.icon.base

                return (
                    <IconButton
                        key={index}
                        icon={icon}
                        iconColor={iconColor}
                        onPress={() => handleNavIndex(index)}
                    />
                )
            })}
        </BlurView>
    )
}