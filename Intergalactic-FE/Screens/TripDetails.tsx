import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView, TextInput, Pressable, Alert, Image } from 'react-native';
import ExtStyles from "../Styles/ExtStyles";
import Header from "../assets/Header";
import LinearGradient from "react-native-linear-gradient";
import { RadioButton, Modal, Portal, PaperProvider } from "react-native-paper";
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-date-picker';
import { SelectList } from 'react-native-dropdown-select-list';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Simple from 'react-native-vector-icons/SimpleLineIcons';
import { useSafeAreaFrame } from "react-native-safe-area-context";
const TripDetails = () => {

    const [radioVal, setRadioVal] = useState('one-way');

    const [depDateVisible, setDepDateVisible] = useState(false);
    const [depDate, setDepDate] = useState(new Date());
    const [depDateSelected, setDepDateSelected] = useState(false);

    const [arrDateVisible, setArrDateVisible] = useState(false);
    const [arrDate, setArrDate] = useState(new Date());
    const [arrDetaSelected, setArrDateSelected] = useState(false);



    const departureDest = [
        { key: '2', value: 'NASA Terminal 1' },
        { key: '3', value: 'NASA Terminal 2' },
        { key: '3', value: 'NASA Terminal 3' },
    ];

    const arrivalDest = [
        { key: '2', value: 'Nova Luxe, Mars' },
        { key: '3', value: 'Cosmos Cozy, Mars' },
        { key: '3', value: 'Olympus Haven, Mars' },
        { key: '4', value: 'Phoenix Ridge, Mars' },
    ];

    const travelModeData = [
        { key: '2', value: 'Spacecraft' },
        { key: '3', value: 'Quantum  Tunnel' },
        { key: '3', value: 'Warp Gates' },
    ];


    const [departureDestination, setDepartureDestination] = useState('');
    const [arrivalDestination, setArrivalDestination] = useState('');
    const [travelMode, setTravelMode] = useState('');

    const handleSubmit = () => {
        console.log(depDate);
        console.log(departureDestination);
        console.log(arrivalDestination);
        console.log(arrDate);
        console.log(travelMode);
    }

    return (
        <SafeAreaView style={ExtStyles.body}>

            <Header />
            <ScrollView>

                <LinearGradient colors={['#282A51', '#4D4D65']} style={intStyles.contentBox}>

                    {/* Departure Date */}
                    <View style={{ ...intStyles.elementContainer, ...{ marginTop: 0 } }}>
                        <View style={{ ...intStyles.divider, ...{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' } }}>
                            <RadioButton value="one-way" status={radioVal === 'one-way' ? 'checked' : 'unchecked'} color="#A73209" uncheckedColor="#A9A3A3" onPress={() => setRadioVal('one-way')} />
                            <Text style={intStyles.formTxt}>One Way Trip</Text>
                        </View>
                        <View style={{ ...intStyles.divider, ...{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' } }}>
                            <RadioButton value="round-trip" status={radioVal === 'round-trip' ? 'checked' : 'unchecked'} color="#A73209" uncheckedColor="#A9A3A3" onPress={() => setRadioVal('round-trip')} />
                            <Text style={intStyles.formTxt}>Round Trip</Text>
                        </View>
                    </View>


                    {/* Departure Destination */}
                    <View style={intStyles.elementContainer}>
                        <View style={{ ...intStyles.divider, ...{ width: '50%' } }}>
                            <Text style={intStyles.formTxt}>
                                Departure Date:
                            </Text>
                        </View>
                        <View style={{ ...intStyles.divider, ...{ width: '50%' } }}>
                            <Pressable style={{ ...intStyles.element, ...{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' } }} onPress={() => setDepDateVisible(true)}>
                                <View style={{ width: '90%' }}>
                                    {depDateSelected ?
                                        <Text style={{ ...intStyles.placeholder, ...{ color: '#FFF' } }}>{depDate.getDate()}/{depDate.getMonth()}/{depDate.getFullYear()}</Text>
                                        :
                                        <Text style={intStyles.placeholder}>dd / mm / yyyy</Text>
                                    }
                                </View>
                                <View style={{ width: '10%' }}>
                                    <Feather name="calendar" size={13} color={"#35364A"} />
                                </View>
                            </Pressable>
                        </View>
                    </View>


                    {/* Departure Destination */}
                    <View style={{ ...intStyles.elementContainer, ...{ zIndex: 3 } }}>
                        <View style={{ ...intStyles.divider, ...{ width: '50%' } }}>
                            <Text style={intStyles.formTxt}>
                                Departure Destination:
                            </Text>
                        </View>
                        <View style={{ ...intStyles.divider, ...{ width: '50%' } }}>
                            <View style={intStyles.element}>
                                <SelectList setSelected={(val: string) => setDepartureDestination(val)} data={departureDest} save="value" search={false} boxStyles={{ borderWidth: 0 }} dropdownStyles={{ height: 140, borderWidth: 0, backgroundColor: '#FFF', position: 'absolute' }} dropdownTextStyles={{ color: '#A73209', width: 200, fontFamily: 'Cairo-Regular' }} inputStyles={{ color: '#FFF', fontFamily: 'Cairo-Regular' }} />
                            </View>

                        </View>
                    </View>


                    {/* Arrival Destination */}
                    <View style={{ ...intStyles.elementContainer, ...{ zIndex: 2 } }}>
                        <View style={{ ...intStyles.divider, ...{ width: '50%' } }}>
                            <Text style={intStyles.formTxt}>
                                Arrival Destination:
                            </Text>
                        </View>
                        <View style={{ ...intStyles.divider, ...{ width: '50%' } }}>
                            <View style={intStyles.element}>
                                <SelectList setSelected={(val: string) => setArrivalDestination(val)} data={arrivalDest} save="value" search={false} boxStyles={{ borderWidth: 0 }} dropdownStyles={{ height: 180, borderWidth: 0, backgroundColor: '#FFF', position: 'absolute' }} dropdownTextStyles={{ color: '#A73209', width: 200, fontFamily: 'Cairo-Regular' }} inputStyles={{ color: '#FFF', fontFamily: 'Cairo-Regular' }} />
                            </View>
                        </View>
                    </View>


                    {/* Arrival Date */}
                    {radioVal == "round-trip" ? <View style={intStyles.elementContainer}>
                        <View style={{ ...intStyles.divider, ...{ width: '50%' } }}>
                            <Text style={intStyles.formTxt}>
                                Arrival Date:
                            </Text>
                        </View>
                        <View style={{ ...intStyles.divider, ...{ width: '50%' } }}>
                            <Pressable style={{ ...intStyles.element, ...{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' } }} onPress={() => setArrDateVisible(true)}>
                                <View style={{ width: '90%' }}>
                                    {arrDetaSelected ?
                                        <Text style={{ ...intStyles.placeholder, ...{ color: '#FFF' } }}>{arrDate.getDate()}/{arrDate.getMonth() + 1}/{arrDate.getFullYear()}</Text>
                                        :
                                        <Text style={intStyles.placeholder}>dd / mm / yyyy</Text>
                                    }
                                </View>
                                <View style={{ width: '10%' }}>
                                    <Feather name="calendar" size={13} color={"#35364A"} />
                                </View>
                            </Pressable>
                        </View>
                    </View> : null}


                    {/* Travel Mode */}
                    <View style={{ ...intStyles.elementContainer, ...{ zIndex: 1 } }}>
                        <View style={{ ...intStyles.divider, ...{ width: '50%' } }}>
                            <Text style={intStyles.formTxt}>
                                Travel Mode:
                            </Text>
                        </View>
                        <View style={{ ...intStyles.divider, ...{ width: '50%' } }}>
                            <View style={intStyles.element}>
                                <SelectList setSelected={(val: string) => setTravelMode(val)} data={travelModeData} save="value" search={false} boxStyles={{ borderWidth: 0 }} dropdownStyles={{ height: 140, borderWidth: 0, backgroundColor: '#FFF', position: 'absolute' }} dropdownTextStyles={{ color: '#A73209', width: 200, fontFamily: 'Cairo-Regular' }} inputStyles={{ color: '#FFF', fontFamily: 'Cairo-Regular' }} placeholder="Select your travel mode" />
                            </View>
                        </View>
                    </View>

                    {/* Search Button */}
                    <View style={intStyles.btnContainer}>
                        <Pressable style={{ width: 46, height: 46, borderRadius: 23 }} onPress={handleSubmit}>
                            <LinearGradient colors={['#B7B8CB', '#47485D']} style={intStyles.searchBtn}>
                                <Ionicons name={"search"} size={25} color={'#F6A473'} />
                            </LinearGradient>
                        </Pressable>
                    </View>
                </LinearGradient>

                <Pressable onPress={() => Alert.alert('aaaa stress')}>
                    <LinearGradient colors={['#282A51', '#4D4D65']} style={intStyles.destDetailsContainer}>
                        <View style={{ width: '60%', height: '100%' }}>
                            <Text style={intStyles.detailsHeading}>Cosmos <Text style={{ color: "#FFF" }}>Cozy</Text></Text>
                            <Text>
                                <Simple name='rocket' size={14} color={'#F6A473'} />
                                <Text style={intStyles.detailsItem}> Spaceraft</Text>
                            </Text>
                            <Text>
                                <Simple name='rocket' size={14} color={'#F6A473'} />
                                <Text style={intStyles.detailsItem}> Quantum Tunnel</Text>
                            </Text>

                            <Text>
                                <Simple name='rocket' size={14} color={'#F6A473'} />
                                <Text style={intStyles.detailsItem}> Warp Gates</Text>
                            </Text>

                        </View>
                        <View style={{ width: '40%', height: '100%' }}>
                            <View style={intStyles.bottomImage}>
                                <Image source={require('./../assets/images/image1.png')} style={intStyles.image} />
                            </View>
                            <View style={intStyles.topImage}>
                                <Image source={require('./../assets/images/image2.jpg')} style={[intStyles.image, { resizeMode: 'stretch' }]} />
                            </View>
                        </View>
                    </LinearGradient>
                </Pressable>

                <Pressable onPress={() => Alert.alert('aaaa stress')}>
                    <LinearGradient colors={['#282A51', '#4D4D65']} style={intStyles.destDetailsContainer}>
                        <View style={{ width: '60%', height: '100%' }}>
                            <Text style={intStyles.detailsHeading}>Nova <Text style={{ color: "#FFF" }}>Luxe</Text></Text>
                            <Text>
                                <Simple name='rocket' size={14} color={'#F6A473'} />
                                <Text style={intStyles.detailsItem}> Spaceraft</Text>
                            </Text>
                            <Text>
                                <Simple name='rocket' size={14} color={'#F6A473'} />
                                <Text style={intStyles.detailsItem}> Quantum Tunnel</Text>
                            </Text>

                            <Text>
                                <Simple name='rocket' size={14} color={'#F6A473'} />
                                <Text style={intStyles.detailsItem}> Warp Gates</Text>
                            </Text>

                        </View>
                        <View style={{ width: '40%', height: '100%' }}>
                            <View style={intStyles.bottomImage}>
                                <Image source={require('./../assets/images/image3.png')} style={intStyles.image} />
                            </View>
                            <View style={intStyles.topImage}>
                                <Image source={require('./../assets/images/image4.png')} style={intStyles.image} />
                            </View>
                        </View>
                    </LinearGradient>
                </Pressable>

                {/* Date picker for departure */}
                <DatePicker modal open={depDateVisible} date={depDate} mode="date" style={{ alignSelf: 'center' }} minimumDate={new Date()} fadeToColor="none" textColor="#A73209" title={"Select Departure Date"} onCancel={() => setDepDateVisible(false)} onConfirm={(date) => { setDepDate(date); setDepDateVisible(false); setDepDateSelected(true) }} />

                {/* Date picker for arrival */}
                <DatePicker modal open={arrDateVisible} date={depDate} mode="date" style={{ alignSelf: 'center' }} minimumDate={new Date()} fadeToColor="none" textColor="#A73209" title={"Select Arrival Date"} onCancel={() => setArrDateVisible(false)} onConfirm={(date) => { setArrDate(date); setArrDateVisible(false); setArrDateSelected(true) }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const intStyles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    topImage: {
        width: 70,
        height: 50,
        zIndex: 2,
        position: 'absolute',
        marginTop: 20,
        alignSelf: 'flex-end',
        elevation: 5
    },

    bottomImage: {
        width: 100,
        height: 70,
        marginTop: 40,
        zIndex: 1
    },

    detailsItem: {
        fontSize: 16,
        color: '#FFF',
        fontFamily: 'Cairo-Regular',
    },

    detailsHeading: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: '#B84416',
        marginBottom: 5
    },

    destDetailsContainer: {
        width: '90%',
        marginHorizontal: '5%',
        padding: 15,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row'
    },

    searchBtn: {
        width: 46,
        height: 46,
        borderRadius: 23,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnContainer: {
        paddingTop: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    placeholder: {
        fontFamily: 'Cairo-Regular',
        fontSize: 16,
        color: 'rgba(255,255,255,0.5)',
        marginLeft: 10
    },

    element: {
        width: '100%',
        borderRadius: 10,
        height: 32,
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
        justifyContent: 'center'
    },

    elementContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20
    },

    contentBox: {
        marginTop: 20,
        marginHorizontal: '5%',
        width: '90%',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10
    },
});

export default TripDetails;