import type { NextComponentType, NextPageContext } from 'next'
import { Link } from '@chakra-ui/react'

interface NavLinkProps {
  label: string
}

const NavLink: NextComponentType<NextPageContext, {}, NavLinkProps> = ({
  label,
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
    href={`#${label.toLowerCase()}`}
  >
    {label}
  </Link>
)

export default NavLink
