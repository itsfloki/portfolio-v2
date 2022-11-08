import { ReactNode } from 'react'
import type { NextComponentType, NextPageContext } from 'next'
import { Link, useColorModeValue } from '@chakra-ui/react'

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
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
)

export default NavLink
