import React from 'react';

import {
    View, Text,
    Button, StyleSheet,
    Dimensions, Image,
    TouchableOpacity
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

const SplashScreen = () => {
    return(
        <View style = {styles.container}>
            <View style={styles.header}>
                <Image
                source = {require('../assets/logo.png')}
                style = {styles.logo}
                resizeMode = "stretch"
                />
            </View>
            <View 
                style = 
                {{backgroundColor: '#fff', 
                flex: 1,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                paddingVertical: 50,
                paddingHorizontal: 30} }
            >
                <Text style = {styles.title}>Stay connected with everyone!</Text>
                <Text style = {styles.text}>Sign in with account</Text>
                <View style = {styles.button}>
                <TouchableOpacity
                    onPress = {()=> alert('Click')}>
                        <Text style = {styles.textSign}>Get Started</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SplashScreen;

const{height} = Dimensions.get("screen");
const height_logo = height*0.28;

const styles = StyleSheet.create({
    test: {
        width: 1000,
        height: 1000,
        backgroundColor: '#fff'
    },
    container: {
      flex: 1, 
      backgroundColor: '#D2B48C'
    },
    header: {
        backgroundColor: '#D2B48C',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: .33,
        backgroundColor: '#D2B48C',
        fontSize: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderColor: 'black',
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        backgroundColor: '#3CB371',
        paddingVertical: 10,
        paddingHorizontal: 9,
        borderColor: 'black'
        }
  });