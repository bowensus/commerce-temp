import { StateProps } from '@/app/_store/slices/productSlice';
import { ProductProps } from '@/app/_utils/map/mapProduct';
import parseOptionsToRows from '@/app/_utils/parse/parseOptionsToRows';

function mapProductSlice({
  product,
  publish,
}: {
  product: ProductProps;
  publish?: string;
}) {
  const productSlice: StateProps = {
    catalog: product.catalog,
    title: product.title,
    description: product.description,
    currency: product.currency,
    image: product.image,
    options: product.options,
    publishedAt: publish || product.publishedAt,
    rows: parseOptionsToRows(product.options),
  };

  return productSlice;
}

export default mapProductSlice;
