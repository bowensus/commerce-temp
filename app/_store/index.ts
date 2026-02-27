import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import productsReducer from './slices/productsSlice';
import ordersReducer from './slices/ordersSlice';

const rootReducer = combineReducers({
  // account: accountReducer,
  product: productReducer,
  products: productsReducer,
  orders: ordersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
