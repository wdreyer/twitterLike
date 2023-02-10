import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { token: null,firstname : null, username: null },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SignIn: (state, action) => 
        {
        console.log('Add user', action.payload);
        state.value.token = action.payload.token;
        state.value.firstname = action.payload.firstname; 
        state.value.username = action.payload.username
        },
        SignUp: (state) => {
            state.value.token = null;
            state.value.firstname = null;
            state.value.username = null; 
        }
    },
});

export const { SignIn, SignUp } = userSlice.actions;
export default userSlice.reducer;
