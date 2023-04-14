import InputForm from '@/feature/auth/components/molecules/InputForm';
import { AuthProps } from '@/feature/auth/interface/AuthProps';
import SocialMediaButtons from '@/layout/components/molecules/SocialMediaButtons';
import { Box, Button, Checkbox, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { useTranslation } from 'next-i18next';
import { useGetColor } from '@/core/hooks/useGetColor';

export default function LoginTemplate(props: AuthProps) {
  const { onSubmit, userNameRef, pwRef, pwWatch, setPwWatch } = props;
  const { t } = useTranslation('auth');
  const { color: textColor } = useGetColor(500);

  return (
    <Flex minH={'100%'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading maxW={'380px'} w={'full'} textAlign={'center'} fontSize={'3xl'}>
            {t('login-heading1')}
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            {t('auth-message-1')}{' '}
            <Link href={'/'} color={'blue.400'}>
              {t('auth-message-2')}
            </Link>
            ✌️
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
            <InputForm id={'id'} label={t('label-id')} inputRef={userNameRef} inputType={'text'} isRequired={false} />
            <InputForm
              id={'password'}
              label={t('label-pw')}
              inputRef={pwRef}
              inputType={pwWatch}
              isRequired={false}
              setInputType={setPwWatch}
            />
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>{t('checkbox-auto-login')}</Checkbox>
                <Link href={'/find/account'} color={'blue.400'}>
                  {t('link-forgot-password')}
                </Link>
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
          <SocialMediaButtons />
          <Text p={'20px 5px 10px 5px'} color={textColor} fontSize={'sm'} textAlign={'center'}>
            {t('dont-have-account')}
            <Link href={'/auth/signup'} ml={2} fontWeight={'bold'}>
              {t('signup-button')}
            </Link>
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
}
