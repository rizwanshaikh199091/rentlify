// src/screens/ForceUpdate.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ForceUpdate = () => {
  const handleForceUpdate = () => {
    // Trigger app update logic here
    console.log('Force update triggered');
  };

  return (
    <View style={styles.container}>
      <Text>Please update your app to continue using it</Text>
      <Button title="Update Now" onPress={handleForceUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ForceUpdate;
