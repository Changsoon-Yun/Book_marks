import { useState } from 'react';
import { Box, Heading, Text, Img, Flex, Center, useColorModeValue, HStack, GridItem } from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';

export default function BookmarkGridItem() {
  const [liked, setLiked] = useState(false);

  return (
    <GridItem gridTemplateColumns={'1fr 2fr 100px 25%'}>
      <Box rounded={'sm'} overflow={'hidden'} bg='white' border={'1px'} borderColor='black' boxShadow={'md'}>
        <Box borderBottom={'1px'} borderColor='black'>
          <Img
            src={
              'https://images.unsplash.com/photo-1606228281437-dc226988dc3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            roundedTop={'sm'}
            objectFit='cover'
            h='full'
            w='full'
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box bg='black' display={'inline-block'} px={2} py={1} color='white' mb={2}>
            <Text fontSize={'xs'} fontWeight='medium'>
              React
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'md'} noOfLines={1}>
            React v18.0
          </Heading>
          <Text color={'gray.500'} noOfLines={2} fontSize={'sm'}>
            In this post, we will give an overview of what is new in React 18, and what it means for the future.
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
              View more
            </Text>
            <BsArrowUpRight />
          </Flex>
          <Flex
            p={4}
            alignItems='center'
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor='pointer'
            onClick={() => setLiked(!liked)}>
            {liked ? <BsHeartFill fill='red' fontSize={'24px'} /> : <BsHeart fontSize={'24px'} />}
          </Flex>
        </HStack>
      </Box>
    </GridItem>
  );
}
