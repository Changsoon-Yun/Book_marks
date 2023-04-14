import { Link } from '@chakra-ui/next-js';
import { Button, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function AuthButtons() {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  return (
    <>
      <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
        <Link href={'/auth/login'} locale={locale}>
          <Button as={'div'} fontSize={'sm'} fontWeight={400} variant={'ghost'}>
            {t('header.common.login')}
          </Button>
        </Link>

        <Link href={'/auth/signup'} locale={locale}>
          <Button
            as={'div'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'blue.400'}
            _hover={{
              bg: 'blue.300',
            }}>
            {t('header.common.signup')}
          </Button>
        </Link>
      </Stack>
    </>
  );
}
