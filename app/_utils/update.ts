import { AppDispatch } from '@/app/_store/index';
import {
  setCatalog,
  setDescription,
  setImage,
  setRows,
  setTitle,
} from '@/app/_store/slices/productSlice';
import { ProductProps } from '@/app/_utils/map/mapProduct';
import parseOptionsToRows from '@/app/_utils/parse/parseOptionsToRows';

interface ToSliceProps {
  product: ProductProps;
  dispatch: AppDispatch;
}

export function updateToSlice({ product, dispatch }: ToSliceProps) {
  const { catalog, title, description, image, options } = product;

  dispatch(setCatalog(catalog));
  dispatch(setTitle(title));
  dispatch(setDescription(description));
  dispatch(setImage(image));

  const rows = parseOptionsToRows(options);
  dispatch(setRows(rows));
}
