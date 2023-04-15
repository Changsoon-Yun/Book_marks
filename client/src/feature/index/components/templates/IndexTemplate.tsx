import { UnKnownUserToken, useUser } from '@/feature/auth/hooks/useUser';
import { checkUrl } from '@/feature/index/hooks/useBookmark';
import { CheckBookmarkReturn } from '@/feature/index/interface/CreateBookmarkProps';
import { bookmarkAPI } from '@/lib/async/constants';
import { useDisclosure } from '@chakra-ui/react';
import { FocusableElement } from '@chakra-ui/utils';
import React, { RefObject, useRef, useState } from 'react';

import BookmarkGrid from '@/feature/index/components/molecules/BookmarkGrid';
import BookmarkAddForm from '@/feature/index/components/molecules/BookmarkAddForm';
import { useMutation, useQuery } from 'react-query';

export interface UrlData {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
  faviconUrl: string;
}
export default function IndexTemplate() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [checkedData, setCheckedData] = useState<CheckBookmarkReturn | undefined>(undefined);
  const initialRef = useRef(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const { user } = useUser();

  const checkHandle = async () => {
    if (!urlRef.current) return;
    if (!user) return;
    setIsLoading(() => true);
    const data = await checkUrl(urlRef.current.value);
    setCheckedData(data);
    setIsLoading(() => false);
    onOpen();
    return data;
  };

  return (
    <>
      <BookmarkAddForm
        urlRef={urlRef}
        user={user}
        checkHandle={checkHandle}
        initialRef={initialRef}
        isOpen={isOpen}
        isLoading={isLoading}
        onClose={onClose}
        checkedData={checkedData}
      />
      <BookmarkGrid />
    </>
  );
}
