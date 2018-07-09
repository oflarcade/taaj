import React from 'react';
import { StyleSheet, Text, View, Platform, NativeModules } from 'react-native';
import { AppLoading, Asset, Font, DangerZone, Util,  } from 'expo';
import {Provider} from 'react-redux';
import RootNavigator from './app/navigation/RootNavigation';
import {configureStore} from './app/store';
import Reactotron from 'reactotron-react-native';
import './ReactotronConfig'

const locale = NativeModules.I18nManager.localeIdentifier;
export default class App extends React.Component {


  state = { isloadingComplete : false };

  getLocale() {
  }

  _handleLoadingError = error => {
    console.warn(error);
  }

  _handleFinishedLoading = () => {
    this.setState({isloadingComplete: true});
  } 

  _handleResourceAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./app/asset/images/promo.jpg'),
        require('./app/asset/images/logo.png'),
        require('./app/asset/images/promo.jpg'),
        require('./app/asset/images/no-food.png'),
        require('./app/asset/images/fish.png'),
        require('./app/asset/images/bread.png'),
      ]), 
      Font.loadAsync({
        'raleWay': require('./app/asset/fonts/RalewayR.ttf'),
        'Roboto_medium': require('./app/asset/fonts/RalewayR.ttf'),
        
      }),
    ]);
  }


  componentWillMount(){
    this.getLocale()
  }



  render() {
    
 if(!this.state.isLoadingComplete){
      return(
        <AppLoading
          startAsync={this._handleResourceAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishedLoading} 
        />
      )
    } else {
      return (
        <Provider store={configureStore()}>
          <RootNavigator />
        </Provider>
      )
    } 

  
      return (
        <Provider store={configureStore()} >
          <RootNavigator />
        </Provider>
      )
    }
  }



