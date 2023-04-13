import InputForm from '@/feature/auth/components/molecules/InputForm';
import { SigninProps } from '@/pages/auth/signin';
import { Box, Button, Checkbox, Flex, Heading, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export default function SigninTemplate(props: SigninProps) {
  const { onSubmit, userNameRef, pwRef, pwWatch, pwConfirmWatch, setPwWatch, setPwConfirmWatch, pwConfirmRef } = props;
  const { t } = useTranslation('auth');

  return (
    <Flex minH={'100%'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading maxW={'380px'} w={'full'} textAlign={'center'} fontSize={'3xl'}>
            {t('signin-heading1')}
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
            <InputForm id={'id'} label={t('label-id')} inputRef={userNameRef} inputType={'text'} isRequired={true} />
            <InputForm
              id={'password'}
              label={t('label-pw')}
              inputRef={pwRef}
              inputType={pwWatch}
              isRequired={true}
              setInputType={setPwWatch}
            />
            <InputForm
              id={'confirm-password'}
              label={t('label-confirm-pw')}
              inputRef={pwConfirmRef}
              inputType={pwConfirmWatch}
              isRequired={true}
              setInputType={setPwConfirmWatch}
            />
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
                {t('signup-button')}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
