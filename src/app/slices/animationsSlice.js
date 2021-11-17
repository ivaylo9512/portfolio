import { createSlice } from '@reduxjs/toolkit';

const slides = ['first', 'second', 'third'];

const initialState = {
    currentVisited: null,
    isProjectsSection: false,
    currentSlideIndex: 0,
    currentSlide: slides[0]
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
        },
        changeSlide: (state, { payload }) => {
            state.currentSlideIndex += payload;
            state.currentSlide = slides[state.currentSlideIndex];
        }
    }
})

export default animationSlice.reducer;
export const { setVisited, resetVisited, toggleSections, changeSlide } = animationSlice.actions;
export const getVisited = state => state.animations.currentVisited;
export const isProjectsSection = state => state.animations.isProjectsSection;
export const getCurrentSlide = state => state.animations.currentSlide;