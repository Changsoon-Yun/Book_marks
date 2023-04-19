import { useUser } from '@/feature/auth/hooks/useUser';
import { useGetBookmarks } from '@/feature/bookmark/hooks/useGetBookmarks';
import BookmarkGridItem from '@/feature/bookmark/components/elements/BookmarkGridItem';
import { Box, Button, Grid, theme, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { axiosInstance } from '@/lib/async/axiosInstance';
import { getJWTHeader } from '@/lib/async/queryClient';
import { Bookmark } from '@/types/api/Bookmark';
import BookmarkSettingModal from '@/feature/bookmark/components/molecules/BookmarkSettingModal';

export default function BookmarkGrid({
  bookmarks,
  onOpen,
  setClickedBookmark,
}: {
  bookmarks: Bookmark[];
  onOpen: () => void;
  setClickedBookmark: any;
}) {
  const openSettingHandler = (e: React.MouseEvent<HTMLOrSVGElement>, bookmark: Bookmark) => {
    e.preventDefault();
    setClickedBookmark(bookmark);
    onOpen();
  };
  return (
    <>
      <Box minH={'full'} h={'calc(100vh - 117px)'} w={'full'} overflow={'auto'} bg={theme.colors.gray['50']} px={5}>
        <Grid templateColumns='repeat(auto-fill ,minmax(200px, 1fr))' gap={10} py={10}>
          {bookmarks.map((bookmark) => (
            <BookmarkGridItem key={bookmark.id} {...bookmark} openSettingHandler={openSettingHandler} />
          ))}
        </Grid>
      </Box>
    </>
  );
}
