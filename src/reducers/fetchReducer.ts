export const initialState = {
    error: undefined,
    data: undefined,
    autoComplete: undefined,
    picture: undefined,
}

const fetchReducer = (state:any, action:any) => {
    switch(action.type) {
        case 'loading': 
            return { ...state };
        case 'fetchedAuto':
            return { ...state, autoComplete: action.payload};
        case 'fetchedData': 
            return {...state, data: action.payload}
        case 'fetchedPicture':
            return {...state, picture: action.payload};
        case "error": 
            return { ...state, error: action.payload}
        default:
        return state;
    }
}

export default fetchReducer;