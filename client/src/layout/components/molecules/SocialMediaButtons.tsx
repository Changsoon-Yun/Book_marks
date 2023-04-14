import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';
import { Box, Button, Center, Flex, IconButton, Stack, Text, theme, useColorModeValue } from '@chakra-ui/react';
import { useGetColor } from '@/core/hooks/useGetColor';

export default function SocialMediaButtons() {
  const { color: textColor } = useGetColor(500);
  return (
    <>
      <Text p={'20px 5px 10px 5px'} fontSize={'sm'} fontFamily={''} color={textColor} textAlign={'center'}>
        - SIGN UP WITH -
      </Text>
      <Flex gap={'4'} justify={'space-between'} align={'center'} py={4}>
        {/* Facebook */}
        <IconButton colorScheme={'facebook'} aria-label={'facebook'} icon={<FaFacebook />} />

        {/* Google */}
        <IconButton colorScheme={'gray'} aria-label={'google'} icon={<FcGoogle />} />

        {/* LinkedIn */}
        <IconButton colorScheme={'messenger'} aria-label={'linkedin'} icon={<SiLinkedin />} />

        {/* Messenger */}
        <IconButton colorScheme={'messenger'} aria-label={'facebookMessenger'} icon={<SiMessenger />} />
      </Flex>
    </>
  );
}
