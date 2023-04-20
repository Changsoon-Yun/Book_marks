import { useGetColor } from '@/core/hooks/useGetColor';
import InputForm from '@/feature/auth/components/molecules/InputForm';
import { AuthProps } from '@/types/props/AuthProps';
import SocialMediaButtons from '@/layout/components/molecules/SocialMediaButtons';
import { Link } from '@chakra-ui/next-js';
import { Box, Button, Checkbox, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function LoginTemplate(props: AuthProps) {
  const { onSubmit, userNameRef, pwRef, pwWatch, setPwWatch } = props;
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const { color: textColor } = useGetColor(500);

  return (
    <Flex minH={'100%'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading maxW={'380px'} w={'full'} textAlign={'center'} fontSize={'3xl'}>
            {t('auth.login.heading')}
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            {t('auth.common.message-1')}{' '}
            <Link href={'/'} color={'blue.400'} locale={locale}>
              {t('auth.common.message-2')}
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
            <InputForm
              id={'id'}
              label={t('auth.common.label-id')}
              inputRef={userNameRef}
              inputType={'text'}
              isRequired={false}
            />
            <InputForm
              id={'pw'}
              label={t('auth.common.label-pw')}
              inputRef={pwRef}
              inputType={pwWatch}
              isRequired={false}
              setInputType={setPwWatch}
            />
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>{t('auth.login.checkbox-auto-login')}</Checkbox>
                <Link href={'/find/account'} color={'blue.400'} locale={locale}>
                  {t('auth.login.link-forgot-password')}
                </Link>
              </Stack>
              <Button
                type={'submit'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                {t('auth.common.login-button')}
              </Button>
            </Stack>
          </Stack>
          <SocialMediaButtons />
          <Text p={'20px 5px 10px 5px'} color={textColor} fontSize={'sm'} textAlign={'center'}>
            {t('auth.login.dont-have-account')}
            <Link href={'/auth/signup'} ml={2} fontWeight={'bold'} locale={locale}>
              {t('auth.common.signup-button')}
            </Link>
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
}
