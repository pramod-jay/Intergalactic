import React from "react";
import { Pressable, View, Alert } from 'react-native';
import { LinearGradientText } from "react-native-linear-gradient-text";

const Title = () => {
    return (
        <Pressable style={{ flexDirection: 'row', marginHorizontal:50, justifyContent: "center", alignItems: "center" }} onPress={()=>Alert.alert("Navigate to dashboard")}>
            <LinearGradientText text='I' colors={['#A73209', '#A73209', '#A73209']} start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 0 }} textStyle={{ fontFamily: 'Poppins-Black', fontSize: 24 }} />
            <LinearGradientText text='NTERGALACTIC' colors={['#A73209', '#FF8F4B', '#EABDA3']} start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 0 }} textStyle={{ fontFamily: 'Poppins-Black', fontSize: 18 }} />
        </Pressable>
    );
}

export default Title;