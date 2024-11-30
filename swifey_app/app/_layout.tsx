import { Stack } from 'expo-router'
// Importing global CSS file
import "../global.css";

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{
            headerShown: false,
        }}/>

        <Stack.Screen name="profile" options={{
            headerShown: false,
        }}/>
    </Stack>
  )
}

export default RootLayout;