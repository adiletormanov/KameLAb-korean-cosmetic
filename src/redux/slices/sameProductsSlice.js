import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/api';

export const getSameProducts = createAsyncThunk(
  'same/getSameProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api(`products?_limit=6`);

      if (res.statusText !== 'OK') {
        throw new Error('Server error !');
      }

      return res.data;
    } catch (e) {
      alert('Ошибка при получении товаров');
      return rejectWithValue(e.message);
    }
  },
);

const initialState = {
  same: [],
  status: 'loading',
  product: {},
  showSame: false,
};

const sameProductsSlice = createSlice({
  name: 'same',
  initialState,
  reducers: {
    setSame(state, action) {
      state.same = action.payload;
    },

    setShowSame(state, action) {
      state.showSame = action.payload;
    },
    setProduct(state, action) {
      state.product = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getSameProducts.pending, (state, action) => {
        state.status = 'loading';
        state.same = [];
      })
      .addCase(getSameProducts.fulfilled, (state, action) => {
        state.same = action.payload;
        state.status = 'success';
      })

      .addCase(getSameProducts.rejected, (state, action) => {
        state.status = 'rejected';
        state.same = [];
      });
  },
});

export const { setSame, setShowSame, setProduct } = sameProductsSlice.actions;
export default sameProductsSlice.reducer;
