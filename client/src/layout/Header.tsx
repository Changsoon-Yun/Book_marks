import styled from '@emotion/styled';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flex } from '@chakra-ui/layout';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface NavProps {
  link: string;
  name: string;
  pathname: string;
}

export default function Header() {
  const router = useRouter();
  const pages = [
    { href: '/bookmark', name: 'Bookmark' },
    { href: '/bookmark/create', name: 'Create a Bookmark' },
    { href: '/auth/login', name: 'LOGIN' },
    { href: '/auth/signin', name: 'SIGNIN' },
  ];

  const pathname = usePathname();
  return (
    <header>
      <nav>
        <Flex as={'ul'} sx={{ listStyle: 'none' }} justify={'space-between'} align={'center'} p={'10px'}>
          <li>
            <Image
              src={'https://fastly.picsum.photos/id/787/250/250.jpg?hmac=bhf2skVuDZITQk1NTOpthHGQa-dOHmVq8h2zy_P9W5c'}
              alt={'image'}
              width={40}
              height={40}
              style={{ borderRadius: '50%', cursor: 'pointer' }}
              onClick={() => router.push('/')}
            />
          </li>
          {pages.map(({ href, name }) => (
            <NavItems key={href} pathname={pathname} link={href} name={name} />
          ))}
        </Flex>
      </nav>
    </header>
  );
}

const NavItems = ({ link, name, pathname }: NavProps) => {
  return (
    <StNavLinks link={link} pathname={pathname}>
      <Link href={link}>{name}</Link>
    </StNavLinks>
  );
};

const StNavLinks = styled.li<Omit<NavProps, 'name'>>`
  a {
    color: ${({ pathname, link }) => (pathname === link ? 'red' : 'black')};
  }
`;
