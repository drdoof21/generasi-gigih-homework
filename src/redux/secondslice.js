import {createSlice} from '@reduxjs/toolkit';

export const changer = createSlice({
    name: 'isitState',
    initialState: {
        value: 100
    },
    reducers: {
        division: state => {
            state.value /= 2    
        }
    }
})

export const {division} = changer.actions

export default changer.reducer;