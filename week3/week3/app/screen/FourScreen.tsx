import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function FourScreen() {
  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ fontSize: 60, fontWeight: 600 }}>CODE</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "black",
                fontSize: 25,
                fontWeight: "700",
                width: 200,
                textAlign: "center",
              }}
            >
              VERIFICATION
            </Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                color: "black",
                fontSize: 15,
                fontWeight: "700",
                width: 300,
                textAlign: "center",
                fontFamily: "Roboto",
              }}
            >
              We will help you to grow your business using online server
            </Text>
          </View>
        </View>
        {/* /// */}
        <View style={styles.formContainer}>
          <View style={{flexDirection:'row',width:100,justifyContent:'center',marginBottom:30}} >
            <TextInput style={styles.input}  />
            <TextInput style={styles.input}  />
            <TextInput style={styles.input}  />
            <TextInput style={styles.input}  />
            <TextInput style={styles.input}  />
            <TextInput style={styles.input}  />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>VERIFY CODE</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    
  },
  button: {
    backgroundColor: "#E3C000",
    paddingVertical: 12,
    borderRadius: 4,
    shadowColor: "#000",
    width: 300,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    width: 30,
    backgroundColor: "#C4C4C4",
    borderColor: "gray",
    borderWidth: 2, // Border width
    borderRadius: 4, // Border radius for rounded corners
  },
});
