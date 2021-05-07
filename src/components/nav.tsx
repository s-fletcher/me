import Link from 'next/link'
import { Button } from '@chakra-ui/button'
import { Box, Heading } from '@chakra-ui/layout'
import { FC } from 'react'

type NavItemProps = {
  active?: boolean
  href: string
}

const NavItem: FC<NavItemProps> = ({ children, active, href }) => (
  <Link href={href}>
    <Button opacity={active ? 1 : 0.5} pr={2} pl={2} mx={2} variant="unstyled">
      {children}
    </Button>
  </Link>
)

export const Nav = () => (
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
    <Heading size="lg">Sam</Heading>
    <Box
      fontFamily="heading"
      fontSize={18}
      display="flex"
      justifyContent="space-between"
    >
      <NavItem active href="/">
        about
      </NavItem>
      <NavItem href="/">work</NavItem>
      <NavItem href="/">blog</NavItem>
    </Box>
  </Box>
)
