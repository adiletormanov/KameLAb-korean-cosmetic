import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    //   addCarts: (state, action) => {
    //     state.carts.push(action.payload);
    //   },
    addCarts: (state, action) => {
      const { id } = action.payload;
      const findProduct = state.carts.findIndex((item) => item.id === id);
      if (findProduct !== -1) {
        state.carts[findProduct].count += 1;
      } else {
        state.carts.push({ ...action.payload, count: 1 });
      }

    },

    delFromCarts: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },
    cartCountPlus: (state, action) => {
      const { id } = action.payload;
      const updatedCarts = state.carts.map((el) => {
        if (el.id === id) {
          return { ...el, count: el.count + 1 };
        }
        return el;
      });
      return { ...state, carts: updatedCarts };


    },
    cartCountMinus: (state, action) => {
      const findProduct = state.carts.findIndex(
        (product) => product.id === action.payload.id,
      );
      if (state.carts[findProduct].count === 1) {
        state.carts = state.carts.filter(
          (product) => product.id !== action.payload.id,
        );
      } else {
        state.carts[findProduct].count -= 1;
      }


    },
  },
});

export const { addCarts, delFromCarts, cartCountPlus, cartCountMinus } =
  cartSlice.actions;
export default cartSlice.reducer;
