import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const App = () => {

  return (
    <View style={styles.container}>
      <Text>Swifey.ai</Text>

      <Link href='/profile' style={{
        color: 'blue',
      }}>Go to Profile</Link>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});