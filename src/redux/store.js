import { configureStore } from '@reduxjs/toolkit';
import UIReducer from './UISlice';
import EcomReducer from './EcomSlice'

export default configureStore({
  reducer: {
    UI: UIReducer,
    Ecom: EcomReducer,
  },
});
