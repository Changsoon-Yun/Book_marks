import { axiosInstance } from '@/lib/async/axiosInstance';
import { CheckBookmarkReturn } from '@/feature/index/interface/CreateBookmarkProps';
import { bookmarkAPI } from '@/lib/async/constants';
import { getJWTHeader } from '@/lib/async/queryClient';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useQuery } from 'react-query';

export async function checkUrl(url?: string): Promise<CheckBookmarkReturn | undefined> {
  try {
    const { data }: { data: CheckBookmarkReturn } = await axiosInstance.post(
      bookmarkAPI.check(),
      { url },
      {
        headers: getJWTHeader(),
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}
