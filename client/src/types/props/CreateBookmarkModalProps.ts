import { CheckBookmarkReturn } from '@/types/props/CreateBookmarkProps';
import React, { MouseEventHandler, MutableRefObject } from 'react';

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
  titleRef: React.RefObject<HTMLInputElement>;
  descriptionRef: React.RefObject<HTMLInputElement>;
  imageRef: React.RefObject<HTMLImageElement>;
  faviconRef: React.RefObject<HTMLImageElement>;
}
