import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const {userInfo} = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userInfo.access_token ? (
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : (
                    <>
                    <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
                    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                    </>
                ) }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;