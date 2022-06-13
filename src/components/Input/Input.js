import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveCharacter } from '../../reducers/characters/characterSlice';

export const Input = () => {
    const [input, setInput] = useState();
    const dispatch = useDispatch();

    const addCharacter = () => {
        console.log(`adding ${input}`);
        dispatch(
            saveCharacter({
                character: input,
                id: Date.now(),
            })
        );
    };

    function handleChange(event) {
        setInput(event.target.value);
    }

    return (
        <div className="input">
            <input type="text" onChange={(event) => handleChange(event)} />
            <button onClick={addCharacter}>Nuevo personaje</button>
        </div>
    );
};
