import { NAV_ITEMS } from '@/layout/constant/NAV_ITEMS';
import { NavItem } from '@/types/NavItem';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Collapse, Flex, Icon, Stack, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Url } from 'next/dist/shared/lib/router/router';
import { Link } from '@chakra-ui/next-js';
import { useRouter } from 'next/router';

export const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export const MobileNavItem = ({ label, children, href }: { label: string; href?: Url; children?: NavItem[] }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation('common');
  const { locale } = useRouter();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? ''}
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
              <Link key={child.label} href={child.href} locale={locale} as={'span'} py={2}>
                {t(child.label)}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
