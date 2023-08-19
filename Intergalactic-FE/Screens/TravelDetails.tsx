import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Pressable, ScrollView } from 'react-native';
import ExtStyles from "../Styles/ExtStyles";
import Header from "../assets/Header";
import {  NativeStackScreenProps } from "@react-navigation/native-stack";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StacksParams } from "../Navigation/Navigation";

type Props = NativeStackScreenProps<StacksParams, "TravelDetails">;

const TravelDetails: React.FC<Props> = (props) => {

    return (
        <SafeAreaView style={ExtStyles.body}>
            <Header />

            {/* Ships select button section */}
            <View style={intStyles.pathContainer}>
                <View style={{ width: '33.33%', alignItems: 'flex-start' }}>
                    <Pressable style={{ borderRadius: 10 }}>
                        <LinearGradient colors={['#282A51', '#4D4D65']} style={intStyles.shipBtn}>
                            <Text style={intStyles.shipBtnTxt}>Spacecraft</Text>
                        </LinearGradient>
                    </Pressable>
                </View>

                <View style={{ width: '33.33%', alignItems: 'center' }}>
                    <Pressable style={{ borderRadius: 10 }}>
                        <LinearGradient colors={['#282A51', '#4D4D65']} style={intStyles.shipBtn}>
                            <Text style={intStyles.shipBtnTxt}>Quantum Tunnel</Text>
                        </LinearGradient>
                    </Pressable>
                </View>

                <View style={{ width: '33.33%', alignItems: 'flex-end' }}>
                    <Pressable style={{ borderRadius: 10 }}>
                        <LinearGradient colors={['#282A51', '#4D4D65']} style={intStyles.shipBtn}>
                            <Text style={intStyles.shipBtnTxt}>Warp Gates</Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </View>

            <View style={intStyles.titleConatainer}>
                <Text style={intStyles.titleTxt}>Space Craft</Text>
            </View>

            <ScrollView>
                {/* Ship cards */}
                <ShipCard props={props} />

                <ShipCard props={props} />

                <ShipCard props={props} />


            </ScrollView>
        </SafeAreaView>
    );
}

const ShipCard = ({props}:{props: any}) => {

    const [starColor, setStarColor] = useState({
        star1: '#F6A473',
        star2: '#F6A473',
        star3: '#F6A473',
        star4: '#FFF',
        star5: '#FFF'
    });

    const handleBook = () => {
        console.log(props.route.params.depDate);
        props.navigation.navigate('MakeBooking', {depDate: props.route.params.depDate});
    }

    return (
        <LinearGradient colors={['#282A51', '#4D4D65']} style={intStyles.card}>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={{ width: '50%', padding: 10 }}>
                    <Text style={intStyles.shipName}>Spacecraft 01</Text>
                </View>
                <View style={{ width: '50%', padding: 10, alignItems: 'flex-end' }}>
                    <Text style={intStyles.shipPrice}>$ 3,000,000</Text>
                </View>
            </View>

            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={{ width: '70%', paddingLeft: 30 }}>
                    <Text style={intStyles.shipDetails}>Departure Time</Text>
                </View>
                <View style={{ width: '30%' }}>
                    <Text style={intStyles.detailsValue}>00: 12: 30</Text>
                </View>
            </View>

            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={{ width: '70%', paddingLeft: 30 }}>
                    <Text style={intStyles.shipDetails}>Landing Time (Mars)</Text>
                </View>
                <View style={{ width: '30%' }}>
                    <Text style={intStyles.detailsValue}>00: 23: 30</Text>
                </View>
            </View>

            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={{ width: '70%', paddingLeft: 30 }}>
                    <Text style={intStyles.shipDetails}>Available Seats</Text>
                </View>
                <View style={{ width: '30%' }}>
                    <Text style={intStyles.detailsValue}>90 / 1000</Text>
                </View>
            </View>

            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={{ width: '70%', paddingLeft: 30 }}>
                    <Text style={intStyles.shipDetails}>Duration</Text>
                </View>
                <View style={{ width: '30%' }}>
                    <Text style={intStyles.detailsValue}>22 Hours</Text>
                </View>
            </View>

            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={{ width: '70%', paddingLeft: 30 }}>
                    <Text style={intStyles.shipDetails}>Ratings</Text>
                </View>
                <View style={{ width: '30%', flexDirection: 'row', paddingTop: 8 }}>
                    <FontAwesome name="star" color={starColor.star1} size={15} style={{ marginHorizontal: 2 }} />
                    <FontAwesome name="star" color={starColor.star2} size={15} style={{ marginHorizontal: 2 }} />
                    <FontAwesome name="star" color={starColor.star3} size={15} style={{ marginHorizontal: 2 }} />
                    <FontAwesome name="star" color={starColor.star4} size={15} style={{ marginHorizontal: 2 }} />
                    <FontAwesome name="star" color={starColor.star5} size={15} style={{ marginHorizontal: 2 }} />
                </View>
            </View>

            <View style={{ width: '100%', alignItems: 'flex-end' }}>
                <View style={{ width: '70%', paddingVertical: 15, flexDirection: 'row' }}>
                    <Pressable style={{ borderRadius: 10 }}>
                        <LinearGradient colors={['#F6C973', '#696167', '#4D4D65']} style={intStyles.btn}>
                            <Text style={intStyles.btnTxt}>Rate Travel</Text>
                        </LinearGradient>
                    </Pressable>

                    <Pressable style={{ borderRadius: 10 }} onPress={handleBook}>
                        <LinearGradient colors={['#F6A473', '#4D4D65']} style={intStyles.btn}>
                            <Text style={intStyles.btnTxt}>Book Now</Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </View>

        </LinearGradient>
    );
};

const intStyles = StyleSheet.create({
    btnTxt: {
        fontFamily: 'Cairo-Bold',
        fontSize: 12,
        color: '#FFF',
    },

    btn: {
        width: 100,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 10,

    },

    retingStars: {
        flexDirection: 'row',
    },

    detailsValue: {
        fontFamily: 'Cairo-Bold',
        color: '#FFF',
        fontSize: 16
    },

    shipDetails: {
        fontFamily: 'Cairo-Regular',
        color: '#FFF',
        fontSize: 16
    },

    shipPrice: {
        fontFamily: 'Cairo-Bold',
        fontSize: 17,
        color: '#A73209'
    },

    shipName: {
        fontFamily: 'Cairo-Bold',
        fontSize: 16,
        color: '#FFF'
    },

    card: {
        width: '90%',
        marginHorizontal: '5%',
        borderRadius: 10,
        marginVertical: 5
    },

    titleTxt: {
        fontFamily: 'Cairo-Regular',
        fontSize: 24,
        color: '#FFF',
    },

    titleConatainer: {
        width: '90%',
        justifyContent: 'center',
        marginHorizontal: '5%'
    },

    shipBtnTxt: {
        fontFamily: 'Cairo-Regular',
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        lineHeight: 20,
        marginTop: 10
    },

    shipBtn: {
        width: 100,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    pathContainer: {
        padding: 20,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
});

export default TravelDetails;