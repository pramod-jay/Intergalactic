import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import ExtStyles from './../Styles/ExtStyles';
import Header from "../assets/Header";


const MakeBooking = () => {
    return (
        <SafeAreaView style={ExtStyles.body}>
            
            <Header />

            <View style={intStyles.titleBar}>
                <Text style={intStyles.title}>Make a Booking</Text>
                <View style={intStyles.titleLine} />
            </View>

            <View style={intStyles.formTitleContainer}>
                <View style={intStyles.divider}>
                    <Text style={{color:'#FBBC05', fontSize: 24, fontWeight: '400'}}>Selected date</Text>
                </View>
                <View style={intStyles.divider}>
                    <Text style={{color:'#FBBC05', fontSize: 24, fontWeight: '400', alignSelf: 'flex-end'}}>xx.xx.xxxx</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

//Internal style sheet
const intStyles = StyleSheet.create({
    divider: {
        width: '50%'
    },

    formTitleContainer: {
        paddingTop: 20,
        marginHorizontal: 25,
        flexDirection: 'row'
    },

    titleLine:{
        width: 180,
        height: 2,
        backgroundColor: '#F6A473'
    },
    title:{
        fontSize: 36,
        fontWeight: 'bold',
        color: '#F6A473'
    },

    titleBar:{
        width: '100%',
        justifyContent: 'center',
        marginHorizontal: 25,
        paddingTop: 10
    },
});

export default MakeBooking;