import React from 'react';

import {
    View, Text,
    Button, StyleSheet,
    Dimensions, Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

const SplashScreen = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation ="bounce"
                source = {require('../assets/logo.png')}
                style = {styles.logo}
                resizeMode = "stretch"
                />
            </View>
            <Animatable.View 
                style = 
                {{backgroundColor: '#fff', 
                flex: 1,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                paddingVertical: 50,
                paddingHorizontal: 30} }
                animation = "fadeInUpBig"
            >
                <Text style = {styles.title}>Learn, Connect, and Create!</Text>
                <Text style = {styles.text}>Sign in with account</Text>
                <View style = {styles.button}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}>
                        <View style = {styles.signIn}>
                            <Text style = {styles.textSign}> Get Started  > </Text>
                        </View>
                </TouchableOpacity>
                </View>
            </Animatable.View>
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
    textSign: {
        fontSize: 18,
        color: '#fff'
        },
    signIn: {
            height: 30,
            marginTop: 15,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            borderRadius: 10,
            backgroundColor: '#D2B48C',
            color: '#fff'
        },
    textSign: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
        }
  });