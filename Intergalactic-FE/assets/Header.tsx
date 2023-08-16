import React from "react";
import { View, Image, Pressable, StyleSheet, Alert } from 'react-native';
import Title from "./TItle";
import LinearGradient from "react-native-linear-gradient";

const Header = () => {
    return (
        <View style={intStyles.header}>
            <Pressable style={intStyles.pressBtn} onPress={() => Alert.alert("Side menu")}>
                <LinearGradient colors={['#35364A', '#47485D']} style={intStyles.roundBtn}>
                    <Image source={require('./images/side_menu_ico.png')} style={intStyles.sideMenuIco} />
                </LinearGradient>
            </Pressable>
            <Title />
            <Pressable style={intStyles.pressBtn} onPress={() => Alert.alert("Profile Management")}>
                <LinearGradient colors={['#35364A', '#47485D']} style={intStyles.roundBtn}>
                    <Image source={require('./images/avatar.png')} style={intStyles.avatar} />
                </LinearGradient>
            </Pressable>
        </View>
    );
};

const intStyles = StyleSheet.create({
    pressBtn: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: '#F00'
    },
    sideMenuIco: {
        resizeMode: 'contain',
        height: '50%',
        width: '50%'
    },

    avatar: {
        resizeMode: 'contain',
        height: '90%',
        width: '90%'
    },

    roundBtn: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: '#00F',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        paddingTop: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    }
});

export default Header;