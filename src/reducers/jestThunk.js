import * as actionType from '../action/actionType';

const initialstate={
    spinnervalue:true
}

export const JestThunk=(state=initialstate,action)=>{
 switch(action.type)
 {
     case(actionType):
     {
         return {...state,spinnervalue:action.payload}
     }
     default :
     return state;
 }
}

export default JestThunk;