import * as actionType from './actionType';

export const loadSpinner=(spinner)=>{
    return {
        type:actionType.JEST_THUNK_SPINNER,
        payload:spinner
    }
}

export const correctGuess=()=>
{
    let spinner=false;
return (dispatch)=>{
     dispatch(loadSpinner(spinner))
}
}
    
   
    
