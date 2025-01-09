import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'
import { useRouter } from 'expo-router'

export default function SignUp() {
    const router = useRouter();
  return (
    <View
          style={{
            padding: 20,
          }}
        >
          <Text style={styles.textHeader}>Create New Account</Text>

          <View
            style={{
              marginTop: 25,
            }}
          >
            <Text>Full Name</Text>
            <TextInput placeholder="Full Name" style={styles.textInput} />
          </View>

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
              Create Account
            </Text>
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.buttonCreate} onPress={()=> router.push("/login/signIn")}>
            <Text style={{ color: Colors.PRIMARY, textAlign: "center", fontSize: 17 }} >
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </View>
    
  )
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
