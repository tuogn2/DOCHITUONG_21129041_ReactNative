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
import Group from "../../assets/images/Group.png";

export default function ThreeScreen() {
  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
          >
            <Image source={Group} style={{ width: 120, height: 120 }} />
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
              FORGET PASSWORD
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
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Email" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
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
    width: 300, 
    backgroundColor: "#C4C4C4",
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,  
  },
});
