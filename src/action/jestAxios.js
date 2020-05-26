import * as actionType from './actionType';
import axios from 'axios';

export const JestApi=(data)=>{
    return {
        type:actionType.AXIOS_URL,
        payload:data
    }
}

export const Apicall=()=>{
    return (dispatch)=>{
     return  axios.get("https://jsonplaceholder.typicode.com/todos/1").then(res=>dispatch(JestApi(res)))
    }
}