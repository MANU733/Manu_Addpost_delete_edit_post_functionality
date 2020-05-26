import React from 'react';

const Guessedword=(props)=>{
    if(props.guessedword.length===0)
    {
        return(
            <>
            <div data-test="initial-guess">
                TRY guessing the word
            </div>
            </>
        )
    }
    else
    {
        const content= props.guessedword.map((value)=>{
            return(
                <div data-test="guessword">
                <span>{value.guessword}</span>
                <span>{value.lettercount}</span>
                </div>
            )
        });
        return(
            <>
            <h2>Guessed word</h2>
            {content}
            </>
        )
    }
}

export default Guessedword;