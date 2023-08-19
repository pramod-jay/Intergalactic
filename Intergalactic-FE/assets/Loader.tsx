import React from "react";
import { StyleSheet, View } from 'react-native';
import { LinearGradientText } from "react-native-linear-gradient-text";
import { ActivityIndicator } from "react-native-paper";

const Loader = () => {
    return (
        <View style={intStyles.modal}>
            
            <View style={{flexDirection: "row", marginHorizontal:50, justifyContent: "center", alignItems: "center" }}>
                <LinearGradientText text='I' colors={['#A73209', '#A73209', '#A73209']} start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 0 }} textStyle={{ fontFamily: 'Poppins-Black', fontSize: 36 }} />
                <LinearGradientText text='NTERGALACTIC' colors={['#A73209', '#FF8F4B', '#EABDA3']} start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 0 }} textStyle={{ fontFamily: 'Poppins-Black', fontSize: 30}} />
            </View>

            <ActivityIndicator animating={true} color="#A73209" size={80} />

        </View>
    );
}

const intStyles = StyleSheet.create({
    modal: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1C1A3A',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'

    }
});

export default Loader;