import { SystemStyleObject } from '@chakra-ui/react'

export const containerStyle: SystemStyleObject = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDir: {
    xs: 'column',
    md: 'row',
  },
  gap: '1.4rem',
  marginTop: '11rem',
  maxW: '4xl',
  mx: 'auto',
}
