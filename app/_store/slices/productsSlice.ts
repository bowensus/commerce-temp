import { ProductProps } from '@/app/_utils/map/mapProduct';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ProductProps[] = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.unshift(action.payload);
    },
    upsertProduct(state, action) {
      const { productId, updated } = action.payload;
      return state.map((product) =>
        product.id === productId ? updated : product,
      );
    },
    removeProduct(state, action) {
      return state.filter((product) => product.id !== action.payload);
    },
    setProducts(state, action) {
      return action.payload;
    },
  },
});

export const { addProduct, setProducts, removeProduct, upsertProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
