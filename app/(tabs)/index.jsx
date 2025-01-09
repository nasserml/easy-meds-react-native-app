import { View, Text, Button } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/FirebaseConfig";
import { RemoveLocalStorage } from "../../service/Storage";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Logout"
        onPress={() => {
          signOut(auth);
          RemoveLocalStorage();
          router.replace("/login");
        }}
      />
    </View>
  );
}
