import React from 'react';

const JestFunc = (props) => {
    const [a, b] = React.useState('');
    const handlechange = (e) => {
        b(e.target.value)
    }

    return (
        <>
            <p>{props.title}</p>
            <form >
                <input
                    type="text"
                    onChange={(e) => handlechange(e)}
                    value={a}
                />
                <button type="submit" value={a}>Submit</button>
                <p>{a}</p>
            </form>
        </>
    )

}

export default JestFunc;