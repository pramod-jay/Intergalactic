import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Pressable, ScrollView } from 'react-native';
import ExtStyles from "../Styles/ExtStyles";
import Header from "../assets/Header";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StacksParams } from "../Navigation/Navigation";
import Loader from "../assets/Loader";
import Error from "../assets/Error";
import axios from "axios";
import { API_URL } from "../API/API";
import moment from 'moment';

type Props = NativeStackScreenProps<StacksParams, "TravelDetails">;

const TravelDetails: React.FC<Props> = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    const [isError, setIsError] = useState(false);

    const [errMessage, setErrMessage] = useState('');

    const showErrorMessage = () => {
        setIsError(true);
    };

    const hideErrorMessage = () => {
        setIsError(false);
    };

    const [fetchedData, setFetchedData] = useState<any[]>([]);

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(API_URL + 'getShipDetails', {params: {depDate: props.route.params.depDate, shipType: props.route.params.travelMode }})
                setFetchedData(response.data);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                setIsLoading(false);
                showErrorMessage();
                setErrMessage('Something went wrong....\nPlease try again...')
            }
        };

        setIsLoading(true);
        getData();
    }, [])


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
                <Text style={intStyles.titleTxt}>{props.route.params.travelMode}</Text>
            </View>

            <ScrollView>

                {fetchedData.length == 0 ? <View style={{width: '100%', height: 500, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 12, color: '#FFF', fontWeight: '500'}}>No any {props.route.params.travelMode}</Text>
                </View> : null}

                {fetchedData.map((item, index)=>(
                    <ShipCard props={props} key={index} shipType={item.shipType} shipName={item.shipName} shipPrice={item.shipPrice} departureTime={item.departureTime} shipCapacity={item.shipCapacity} duration={item.duration} travelID={item.travelID}/>
                ))}
                


            </ScrollView>

            {isLoading ? <Loader /> : null}
            <Error showModal={isError} hideModal={hideErrorMessage} message={errMessage} />
        </SafeAreaView>
    );
}

const ShipCard = ({ props, shipType, shipName, shipPrice, departureTime, shipCapacity, duration, travelID}: { props: any, key: number, shipType: string, shipName: string, shipPrice: string, departureTime: string, shipCapacity: number, duration: string, travelID:string }) => {

    const depTime = moment(departureTime, 'HH:mm:ss');
    const LandingTime = depTime.add(duration);

    const [starColor, setStarColor] = useState({
        star1: '#F6A473',
        star2: '#F6A473',
        star3: '#F6A473',
        star4: '#FFF',
        star5: '#FFF'
    });

    const handleBook = () => {
        console.log(props.route.params.depDate);
        props.navigation.navigate('MakeBooking', { travelID: travelID, depDate: props.route.params.depDate });
    }

    return (
        <LinearGradient colors={['#282A51', '#4D4D65']} style={intStyles.card}>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={{ width: '50%', padding: 10 }}>
                    <Text style={intStyles.shipName}>{shipType} {shipName}</Text>
                </View>
                <View style={{ width: '50%', padding: 10, alignItems: 'flex-end' }}>
                    <Text style={intStyles.shipPrice}>$ {Number(shipPrice).toLocaleString()}</Text>
                </View>
            </View>

            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={{ width: '70%', paddingLeft: 30 }}>
                    <Text style={intStyles.shipDetails}>Departure Time</Text>
                </View>
                <View style={{ width: '30%' }}>
                    <Text style={intStyles.detailsValue}>{departureTime}</Text>
                </View>
            </View>

            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={{ width: '70%', paddingLeft: 30 }}>
                    <Text style={intStyles.shipDetails}>Landing Time (Mars)</Text>
                </View>
                <View style={{ width: '30%' }}>
                    <Text style={intStyles.detailsValue}>{LandingTime.format('HH:mm:ss')}</Text>
                </View>
            </View>

            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={{ width: '70%', paddingLeft: 30 }}>
                    <Text style={intStyles.shipDetails}>Available Seats</Text>
                </View>
                <View style={{ width: '30%' }}>
                    <Text style={intStyles.detailsValue}>90 / {shipCapacity}</Text>
                </View>
            </View>

            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={{ width: '70%', paddingLeft: 30 }}>
                    <Text style={intStyles.shipDetails}>Duration</Text>
                </View>
                <View style={{ width: '30%' }}>
                    <Text style={intStyles.detailsValue}>{duration}</Text>
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