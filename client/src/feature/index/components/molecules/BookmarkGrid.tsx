import { useUser } from '@/feature/auth/hooks/useUser';
import { useGetBookmarks } from '@/feature/bookmark/hooks/useGetBookmarks';
import BookmarkGridItem from '@/feature/index/components/elements/BookmarkGridItem';
import { Box, Button, Grid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { axiosInstance } from '@/lib/async/axiosInstance';
import { getJWTHeader } from '@/lib/async/queryClient';

export default function BookmarkGrid({ userName }: { userName: string | string[] }) {
  const { data: bookmarks } = useGetBookmarks(userName);

  //TODO:고도화
  const createFolderHandler = async () => {
    console.log(bookmarks);
    const data = {
      parentId: 2,
      name: 'test-child',
    };
    const res = await axiosInstance.post('/folder/create', data, {
      headers: getJWTHeader(),
    });
  };
  return (
    <>
      <Box>
        <Button onClick={createFolderHandler}>create folder</Button>
        <Grid templateColumns='repeat(auto-fill ,minmax(200px, 1fr))' gap={10} py={10}>
          {bookmarks.map((bookmark) => (
            <BookmarkGridItem key={bookmark.id} {...bookmark} />
          ))}
        </Grid>
      </Box>
    </>
  );
}
