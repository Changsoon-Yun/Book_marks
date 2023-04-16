import { BookmarkItem } from '@/types/api/Bookmark';
import { Link } from '@chakra-ui/next-js';
import { Box, Flex, GridItem, Heading, HStack, Img, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { BsArrowUpRight, BsHeart, BsHeartFill } from 'react-icons/bs';
import faviconImage from '@/asset/images/logos/homepageLogo.png';

export default function BookmarkGridItem(props: BookmarkItem) {
  const { title, description, url, imageUrl, faviconUrl } = props;
  return (
    <GridItem gridTemplateColumns={'1fr 2fr 100px 25%'}>
      <Link href={url ?? ''} target={'_blank'}>
        <Box rounded={'sm'} overflow={'hidden'} bg='white' border={'1px'} borderColor='black' boxShadow={'md'}>
          <Box borderBottom={'1px'} borderColor='black'>
            <Img src={imageUrl} roundedTop={'sm'} objectFit='cover' h='full' w='full' alt={'Blog Image'} />
          </Box>
          <Box p={4}>
            <Box bg='black' display={'inline-block'} px={2} py={1} color='white' mb={2}>
              <Text fontSize={'xs'} fontWeight='medium'>
                React
              </Text>
            </Box>
            <Heading color={'black'} fontSize={'md'} noOfLines={1}>
              {title}
            </Heading>
            <Text color={'gray.500'} noOfLines={2} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <HStack borderTop={'1px'} color='black'>
            <Flex
              p={4}
              alignItems='center'
              justifyContent={'space-between'}
              roundedBottom={'sm'}
              cursor={'pointer'}
              w='full'>
              <Text fontSize={'md'} fontWeight={'semi-bold'}>
                Visit
              </Text>
              <BsArrowUpRight />
            </Flex>
            <Flex
              p={4}
              alignItems='center'
              justifyContent={'space-between'}
              roundedBottom={'sm'}
              borderLeft={'1px'}
              cursor='pointer'>
              <Image src={faviconUrl ?? faviconImage} alt={'favicon'} width={32} height={32} />
            </Flex>
          </HStack>
        </Box>
      </Link>
    </GridItem>
  );
}
