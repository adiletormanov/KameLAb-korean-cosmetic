import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: localStorage.getItem("favorites")
	? JSON.parse(localStorage.getItem("favorites"))
	: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },

    delFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { addFavorites, delFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

// addFavorites: (state, action) => {
//   const { item } = action.payload;
//   const finProduct = state.favorites.some((el) => el.id === item.id);

//   if (finProduct) {
//     state((prev) => prev.filter((el) => el.id !== item.id));
//   } else {
//     addFavorites((prev) => [...prev, item]);
//   }
// },

// addFavorites: (state, action) => {
//   const { item } = action.payload;
//   const findProduct = state.favorites.some((el) => el.id === item.id);

//   if (findProduct) {
//     return state.filter((el) => el.id !== item.id);
//   } else {
//     return [...state, item];
//   }
// },

// const { item } = action.payload;
// const findProduct = state.favorites.some((el) => el.id === item.id);
// if (findProduct) {
// 	state.favorites.filter((el) => el.id !== item.id);
// } else {
// return [...state.favorites, item];
// }
