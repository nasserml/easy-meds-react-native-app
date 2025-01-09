import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../constant/Colors";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text style={styles.textHeader}>Let's Sign You In</Text>
      <Text style={styles.subText}>Welcome Back</Text>
      <Text style={styles.subText}>You've been missed</Text>

      <View
        style={{
          marginTop: 25,
        }}
      >
        <Text>Email</Text>
        <TextInput placeholder="Email" style={styles.textInput} />
      </View>

      <View
        style={{
          marginTop: 25,
        }}
      >
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 17 }}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCreate} onPress={()=> router.push("/login/signUp")}>
        <Text style={{ color: Colors.PRIMARY, textAlign: "center", fontSize: 17 }} >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
  },
  subText: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.GRAY,
    marginTop: 10,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    fontSize: 17,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "white",
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    marginTop: 35,
  },
  buttonCreate: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 35,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },
});
