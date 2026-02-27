import { OrderProps } from '@/app/_utils/map/mapOrders';
import { createSlice } from '@reduxjs/toolkit';

const initialState: OrderProps[] = [];

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders(state, action) {
      return action.payload;
    },
  },
});

export const { setOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
