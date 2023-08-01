import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const [isDarkmode, setIsDarkmode] = useState(false);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSend = () => {
    // Implement your logic to handle the send button click here
    // You can access the text inputs using text1, text2, text3, and text4
    // For example:
    console.log("Text 1:", text1);
    console.log("Text 2:", text2);
    console.log("Text 3:", text3);
    console.log("Text 4:", text4);
  };

  return (
    <>
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
            Diario
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          {/* Pergunta 1 */}
          <Text style={{ marginBottom: 10 }}>
            Você perdeu o interesse em atividades que antes eram prazerosas?
          </Text>
          <TextInput
            placeholder="Enter your text"
            label="Texto"
            value={text1}
            onChangeText={(text) => setText1(text)}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          {/* Pergunta 2 */}
          <Text style={{ marginBottom: 10 }}>
            Você tem um sentimento persistente de tristeza?
          </Text>
          <TextInput
            placeholder="Enter your text"
            label="Texto"
            value={text2}
            onChangeText={(text) => setText2(text)}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          {/* Pergunta 3 */}
          <Text style={{ marginBottom: 10 }}>
            Você percebeu uma maior dificuldade para se concentrar?
          </Text>
          <TextInput
            placeholder="Enter your text"
            label="Texto"
            value={text3}
            onChangeText={(text) => setText3(text)}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          {/* Pergunta 4 */}
          <Text style={{ marginBottom: 10 }}>
            Você se sente mais cansado frequentemente?
          </Text>
          <TextInput
            placeholder="Enter your text"
            label="Texto"
            value={text4}
            onChangeText={(text) => setText4(text)}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}
        >
          <Button title="Enviar" onPress={handleSend} />
        </View>
      </View>
    </>
  );
}
