import type { NextComponentType, NextPageContext } from 'next'
import { Box, Heading, Text, Button } from '@chakra-ui/react'

import ParticlesContainer from './ParticlesContainer'

import { BRAND_NAME, BRAND_SUB_TEXT } from '../../utils'
import { containerStyle, headingStyle, subHeadingStyle } from './style'

interface HeroProps {}

const Hero: NextComponentType<NextPageContext, {}, HeroProps> = () => {
  return (
    <div>
      <Box sx={containerStyle}>
        <Box>
          <Heading sx={headingStyle}>{BRAND_NAME}</Heading>
          <Text sx={subHeadingStyle} color="whiteAlpha.800">{BRAND_SUB_TEXT}</Text>
        </Box>
        <Button
          letterSpacing={'2px'}
          fontWeight="400"
          fontSize={'13px'}
          bg="whiteAlpha.200"
          color="white"
          _hover={{
            textDecoration: 'none',
            bg: "whiteAlpha.300",
          }}
        >
          Know More
        </Button>
      </Box>

      <ParticlesContainer />
    </div>
  )
}

export default Hero
