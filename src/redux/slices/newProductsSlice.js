import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/api';

export const getNewProducts = createAsyncThunk(
  'new/getNewProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api(`products?_sort=new&_order=desc&_limit=12`);

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
  news: [],
  status: 'loading',

	showNews: false
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews(state, action) {
      state.news = action.payload;
    },
		setShowNews(state, action) {
      state.showNews = action.payload;
    },
  },

	extraReducers: (builder) => {
		builder
   .addCase( getNewProducts.pending, (state, action) => {
      state.status = 'loading';
      state.news = [];
    })
   .addCase( getNewProducts.fulfilled, (state, action) => {
      state.news = action.payload;
      state.status = 'success';
    })

    .addCase(getNewProducts.rejected, (state, action) => {
      state.status = 'rejected';
      state.news = [];
    })
  },
});

export const { setNews, setShowNews} = newsSlice.actions;
export default newsSlice.reducer;
