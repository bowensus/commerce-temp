export interface RowProps {
  id: number;
  color: string;
  size: string;
  quantity: number;
  price: number;
  discount: number;
  [key: string]: any;
}

export const initialRows = [
  { id: 1, color: 'Black', size: 'M', quantity: 0, price: 0, discount: 0 },
  { id: 2, color: 'Black', size: 'L', quantity: 0, price: 0, discount: 0 },
  { id: 3, color: 'White', size: 'M', quantity: 0, price: 0, discount: 0 },
  { id: 4, color: 'White', size: 'L', quantity: 0, price: 0, discount: 0 },
];
