import { supabase } from '@/app/_lib/supabase';

export default async function parseImageUrl(file: File | null) {
  if (!file) return null;

  if (file instanceof File && file.size === 0) return null;

  // UPLOAD IMAGE TO BUCKET
  let imagePath: string = '';

  if (file instanceof File && file.size > 0) {
    const imageName = `${Math.random()}-${file?.name}`.replaceAll('/', '');
    const { error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(imageName, file);
    if (uploadError) throw uploadError;

    imagePath = `${process.env.SUPABASE_URL}/storage/v1/object/public/product-images/${imageName}`;
  } else {
    console.log('No file exit');
  }
  return imagePath;
}

// https://oxjubternmriarcvgyea.supabase.co/storage/v1/object/public/product-images/product-001.jpg
