import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user_id: null,
        user_email: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user_id = action.payload.user_id;
            state.user_email = action.payload.user_email;
        },
        clearUser: (state) => {
            state.user_id = null;
            state.user_email = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
