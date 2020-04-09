import * as actionType from './actionType.js';


export const fetchaddPost=(userName)=>
{
    console.log(userName,'mom');
    return {
        type:actionType.USER_NAME,
        payload:userName
    }
}

export const nameChanged=(id,username)=>{
    return {
        type:actionType.NAME_CHANGED,
        payload:{id:id,username:username}
    }
}


export const deleteaction=(id)=>
{
    return {
        type:actionType.DELETE,
        payload:id
    }
}

export const addPost = (userName) => {
    return (dispatch) => setTimeout(()=> dispatch(fetchaddPost(userName)),2000)
  }

