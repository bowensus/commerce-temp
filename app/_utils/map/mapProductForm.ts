import { StateProps } from '../../_store/slices/productSlice';

export default function mapProductForm(data: StateProps) {
  return {
    product: {
      catalog: data.catalog?.toString().trim() || '',
      title: data.title?.toString().trim() || '',
      description: data.description?.toString().trim() || '',
      currency: data.currency?.toString().trim() || 'CNY',
      image: data.image?.toString().trim() || '',
      published_at: data?.publishedAt || null,
    },
    options: data.options || {},
  };
}
