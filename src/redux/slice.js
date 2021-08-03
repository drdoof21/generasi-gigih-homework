import {createSlice} from '@reduxjs/toolkit';

export const slicer = createSlice({
    name: 'tester',
    initialState: {
        value: 1
    },
    reducers: {
        times: state => {
            state.value *= 2
        },
        decrement: state => {
            state.value -= 10
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
}
)
export const {times, decrement, incrementByAmount} = slicer.actions

export default slicer.reducer