import { NAV_ITEMS, NavItem } from '@/constant/NAV_ITEMS';

import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const { t } = useTranslation('common');
  const { locale, push } = useRouter();
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Button
                onClick={() => push(navItem.href ?? '')}
                p={2}
                fontSize={'sm'}
                fontWeight={500}
                variant={'unstyled'}
                cursor={'pointer'}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {t(navItem.label)}
              </Button>
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

export const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const { t } = useTranslation('common');
  const { locale, push } = useRouter();
  return (
    <Box
      onClick={() => push(href)}
      role={'group'}
      as={'button'}
      textAlign={'left'}
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
    </Box>
  );
};
