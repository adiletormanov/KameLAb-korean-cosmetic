import { configureStore } from '@reduxjs/toolkit';

import saleSlice from './slices/saleProductsSlice';
import newsSlice from './slices/newProductsSlice';
import hitsSlice from './slices/hitProductsSlice';
import catalogSlice from './slices/catalogSlice';
import favoritesSlice from './slices/favoritesSlice';
import cartSlice from './slices/cartSlice';
import sameProductsSlice from './slices/sameProductsSlice';

export const store = configureStore({
  reducer: {
    saleSlice,
    newsSlice,
    hitsSlice,
    catalogSlice,
    favoritesSlice,
    cartSlice,
    sameProductsSlice,
  },
});
