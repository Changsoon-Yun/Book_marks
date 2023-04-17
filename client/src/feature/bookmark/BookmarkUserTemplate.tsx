import BookmarkAddForm from '@/feature/index/components/molecules/BookmarkAddForm';
import BookmarkGrid from '@/feature/index/components/molecules/BookmarkGrid';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function BookmarkUserTemplate() {
  const router = useRouter();
  const { userName } = router.query;
  if (!userName) {
    router.push('/');
  }

  return <>{userName && <BookmarkGrid userName={userName} />}</>;
}