import { View } from "react-native";
import NavBar from "@/src/components/navigation/NavBar";

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <NavBar type="pro"/>
    </View>
  );
}
