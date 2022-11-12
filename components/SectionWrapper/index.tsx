import { ReactNode } from 'react'
import type { NextComponentType, NextPageContext } from 'next'
import { Box, Container, Heading, Text } from '@chakra-ui/react'

import { headingStyle, subHeadingStyle } from './style'

interface SectionWrapperProps {
  title: string
  desc: string
  children: ReactNode
  id?: string
}

const SectionWrapper: NextComponentType<
  NextPageContext,
  {},
  SectionWrapperProps
> = ({ children, title, desc, id }) => {
  return (
    <Container
      id={id || ''}
      maxW={'7xl'}
      borderRadius={'0.375rem'}
      bg={'transparent'}
      backdropFilter="blur(10px)"
      mt="3rem"
      p="2rem"
    >
      <Box mb="5rem" pt="5rem">
        <Heading sx={headingStyle}>{title}</Heading>
        <Text sx={subHeadingStyle}>{desc}</Text>
      </Box>
      {children}
    </Container>
  )
}

export default SectionWrapper
