import { Button, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function AuthButtons() {
  const { t } = useTranslation('common');
  const { locale, push } = useRouter();
  return (
    <>
      <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
        <Button
          as={'div'}
          fontSize={'sm'}
          fontWeight={400}
          variant={'ghost'}
          cursor={'pointer'}
          onClick={() => push('/auth/login')}>
          {t('header.common.login')}
        </Button>

        <Button
          as={'div'}
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          cursor={'pointer'}
          bg={'blue.400'}
          _hover={{
            bg: 'blue.300',
          }}
          onClick={() => push('/auth/signup')}>
          {t('header.common.signup')}
        </Button>
      </Stack>
    </>
  );
}
