import { RowProps } from '@/app/data/products/options';

function parseOptions({
  rows,
  catalog,
  skuStart,
}: {
  rows: RowProps[];
  catalog: string;
  skuStart: number;
}) {
  const options = [];
  const padZero = (num: number, len = 4) => `${num}`.padStart(len, '0');

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].quantity; j++) {
      options.push({
        color: rows[i].color,
        size: rows[i].size,
        price: rows[i].price,
        discount: rows[i].discount,
        skuId: `${catalog}-001-${rows[i].color}-${rows[i].size}${padZero(skuStart + j + 1)}`,
      });
    }
  }

  return options;
}

export default parseOptions;

/*
export interface OptionProps {
  size: string;
  price: number;
  discount: number;
  color: string;
  skuId: string;
}
*/
