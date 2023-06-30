import type { NextComponentType, NextPageContext } from 'next'
import {
  Box,
  Heading,
  Stack,
  Button,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'

import ProfileImage from './ProfileImage'

import { BRAND_SUB_TEXT } from '../../utils'
import { containerStyle } from './style'

interface HeroProps {}

const Hero: NextComponentType<NextPageContext, {}, HeroProps> = () => {
  return (
    <Box sx={containerStyle}>
      <ProfileImage />

      <Box maxW={{ xs: '95%', md: '65%' }} ml={'1rem'}>
        <Heading
          size={'lg'}
          color={useColorModeValue('gray.500', 'gray.600')}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <chakra.span color={useColorModeValue('black', 'white')}>
            Hey, I&apos;m Abhijit.
          </chakra.span>
          {BRAND_SUB_TEXT}
        </Heading>

        <Stack
          direction={'row'}
          spacing={4}
          justify={{ xs: 'center', md: 'flex-start' }}
          mt="1.4rem"
        >
          <Button
            leftIcon={<FaGithub />}
            variant={'ghost'}
            size={'sm'}
            rounded="full"
          >
            Github
          </Button>

          <Button
            leftIcon={<FaLinkedinIn />}
            variant={'ghost'}
            size={'sm'}
            rounded="full"
          >
            LinkedIn
          </Button>

          <Button
            leftIcon={<FaTwitter />}
            variant={'ghost'}
            size={'sm'}
            rounded="full"
          >
            Twitter
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Hero
