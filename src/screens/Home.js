import React from "react";
import { View, Linking } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Bem Vindo!  a Zulu seu Assistente.
            </Text>

             {/*
            <Button
              style={{ marginTop: 10 }}
              text="Diario"
              status="info"
              onPress={() => Linking.openURL("https://rapi-ui.kikiding.space/")}
            />  
            */}

            
            <Button
              text="Diario"
              onPress={() => {
                navigation.navigate("Diario");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              text="Consulta"
              onPress={() => {
                navigation.navigate("Consulta");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              status="danger"
              text="Logout"
              onPress={() => {
                signOut(auth);
              }}
              style={{
                marginTop: 10,
              }}
            />
            {/*
            <Button
              text={isDarkmode ? "Light Mode" : "Dark Mode"}
              status={isDarkmode ? "success" : "warning"}
              onPress={() => {
                if (isDarkmode) {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
              style={{
                marginTop: 10,
              }}
            />
            */}
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
