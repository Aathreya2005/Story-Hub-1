import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

export default class WriteStory extends React.Component{
    render() {
        return(
            <View style = { styles.container }>
                <ScrollView>
                    <View style = { styles.header }>
                        <Text style = { styles.title }>
                            Story Hub
                        </Text>
                    </View>
                    <View style = { styles.inputView }>
                        <TextInput
                            style = { styles.inputBox }
                            placeholder = "Story Title" />
                    </View>
                    <View style = { styles.inputView }>
                        <TextInput
                            style = { styles.inputBox } 
                            placeholder = "Author" />
                    </View>
                    <View style = { styles.inputView }>
                        <TextInput
                            style = {[ styles.inputBox, { height: 350, textAlignVertical: "top" }]} 
                            placeholder = "Write Your Story Here"
                            multiline = { true } />
                    </View>
                    <View>
                        <TouchableOpacity style = { styles.scanButton }>
                            <Text style = { styles.buttonText }>
                                SUBMIT
                            </Text>
                        </TouchableOpacity>
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
    scanButton: {
        backgroundColor: '#ffffff',
        width: 100,
        borderWidth: 1.5,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        padding: 10
    },
    inputView: {
        flexDirection: 'row',
        margin: 20,
    },
    inputBox: {
        flex: 1,
        alignItems: 'stretch',
        borderWidth: 1.5,
        fontSize: 20,
        padding: 10,
    },
});