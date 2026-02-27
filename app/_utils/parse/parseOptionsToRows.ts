import { OptionProps } from '@/app/_utils/map/mapProduct';

function parseOptionsToRows(options: OptionProps[]) {
  const colors: string[] = [];
  const sizes: string[] = [];
  const rows = [];

  for (const option of options) {
    if (!colors.includes(option.color)) colors.push(option.color);
    if (!sizes.includes(option.size)) sizes.push(option.size);
  }

  let i = 1;
  const filterOptions = [...options];

  for (const size of sizes) {
    for (const color of colors) {
      const filter = filterOptions.filter(
        (option) => option.size === size && option.color === color,
      );
      const price = filter[0]?.price ?? 0;
      const discount = filter[0]?.discount ?? 0;

      rows.push({
        id: i,
        size: size,
        color: color,
        quantity: filter.length,
        price: price,
        discount: discount,
      });
      i += 1;
    }
  }

  return rows;
}

export default parseOptionsToRows;
