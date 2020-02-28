import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { Image } from 'react-native';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png';

const Routes = createAppContainer(
    createStackNavigator({
        Feed,
        New
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerTitle: <Image source={logo} />,
            headerBackTitle: null
        },
        mode: 'modal'
    })
);

export default Routes;
