'use client';

import homepageLogo from '../../../../public/asset/images/logos/homepageLogo.png';
import { useAuth } from '@/feature/auth/hooks/useAuth';
import AuthButtons from '@/layout/components/molecules/AuthButtons';
import { DesktopNav } from '@/layout/components/molecules/DesktopNav';
import { MobileNav } from '@/layout/components/molecules/MobileNav';
import UserAvatar from '@/layout/components/molecules/UserAvatar';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import { Box, Button, Collapse, Flex, IconButton, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { memo, useEffect } from 'react';
import BookmarkAddForm from '@/layout/components/molecules/BookmarkAddForm';

const Header = () => {
  const { locale, push } = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const { user } = useAuth();

  return (
    <Box borderBottom={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.900')}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        maxW={'8xl'}
        m={'auto'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}>
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Button onClick={() => push('/')} variant={'unstyled'} cursor={'pointer'}>
            <Image src={homepageLogo} alt={'logo'} width={30} height={30} />
          </Button>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <BookmarkAddForm />
        <Box ml={10}>{user ? <UserAvatar /> : <AuthButtons />}</Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default memo(Header);
