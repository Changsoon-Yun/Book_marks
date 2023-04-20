import { folderAPI } from '@/lib/async/apiRoutes';
import { useQuery } from 'react-query';
import { axiosInstance } from '@/lib/async/axiosInstance';
import { Folder } from '@/types/api/Folder';

async function getFolders(userName: string | string[]): Promise<Folder[]> {
  const { data } = await axiosInstance.get(folderAPI.getFolders(userName));
  return data;
}

export function useGetFolders(userName: string | string[]) {
  const { data = [] } = useQuery<Folder[]>([folderAPI.getFolders(userName)], () => getFolders(userName));
  return { data };
}
