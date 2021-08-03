import {createSlice} from '@reduxjs/toolkit';

export const tokenSetter = createSlice({
    name: 'privacy',
    initialState: {
        token : "",
        id : ""
    },
    reducers: {
        set_token: state => {
            const params = window.location.hash.substring(1);
            const access_token = new URLSearchParams(params).get("access_token");
            state.token = access_token;
        }
    }

})

export const {set_token} = tokenSetter.actions;

export default tokenSetter.reducer;