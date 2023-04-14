import React from 'react';

import BookmarkGrid from '@/feature/index/components/molecules/BookmarkGrid';
import BookmarkAddForm from '@/feature/index/components/molecules/BookmarkAddForm';

export default function IndexTemplate() {
  return (
    <>
      <BookmarkAddForm />
      <BookmarkGrid />
    </>
  );
}
