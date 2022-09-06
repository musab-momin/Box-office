import { useEffect, useReducer, useState } from "react";


function showReducer(preState, action){
    if (action.type === "ADD"){
        return [...preState, action.showId];
    }

    if(action.type === "REMOVE"){
        return preState.filter(showId => showId !== action.showId);
    }

    return preState
}

function usePersistedReducer(reducer, initialState, key){
    const [state, dispatch] = useReducer(reducer, initialState, (initial)=>{
        const showList =  localStorage.getItem(key)
        return showList ? JSON.parse(showList) : initial
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state));
    }, [state])

    return [state, dispatch]
}


export function useShows(key='shows'){
    return usePersistedReducer(showReducer, [], key)
}


export function useLastQuery(key='lastQuery'){
    const [search, setSearch] = useState(()=>{
        const showList =  sessionStorage.getItem(key)
        return showList ? JSON.parse(showList) : ""
    });

    const setPersistanceSearch = (searchKey)=>{
        setSearch(searchKey);
        sessionStorage.setItem(key, JSON.stringify(searchKey))
    }

    return [search, setPersistanceSearch];

}