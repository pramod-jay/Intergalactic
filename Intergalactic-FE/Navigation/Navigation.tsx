import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MakeBooking from '../Screens/MakeBoooking';
import TripDetails from '../Screens/TripDetails';
import TravelDetails from '../Screens/TravelDetails';

export type StacksParams = {
    TripDetails: undefined;
    MakeBooking: {depDate: string};
    TravelDetails: {depDate: string};
}

const Stack = createNativeStackNavigator<StacksParams>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='TripDetails' screenOptions={{gestureEnabled: true, animationTypeForReplace:'pop'}}>
                <Stack.Screen name='TripDetails' component={TripDetails} options={{ headerShown: false }} />
                <Stack.Screen name='MakeBooking' component={MakeBooking} options={{ headerShown: false }} />
                <Stack.Screen name='TravelDetails' component={TravelDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
