import type { NextComponentType, NextPageContext } from 'next'
import { Box, Heading, Stack, Text, Button } from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa'

import ParticlesContainer from './ParticlesContainer'
import SocialButton from './SocialButton'

import { BRAND_NAME, BRAND_SUB_TEXT } from '../../utils'
import { containerStyle, headingStyle, subHeadingStyle } from './style'

interface HeroProps {}

const Hero: NextComponentType<NextPageContext, {}, HeroProps> = () => {
  return (
    <div>
      <Box sx={containerStyle}>
        <Box>
          <Heading sx={headingStyle}>{BRAND_NAME}</Heading>
          <Text sx={subHeadingStyle} color="whiteAlpha.800">
            {BRAND_SUB_TEXT}
          </Text>

          <Stack direction={'row'} spacing={4} justify="center" mt="1.4rem">
            <SocialButton label={'Github'} href="https://github.com/itsfloki">
              <FaGithub color="#fff" />
            </SocialButton>
            <SocialButton
              label={'YouTube'}
              href="https://www.youtube.com/@itsabhijit"
            >
              <FaYoutube color="#fff" />
            </SocialButton>
            <SocialButton
              label={'Instagram'}
              href="https://www.instagram.com/thatsabhijit"
            >
              <FaInstagram color="#fff" />
            </SocialButton>
            <SocialButton
              label={'Twitter'}
              href="https://twitter.com/prajnastra"
            >
              <FaTwitter color="#fff" />
            </SocialButton>
          </Stack>
        </Box>

        <Button
          letterSpacing={'2px'}
          fontWeight="400"
          fontSize={'13px'}
          bg="whiteAlpha.200"
          color="white"
          _hover={{
            textDecoration: 'none',
            bg: 'whiteAlpha.300',
          }}
        >
          Know More
        </Button>
      </Box>

      {/* <ParticlesContainer /> */}
    </div>
  )
}

export default Hero
