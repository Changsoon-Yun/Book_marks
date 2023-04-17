import { useUser } from '@/feature/auth/hooks/useUser';
import { useGetBookmarks } from '@/feature/bookmark/hooks/useGetBookmarks';
import BookmarkGridItem from '@/feature/index/components/elements/BookmarkGridItem';
import { Box, Grid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

export default function BookmarkGrid({ userName }: { userName: string | string[] }) {
  const { data: bookmarks } = useGetBookmarks(userName);

  return (
    <>
      <Box>
        <Grid templateColumns='repeat(auto-fill ,minmax(200px, 1fr))' gap={10} py={10}>
          {bookmarks.map((bookmark) => (
            <BookmarkGridItem key={bookmark.id} {...bookmark} />
          ))}
        </Grid>
      </Box>
    </>
  );
}
