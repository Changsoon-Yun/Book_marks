import { Box, Button, Flex, Input, useDisclosure } from '@chakra-ui/react';
import BookmarkAddModal from '@/feature/index/components/molecules/BookmarkAddModal';
import React, { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { checkUrl } from '@/feature/index/hooks/useBookmark';

export default function BookmarkAddForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation('common');

  const checkHandle = async () => {
    if (urlRef.current) {
      const res = await checkUrl(urlRef.current.value);
      console.log(res);

      onOpen();
    }
  };
  return (
    <>
      <Flex py={10}>
        <Box flex={1} />
        <Input ref={urlRef} maxW={'md'} placeholder={'https://example.com'} borderRadius={'6px 0 0 6px'} />
        <Button onClick={checkHandle} borderRadius={' 0 6px 6px 0 '}>
          {t('bookmark.add.add-button')}
        </Button>
        <BookmarkAddModal initialRef={initialRef} isOpen={isOpen} onClose={onClose} isCentered={true} />
      </Flex>
    </>
  );
}
