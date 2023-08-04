import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
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
    // Implement your quiz logic here
    // Define the correct answers for each question
    const correctAnswers = {
      question1: "yes",
      question2: "yes",
      question3: "yes",
      question4: "yes",
    };

    // Get the user's answers
    const userAnswers = {
      question1: text1.toLowerCase().trim(),
      question2: text2.toLowerCase().trim(),
      question3: text3.toLowerCase().trim(),
      question4: text4.toLowerCase().trim(),
    };

    // Compare user's answers with correct answers
    const score = Object.keys(userAnswers).reduce((acc, question) => {
      if (userAnswers[question] === correctAnswers[question]) {
        return acc + 1;
      }
      return acc;
    }, 0);

    // Show the user's score
    Alert.alert("Quiz Result", `Your score is ${score} out of 4`);

    // You can also customize the response based on the score
    // For example, show different messages for different score ranges.
    // if (score === 4) {
    //   Alert.alert("Quiz Result", "Congratulations! You got a perfect score!");
    // } else if (score >= 2) {
    //   Alert.alert("Quiz Result", "Great job! You know a lot!");
    // } else {
    //   Alert.alert("Quiz Result", "Keep practicing! You can do better!");
    // }
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

        {/* Pergunta 1 */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
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

        {/* Pergunta 2 */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
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

        {/* Pergunta 3 */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
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

        {/* Pergunta 4 */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
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

        {/* Botão Enviar */}
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
