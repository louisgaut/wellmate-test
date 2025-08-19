import { Button, View } from "react-native";
import ThemedText from "@/src/elements/ThemedText";
import { useResponsive } from "@/src/hooks/useResponsive";
import { useRouter } from "expo-router";

export default function Index() {

  const { width, height } = useResponsive()
  const router = useRouter()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 24
      }}
    >
      <ThemedText content={"Largeur écran " + width} variant="regularM"></ThemedText>
      <ThemedText content={"Hauteur écran " + height} variant="regularM"></ThemedText>
      <Button title="Thème" onPress={() => router.push("/ThemeMenu")}></Button>
    </View>
  );
}