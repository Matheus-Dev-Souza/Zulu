import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen({ navigation }) {
  const isDarkmode = false; // Assuming isDarkmode is set to false
  const handleBack = () => {
    navigation.goBack();
  };

  const [profileImage, setProfileImage] = useState(null);
  const [profileFields, setProfileFields] = useState([
    { key: "name", label: "Name", value: "" },
    { key: "number", label: "Number", value: "" },
    { key: "email", label: "Email", value: "" },
    { key: "dob", label: "Date of Birth", value: "" },
    { key: "cpf", label: "CPF", value: "" },
    { key: "clinicName", label: "Clinic Name", value: "" },
  ]);

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  const handleRemovePhoto = () => {
    setProfileImage(null);
  };

  const handleFieldChange = (key, value) => {
    setProfileFields(prevFields =>
      prevFields.map(field => (field.key === key ? { ...field, value } : field))
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: isDarkmode ? "#000" : "#fff" }]}>
        <Ionicons
          name="chevron-back"
          size={20}
          color={isDarkmode ? "#fff" : "#000"}
          onPress={handleBack}
        />
        <Text style={[styles.headerText, { color: isDarkmode ? "#fff" : "#000" }]}>Edit Profile</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.profileImageContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <TouchableOpacity onPress={handleChoosePhoto}>
              <Text style={styles.profileImagePlaceholder}>Choose Photo</Text>
            </TouchableOpacity>
          )}
          {profileImage && (
            <View style={styles.profileImageButtons}>
              <TouchableOpacity onPress={handleChoosePhoto}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleRemovePhoto}>
                <Text style={styles.removeButton}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {profileFields.map(field => (
          <View key={field.key} style={styles.profileField}>
            <Text style={styles.fieldLabel}>{field.label}:</Text>
            <TextInput
              style={styles.fieldInput}
              placeholder={`Enter your ${field.label.toLowerCase()}`}
              value={field.value}
              onChangeText={value => handleFieldChange(field.key, value)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileImagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
  },
  profileImageButtons: {
    flexDirection: "row",
    marginTop: 10,
  },
  editButton: {
    color: "#007BFF",
    marginRight: 15,
  },
  removeButton: {
    color: "#FF0000",
  },
  profileField: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  fieldLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  fieldInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});
