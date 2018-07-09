import Words from '../constants/Word';

module.exports = (state ={}, action ) => {
    switch(action.type) {
        case 'PRODUCTTYPE':
            let name = '';
            if(action.itemType === 'Fruits'){
                name= Words['French'].fruits;
            } else if (action.itemType === 'Boucherie') {
                name =  Words['French'].boucherie;
            } else if(action.itemType === 'Boulangerie') {
                name = Words['French'].boulangerie
            } else if(action.itemType === 'Poissonnerie') {
                name = Words['French'].poissonerie;
            } else if(action.itemType === 'Alimentation') {
                name =  Words['French'].Alimentation
            } else if (action.itemType === 'NoFood') {
                name = Words['French'].noFood
            }
            return {
                ...state,
                productName: name,
            }
        case 'SETLIST':
            return {
                ...state,
                itemsList: action.list
            }
        case 'SETITEMDETAILS':
            return {
                ...state,
                itemName: action.name,
                itemLocation: action.location,
                itemPrice: action.price,
                itemUri: action.uri
            }
        case 'SETITEMURL':
            return {
                    ...state,
                    url: action.url
            }
        case 'SET_LANG': 
            return {
                    ...state,
                    lang: action.lang
            }                
        default :
            return state;
    }
}