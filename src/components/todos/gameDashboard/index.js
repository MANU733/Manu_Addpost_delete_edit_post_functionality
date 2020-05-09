import React from 'react';
import { withRouter } from 'react-router';

const Gamedashboard = (props) => {
    const [guessedword, setguessedword] = React.useState('');
    const [error, seterror] = React.useState('');
    const secretwordlogic = new Set(props.secretwordredux.split(''))
    
   
console.log(props)
    const handlechange = (e) => {
        setguessedword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (guessedword === '') {
            seterror('input field is empty');
        }
        else {
            seterror("");
            props.guessedwordredux(guessedword);
        }

    }

    const newgame=()=>{

        props.history.push('/')
        props.resetgame();

    }

  

    const rendercontent=guessedword!==props.secretwordredux ?
    (
        <>
            <h3>Start guessing the word</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handlechange}
                />
                <button type="submit">submit</button>
            </form>
            {error}
    
            <><h3>Letters Matching with secret word:</h3>
               
    {
        props.guessword.map(v=>{
            const guessedwordlogic = new Set(v.split(''));
            const res = [...secretwordlogic].filter(l => guessedwordlogic.has(l))
            return (
                <div className="flex">
                 
            <h3 className="p-5">{v}</h3>
            
            <h3>{res.length}</h3></div>
            )
        })
    }</>
    
        </>):(
        <>
        <h3>yayyyy!!!! u guessed the secret word</h3>
        <button onClick={newgame}>click here to play again</button>
        </>)

    return rendercontent;
    
}
export default withRouter(Gamedashboard);