import { createSlice } from '@reduxjs/toolkit';
import { initialRows, RowProps } from '@/app/data/products/options';

export interface OptionProps {
  skuId: string;
  color: string;
  size: string;
  price: number;
  discount: number;
}

export interface StateProps {
  catalog: string;
  title: string;
  description: string;
  currency: string;
  options: OptionProps[];
  image: string;
  publishedAt: string | null;
  rows: RowProps[];
}

const initialState: StateProps = {
  catalog: 'Men',
  title: '',
  description: '',
  currency: 'USD',
  options: [],
  image: '',
  publishedAt: null,
  rows: initialRows,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCatalog(state, action) {
      state.catalog = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setOptions(state, action) {
      state.options = action.payload;
    },
    setRows(state, action) {
      state.rows = action.payload;
    },
    updateRow(state, action) {
      const { id, key, value } = action.payload;
      const row = state.rows.find((row) => row.id === id);
      if (row) row[key] = value;
    },
    setImage(state, action) {
      state.image = action.payload;
    },
    setPublishTime(state, action) {
      state.publishedAt = action.payload;
    },
  },
});

export const {
  setCatalog,
  setTitle,
  setDescription,
  setOptions,
  setRows,
  updateRow,
  setImage,
  setPublishTime,
} = productSlice.actions;

export default productSlice.reducer;
