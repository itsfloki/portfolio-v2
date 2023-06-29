import type { NextComponentType, NextPageContext } from 'next'
import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react'

interface Props {
  href?: string
  label?: string
}

const ProfileImage: NextComponentType<NextPageContext, {}, Props> = ({}) => {
  const size = '150px'
  const color = '#E1306C'

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`

  return (
    <Box
      as="div"
      position="relative"
      minW={size}
      h={size}
      _before={{
        content: "''",
        position: 'relative',
        display: 'block',
        width: '300%',
        height: '300%',
        boxSizing: 'border-box',
        marginLeft: '-100%',
        marginTop: '-100%',
        borderRadius: '50%',
        bgColor: color,
        animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
      }}
    >
      <Avatar
        src="https://github.com/itsfloki/images/blob/main/abhijit_with_coat.png?raw=true"
        size="full"
        position="absolute"
        top={0}
      />
    </Box>
  )
}

export default ProfileImage
