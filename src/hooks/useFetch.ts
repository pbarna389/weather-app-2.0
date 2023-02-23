import { useEffect, useReducer } from "react";

import { initialState } from "../reducers/fetchReducer";
import fetchReducer from "../reducers/fetchReducer";

function useFetch (type: "data" | "picture" | "autocomplete", location: string | undefined, url?: string, options?: RequestInit, length?: number) {  
    const [state, dispatch] = useReducer(fetchReducer, initialState);
    const controller = new AbortController();

    useEffect(() => {
        if (!url) return;

        if (type === "autocomplete") {
            const fetchData = async() => {
                try {
                    const response = await fetch(url, options)
                    
                    if(!response.ok) {
                        throw new Error(response.statusText)
                    }
    
                    const data = await response.json();
                    console.log(data);
    
                    dispatch({type: "fetchedAuto", payload: data})
    
                } catch(error) {
                    console.log(error)
                }
            };
            
            if (length && length > 3) {
                fetchData();
            } else if (length && length < 3 || length === 0) {
                dispatch({type: "fetchedAuto", payload: []})
            } else {
                fetchData();
            }
        }

    }, [url])

    useEffect(() => {
        if (!url) return;

        if (type === "picture") {
            if (location) {
                dispatch({type: "pictureError", payload: false});
                dispatch({type: "pictureLoading", payload: true});

                const fetchData = async() => {
                    try {
                        const response = await fetch(url, options)
                        
                        if(!response.ok) {
                            throw new Error(response.statusText)
                        }
            
                        const data = await response.json();

                        if (data.photos.length === 0) {
                            console.log(data);
                            dispatch({type: "fetchedPicture", payload: null})
                            dispatch({type: "pictureError", payload: true});
                            dispatch({type: "pictureLoading", payload: false});
                        } else {
                            dispatch({type: "fetchedPicture", payload: data?.photos})
                            dispatch({type: "pictureError", payload: false});
                            dispatch({type: "pictureLoading", payload: false});
                        }


                    } catch(error) {
                        dispatch({type: "fetchedPicture", payload: null})
                        dispatch({type: "pictureError", payload: true});
                        console.log(error);
                        controller.abort('cancel')
                    }
                };
                fetchData();
            }
        }

        if (type === "data") {
            if (location) {
                dispatch({type: "loading", payload: true});
                const fetchData = async() => {
                    try {
                        const response = await fetch(url, options)
                        
                        if(!response.ok) {
                            throw new Error(response.statusText)
                        }
            
                        const data = await response.json();
                        console.log(data);
                        if (!data) {
                            dispatch({type: "fetchedData", payload: null})
                        }
                        dispatch({type: "error", payload: false})
                        dispatch({type: "fetchedData", payload: data?.current})
                        dispatch({type: "fetchedForecast", payload: data?.forecast})
                        dispatch({type: "fetchedLocation", payload: data.location})
                        dispatch({type: "loading", payload: false});

                    } catch(error) {
                        dispatch({type: "fetchedData", payload: null})
                        dispatch({type: "error", payload: true});
                        dispatch({type: "loading", payload: false});
                        console.log(error);
                        controller.abort('cancel')
                    }
                };
                fetchData();
            }
        }

        return () => controller.abort("cancel request")
    }, [location])

    return {
        "autoComplete": state.autoComplete,
        "data": state.data,
        "loc": state.location,
        "picture": state.picture,
        "error": state.error,
        "forecast": state.forecast,
        "loading": state.loading,
        "pictureLoading": state.pictureLoading,
        "pictureError": state.pictureError
    }
};

export default useFetch;
