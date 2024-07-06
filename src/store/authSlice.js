import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name : null, 
    email : null,
    phone : null,
    extra : null,
    budgetTo: null,
    budgetFrom: null,
  },
  reducers: {
    setAuth : (state, action) => {
        const {name, email, phone, extra} = action.payload;
        state.name = name;
        state.email = email;
        state.phone = phone;
        state.extra = extra;
    },
    setBudget: (state, action) => {
      const {to, from} = action.payload;
      state.budgetFrom = from;
      state.budgetTo = to;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAuth, setBudget } = authSlice.actions

export default authSlice.reducer