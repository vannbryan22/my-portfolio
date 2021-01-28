import { createSlice } from '@reduxjs/toolkit';

export const UISlice = createSlice({
  name: 'UI',
  initialState: {
    activeRoute:'Home',
    navigation: false,
    showcaseMainView: 'ecom',
    productClicked:{
      clicked: false,
      props:{},
      toShow:'',
    }
  },
  reducers: {
    setActiveRoute: (state,action) => {
      state.activeRoute= action.payload
    },
    setNavigation: (state) =>{
      state.navigation = !state.navigation
    },
    setShowcaseMainView:(state,action)=>{
      state.showcaseMainView = action.payload
    },
    closeNavigation:(state, action)=>{
      state.navigation = action.payload
    },
    setProductClicked:(state,action) =>{
      state.productClicked.clicked = action.payload.clicked
      state.productClicked.props = action.payload.props
      state.productClicked.toShow = action.payload.toShow
    },
    setProductQuantity:(state,action)=>{
      let math = action.payload.math
      if(math === 'add'){
        state.productClicked.props.quantity += action.payload.value
      }else if(math === 'minus'){
        state.productClicked.props.quantity -= action.payload.value
      }else if(math === 'onChange'){
        state.productClicked.props.quantity = parseFloat(action.payload.value <= 0 ? 1: action.payload.value)
      }
    },
    setProductShow:(state,action)=>{
      state.productClicked.toShow = action.payload
    },

  },
});

export const { setActiveRoute, setNavigation, 
  setShowcaseMainView, closeNavigation, setProductClicked,
  setProductShow, setProductQuantity } = UISlice.actions;

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const selectUI = state => state.UI;

export default UISlice.reducer;
