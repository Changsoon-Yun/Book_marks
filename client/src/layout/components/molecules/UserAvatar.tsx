import { useAuth } from '@/feature/auth/hooks/useAuth';
import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function UserAvatar() {
  const { user, logout } = useAuth();
  const { t } = useTranslation('common');
  const router = useRouter();
  const goMypage = () => {
    if (user) {
      router.push(`/bookmark/${user.userName}`);
    }
  };
  return (
    <>
      <Flex alignItems={'center'}>
        <Menu>
          <MenuButton as={Button} rounded={'full'} variant={'outline'} cursor={'pointer'} minW={0}>
            <Text>{user?.userName}</Text>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={goMypage}>Mypage</MenuItem>
            <MenuItem onClick={logout}>{t('header.common.logout')}</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
}
