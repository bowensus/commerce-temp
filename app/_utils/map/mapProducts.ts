import { ProductOutputProps } from '../../_lib/services/product-service';
import mapProduct, { ProductProps } from './mapProduct';

function mapProducts(data: ProductOutputProps[]) {
  const products: ProductProps[] = [];
  for (const item of data) {
    products.push(mapProduct(item));
  }
  return products;
}

export default mapProducts;
