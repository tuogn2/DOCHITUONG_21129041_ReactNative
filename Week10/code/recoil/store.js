// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './features/jobSlice'; // Adjust according to your directory structure

const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

export default store; // Ensure you're exporting the store correctly
