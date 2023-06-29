import { SystemStyleObject } from '@chakra-ui/react'

export const containerStyle: SystemStyleObject = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDir: 'row',
  gap: '1.4rem',
  marginTop: '11rem',
  // border: "1px solid gray",
  maxW: '4xl',
  mx: 'auto',
}

export const headingStyle: SystemStyleObject = {
  color: 'white',
  fontWeight: '100',
  fontSize: { base: '2.8rem', md: '3.5rem' },
  lineHeight: 1.2,
  letterSpacing: '5.5px',
  textTransform: 'uppercase',
  margin: '0 0 5px 0',
  textAlign: 'center',
}

export const subHeadingStyle: SystemStyleObject = {
  fontSize: { base: '0.9rem', md: '1rem' },
}
