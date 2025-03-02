import { View } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="join" />
        <Stack.Screen name="signing" />
      </Stack>
    </View>
  );
}
