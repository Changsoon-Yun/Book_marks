import { UnKnownUserToken, useUser } from '@/feature/auth/hooks/useUser';
import BookmarkAddModal from '@/feature/index/components/molecules/BookmarkAddModal';
import useCreateBookmark, { checkUrl } from '@/feature/index/hooks/useCreateBookmark';
import { BookmarkItem } from '@/types/api/Bookmark';
import { CheckBookmarkReturn } from '@/types/props/CreateBookmarkProps';
import { Box, Button, Flex, Input, Tooltip, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React, { MouseEventHandler, RefObject, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { bookmarkAPI } from '@/lib/async/apiRoutes';

export default function BookmarkAddForm() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [checkedData, setCheckedData] = useState<CheckBookmarkReturn>({});
  const initialRef = useRef(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const { user } = useUser();
  const create = useCreateBookmark();
  const checkHandler = async () => {
    if (!user) return;
    if (urlRef.current?.value === '') {
      return;
    }
    onOpen();
    setIsLoading(() => true);
    const data = await checkUrl(urlRef.current?.value);
    setCheckedData(data);
    setIsLoading(() => false);
  };

  const createHandler = async () => {
    const bookmarkData: BookmarkItem = {
      url: checkedData.url,
      title: checkedData.title,
      description: checkedData.description,
      imageUrl: checkedData.imageUrl,
      faviconUrl: checkedData.faviconUrl,
    };
    create(bookmarkData);
    onClose();

    if (router.query.userName !== user?.userName) {
      router.push(bookmarkAPI.getBookmarks(user?.userName));
    }
  };

  return (
    <>
      <Flex>
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
