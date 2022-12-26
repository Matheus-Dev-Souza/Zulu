import React, {useState} from "react";
import { View, Button} from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
  TextInput,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  const [text, setText] = React.useState('');
  const [ Button] = React.useState('');
  return (
    <>
    <Layout>
      <TopNav
        middleContent="Diario"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.black}
          />
        }
        leftAction={() => navigation.goBack()}
      />
      <View id="1"
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 1  Pergunta */}
         <Text style={{ marginBottom: 10 }}>Você perdeu o interesse em atividades que antes eram prazerosas?</Text>
        <TextInput 
                placeholder="Enter your text"
                label="Texto"
                value={text}
                onChangeText={(text) => setText(text)}
            />
            <Button> Enviar </Button>
      </View>
      <View id="2"
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
{/* 2  Pergunta */}
<Text style={{ marginBottom: 10 }}>Você tem um sentimento persistente de tristeza?</Text>
<TextInput 
        placeholder="Enter your text"
        label="Texto"
        value={text}
        onChangeText={(text) => setText(text)}
    />
      </View>
      <View id="3"
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
{/* 3  Pergunta */}
<Text style={{ marginBottom: 10 }}> Você percebeu uma maior dificuldade para se concentrar?</Text>
    <TextInput 
        placeholder="Enter your text"
        label="Texto"
        value={text}
        onChangeText={(text) => setText(text)}
        
    />
      </View>
      <View id="4"
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
{/* 4  Pergunta */}

<Text style={{ marginBottom: 10 }}>Você se sente mais cansado frequentemente?</Text>

    <TextInput 
        placeholder="Enter your text"
        label="Texto"
        value={text}
        onChangeText={(text) => setText(text)}
      />

      </View>
    </Layout>
    </>
  );
}

