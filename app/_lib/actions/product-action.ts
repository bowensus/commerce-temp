'use server';

import { StateProps } from '@/app/_store/slices/productSlice';
import mapOptionForm from '@/app/_utils/map/mapOptionForm';
import mapProduct from '@/app/_utils/map/mapProduct';
import mapProductForm from '@/app/_utils/map/mapProductForm';
import mapProducts from '@/app/_utils/map/mapProducts';
import parseImageUrl from '@/app/_utils/parse/parseImageUrl';
import {
  createProduct,
  creatOptions,
  deleteProduct,
  deleteProductOptions,
  duplicateProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '../services/product-service';

export async function getProductsAction() {
  try {
    const data = await getProducts();
    const products = mapProducts(data);

    return { success: true, data: products };
  } catch (err: unknown) {
    console.log(err);
    throw err;
  }
}

export async function uploadFileAction(formData: FormData): Promise<string> {
  const image = formData.get('image') as File | null;
  if (!image) {
    throw new Error('No image');
  }

  const imageUrl = await parseImageUrl(image);
  return imageUrl || '';
}

export async function createProductAction(productSlice: StateProps) {
  try {
    const data = mapProductForm(productSlice);
    const productInput = data.product;
    const optionInput = data.options;

    // Upload product table
    const id = await createProduct(productInput);

    // Upload options table
    const options = mapOptionForm({ id: Number(id), options: optionInput });
    await creatOptions(options);

    // return product
    const productOutput = await getProduct(id);
    const product = mapProduct(productOutput);

    return { success: true, data: product };
  } catch (err: unknown) {
    console.error(err);
    throw err;
  }
}

export async function deleteProductAction(id: number) {
  try {
    const productId = await deleteProduct(id);
    return productId;
  } catch (err: unknown) {
    console.error(err);
    throw err;
  }
}

export async function updateProductAction(
  id: number,
  productSlice: StateProps,
) {
  try {
    const data = mapProductForm(productSlice);

    const productInput = data.product;
    const optionInput = data.options;

    // Update product table
    await updateProduct(id, productInput);

    // 1) Delete options of this product
    await deleteProductOptions(id);

    // 2) Upload updated options again
    const options = mapOptionForm({ id, options: optionInput });
    await creatOptions(options);

    // return product
    const productOutput = await getProduct(id);
    const product = mapProduct(productOutput);

    return { productId: id, updated: product };
  } catch (err: unknown) {
    console.error(err);
    throw err;
  }
}

export async function duplicateProductAction(productSlice: StateProps) {
  try {
    const data = mapProductForm(productSlice);

    const productInput = data.product;
    const optionInput = data.options;

    // Duplicate product table
    const id = await duplicateProduct(productInput);

    // Upload options table
    const options = mapOptionForm({ id, options: optionInput });
    await creatOptions(options);

    // return product
    const productOutput = await getProduct(id);
    const product = mapProduct(productOutput);

    return { success: true, data: product };
  } catch (err: unknown) {
    console.error(err);
    throw err;
  }
}

export async function updatePublishAction(
  id: number,
  productSlice: StateProps,
) {
  try {
    const data = mapProductForm(productSlice);
    const productInput = data.product;

    await updateProduct(id, productInput);

    // return product
    const productOutput = await getProduct(id);
    const product = mapProduct(productOutput);

    return { productId: id, updated: product };
  } catch (err: unknown) {
    console.error(err);
    throw err;
  }
}
