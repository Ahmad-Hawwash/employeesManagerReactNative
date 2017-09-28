import { signInUser } from './Actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }
    emailValidation() {
        if (this.state.email === "a")
            return <View />;
        else
            return <FormValidationMessage>Email not valid</FormValidationMessage>;
    }

    passwordValidation() {
        if (this.state.password === "123")
            return <View />;
        else
            return <FormValidationMessage>Password not valid</FormValidationMessage>;
    }

    signIn() {
        this.props.signInUser(this.state.email, this.state.password);
    }

    // passwordChanged() {
    //     //this.setState({ password: text })

    // }

    render() {
        return (
            <View>
                <FormLabel> Email </FormLabel>
                <FormInput onChangeText={text => this.setState({ email: text })} />
                {this.emailValidation()}
                <FormLabel> Password </FormLabel>
                <FormInput onChangeText={text => this.setState({ password: text })} />
                {this.passwordValidation()}
                <Button
                    onPress={()=>this.signIn()}
                    large
                    icon={{ name: 'envira', type: 'font-awesome' }}
                    title='LARGE WITH RIGHT ICON' />
            </View>
        );
    }

}

export default connect(null, { signInUser })(LoginForm);