import BookmarkGridItem from '@/feature/bookmark/components/elements/BookmarkGridItem';
import { Box, Grid, theme } from '@chakra-ui/react';
import React from 'react';
import { Bookmark } from '@/types/api/Bookmark';

export default function BookmarkGrid({
  bookmarks,
  onOpen,
  setClickedBookmark,
  host,
}: {
  bookmarks: Bookmark[];
  onOpen: () => void;
  setClickedBookmark: any;
  host: boolean;
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
            <BookmarkGridItem key={bookmark.id} {...bookmark} openSettingHandler={openSettingHandler} host={host} />
          ))}
        </Grid>
      </Box>
    </>
  );
}
