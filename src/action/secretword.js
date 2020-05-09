import * as actionType from './actionType'
export const storeSecretWordaction=(secretword)=>{
    console.log(secretword)
    return {
        type:actionType.SECRETWORD,
        payload:secretword
    }
}

export const guessedwordredux=(guessedword)=>{

    console.log(guessedword)
    return {
        type:actionType.GUESSEDWORD,
        payload:guessedword
    }
}

export const resetgame=()=>{
    return{
        type:actionType.RESET
    }
}