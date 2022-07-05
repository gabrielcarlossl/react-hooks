export function reducer(state, action){
    switch(action.type){
        case 'number_add2':
            return {...state, number: state.number + 2}
        case 'login': 
            return {...state, user:{name: action.payload}}
        case 'mult_7':
            return {...state, number: state.number * 7}
        case 'div_25':
            return {...state, number: state.number / 25}
        case 'inteiro':
            return {...state, number: parseInt(state.number)}
        case 'numero_N':
            return {...state, number: state.number + action.payload }
        default:
            return state
    }
    
}