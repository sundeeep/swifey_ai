import { Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const App = () => {

  return (
    <View className='flex-1 items-center justify-center bg-white gap-5'>
      <Text className='font-bold text-5xl'>Swifey.ai</Text>

      <Link href='/profile' className='underline font-semibold text-blue-600'>Go to Profile</Link>
    </View>
  )
}

export default App;

