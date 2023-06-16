import { useGetColor } from '@/core/hooks/useGetColor';
import InputForm from '@/feature/auth/components/molecules/InputForm';
import { FindProps } from '@/types/props/AuthProps';
import { Link } from '@chakra-ui/next-js';
import { Box, Button, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function FindPwTemplate(props: FindProps) {
  const { emailRef, onSubmit } = props;
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const { color: textColor } = useGetColor(500);

  return (
    <Flex minH={'100%'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading maxW={'380px'} w={'full'} textAlign={'center'} fontSize={'3xl'}>
            {t('auth.find-id.heading')}
          </Heading>
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
              id={'email'}
              label={t('auth.common.label-email')}
              inputRef={emailRef}
              inputType={'text'}
              isRequired={false}
            />

            <Stack spacing={10}>
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
          <Text p={'20px 5px 10px 5px'} color={textColor} fontSize={'sm'} textAlign={'center'}>
            {t('auth.login.know-account')}
            <Link href={'/auth/signup'} ml={2} color={'blue.400'} locale={locale}>
              {t('auth.login.link-forgot-password')}
            </Link>
          </Text>
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
