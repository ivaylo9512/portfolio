import { configureStore, combineReducers } from '@reduxjs/toolkit';
import animations from './slices/animationsSlice';

const store = configureStore({
    reducer: {
        animations
    }
})

export const createTestStore = ({ reducers, preloadedState}) => {
    const combinedReducer = combineReducers(reducers);
  
    const rootReducer = (state, action) => {
        if(action.type == 'reset'){
            return combinedReducer(preloadedState, action);
        }

        return combinedReducer(state, action);
    }

    const store = configureStore({
        reducer: rootReducer,
        preloadedState
    })

    return store;
}

export default store