import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView, TextInput, Pressable } from 'react-native';
import ExtStyles from "../Styles/ExtStyles";
import Header from "../assets/Header";
import LinearGradient from "react-native-linear-gradient";
import { RadioButton, Modal, Portal, PaperProvider } from "react-native-paper";
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-date-picker'

const TripDetails = () => {

    const [radioVal, setRadioVal] = useState('one-way');
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(null);

    return (
        <SafeAreaView style={ExtStyles.body}>

            <Header />
            <ScrollView>

                <LinearGradient colors={['#282A51', '#4D4D65']} style={intStyles.contentBox}>
                    <View style={intStyles.elementContainer}>
                        <View style={{ ...intStyles.divider, ...{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' } }}>
                            <RadioButton value="one-way" status={radioVal === 'one-way' ? 'checked' : 'unchecked'} color="#A73209" uncheckedColor="#A9A3A3" onPress={() => setRadioVal('one-way')} />
                            <Text style={intStyles.formTxt}>One Way Trip</Text>
                        </View>
                        <View style={{ ...intStyles.divider, ...{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' } }}>
                            <RadioButton value="round-trip" status={radioVal === 'round-trip' ? 'checked' : 'unchecked'} color="#A73209" uncheckedColor="#A9A3A3" onPress={() => setRadioVal('round-trip')} />
                            <Text style={intStyles.formTxt}>Round Trip</Text>
                        </View>
                    </View>

                    <View style={intStyles.elementContainer}>
                        <View style={{ ...intStyles.divider, ...{ width: '40%' } }}>
                            <Text style={intStyles.formTxt}>
                                Departure Date
                                <Text style={{ color: '#EC1313' }}>*</Text> :
                            </Text>
                        </View>
                        <View style={{ ...intStyles.divider, ...{ width: '60%' } }}>
                            <Pressable style={{ ...intStyles.element, ...{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' } }} onPress={() => setVisible(true)}>
                                <View style={{ width: '90%' }}>
                                    <Text style={intStyles.placeholder}>dd / mm / yyyy</Text>
                                </View>
                                <View style={{ width: '10%' }}>
                                    <Feather name="calendar" size={13} color={"#35364A"} />
                                </View>

                            </Pressable>

                        </View>
                    </View>
                </LinearGradient>
                <DatePicker modal open={visible} date={new Date()} mode="date" style={{ alignSelf: 'center' }} minimumDate={new Date()} fadeToColor="none" textColor="#A73209" onCancel={() => setVisible(false)} />
            </ScrollView>
        </SafeAreaView>
    );
};

const intStyles = StyleSheet.create({
    placeholder: {
        fontFamily: 'Cairo-Regular',
        fontSize: 16,
        color: 'rgba(255,255,255,0.5)',
        marginLeft: 10
    },

    element: {
        width: '100%',
        height: 32,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
    },

    formTxt: {
        fontFamily: 'Cairo-Regular',
        fontSize: 16,
        color: '#FFF'
    },

    divider: {
        width: '50%',
        justifyContent: 'center',
    },

    elementContainer: {
        width: '100%',
        flexDirection: 'row',
    },

    contentBox: {
        marginTop: 20,
        marginHorizontal: '5%',
        width: '90%',
        height: 400,
        borderRadius: 10,
        padding: 15,
    },
});

export default TripDetails;