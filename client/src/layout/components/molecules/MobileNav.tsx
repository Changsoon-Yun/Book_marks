import { NAV_ITEMS } from '@/constant/NAV_ITEMS';
import { NavItem } from '@/constant/NAV_ITEMS';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import { Button, Collapse, Flex, Icon, Stack, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Url } from 'next/dist/shared/lib/router/router';
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
  const { locale, push } = useRouter();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={'button'}
        onClick={() => push(href ?? '')}
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
              <Button key={child.label} cursor={'pointer'} py={2} onClick={() => push(child.href)} variant={'unstyled'}>
                {t(child.label)}
              </Button>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
