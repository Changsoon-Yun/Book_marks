import { UnKnownUserToken, useUser } from '@/feature/auth/hooks/useUser';
import { CheckBookmarkReturn } from '@/feature/index/interface/CreateBookmarkProps';
import { Box, Button, Flex, Input, Tooltip, useDisclosure } from '@chakra-ui/react';
import BookmarkAddModal from '@/feature/index/components/molecules/BookmarkAddModal';
import React, { MouseEventHandler, RefObject, useRef } from 'react';
import { useTranslation } from 'next-i18next';

export interface BookmarkAddFormProps {
  urlRef: RefObject<HTMLInputElement>;
  user: UnKnownUserToken;
  checkHandler: MouseEventHandler<HTMLButtonElement>;
  initialRef: React.MutableRefObject<null>;
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  checkedData: CheckBookmarkReturn;
  createHandler: MouseEventHandler<HTMLButtonElement>;
}

export default function BookmarkAddForm({
  urlRef,
  user,
  checkHandler,
  initialRef,
  isOpen,
  onClose,
  isLoading,
  checkedData,
  createHandler,
}: BookmarkAddFormProps) {
  const { t } = useTranslation('common');

  return (
    <>
      <Flex py={10}>
        <Box flex={1} />
        <Input ref={urlRef} maxW={'md'} placeholder={'https://example.com'} borderRadius={'6px 0 0 6px'} />
        <Tooltip label={user ? null : 'Need login!'} aria-label='A tooltip'>
          <Button isLoading={isLoading} onClick={checkHandler} borderRadius={' 0 6px 6px 0 '}>
            {t('bookmark.add.add-button')}
          </Button>
        </Tooltip>
        <BookmarkAddModal
          isLoading={isLoading}
          checkedData={checkedData}
          initialRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
          isCentered={true}
          createHandler={createHandler}
        />
      </Flex>
    </>
  );
}
