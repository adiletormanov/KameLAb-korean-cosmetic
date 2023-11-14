import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

export const getAllItems = createAsyncThunk(
  'items/getAllItems',
  async (filter, { rejectWithValue }) => {
    // let queryParamsFromTo = `price_gte=${slider[0]}`;

    const { queryParamsApi, queryParamsFromTo } = filter;

    try {
      const res = await api(`products${queryParamsApi}${queryParamsFromTo}&_limit=78`);
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
  items: [],
  status: 'loading',
	slider: [0, 4000],
  category: '',
  sort: '',

	search: '',
	value: '',
	page: 1,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
		setPage(state, action) {
      state.page = action.payload;
    },
		setSlider(state, action) {
      state.slider = action.payload;
    },
		setSearch(state, action) {
      state.search = action.payload;
    },
		setValue(state, action) {
      state.value = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllItems.pending, (state, action) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(getAllItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })

      .addCase(getAllItems.rejected, (state, action) => {
        state.status = 'rejected';
        state.items = [];
      });
  },
});

export const { setItems, setSort, setCategory,setPage, setSlider, setSearch, setValue } = itemsSlice.actions;
export default itemsSlice.reducer;
