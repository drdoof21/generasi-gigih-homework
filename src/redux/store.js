import { configureStore } from '@reduxjs/toolkit'
import slicerReducer from './slice';
import changerReducer from './secondslice';
import tokenSetterReducer from './tokenSetter';

export default configureStore({
  reducer: {
      tester: slicerReducer,
      isitState: changerReducer,
      privacy: tokenSetterReducer
  }
})