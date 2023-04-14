import { Link } from '@chakra-ui/next-js';
import { Button, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export default function AuthButtons() {
  const { t } = useTranslation('common');
  return (
    <>
      <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
        <Link href={'/auth/login'}>
          <Button as={'div'} fontSize={'sm'} fontWeight={400} variant={'ghost'}>
            {t('signup')}
          </Button>
        </Link>

        <Link href={'/auth/signup'}>
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
            {t('signup')}
          </Button>
        </Link>
      </Stack>
    </>
  );
}
