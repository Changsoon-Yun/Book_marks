import BookmarkGrid from '@/feature/index/components/molecules/BookmarkGrid';
import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import SideNav from '@/feature/bookmark/components/molecules/SideNav';

export default function BookmarkUserTemplate({ slugName: userName }: { slugName: string | string[] | undefined }) {
  return (
    <>
      {userName && (
        <>
          <Flex h={'full'}>
            <SideNav userName={userName} />
            <BookmarkGrid userName={userName} />
          </Flex>
        </>
      )}
    </>
  );
}
