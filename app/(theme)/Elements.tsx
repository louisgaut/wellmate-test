import { View } from "react-native";
import ThemedCheckbox from "@/src/elements/ThemedCheckbox";

export default function Elements() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 24
            }}
        >
            <ThemedCheckbox type="pro"/>
        </View>
    );
}