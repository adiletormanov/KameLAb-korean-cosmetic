import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/api';

export const getHitProducts = createAsyncThunk(
  'hit/getHitProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api(`products?_sort=hits&_order=desc&_limit=12`);

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
  hits: [],
  status: 'loading',

	showHits: false,
};

const hitsSlice = createSlice({
  name: 'hits',
  initialState,
  reducers: {
    setHits(state, action) {
      state.hits = action.payload;
    },

		setShowHits(state, action) {
      state.showHits = action.payload;
    },
  },

	extraReducers: (builder) => {
		builder
   .addCase( getHitProducts.pending, (state, action) => {
      state.status = 'loading';
      state.hits = [];
    })
   .addCase( getHitProducts.fulfilled, (state, action) => {
      state.hits = action.payload;
      state.status = 'success';
    })

    .addCase(getHitProducts.rejected, (state, action) => {
      state.status = 'rejected';
      state.hits = [];
    })
  },
});

export const {setHits, setShowHits} = hitsSlice.actions;
export default hitsSlice.reducer;
