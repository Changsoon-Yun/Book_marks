import { useGetColor } from '@/core/hooks/useGetColor';
import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={'40px'}
      h={'40px'}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target={'_blank'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  const { locale, locales, pathname, asPath, push } = useRouter();
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const { color: footerBg } = useGetColor('white');
  const { color: footerText } = useGetColor(700);

  const languageHandler = (language: string) => {
    push(asPath, undefined, { locale: language });
  };
  return (
    <Box bg={footerBg} color={footerText}>
      <Container
        as={Stack}
        maxW={'8xl'}
        py={2}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text display={{ base: 'none', md: 'block' }}>help me...</Text>
        <Stack direction={'row'} spacing={4}>
          <SocialButton label={'github'} href={'https://github.com/Changsoon-Yun/Book_marks'}>
            <FaGithub
              fill={useColorModeValue('whiteAlpha.100', 'blackAlpha.100')}
              style={{ width: '18px', height: '18px' }}
            />
          </SocialButton>
          <IconButton
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            icon={<SwitchIcon />}
            borderRadius={'full'}
            fontSize={'lg'}
            color={'current'}
            onClick={toggleColorMode}
            aria-label={`Switch to ${text} mode`}
            size={'md'}
          />
          <Menu>
            <MenuButton as={Button} rounded={'full'} cursor={'pointer'} minW={0}>
              <Flex align={'center'} fontSize={'12px'}>
                <Icon as={AiOutlineGlobal} w={'20px'} h={'20px'} mr={'5px'} /> {locale?.toUpperCase()}
              </Flex>
            </MenuButton>
            <MenuList>
              {locales?.map((language) => (
                <MenuItem key={language} onClick={() => languageHandler(language)}>
                  {language.toUpperCase()}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Stack>
      </Container>
    </Box>
  );
}
