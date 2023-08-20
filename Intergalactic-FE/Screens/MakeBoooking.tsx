import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import ExtStyles from '../Styles/ExtStyles';
import Header from "../assets/Header";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StacksParams } from "../Navigation/Navigation";
import { RadioButton, TextInput } from "react-native-paper";
import NumericInput from "react-native-numeric-input";
import Loader from "../assets/Loader";
import LinearGradient from "react-native-linear-gradient";
import Error from "../assets/Error";
import axios from "axios";
import { API_URL } from "../API/API";

type Props = NativeStackScreenProps<StacksParams, "MakeBooking">;

const MakeBooking: React.FC<Props> = (props) => {

    async function handleBook() {
        setIsLoading(true);
        const response = await axios.post(API_URL + 'saveBooking', { passengers: passangers, passportNum: 'P_001', humoCode: '1', travelID: props.route.params.travelID });
        if (response.data == 200) {
            setIsLoading(false);
            props.navigation.navigate('TripDetails');
        } else {
            setIsLoading(false);
            showErrorMessage();
            setErrMessage('Something went wrong....\nPlease try again...')
        }
    }

    const depDate = props.route.params.depDate;

    const [radioValTitle, setRadioValTitle] = useState('Mr');

    const [radioValGender, setRadioValGender] = useState('Male');

    const [passangers, setPassangers] = useState(1);



    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    const showErrorMessage = () => {
        setIsError(true);
    };

    const hideErrorMessage = () => {
        setIsError(false);
    };

    return (
        <SafeAreaView style={ExtStyles.body}>

            <Header />

            <View style={intStyles.titleBar}>
                <Text style={intStyles.title}>Make a Booking</Text>
                <View style={intStyles.titleLine} />
            </View>


            <ScrollView>
                <View style={intStyles.formTitleContainer}>
                    <View style={intStyles.divider}>
                        <Text style={{ color: '#FBBC05', fontSize: 24, fontWeight: '400' }}>Selected date</Text>
                    </View>
                    <View style={intStyles.divider}>
                        <Text style={{ color: '#FBBC05', fontSize: 24, fontWeight: '400', alignSelf: 'flex-end' }}>{depDate}</Text>
                    </View>
                </View>

                <View style={intStyles.elementTitleContainer}>
                    <Text style={intStyles.elementTitle}>Humo Code</Text>
                </View>

                <View style={intStyles.elementContainer}>
                    <Text style={intStyles.elementTxt}>001</Text>
                </View>

                <View style={{ width: '90%', marginHorizontal: '5%', marginTop: 20, flexDirection: 'row' }}>
                    <View style={{ width: '33.33%' }}>
                        <View style={[intStyles.elementContainer, { marginHorizontal: 0, width: '90%', marginVertical: 0, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }]}>
                            <RadioButton value="Mr" status={radioValTitle === 'Mr' ? 'checked' : 'unchecked'} color="#A73209" uncheckedColor="#A9A3A3" />
                            <Text style={intStyles.elementTxt}>Mr</Text>
                        </View>
                    </View>
                    <View style={{ width: '33.33%', alignItems: 'center' }}>
                        <View style={[intStyles.elementContainer, { marginHorizontal: 0, width: '90%', marginVertical: 0, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }]}>
                            <RadioButton value="Mrs" status={radioValTitle === 'Mrs' ? 'checked' : 'unchecked'} color="#A73209" uncheckedColor="#A9A3A3" />
                            <Text style={intStyles.elementTxt}>Mrs</Text>
                        </View>
                    </View>
                    <View style={{ width: '33.33%', alignItems: 'flex-end' }}>
                        <View style={[intStyles.elementContainer, { marginHorizontal: 0, width: '90%', marginVertical: 0, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }]}>
                            <RadioButton value="Ms" status={radioValTitle === 'Ms' ? 'checked' : 'unchecked'} color="#A73209" uncheckedColor="#A9A3A3" />
                            <Text style={intStyles.elementTxt}>Ms</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={intStyles.elementTitleContainer}>
                        <Text style={intStyles.elementTitle}>Name</Text>
                    </View>
                    <View style={intStyles.elementContainer}>
                        <Text style={intStyles.elementTxt}>Pramod</Text>
                    </View>
                    <View style={intStyles.elementContainer}>
                        <Text style={intStyles.elementTxt}>Jayathilaka</Text>
                    </View>
                </View>

                <View>
                    <View style={intStyles.elementTitleContainer}>
                        <Text style={intStyles.elementTitle}>Date of birth</Text>
                    </View>
                    <View style={intStyles.elementContainer}>
                        <Text style={intStyles.elementTxt}>16/02/2000</Text>
                    </View>
                </View>

                <View>
                    <View style={intStyles.elementTitleContainer}>
                        <Text style={intStyles.elementTitle}>Nationality</Text>
                    </View>
                    <View style={intStyles.elementContainer}>
                        <Text style={intStyles.elementTxt}>Sinhalese</Text>
                    </View>
                </View>

                <View style={{ width: '90%', marginHorizontal: '5%', marginTop: 20, flexDirection: 'row' }}>
                    <View style={{ width: '50%' }}>
                        <View style={[intStyles.elementContainer, { marginHorizontal: 0, width: '95%', marginVertical: 0, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }]}>
                            <RadioButton value="Mr" status={radioValGender === 'Male' ? 'checked' : 'unchecked'} color="#A73209" uncheckedColor="#A9A3A3" />
                            <Text style={intStyles.elementTxt}>Male</Text>
                        </View>
                    </View>
                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                        <View style={[intStyles.elementContainer, { marginHorizontal: 0, width: '95%', marginVertical: 0, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }]}>
                            <RadioButton value="Mr" status={radioValGender === 'Female' ? 'checked' : 'unchecked'} color="#A73209" uncheckedColor="#A9A3A3" />
                            <Text style={intStyles.elementTxt}>Female</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={intStyles.elementTitleContainer}>
                        <Text style={intStyles.elementTitle}>Number of Passengers</Text>
                    </View>
                    <View style={{ width: '90%', marginHorizontal: '5%' }}>
                        <NumericInput onChange={value => setPassangers(value)} minValue={1} maxValue={5} totalWidth={200} totalHeight={59} containerStyle={{ borderWidth: 3, borderColor: '#F6A473', backgroundColor: '#FFF', borderRadius: 5 }} />
                    </View>
                </View>

                <View>
                    <View style={intStyles.elementTitleContainer}>
                        <Text style={intStyles.elementTitle}>Intergalactic passport Number</Text>
                    </View>
                    <View style={intStyles.elementContainer}>
                        <Text style={intStyles.elementTxt}>P_001</Text>
                    </View>
                </View>

                <View style={intStyles.btnContainer}>
                    <Pressable onPress={() => handleBook()}>
                        <LinearGradient colors={['#F6A473', '#4D4D65']} style={intStyles.btn}>
                            <Text style={intStyles.btnTxt}>Book</Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </ScrollView>
            {isLoading ? <Loader /> : null}
            <Error showModal={isError} hideModal={hideErrorMessage} message={errMessage} />
        </SafeAreaView>
    );
}

//Internal style sheet
const intStyles = StyleSheet.create({
    btnTxt: {
        fontWeight: '600',
        color: '#FFF',
        fontSize: 20
    },

    btn: {
        width: 110,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnContainer: {
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: 20
    },

    elementTitle: {
        fontSize: 15,
        color: '#FFF',
        fontWeight: '400'
    },

    elementTitleContainer: {
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 10
    },

    elementTxt: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000'
    },

    elementContainer: {
        width: '90%',
        marginHorizontal: '5%',
        height: 59,
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginVertical: 5,
        justifyContent: 'center',
        padding: 10,
        borderWidth: 3,
        borderColor: '#F6A473'
    },

    divider: {
        width: '50%'
    },

    formTitleContainer: {
        paddingTop: 20,
        marginHorizontal: 25,
        flexDirection: 'row'
    },

    titleLine: {
        width: 180,
        height: 2,
        backgroundColor: '#F6A473',
        marginBottom: 10
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#F6A473'
    },

    titleBar: {
        width: '100%',
        justifyContent: 'center',
        marginHorizontal: 25,
        paddingTop: 10
    },
});

export default MakeBooking;