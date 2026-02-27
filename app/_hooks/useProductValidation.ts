import { RootState } from '@/app/_store/index';
import {
  checkDescription,
  checkImage,
  checkOptions,
  checkTitle,
} from '@/app/_utils/parse/checkError';
import { useSelector } from 'react-redux';

function useProductValidation() {
  const { title, description, rows, image } = useSelector(
    (state: RootState) => state.product,
  );

  const { status: titleStatus, message: titleMessage } = checkTitle(title);
  const { status: descStatus, message: descMessage } =
    checkDescription(description);
  const { status: rowsStatus, message: rowsMessage } = checkOptions(rows);
  const { status: imageStatus, message: imageMessage } = checkImage(image);

  const disabled = !titleStatus || !descStatus || !rowsStatus || !imageStatus;

  return {
    disabled,
    titleMessage,
    descMessage,
    rowsMessage,
    imageMessage,
  };
}

export default useProductValidation;
