import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { CreateBookmarkModalProps } from '@/feature/index/interface/CreateBookmarkModalProps';

export default function BookmarkAddModal(props: CreateBookmarkModalProps) {
  const { isOpen, onClose, initialRef, isCentered } = props;
  const { t } = useTranslation('common');
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef} isCentered>
        <ModalOverlay />
        <ModalContent mx={2}>
          <ModalHeader>{t('bookmark.modal.title')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>{t('bookmark.modal.label-url')}</FormLabel>
              <Input readOnly />
            </FormControl>

            <FormControl>
              <FormLabel>{t('bookmark.modal.label-title')}</FormLabel>
              <Input ref={initialRef} placeholder={`${t('bookmark.modal.input-placeholder-title')}`} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>{t('bookmark.modal.label-description')}</FormLabel>
              <Input placeholder={`${t('bookmark.modal.input-placeholder-description')}`} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              {t('bookmark.modal.close-button')}
            </Button>
            <Button colorScheme='blue' onClick={onClose}>
              {t('bookmark.modal.save-button')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
