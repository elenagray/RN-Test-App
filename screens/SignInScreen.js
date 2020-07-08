import React from 'react';

import {
    View, Text,
    Button, StyleSheet
} from 'react-native';

const SignInScreen = () => {
    return(
        <View style = {StyleSheet.container}>
            <Text>SignIn Screen</Text>
            <Button
                title ="Click here!"
                onPress = {() => alert("Button clicked!")}
            />
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});