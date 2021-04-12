import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

export default class ReadStory extends React.Component{
    render() {
        return(
            <View style = { styles.container }>
                <ScrollView>
                    <View style = { styles.header }>
                        <Text style = { styles.title }>
                            Story Hub
                        </Text>
                    </View>
                    <View style = { styles.container }>
                        <Text>
                            Read Story Screen
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF8F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#E8CEBF',
        borderRadius: 20,
    },
    title: {
        color: '#4F4846',
        padding: 30,
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    displayText: {
        fontSize: 15,
        textDecorationLine: 'underline',
    },
});