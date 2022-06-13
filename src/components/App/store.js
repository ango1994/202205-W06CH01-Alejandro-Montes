import { configureStore } from '@reduxjs/toolkit';
import chararacterReducer from '../../reducers/characters/characterSlice';

export default configureStore({
    reducer: {
        characters: chararacterReducer,
    },
});
