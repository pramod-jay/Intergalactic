import React from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import ExtStyles from "../Styles/ExtStyles";
import Header from "../assets/Header";
import LinearGradient from "react-native-linear-gradient";


const TripDetails = () => {
    return (
        <SafeAreaView style={ExtStyles.body}>

            <Header />
            <ScrollView>
                <LinearGradient colors={['#282A51', '#4D4D65']} style={intStyles.contentBox}>

                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );
};

const intStyles = StyleSheet.create({
    contentBox: {
        marginTop: 20,
        marginHorizontal: '5%',
        width: '90%',
        height: 400,
        borderRadius: 10
    },
});

export default TripDetails;