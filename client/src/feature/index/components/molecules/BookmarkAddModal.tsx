import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Img,
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
  const { isOpen, onClose, initialRef, checkedData } = props;

  const { url, title, description, imageUrl, faviconUrl } = checkedData;
  const { t } = useTranslation('common');
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef} isCentered closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent mx={2}>
          <ModalHeader>{t('bookmark.modal.title')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box mb={2} position={'relative'} border={'1px solid gray'} borderRadius={'8px'} overflow={'hidden'}>
              <Img src={imageUrl} roundedTop={'sm'} objectFit='cover' h='full' w='full' alt={'image'} />
              <Box
                position={'absolute'}
                bottom={0}
                left={0}
                right={0}
                borderRadius={'full'}
                m={'auto'}
                h='32px'
                w='32px'
                p={'1px'}
                border={'1px solid gray'}>
                <Img src={faviconUrl} roundedTop={'sm'} objectFit='cover' h='full' w='full' alt={'favicon'} />
              </Box>
            </Box>
            <FormControl display={'none'}>
              <FormLabel>{t('bookmark.modal.label-url')}</FormLabel>
              <Input readOnly value={url} />
            </FormControl>

            <FormControl>
              <FormLabel>{t('bookmark.modal.label-title')}</FormLabel>
              <Input
                ref={initialRef}
                defaultValue={title}
                placeholder={`${t('bookmark.modal.input-placeholder-title')}`}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>{t('bookmark.modal.label-description')}</FormLabel>
              <Input defaultValue={description} placeholder={`${t('bookmark.modal.input-placeholder-description')}`} />
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
