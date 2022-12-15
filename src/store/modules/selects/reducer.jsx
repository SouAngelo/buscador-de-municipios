export default function onSelect(state = '', action ){

switch(action.type){
    case 'ADD_STATE':
        return action.selectValueState;

    default:
        return state    
}
    
}
