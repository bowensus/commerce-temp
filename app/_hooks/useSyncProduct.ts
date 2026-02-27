import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ProductProps } from '@/app/_utils/map/mapProduct';
import { updateToSlice } from '@/app/_utils/update';

export function useSyncProduct(product: ProductProps | undefined) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) updateToSlice({ product, dispatch });
  }, [dispatch]);
}
