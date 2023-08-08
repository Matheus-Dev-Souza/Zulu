import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Calendar } from "react-native-calendars";

export default function ({ navigation }) {
  const isDarkmode = false;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleBack = () => {
    navigation.goBack();
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    toggleModal();
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
          Consulta
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Consulta</Text>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={{ color: "blue" }}>Agendar Consulta</Text>
        </TouchableOpacity>
        <Calendar
          // Configurações do calendário, se necessário
        />
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <DateTimePickerModal
            isVisible={isModalVisible}
            mode="datetime"
            onConfirm={handleDateConfirm}
            onCancel={toggleModal}
          />
        </View>
      </Modal>
    </View>
  );
}
