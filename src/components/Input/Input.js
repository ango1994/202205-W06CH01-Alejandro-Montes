import React, { useState } from 'react';

export const Input = () => {
    const [input, setInput] = useState();

    function handleSubmit(ev) {
        ev.preventDefault();
    }

    function handleChange(event) {
        setInput(event.target.value);
        console.log(event.target.value);
        console.log(input);
    }

    return (
        <div className="input">
            <form action="" value={input}>
                <input type="text" onChange={(event) => handleChange(event)} />
                <button onClick={handleSubmit}>Nuevo personaje</button>
            </form>
        </div>
    );
};
