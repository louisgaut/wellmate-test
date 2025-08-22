import { Button, StyleSheet, View } from "react-native";
import ThemedText from "@/src/elements/ThemedText";
import { useResponsive } from "@/src/hooks/useResponsive";
import { useRouter } from "expo-router";
import NavBar from "@/src/components/navigation/NavBar";

export default function Index() {

  const { width, height } = useResponsive()
  const router = useRouter()

  return (
    <View style={styles.mainContainer}>
      <NavBar type="pro"></NavBar>
      <ThemedText content={"Largeur écran " + width} variant="regularM"></ThemedText>
      <ThemedText content={"Hauteur écran " + height} variant="regularM"></ThemedText>
      <Button title="Thème" onPress={() => router.push("/ThemeMenu")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24
  }
})