import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveCharacter } from '../../reducers/characters/characterSlice';

export const Input = () => {
    const [input, setInput] = useState();
    const dispatch = useDispatch();

    const saveCharacter = () => {
        console.log(`adding ${input}`);
        dispatch(
            saveCharacter({
                character: input,
                id: Date.now(),
            })
        );
    };

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
                <button onClick={saveCharacter}>Nuevo personaje</button>
            </form>
        </div>
    );
};
