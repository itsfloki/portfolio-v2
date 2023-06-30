import { ReactNode } from 'react'
import type { NextComponentType, NextPageContext } from 'next'
import { Box, Container, Heading, Text } from '@chakra-ui/react'

import { headingStyle, subHeadingStyle } from './style'

interface SectionWrapperProps {
  title: string
  desc?: string
  children: ReactNode
  id?: string
}

const SectionWrapper: NextComponentType<
  NextPageContext,
  {},
  SectionWrapperProps
> = ({ children, title, desc, id }) => {
  return (
    <Container id={id || ''} maxW={'4xl'} borderRadius={'0.375rem'} mt="3rem">
      <Box pt="2rem">
        <Heading size={'lg'} mb="5">
          {title}
        </Heading>
        <Text>{desc || ''}</Text>
      </Box>
      {children}
    </Container>
  )
}

export default SectionWrapper
