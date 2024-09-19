import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
import img from "../../assets/images/cirle.png";

export default function SecondScreen() {
  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
          >
            <Image source={img} style={{ width: 200, height: 200 }} />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "white",
                fontSize: 25,
                fontWeight: "700",
                width: 200,
                textAlign: "center",
              }}
            >
              GROW YOUR BUSINESS
            </Text>
          </View>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                color: "white",
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
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                marginTop: 30
                
              }}
            >
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Signup</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Text style={{ color: "black",fontSize:20 ,fontWeight:600,marginTop:10}}>How we work?</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
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
