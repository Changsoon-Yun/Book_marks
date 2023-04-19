import { Bookmark, BookmarkItem } from '@/types/api/Bookmark';
import { Link } from '@chakra-ui/next-js';
import { Box, Button, Flex, GridItem, Heading, HStack, Icon, IconButton, Img, Text, theme } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { BsArrowUpRight, BsHeart, BsHeartFill } from 'react-icons/bs';
import faviconImage from '@/asset/images/logos/homepageLogo.png';
import { useGetColor } from '@/core/hooks/useGetColor';
import { AiOutlineSetting } from 'react-icons/ai';

interface Props extends Bookmark {
  openSettingHandler: (e: React.MouseEvent<HTMLOrSVGElement>, bookmark: Bookmark) => void;
}

export default function BookmarkGridItem(props: Props) {
  const { title, description, url, imageUrl, faviconUrl, openSettingHandler } = props;

  return (
    <GridItem gridTemplateColumns={'1fr 2fr 100px 25%'} position={'relative'}>
      <Box rounded={'lg'} overflow={'hidden'} bg={'white'} boxShadow={'lg'}>
        <Link href={url} target={'_blank'} textDecoration={'none'}>
          <Flex h={'120px'} p={4} justify={'space-between'}>
            <Img
              src={imageUrl}
              objectFit='cover'
              w={'100px'}
              h={'100px'}
              borderRadius={'full'}
              border={'1px solid rgba(0,0,0,0.1)'}
              alt={'Blog Image'}
            />
            <Icon as={AiOutlineSetting} p={2} w={10} h={10} onClick={(e) => openSettingHandler(e, props)} />
          </Flex>
          <Box p={4}>
            <Heading color={'black'} fontSize={'sm'} noOfLines={1}>
              {title}
            </Heading>
            <Text color={'gray.500'} noOfLines={2} h={'37px'} fontSize={'xs'}>
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
        </Link>
      </Box>
    </GridItem>
  );
}
