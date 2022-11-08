import { ReactNode } from 'react'
import type { NextComponentType, NextPageContext } from 'next'
import { Container as ChakraContainer } from '@chakra-ui/react'

interface ContainerProps {
  children: ReactNode
}

const Container: NextComponentType<NextPageContext, {}, ContainerProps> = ({
  children,
}) => {
  return <ChakraContainer maxW={'7xl'}>{children}</ChakraContainer>
}

export default Container
