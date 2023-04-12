import homepageLogo from '@/asset/images/logos/homepageLogo.png';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Link as ChakraLink,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
//import Link from 'next/link';
import { useRouter } from 'next/router';
import { DesktopNav } from '@/layout/components/molecules/DesktopNav';
import { MobileNav } from '@/layout/components/molecules/MobileNav';
import { useUser } from '@/feature/auth/hooks/useUser';
import { memo } from 'react';

const Header = () => {
  const { locale } = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation('header');
  const { user } = useUser();
  console.log(user);

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
          <Link href={'/'} locale={locale}>
            <ChakraLink as={'span'}>
              <Image src={homepageLogo} alt={'logo'} width={30} height={30} />
            </ChakraLink>
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          <Link href={'/auth/login'}>
            <Button fontSize={'sm'} fontWeight={400} variant={'ghost'}>
              {t('signin')}
            </Button>
          </Link>
          <Link href={'/auth/signin'}>
            <Button
              as={'div'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'blue.400'}
              _hover={{
                bg: 'blue.300',
              }}>
              {t('signup')}
            </Button>
          </Link>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default memo(Header);
