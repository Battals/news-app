import {} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeScreenNavigationContainer } from 'react-native-screens'
import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

function HomeScreen(){
    return <View>
        <Text>
            Home
        </Text>
    </View>
}
export default function AppNavigator(){
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}