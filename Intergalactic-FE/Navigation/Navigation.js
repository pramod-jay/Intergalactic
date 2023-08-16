import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MakeBooking from '../Screens/MakeBoooking';
import TripDetails from '../Screens/TripDetails';

const Stack = createNativeStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='TripDetails'>
                <Stack.Screen name="TripDetails" component={TripDetails} options={{ headerShown: false }} />
                <Stack.Screen name='MakeBooking' component={MakeBooking} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;