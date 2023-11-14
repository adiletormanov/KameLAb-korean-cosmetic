import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/api';

export const getSaleProducts = createAsyncThunk(
  'sale/getSaleProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api(`products?_sort=sale&_order=desc&_limit=12`);

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
  sales: [],
  status: 'loading',

	showSales: false,
};

const saleSlice = createSlice({
  name: 'sale',
  initialState,
  reducers: {
    setSales(state, action) {
      state.sales = action.payload;
    },
		setShowSales(state, action) {
      state.showSales = action.payload;
    },
  },

	extraReducers: (builder) => {
		builder
   .addCase( getSaleProducts.pending, (state, action) => {
      state.status = 'loading';
      state.sales = [];
    })
   .addCase( getSaleProducts.fulfilled, (state, action) => {
      state.sales = action.payload;
      state.status = 'success';
    })

    .addCase(getSaleProducts.rejected, (state, action) => {
      state.status = 'rejected';
      state.sales = [];
    })
  },
});

export const { setSales, setShowSales } = saleSlice.actions;
export default saleSlice.reducer;
