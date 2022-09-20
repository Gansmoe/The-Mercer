import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isLoaggedIn: false,
    email: null,
    name: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        SET_ACTIVE_USER: (state, action) => {
            
            console.log("RRRRR action", state)
            console.log("EEEEEE action", action)
            const { email, name  } = action.payload
            state.isLoaggedIn = true;
             state.email = email;
            // state.userID = userID;
             state.name = name;

        },
        REMOVE_ACTIVE_USER: (state, action) => {
            state.isLoaggedIn = false;
            // state.email = null;
            // state.userID = null;
            // state.userName = null;


        }
    }
});

export const { SET_ACTIVE_USER,REMOVE_ACTIVE_USER} = authSlice.actions

 
export const selectIsLoggedIn = (state) => state.auth.isLoaggedIn;

// export const selectEmail = (state) => state.auth.email; 
export const selectName = (state) => state.auth.name;
// export const selectUserID = (state) => state.auth.userID;

export default authSlice.reducer