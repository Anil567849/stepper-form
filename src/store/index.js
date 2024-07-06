import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice.js';
import stepsSlice from './stepsSlice.js';

export default configureStore({
  reducer: {auth : authSlice, steps: stepsSlice}
})