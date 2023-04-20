import { UnKnownUserToken, useUser } from '@/feature/auth/hooks/useUser';
import BookmarkAddModal from '@/layout/components/molecules/BookmarkAddModal';
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
  const [checkedData, setCheckedData] = useState<CheckBookmarkReturn>();
  const urlRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const faviconRef = useRef<HTMLImageElement>(null);
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
      url: urlRef.current?.value || '',
      title: titleRef.current?.value || '',
      description: descriptionRef.current?.value || '',
      imageUrl: imageRef.current?.currentSrc || '',
      faviconUrl: faviconRef.current?.currentSrc || '',
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
        {checkedData && (
          <BookmarkAddModal
            isLoading={isLoading}
            checkedData={checkedData}
            titleRef={titleRef}
            descriptionRef={descriptionRef}
            imageRef={imageRef}
            faviconRef={faviconRef}
            isOpen={isOpen}
            onClose={onClose}
            isCentered={true}
            createHandler={createHandler}
          />
        )}
      </Flex>
    </>
  );
}
