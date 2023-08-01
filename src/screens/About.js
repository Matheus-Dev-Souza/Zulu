import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const isDarkmode = false; // Assuming isDarkmode is set to false
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: isDarkmode ? "#000" : "#fff",
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        <Ionicons
          name="chevron-back"
          size={20}
          color={isDarkmode ? "#fff" : "#000"}
          onPress={handleBack}
        />
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            color: isDarkmode ? "#fff" : "#000",
            fontSize: 18,
          }}
        >
          About
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* This text using ubuntu font */}
        <Text style={{ fontWeight: "bold"}}>
          About
        </Text>
      </View>
    </View>
  );
}
