import { useUser } from '@/feature/auth/hooks/useUser';
import { bookmarkAPI } from '@/lib/async/apiRoutes';
import { Bookmark } from '@/types/api/Bookmark';
import { useQuery } from 'react-query';
import { axiosInstance } from '@/lib/async/axiosInstance';
import { useGetFolders } from '@/feature/bookmark/hooks/useGetFolders';
import { useState } from 'react';
import { Folder } from '@/types/api/Folder';

async function getBookmarks(userName: string | string[]): Promise<Bookmark[]> {
  const { data } = await axiosInstance.get(`/bookmark/${userName}`);
  return data;
}

export function useGetBookmarks(userName: string | string[]) {
  const { data: folders } = useGetFolders(userName);
  const [clickedFolder, setClickedFolder] = useState<Folder>(folders[0]);
  const { data: bookmarks = [] } = useQuery<Bookmark[] | undefined>(
    [bookmarkAPI.getBookmarks(userName)],
    () => getBookmarks(userName),
    {
      select: (bookmarks) => {
        if (clickedFolder && bookmarks) {
          return bookmarks.filter((bookmark) => bookmark.folderId === clickedFolder.id ?? '');
        }
      },
      staleTime: 100000,
      cacheTime: 150000,
    }
  );

  return { bookmarks, folders, clickedFolder, setClickedFolder };
}
