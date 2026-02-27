import { OptionProps } from '@/app/_utils/map/mapProduct';

export function calcColor(options: OptionProps[]) {
  const colors: string[] = [];
  for (const option of options) {
    if (!colors.includes(option.color)) {
      colors.push(option.color);
    }
  }
  return colors.length;
}

export function calcSize(options: OptionProps[]) {
  const sizes: string[] = [];
  for (const option of options) {
    if (!sizes.includes(option.size)) {
      sizes.push(option.size);
    }
  }
  return sizes.length;
}

export function calcStock(options: OptionProps[]) {
  if (options.length === 0) {
    return 'Sold Out';
  } else {
    return 'All in Stock';
  }
}

export function calcStatus(publish: string | null) {
  if (publish) {
    return 'Published';
  } else {
    return 'Unpublished';
  }
}
