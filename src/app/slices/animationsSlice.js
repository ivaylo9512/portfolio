import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentVisited: null,
    isProjectsSection: false
}

const animationSlice = createSlice({
    name: 'animations',
    initialState,
    reducers: {
        toggleSections: (state) => {
            state.isProjectsSection = !state.isProjectsSection;
        },
        setVisited: (state, { payload }) => {
            state.currentVisited = payload;
        },
        resetVisited: (state) => {
            state.currentVisited = initialState.currentVisited;
        }
    }
})

export default animationSlice.reducer;
export const { setVisited, resetVisited, toggleSections } = animationSlice.actions;
export const getVisited = state => state.animations.currentVisited;
export const isProjectsSection = state => state.animations.isProjectsSection;