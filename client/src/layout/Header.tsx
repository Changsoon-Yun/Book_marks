import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from '@emotion/styled';

export default function Header() {
  const pages = [
    { href: '/post', name: 'POSTS' },
    { href: '/post/write', name: 'WRITE A POST' },
    { href: '/auth/login', name: 'LOGIN' },
    { href: '/auth/signin', name: 'SIGNIN' },
  ];

  const pathname = usePathname();
  return (
    <div>
      <nav>
        <ul>
          {pages.map(({ href, name }) => (
            <NavItems key={href} pathname={pathname} link={href} name={name} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

const NavItems = ({ link, name, pathname }: { link: string; name: string; pathname: string }) => {
  return (
    <StNavLinks link={link} pathname={pathname}>
      <Link href={link}>{name}</Link>
    </StNavLinks>
  );
};

const StNavLinks = styled.li<{ pathname: string; link: string }>`
  a {
    color: ${({ pathname, link }) => (pathname === link ? 'red' : 'black')};
  }
`;
