import { ActionType } from "../@types/weather";

export const initialState = {
    error: false,
    pictureError: false,
    loading: false,
    data: undefined,
    autoComplete: undefined,
    picture: undefined,
    forecast: undefined,
    location: undefined,
    pictureLoading: false,
}

const fetchReducer = (state:any, action: ActionType) => {
    switch(action.type) {
        case "loading": 
            return { ...state, loading: action.payload };
        case "pictureLoading":
            return { ...state, pictureLoading: action.payload}
        case 'fetchedAuto':
            return { ...state, autoComplete: action.payload};
        case 'fetchedData': 
            return {...state, data: action.payload};
        case 'fetchedLocation': 
            return {...state, location: action.payload};
        case 'fetchedPicture':
            return {...state, picture: action.payload};
        case 'fetchedForecast': 
            return {...state, forecast: action.payload};
        case "error": 
            return { ...state, error: action.payload};
        case "pictureError": 
            return { ...state, pictureError: action.payload};
        default:
        return state;
    }
}

export default fetchReducer;