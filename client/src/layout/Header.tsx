import homepageLogo from '@/asset/images/logos/hompageLogo.png';
import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Link as ChakraLink,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import Link from 'next/link';
//import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const { locale } = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation('header');

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
          <Button as={'div'} fontSize={'sm'} fontWeight={400} variant={'link'}>
            <Link href={'/auth/login'}>{t('signin')}</Link>
          </Button>

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
            <Link href={'/auth/signin'}>{t('signup')}</Link>
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const { t } = useTranslation('header');
  const { locale } = useRouter();
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <ChakraLink
                as={'span'}
                p={2}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                <Link href={navItem.href ?? '#'} locale={locale}>
                  {t(navItem.label)}
                </Link>
              </ChakraLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const { t } = useTranslation('header');
  const { locale } = useRouter();
  return (
    <Link href={href} locale={locale}>
      <ChakraLink
        as={'span'}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text transition={'all .3s ease'} _groupHover={{ color: 'blue.400' }} fontWeight={500}>
              {t(label)}
            </Text>
            {subLabel && <Text fontSize={'sm'}>{t(subLabel)}</Text>}
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </ChakraLink>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: { label: string; href?: Url; children: NavItem[] }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation('header');
  const { locale } = useRouter();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {t(label)}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} href={child.href} locale={locale}>
                <ChakraLink as={'span'} py={2}>
                  {t(child.label)}
                </ChakraLink>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href: Url;
}

const NAV_ITEMS: { label: string; href?: Url; children: NavItem[] }[] = [
  {
    label: 'menu-1',
    children: [
      {
        label: 'menu-1-label-1',
        subLabel: 'menu-1-sub-1',
        href: '/bookmark',
      },
      {
        label: 'menu-1-label-2',
        subLabel: 'menu-1-sub-2',
        href: '/bookmark/new',
      },
    ],
  },
];
