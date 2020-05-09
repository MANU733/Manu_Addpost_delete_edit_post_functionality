import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import Gamedashboard from '../../container/gamedahboard'
const Todo =(props)=>
{
    console.log(props.history.location.pathname)
    const [secretword,setsecretword]=React.useState('');
    const [Errors,setError]=React.useState('');
    const [secretwordstored,setwordstored]=React.useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(secretword==='')
        {
           setError('Secret word cant be empty')
        } 
        else
        {
              props.secretWord(secretword);
              setError("")
              setwordstored('You have successfully set the secret word')
        }
    }
    const handleChange=(e)=>{
        setsecretword(e.target.value)
    }

    const linktogame=props.secretwordredux!==""?(<Link to='/gamedashboard'>Click here to proceed to  game dashboard</Link>):"";
    const rendersearch=props.secretwordredux!==""?'':(<form onSubmit={handleSubmit}>
        <input 
        type="text"
        onChange={handleChange}
        />
        <button type="submit">Set secret Word</button>
    </form>)

    const gamedashboard=props.history.location.pathname!=='/gamedashboard'?
    (<>
    <h3>Guess word Game:</h3>
    {props.secretwordredux===""?(<h5>Set the secret word</h5>):""}
    
    {props.secretwordredux!==""?secretwordstored:""}
    <h6>{Errors}</h6>
    {linktogame}
    {rendersearch}
    </>) : (<Gamedashboard/>)
    return gamedashboard;
}
export default withRouter(Todo);