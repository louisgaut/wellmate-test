import ThemedText from "@/src/elements/ThemedText";
import { View } from "react-native";

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <ThemedText content="Bienvenue sur WellMate" />
    </View>
  );
}
