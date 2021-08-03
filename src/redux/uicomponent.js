import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {times, decrement} from './slice';
import {division} from './secondslice';

const UiComp = () => {
    const count = useSelector(state => state.tester.value);
    const divider = useSelector(state => state.isitState.value);
    const dispatch = useDispatch();

    return(
        <div>
            <button
                aria-label="timing value"
                onClick={() => dispatch(times())}
            >
                Times
            </button>
            <span>{count}</span>
            <button
                aria-label="decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrements
            </button><br/>
            <button
                aria-label="divisiong"
                onClick={() => dispatch(division())}
            >bagi</button>
            <span>{divider}</span>
        </div>
    )
}

export default UiComp;