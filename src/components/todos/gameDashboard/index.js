import React from 'react';

const Gamedashboard = (props) => {
    const [guessedword, setguessedword] = React.useState('');
    const [error, seterror] = React.useState('');
    const secretwordlogic = new Set(props.secretwordredux.split(''))
    const guessedwordlogic = new Set(guessedword.split(''))
    const res = [...secretwordlogic].filter(l => guessedwordlogic.has(l))

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

    const rendercontent=guessedword!==props.secretwordredux?(
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
                <h3>{res.length}</h3></>
    
    
        </>
        ):(<h3>yayyyy!!!! u guessed the secret word</h3>)

    return rendercontent;
    
}
export default Gamedashboard;