import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentVisited: null 
}

const animationSlice = createSlice({
    name: 'animations',
    initialState,
    reducers: {
        setVisited: (state, { payload }) => {
            state.transform = payload;
        },
        resetVisited: (state) => {
            state.transform = initialState.currentVisited;
        }
    }
})

export default animationSlice.reducer;
export const { setVisited, resetVisited } = animationSlice.actions;
export const getTransform = state => state.animations.transform;