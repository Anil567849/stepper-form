import { createSlice } from '@reduxjs/toolkit'

export const stepsSlice = createSlice({
  name: 'steps',
  initialState: {
    step: 1
  },
  reducers: {
    setStep : (state, action) => {
        const {step} = action.payload;
        state.step = step;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setStep } = stepsSlice.actions

export default stepsSlice.reducer