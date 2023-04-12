import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { LoginProps } from '@/pages/auth/login';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useTranslation } from 'next-i18next';

export default function LoginTemplate(props: LoginProps) {
  const { onSubmit, pwWatch, setPwWatch, setUserName, setPassword } = props;
  const { t } = useTranslation('auth');

  return (
    <Flex minH={'100%'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading maxW={'380px'} w={'full'} textAlign={'center'} fontSize={'3xl'}>
            {t('login-heading1')}
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            {t('auth-message-1')} <Link color={'blue.400'}>{t('auth-message-2')}</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          as={'form'}
          onSubmit={onSubmit}>
          <Stack spacing={4}>
            <FormControl id='id'>
              <FormLabel>{t('label-id')}</FormLabel>
              <Input onChange={(e) => setUserName(e.target.value)} type='text' />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>{t('label-pw')}</FormLabel>
              <InputGroup>
                <Input pr='4.5rem' type={pwWatch ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
                <InputRightElement width='4.5rem'>
                  <IconButton
                    bgColor={'transparent'}
                    _hover={{ backgroundColor: 'transparent' }}
                    cursor={'pointer'}
                    h='1.75rem'
                    size='sm'
                    aria-label={'eye'}
                    icon={
                      pwWatch ? (
                        <AiOutlineEye style={{ height: '70%', width: '70%' }} />
                      ) : (
                        <AiOutlineEyeInvisible style={{ height: '70%', width: '70%' }} />
                      )
                    }
                    onClick={() => setPwWatch.toggle()}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>{t('checkbox-auto-login')}</Checkbox>
                <Link color={'blue.400'}>{t('link-forgot-password')}</Link>
              </Stack>
              <Button
                type={'submit'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                {t('login-button')}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
