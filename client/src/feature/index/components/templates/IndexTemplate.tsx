import { UnKnownUserToken, useUser } from '@/feature/auth/hooks/useUser';
import useCreateBookmark, { checkUrl } from '@/feature/index/hooks/useCreateBookmark';
import { CreateBookmarkData } from '@/feature/index/interface/CreateBookmarkData';
import { CheckBookmarkReturn } from '@/feature/index/interface/CreateBookmarkProps';
import { axiosInstance } from '@/lib/async/axiosInstance';
import { useDisclosure } from '@chakra-ui/react';

import * as buffer from 'buffer';
import React, { useRef, useState } from 'react';

import BookmarkGrid from '@/feature/index/components/molecules/BookmarkGrid';
import BookmarkAddForm from '@/feature/index/components/molecules/BookmarkAddForm';
import { useMutation } from 'react-query';

export default function IndexTemplate() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [checkedData, setCheckedData] = useState<CheckBookmarkReturn>({
    url: undefined,
    title: undefined,
    description: undefined,
    imageUrl: undefined,
    faviconUrl: undefined,
    type: undefined,
    alt: undefined,
    width: undefined,
    height: undefined,
    locale: undefined,
    site_name: undefined,
  });
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
    const bookmarkData: CreateBookmarkData = {
      url: checkedData.url,
      title: checkedData.title,
      description: checkedData.description,
      imageUrl: checkedData.imageUrl,
      faviconUrl: checkedData.faviconUrl,
    };
    create(bookmarkData);
    onClose();
  };

  return (
    <>
      <BookmarkAddForm
        urlRef={urlRef}
        user={user}
        checkHandler={checkHandler}
        initialRef={initialRef}
        isOpen={isOpen}
        isLoading={isLoading}
        onClose={onClose}
        checkedData={checkedData}
        createHandler={createHandler}
      />
      <BookmarkGrid />
    </>
  );
}
