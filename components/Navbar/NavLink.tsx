import { ReactNode } from 'react'
import type { NextComponentType, NextPageContext } from 'next'
import { Link } from '@chakra-ui/react'

interface NavLinkProps {
  children: ReactNode
}

const NavLink: NextComponentType<NextPageContext, {}, NavLinkProps> = ({
  children,
}) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    color="whiteAlpha.800"
    _hover={{
      textDecoration: 'none',
      bg: "whiteAlpha.200",
    }}
    href={'#'}
  >
    {children}
  </Link>
)

export default NavLink
