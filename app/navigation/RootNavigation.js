import React from 'react';
import { StatusBar } from 'react-native'
import {createDrawerNavigator} from 'react-navigation'
import MainScreen from '../screens/MainScreen';
import ItemScreen from '../screens/ItemScreen';
import CategoryScreen from '../screens/CategoryScreen';
import Layout from '../constants/Layout';
import {setLanguage} from '../action'
import CustomDrawer from '../components/CustomDrawer';


const RootStackNavigator = createDrawerNavigator({
    Store: {
        screen:MainScreen,
        navigationOptions:{
            drawerLabel: 'Store',
            header:null,
        },
    },
    Item: {
        screen:ItemScreen,
        navigationOptions:{
            drawerLabel:'Item',
            header:null,
        },
    },
    Product: {
        screen: CategoryScreen,
        navigationOptions:{
        drawerLabel:'Product',
        header: null,
        }
    },
    },{
        initialRouteName:'Store',
        drawerPosition:'left',
        contentComponent: CustomDrawer,
        navigationOptions: {
            mode:'modal',
            header:null,
        }
})


export default class RootNavigator extends React.Component {

    componentDidMount(){
        StatusBar.setHidden(true);
       
    }

    render() {
        return <RootStackNavigator />
    }
}

