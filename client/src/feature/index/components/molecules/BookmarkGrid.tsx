import { useUser } from '@/feature/auth/hooks/useUser';
import { useGetBookmarks } from '@/feature/bookmark/hooks/useGetBookmarks';
import BookmarkGridItem from '@/feature/index/components/elements/BookmarkGridItem';
import { Box, Button, Grid, theme } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { axiosInstance } from '@/lib/async/axiosInstance';
import { getJWTHeader } from '@/lib/async/queryClient';

export default function BookmarkGrid({ userName }: { userName: string | string[] }) {
  const { data: bookmarks } = useGetBookmarks(userName);

  return (
    <>
      <Box minH={'full'} h={'calc(100vh - 117px)'} overflow={'auto'} bg={theme.colors.gray['50']} px={5}>
        <Grid templateColumns='repeat(auto-fill ,minmax(200px, 1fr))' gap={10} py={10}>
          {bookmarks.map((bookmark) => (
            <BookmarkGridItem key={bookmark.id} {...bookmark} />
          ))}
        </Grid>
      </Box>
    </>
  );
}
