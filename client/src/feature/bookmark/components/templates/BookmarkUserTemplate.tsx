import BookmarkGrid from '@/feature/index/components/molecules/BookmarkGrid';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import SideNav from '@/feature/bookmark/components/molecules/SideNav';

export default function BookmarkUserTemplate() {
  const router = useRouter();
  const { userName } = router.query;
  if (!userName) {
    router.push('/');
  }

  return (
    <>
      {userName && (
        <>
          <Flex>
            <SideNav userName={userName} />
            <BookmarkGrid userName={userName} />
          </Flex>
        </>
      )}
    </>
  );
}
