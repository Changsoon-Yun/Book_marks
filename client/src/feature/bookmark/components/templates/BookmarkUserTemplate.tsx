import BookmarkGrid from '@/feature/bookmark/components/molecules/BookmarkGrid';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import SideNav from '@/feature/bookmark/components/molecules/SideNav';
import { useGetFolders } from '@/feature/bookmark/hooks/useGetFolders';
import { useGetBookmarks } from '@/feature/bookmark/hooks/useGetBookmarks';
import { Folder } from '@/types/api/Folder';
import BookmarkSettingModal from '@/feature/bookmark/components/molecules/BookmarkSettingModal';
import { Bookmark } from '@/types/api/Bookmark';
import { User } from '@/types/api/User';
import useUpdateBookmark from '@/feature/bookmark/hooks/useUpdateBookmark';
import useDeleteBookmark from '@/feature/bookmark/hooks/useDeleteBookmark';

export default function BookmarkUserTemplate({ slugName: userName }: { slugName: string | string[] }) {
  const { bookmarks, folders, clickedFolder, setClickedFolder } = useGetBookmarks(userName);
  const updateBookmark = useUpdateBookmark();
  const deleteBookmark = useDeleteBookmark();
  const [clickedBookmark, setClickedBookmark] = useState<Bookmark>();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);

  const urlRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  // 최초 렌더링시 루트폴더 열림
  useEffect(() => {
    setClickedFolder(folders[0]);
  }, [folders]);

  const createFolderHandler = async () => {
    const data = {
      parentId: 2,
      name: 'test-child',
    };
    // const res = await axiosInstance.post('/folder/create', data, {
    //   headers: getJWTHeader(),
    // });
  };

  const editBookmarkHandler = async () => {
    const url = urlRef.current?.value;
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;

    if (url && title && description && clickedBookmark) {
      await updateBookmark({ ...clickedBookmark, url, title, description });
    }

    return onClose();
  };

  const deleteBookmarkHandler = async () => {
    if (clickedBookmark) {
      await deleteBookmark(clickedBookmark);
    }

    return onClose();
  };

  return (
    <>
      <Flex h={'full'}>
        <SideNav
          userName={userName}
          folders={folders}
          clickedFolder={clickedFolder}
          setClickedFolder={setClickedFolder}
          createFolderHandler={createFolderHandler}
        />
        <BookmarkGrid bookmarks={bookmarks} onOpen={onOpen} setClickedBookmark={setClickedBookmark} />
        {clickedBookmark && (
          <BookmarkSettingModal
            isOpen={isOpen}
            onClose={onClose}
            isCentered={true}
            clickedBookmark={clickedBookmark}
            isLoading={isLoading}
            urlRef={urlRef}
            titleRef={titleRef}
            descriptionRef={descriptionRef}
            editBookmarkHandler={editBookmarkHandler}
            deleteBookmarkHandler={deleteBookmarkHandler}
          />
        )}
      </Flex>
    </>
  );
}
