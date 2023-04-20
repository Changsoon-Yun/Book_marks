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

export default function BookmarkAddModal(props: CreateBookmarkModalProps) {
  const { isOpen, onClose, titleRef, descriptionRef, imageRef, faviconRef, isLoading, checkedData, createHandler } =
    props;
  const { url, title, description, imageUrl, faviconUrl } = checkedData;
  const { t } = useTranslation('common');

  console.log(faviconUrl);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={titleRef} isCentered closeOnOverlayClick={false}>
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
                <Img
                  ref={imageRef}
                  src={imageUrl ?? process.env.NEXT_PUBLIC_AWS_ADDR + '/default.jpg'}
                  roundedTop={'sm'}
                  objectFit='cover'
                  h='full'
                  w='full'
                  alt={'image'}
                />
                <Img
                  ref={faviconRef}
                  src={faviconUrl ?? process.env.NEXT_PUBLIC_AWS_ADDR + '/default.jpg'}
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
                    ref={titleRef}
                    defaultValue={title}
                    placeholder={`${t('bookmark.modal.input-placeholder-title')}`}
                  />
                </Skeleton>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>{t('bookmark.modal.label-description')}</FormLabel>
                <Skeleton height='40px' isLoaded={!isLoading}>
                  <Input
                    ref={descriptionRef}
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
