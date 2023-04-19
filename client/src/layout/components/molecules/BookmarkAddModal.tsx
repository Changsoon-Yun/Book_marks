import { CreateBookmarkModalProps } from '@/types/props/CreateBookmarkModalProps';
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
  Skeleton,
  Stack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import logo from '../../../asset/images/default/default.jpg';

export default function BookmarkAddModal(props: CreateBookmarkModalProps) {
  const { isOpen, onClose, initialRef, isLoading, checkedData, createHandler } = props;
  const { url, title, description, imageUrl, faviconUrl } = checkedData;
  const { t } = useTranslation('common');

  console.log(checkedData);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef} isCentered closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent mx={2}>
          <ModalHeader>{t('bookmark.modal.title')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Skeleton height='223px' mb={2} isLoaded={!isLoading}>
              <Box
                maxH={'223px'}
                h={'100%'}
                position={'relative'}
                border={'1px solid gray'}
                borderRadius={'8px'}
                overflow={'hidden'}>
                <Img src={imageUrl ?? logo} roundedTop={'sm'} objectFit='cover' h='full' w='full' alt={'image'} />
                <Img
                  src={faviconUrl ?? logo}
                  position={'absolute'}
                  border={'1px solid gray'}
                  borderRadius={'50%'}
                  m={'auto'}
                  bottom={0}
                  left={0}
                  right={0}
                  objectFit='cover'
                  h='32px'
                  w='32px'
                  alt={'favicon'}
                />
              </Box>
            </Skeleton>
            <Stack spacing={5}>
              <FormControl display={'none'}>
                <FormLabel>{t('bookmark.modal.label-url')}</FormLabel>
                <Input readOnly defaultValue={url} />
              </FormControl>

              <FormControl>
                <FormLabel>{t('bookmark.modal.label-title')}</FormLabel>
                <Skeleton height='40px' isLoaded={!isLoading}>
                  <Input
                    ref={initialRef}
                    defaultValue={title}
                    placeholder={`${t('bookmark.modal.input-placeholder-title')}`}
                  />
                </Skeleton>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>{t('bookmark.modal.label-description')}</FormLabel>
                <Skeleton height='40px' isLoaded={!isLoading}>
                  <Input
                    defaultValue={description}
                    placeholder={`${t('bookmark.modal.input-placeholder-description')}`}
                  />
                </Skeleton>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              {t('bookmark.modal.close-button')}
            </Button>
            <Button colorScheme='blue' onClick={createHandler}>
              {t('bookmark.modal.save-button')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
