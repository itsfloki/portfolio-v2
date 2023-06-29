import type { NextComponentType, NextPageContext } from 'next'
import {
  Box,
  Heading,
  Stack,
  Text,
  Button,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa'

import SocialButton from './SocialButton'
import ProfileImage from './ProfileImage'

import { BRAND_NAME, BRAND_SUB_TEXT } from '../../utils'
import { containerStyle, headingStyle, subHeadingStyle } from './style'

interface HeroProps {}

const Hero: NextComponentType<NextPageContext, {}, HeroProps> = () => {
  return (
    <Box sx={containerStyle}>
      <ProfileImage />

      <Box maxW={'65%'} ml={'1rem'}>
        <Heading size={'lg'} color={'gray'}>
          <chakra.span color={useColorModeValue('black', 'white')}>
            Hey, I'm Abhijit.
          </chakra.span>
          {BRAND_SUB_TEXT}
        </Heading>

        <Stack direction={'row'} spacing={4} justify="flex-start" mt="1.4rem">
          <Button leftIcon={<FaGithub />} variant={'ghost'} size={'sm'}>
            Github
          </Button>

          <Button leftIcon={<FaLinkedinIn />} variant={'ghost'} size={'sm'}>
            LinkedIn
          </Button>

          <Button leftIcon={<FaTwitter />} variant={'ghost'} size={'sm'}>
            Twitter
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Hero
