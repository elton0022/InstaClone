import React, { Component } from 'react';

import { View, Image, TouchableOpacity } from 'react-native';

import back from '../assets/back.png';

export default class New extends Component {

    static navigationOptions = ({ navigation }) => ({
        //<Image source={back} />
        headerLeft: (
            <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.navigate('Feed')}>
                <Image source={back} />
            </TouchableOpacity>
        )
    });
    render() {
        return <View />;
    }
}
