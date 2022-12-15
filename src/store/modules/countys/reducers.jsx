export default function onSelect(state = [], action ){

    switch(action.type){
        case 'COUNTY_INFO':
            return action.countyInfo;
    
        default:
            return state    
    }
        
    }
    