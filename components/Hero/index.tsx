import type { NextComponentType, NextPageContext } from 'next'
import { Box, Heading, Text, Button } from '@chakra-ui/react'

import ParticlesContainer from './ParticlesContainer'

import { containerStyle, headingStyle, subHeadingStyle } from './style'

interface HeroProps {}

const Hero: NextComponentType<NextPageContext, {}, HeroProps> = () => {
  return (
    <div>
      <Box sx={containerStyle}>
        <Box>
          <Heading sx={headingStyle}>Abhijit Paul</Heading>
          <Text sx={subHeadingStyle}>
            Indian full stack developer for Haskell, Plutus & Solidity
          </Text>
        </Box>
        <Button
          letterSpacing={'2px'}
          fontWeight="400"
          fontSize={'13px'}
          variant="solid"
        >
          Know More
        </Button>
      </Box>

      <ParticlesContainer />
    </div>
  )
}

export default Hero
