import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

class LoginForm extends Component {

    

    // passwordChanged() {
    //     //this.setState({ password: text })

    // }

    render() {
        return (
            <View>
                <FormLabel> Email </FormLabel>
                <FormInput onChangeText={text =>  console.log(text)} />
                {/* {this.emailValidation()} */}
                <FormLabel> Password </FormLabel>
                <FormInput onChangeText={text => console.log(text)} />
                {/* {this.passwordValidation()} */}
                <Button
                    onPress={()=>this.signIn()}
                    large
                    icon={{ name: 'envira', type: 'font-awesome' }}
                    title='LARGE WITH RIGHT ICON' />
            </View>
        );
    }

}

export default LoginForm;