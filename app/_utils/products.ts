import { PRODUCTS_PAGE_SIZE } from './constants';
import { ProductProps } from '@/app/_utils/map/mapProduct';

export function filterProducts({
  products,
  filter,
}: {
  products: ProductProps[];
  filter: string[];
}) {
  switch (filter[0]) {
    case 'men':
      products = products.filter((product) => product.catalog === 'Men');
      break;
    case 'women':
      products = products.filter((product) => product.catalog === 'Women');
      break;
  }
  switch (filter[1]) {
    case 'sold_in':
      products = products.filter((product) => product.options.length !== 0);
      break;
    case 'sold_out':
      products = products.filter((product) => product.options.length === 0);
      break;
  }
  switch (filter[2]) {
    case 'published':
      products = products.filter((product) => product.publishedAt !== null);
      break;
    case 'unpublished':
      products = products.filter((product) => product.publishedAt === null);
      break;
  }
  return products;
}

export function sortProducts({
  products,
  sortby,
}: {
  products: ProductProps[];
  sortby: string;
}) {
  switch (sortby) {
    case 'date_down':
      products = products.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      break;
    case 'date_up':
      products = products.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
      break;
    case 'product_down':
      products = products.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case 'product_up':
      products = products.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'stock_down':
      products = products.sort((a, b) => b.options.length - a.options.length);
      break;
    case 'stock_up':
      products = products.sort((a, b) => a.options.length - b.options.length);
      break;
  }
  return products;
}

export function paginateProducts({
  products,
  page,
}: {
  products: ProductProps[];
  page: string;
}) {
  const pageNum = Number(page);
  const start = (pageNum - 1) * PRODUCTS_PAGE_SIZE;
  const end = pageNum * PRODUCTS_PAGE_SIZE;
  products = products.slice(start, end);

  return products;
}
