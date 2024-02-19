import Link from 'next/link';
import { Button } from '@chakra-ui/button';
import { Box, Heading } from '@chakra-ui/layout';
import { FC } from 'react';
import { useRouter } from 'next/dist/client/router';

type NavItemProps = {
  active?: boolean;
  href: string;
};

const NavItem: FC<NavItemProps> = ({ children, active, href }) => (
  <Link href={href}>
    <Button
      opacity={active ? 1 : 0.5}
      pr={2}
      pl={2}
      mx={[0.5, 3]}
      variant="unstyled"
    >
      {children}
    </Button>
  </Link>
);

export const Nav = () => {
  const router = useRouter();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      pos="absolute"
      left={0}
      top={0}
      w="100vw"
      px={8}
      py={4}
      alignItems="center"
    >
      <Link href="/">
        <Button variant="unstyled">
          <Heading size="lg">Sam</Heading>
        </Button>
      </Link>
      <Box
        fontFamily="heading"
        fontSize={18}
        display="flex"
        justifyContent="space-between"
      >
        <NavItem active={router.pathname === '/'} href="/">
          about
        </NavItem>
        <NavItem active={router.pathname === '/work'} href="/work">
          work
        </NavItem>
        <NavItem active={router.pathname === '/blog'} href="/blog">
          blog
        </NavItem>
        {/* <NavItem active={router.pathname === '/photos'} href="/photos">
          photos
        </NavItem> */}
      </Box>
    </Box>
  );
};
