import React from 'react';
import { useIsFetching, useIsMutating } from 'react-query';
import { Loading as LoadingIcon } from '@nextui-org/react';

const Loading = () => {
  // will use React Query `useIsFetching` to determine whether or not to display
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const display = isMutating || isFetching ? 'inherit' : 'hidden';

  return (
    <div
      className={`absolute top-0 left-0 w-screen h-screen bg-gray-300 flex justify-center items-center ${display} z-1000`}>
      <LoadingIcon />
    </div>
  );
};

export default Loading;
