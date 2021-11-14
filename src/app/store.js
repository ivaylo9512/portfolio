import { configureStore } from '@reduxjs/toolkit';
import animations from './slices/animationsSlice';

const store = configureStore({
    reducer: {
        animations
    }
})

export default store