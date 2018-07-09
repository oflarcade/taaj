import { DangerZone } from 'expo';
import Reactotron from 'reactotron-react-native';
const { Localization } = DangerZone;

const getLanguage = ()=>{
 return  Expo.DangerZone.Localization.getCurrentDeviceCountryAsync();
}

exports.setItemType = (itemType) => {
    return {
        type: 'PRODUCTTYPE',
        itemType
    }
} 

exports.setListData = (list) => {
    return {
        type: 'SETLIST',
        list
    }
}

exports.setItemData = (name,location, price, uri) => {
    return {
        type: 'SETITEMDETAILS',
        name, 
        location,
        price,
        uri,
    }
}


exports.setItemUrl = (url) => {
    return {
        type: 'SETITEMURL',
        url
    }
}

exports.setLanguage = () => {

    return (dispatch) =>{
        getLanguage().then(
            (res) =>{
                dispatch({
                    type:'SET_LANG',
                    res
                })
            })
            .catch(error=>{
               Reactotron.log(error) 
            })
    }
}