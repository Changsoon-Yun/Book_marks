import { Bookmark } from '@/types/api/Bookmark';
import { Link } from '@chakra-ui/next-js';
import { Box, Flex, GridItem, Heading, HStack, Icon, Img, Text, theme } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import faviconImage from '../../../../../public/asset/images/logos/homepageLogo.png';
import { AiOutlineSetting } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { grabbedTargetAtom } from '@/lib/recoil/atom';

interface Props extends Bookmark {
  openSettingHandler: (e: React.MouseEvent<HTMLOrSVGElement>, bookmark: Bookmark) => void;
  host: boolean;
}

export default function BookmarkGridItem(props: Props) {
  const { host, title, description, url, imageUrl, faviconUrl, openSettingHandler } = props;
  const [grabbedTarget, setGrabbedTarget] = useRecoilState(grabbedTargetAtom);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, item: Bookmark) => {
    if (!host) return;
    const target = e.currentTarget as HTMLElement;
    target.classList.add('grabbing');
    setGrabbedTarget({
      grabbedTarget: item,
    });
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLElement;
    target.classList.remove('grabbing');
  };

  return (
    <GridItem gridTemplateColumns={'1fr 2fr 100px 25%'} position={'relative'} cursor={'pointer'}>
      <Box
        rounded={'lg'}
        overflow={'hidden'}
        bg={theme.colors.white}
        boxShadow={'lg'}
        onDragStart={(e) => onDragStart(e, props)}
        onDragEnd={onDragEnd}
        draggable={host}>
        <Link href={url} target={'_blank'} textDecoration={'none'} draggable={false}>
          <Flex h={'120px'} p={4} justify={'space-between'}>
            <Img
              draggable={false}
              src={imageUrl}
              objectFit='cover'
              w={'100px'}
              h={'100px'}
              borderRadius={'full'}
              border={'1px solid rgba(0,0,0,0.1)'}
              alt={'Blog Image'}
            />
            {host && <Icon as={AiOutlineSetting} p={2} w={10} h={10} onClick={(e) => openSettingHandler(e, props)} />}
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
              <Image draggable={false} src={faviconUrl ?? faviconImage} alt={'favicon'} width={32} height={32} />
            </Flex>
          </HStack>
        </Link>
      </Box>
    </GridItem>
  );
}
