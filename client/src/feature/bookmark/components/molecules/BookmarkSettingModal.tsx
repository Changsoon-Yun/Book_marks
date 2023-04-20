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
  Stack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { Bookmark } from '@/types/api/Bookmark';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  isCentered: boolean;
  clickedBookmark: Bookmark;

  urlRef: React.RefObject<HTMLInputElement>;
  titleRef: React.RefObject<HTMLInputElement>;
  descriptionRef: React.RefObject<HTMLInputElement>;
  editBookmarkHandler: () => void;
  deleteBookmarkHandler: () => void;
}

export default function BookmarkSettingModal(props: Props) {
  const {
    isOpen,
    onClose,
    isLoading,
    clickedBookmark,
    editBookmarkHandler,
    urlRef,
    titleRef,
    descriptionRef,
    deleteBookmarkHandler,
  } = props;
  const { t } = useTranslation('common');
  const { url, title, description, imageUrl, faviconUrl } = clickedBookmark;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent mx={2}>
          <ModalHeader>{t('bookmark.modal.title-edit')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box
              h={'223px'}
              mb={2}
              position={'relative'}
              border={'1px solid gray'}
              borderRadius={'8px'}
              overflow={'hidden'}>
              <Img src={imageUrl} roundedTop={'sm'} objectFit={'cover'} h='full' w='full' alt={'image'} />
              <Img
                src={faviconUrl}
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
            <Stack spacing={5}>
              <FormControl>
                <FormLabel>{t('bookmark.modal.label-url')}</FormLabel>
                <Input ref={urlRef} defaultValue={url} />
              </FormControl>
              <FormControl>
                <FormLabel>{t('bookmark.modal.label-title')}</FormLabel>
                <Input
                  ref={titleRef}
                  defaultValue={title}
                  placeholder={`${t('bookmark.modal.input-placeholder-title')}`}
                />
              </FormControl>
              <FormControl>
                <FormLabel>{t('bookmark.modal.label-description')}</FormLabel>
                <Input
                  ref={descriptionRef}
                  defaultValue={description}
                  placeholder={`${t('bookmark.modal.input-placeholder-description')}`}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              {t('bookmark.modal.close-button')}
            </Button>
            <Button onClick={deleteBookmarkHandler} mr={3}>
              {t('bookmark.modal.delete-button')}
            </Button>
            <Button onClick={editBookmarkHandler} colorScheme='blue'>
              {t('bookmark.modal.edit-button')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
