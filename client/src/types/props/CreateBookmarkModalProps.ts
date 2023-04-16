import { CheckBookmarkReturn } from '@/types/props/CreateBookmarkProps';
import { MouseEventHandler, MutableRefObject } from 'react';

export interface CreateBookmarkModalProps {
  initialRef?: MutableRefObject<null>;
  finalRef?: MutableRefObject<null>;
  isOpen: boolean;
  onClose: () => void;
  isCentered: boolean;
  isEdit?: boolean;
  checkedData: CheckBookmarkReturn;
  isLoading: boolean;
  createHandler: MouseEventHandler<HTMLButtonElement>;
}
