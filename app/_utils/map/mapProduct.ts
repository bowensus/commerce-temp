import { ProductOutputProps } from '../../_lib/services/product-service';

export interface OptionProps {
  id: number;
  size: string;
  color: string;
  price: number;
  discount: number;
  skuId: string;
  productId: number;
}

export interface ProductProps {
  id: number;
  createdAt: string;
  catalog: string;
  title: string;
  description: string;
  currency: string;
  image: string;
  publishedAt: string | null;
  options: OptionProps[];
}

export default function mapProduct(data: ProductOutputProps) {
  const product: ProductProps = {
    id: data.id,
    createdAt: data.created_at,
    catalog: data.catalog,
    title: data.title,
    description: data.description,
    currency: data.currency,
    image: data.image,
    publishedAt: data.published_at ?? null,
    options: data.options.map((option) => ({
      id: option.id,
      size: option.size,
      color: option.color,
      price: option.price,
      discount: option.discount,
      skuId: option.sku_code,
      productId: option.product_id,
    })),
  };

  return product;
}
