import { OptionProps } from '../../_store/slices/productSlice';

export default function mapOptionForm({
  id,
  options,
}: {
  id: number;
  options: OptionProps[];
}) {
  const parsedOptions = [];

  for (const option of options) {
    parsedOptions.push({
      color: option.color,
      size: option.size,
      price: option.price,
      discount: option.discount,
      sku_code: option.skuId,
      product_id: id,
    });
  }

  return parsedOptions;
}
