import InputForm from '@/feature/auth/components/molecules/InputForm';
import { signupProps } from '@/pages/auth/signup';
import { Link } from '@chakra-ui/next-js';
import { Box, Button, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function SignupTemplate(props: signupProps) {
  const {
    onSubmit,
    emailRef,
    userNameRef,
    pwRef,
    pwWatch,
    pwConfirmWatch,
    setPwWatch,
    setPwConfirmWatch,
    pwConfirmRef,
  } = props;
  const { t } = useTranslation('common');
  const { locale } = useRouter();

  return (
    <Flex minH={'100%'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading maxW={'380px'} w={'full'} textAlign={'center'} fontSize={'3xl'}>
            {t('auth.signup.heading')}
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
              isRequired={true}
            />
            <InputForm
              id={'email'}
              label={t('auth.common.label-email')}
              inputRef={emailRef}
              inputType={'text'}
              isRequired={true}
            />
            <InputForm
              id={'pw'}
              label={t('auth.common.label-pw')}
              inputRef={pwRef}
              inputType={pwWatch}
              isRequired={true}
              setInputType={setPwWatch}
            />
            <InputForm
              id={'confirm-password'}
              label={t('auth.signup.label-confirm-pw')}
              inputRef={pwConfirmRef}
              inputType={pwConfirmWatch}
              isRequired={true}
              setInputType={setPwConfirmWatch}
            />
            <Stack spacing={10}>
              <Button
                type={'submit'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                {t('auth.common.signup-button')}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
