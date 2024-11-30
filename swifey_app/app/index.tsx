import { Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { StatusBar} from "expo-status-bar";
const App = () => {

  return (
    <View className='flex-1 items-center justify-center bg-white gap-3'>
      <Text className='font-pblack text-4xl'>Swifey.ai</Text>
      <StatusBar style="auto"/>
      <Link href='/profile' className='underline font-psemibold text-blue-600'>Go to Profile</Link>
    </View>
  )
}

export default App;