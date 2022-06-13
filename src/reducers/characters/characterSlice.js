import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    characterList: [],
};

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        saveCharacter: (state, action) => {
            state.characterList.push(action.payload);
        },
    },
});

export const { saveCharacter } = characterSlice.actions;

export default characterSlice.reducer;
