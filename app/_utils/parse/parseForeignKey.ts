import { OptionInputProps } from '@/app/_lib/services/product-service';
import { products } from '@/app/data/mock/products';

interface IdsProps {
  id: number;
}

function parseForeignKey(
  options: OptionInputProps[],
  productIds: IdsProps[] | null,
) {
  const allProductIds = productIds?.map((product) => product.id);

  const finalOptions = options.map((option) => {
    // prevent the number of products !== ids array
    const product = products.at(option.product_id - 1);
    if (!product) return null;

    const parts = option.sku_code.split('-');
    // parts[0] = Men
    // parts[1] = 001 ...
    const trueId = String(allProductIds?.at(option.product_id - 1)).padStart(
      4,
      '0',
    );
    const newSku = `${parts[0]}-${trueId}-${parts[2]}-${parts[3]}`;

    return {
      ...option,
      // mock date_id => supabase true_id
      sku_code: newSku,
      product_id: allProductIds?.at(option.product_id - 1),
    };
  });

  return finalOptions;
}

export default parseForeignKey;
