import React, { useState } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Modal, Portal, PaperProvider, Button } from 'react-native-paper';

const Error = ({showModal, hideModal, message}:{showModal:any, hideModal: any, message:any}) => {
    return (
        <View style={{ width: '100%', height: '100%', position: 'absolute' }}>
            <PaperProvider>
                <Portal>
                    <Modal visible={showModal} onDismiss={hideModal} contentContainerStyle={intStyles.conatiner} >
                        <View style={intStyles.titleContainer}>
                            <Text style={intStyles.title}>Error</Text>
                        </View>
                        <View style={intStyles.messageContainer}>
                            <Text style={intStyles.messageTxt}>{message}</Text>
                        </View>
                    </Modal>
                </Portal>
            </PaperProvider>
        </View>

    );
};

const intStyles = StyleSheet.create({
    messageTxt: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: '500',
        textAlign: 'center',
        marginVertical: 20,
    },

    messageContainer: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 10
    },

    title: {    
        fontSize: 40,
        color: '#A73209',
        fontWeight: '800'
    },

    titleContainer: {
        paddingTop: 20,
        width: '100%',
        alignItems: 'center'
    },

    conatiner: {
        borderRadius: 10,
        backgroundColor: '#1C1A3A',
        width: '80%',
        marginHorizontal: '10%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }
});

export default Error;