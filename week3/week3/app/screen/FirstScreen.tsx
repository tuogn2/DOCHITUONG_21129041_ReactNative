import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import img from "../../assets/images/cirle.png";

export default function FirstScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#00CCF9", flex: 1 }}>
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
        >
          <Image source={img} style={{ width: 200, height: 200 }} />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: "black",
              fontSize: 25,
              fontWeight: 700,
              width: 200,
              textAlign: "center",
            }}
          >
            GROW YOUR BUSINESS
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight: 700,
              width: 300,
              textAlign: "center",
              fontFamily: "Roboto",
            }}
          >
            We will help you to grow your business using online server
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E3C000", 
    paddingVertical: 12, 
    paddingHorizontal: 32, 
    borderRadius: 4, 
    shadowColor: "#000", 
  },
  buttonText: {
    color: "black", 
    fontSize: 18, 
    fontWeight: "bold", 
    textAlign: "center", 
  },
});
