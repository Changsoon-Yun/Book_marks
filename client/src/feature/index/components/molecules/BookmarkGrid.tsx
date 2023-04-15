import BookmarkGridItem from '@/feature/index/components/elements/BookmarkGridItem';
import { Box, Grid } from '@chakra-ui/react';
import React from 'react';

export default function BookmarkGrid() {
  return (
    <>
      <Box>
        <Grid templateColumns='repeat(auto-fill ,minmax(200px, 1fr))' gap={10}>
          <BookmarkGridItem />
        </Grid>
      </Box>
    </>
  );
}
