import { RowProps } from "@/app/data/products/options";

export function checkTitle(title: string) {
  if (!title.trim()) return { status: false, message: 'Title is required' };

  return { status: true, message: '' };
}

export function checkDescription(description: string) {
  if (!description.trim())
    return { status: false, message: 'Description is required' };

  return { status: true, message: '' };
}

export function checkOptions(rows: RowProps[]) {
  let isEmpty = true;
  for (const row of rows) {
    if (row.quantity > 0) isEmpty = false;
    break;
  }

  if (isEmpty)
    return { status: false, message: 'You must select at least one' };

  for (const row of rows) {
    if (row.quantity > 0) {
      if (row.quantity > 99) {
        return { status: false, message: 'You can only select at most 99' };
      }
      if (row.price <= 0) {
        return { status: false, message: 'Price is invalid' };
      }
      if (row.price <= row.discount) {
        return { status: false, message: 'Discount is invalid' };
      }
    }
  }

  return { status: true, message: '' };
}

export function checkImage(image: string) {
  if (image === '')
    return { status: false, message: 'You must upload the image' };

  return { status: true, message: '' };
}
