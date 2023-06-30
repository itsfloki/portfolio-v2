import type { NextComponentType, NextPageContext } from 'next'
import { Avatar, Box } from '@chakra-ui/react'

interface Props {
  href?: string
  label?: string
}

const ProfileImage: NextComponentType<NextPageContext, {}, Props> = ({}) => {
  const size = '170px'

  return (
    <Box
      as="div"
      minW={size}
      borderRadius={'full'}
      bg="linear-gradient(to bottom, #fcb045, #fd1d1d, #833ab4)"
      p="1"
      h={size}
    >
      <Avatar
        src="https://github.com/itsfloki/images/blob/main/abhijit_with_coat.png?raw=true"
        size="full"
        top={0}
      />
    </Box>
  )
}

export default ProfileImage
