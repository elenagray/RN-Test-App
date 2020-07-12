import React from 'react';

import {
    View, Text,
    Button, StyleSheet, Dimensions, 
    TouchableOpacity, Platform,
    TextInput
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'

import {AuthContext} from '../components/context';

import * as Animatable from 'react-native-animatable';
const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const {signIn} = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if(val.length != 0 ){
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else{
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    return(
        <View style = {styles.container}>
            <View style={styles.header}>
                <Text style = {styles.title}>Welcome!</Text>
            </View>
            <View 
                style = 
                {{backgroundColor: '#fff', 
                flex: 2,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                paddingVertical: 50,
                paddingHorizontal: 30} }
            >
                <Text style = {styles.text_footer}>Email</Text>
                <View style = {styles.action}>
                    <FontAwesome
                        name = "user-o"
                        color ="#05375a"
                        size ={20}
                    />
                    <TextInput
                        placeholder = "Your email"
                        style = {styles.textInput}
                        autoCapitalize = "none"
                        onChangeText = {(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange?
                    <Feather
                        name = "check-circle"
                        color = "green"
                        size = {20}
                    />
                    : null}
                </View>
                <Text style = {[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style = {styles.action}>
                    <FontAwesome
                        name = "lock"
                        color ="#05375a"
                        size ={20}
                    />
                    <TextInput
                        placeholder = "Your password"
                        style = {styles.textInput}
                        secureTextEntry = {data.secureTextEntry ? true: false}
                        autoCapitalize = "none"
                        onChangeText = {(val) => handlePasswordChange(val)}

                    />
                    <TouchableOpacity
                        onPress = {updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                        <Feather
                            name = "eye-off"
                            color = "grey"
                            size = {20}
                        />
                        :
                        <Feather
                            name = "eye"
                            color = "grey"
                            size = {20}
                        />
                        }           
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style = {{alignItems: 'center'}}
                    onPress = {() => {signIn()}}
                    >
                    <View style = {styles.signIn} >
                        <Text style = {styles.textSign} >Sign In</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {{alignItems: 'center'}}
                    onPress = {() => navigation.navigate('SignUpScreen')}>
                    <View style = {styles.signUp} >
                        <Text style = {styles.textSign, {color: "black"}} >Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignInScreen;

const{height} = Dimensions.get("screen");
const height_logo = height*0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#D2B48C'
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        backgroundColor: '#D2B48C'
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
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
    signUp: {
        height: 30,
        marginTop: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 10,
        color: '#D2B48C',
        borderColor: '#D2B48C',
        borderWidth: 1,

    },
    textSign: {
        fontSize: 18,
        color: '#fff'
        }
  });