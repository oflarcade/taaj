import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist'; 

import reducer from '../reducer';

defaultState = {
    category:'',
    headerTitle:'Toutes les promotions',
    ProductName : '',
    productStore : '',
    productPrice : '',
    itemName:'',
    itemPrice:0,
    itemLocation:'',
    itemUri:'',
    itemsList:[],
    langChoice: '',
    lang:'',
    
}


export const configureStore = (initialState = defaultState, action) =>{
    
    var store = createStore(reducer, initialState,compose(
        autoRehydrate(),
        applyMiddleware(thunk)
    ));

    //persistStore(store, {storage : AsyncStorage });

    return store;
}