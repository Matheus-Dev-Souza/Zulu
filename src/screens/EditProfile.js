import React from 'react';
import { View, Text } from 'react-native';

export default function ({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>This is the Profile tab</Text>
      </View>
    </View>
  );
}
