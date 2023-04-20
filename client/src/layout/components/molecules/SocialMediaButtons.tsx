import { useGetColor } from '@/core/hooks/useGetColor';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiLinkedin, SiMessenger } from 'react-icons/si';

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
