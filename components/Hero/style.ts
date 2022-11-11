import { SystemStyleObject } from '@chakra-ui/react'

export const containerStyle: SystemStyleObject = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDir: "column",
  gap: "1.4rem"
}

export const headingStyle: SystemStyleObject = {
  color: 'white',
  fontWeight: '100',
  fontSize: '3.5rem',
  lineHeight: 1.2,
  letterSpacing: '5.5px',
  textTransform: 'uppercase',
  margin: '0 0 5px 0',
  textAlign: "center"
}

export const subHeadingStyle: SystemStyleObject = {
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: 1.5,
  letterSpacing: '3.5px',
  textTransform: 'uppercase',
  opacity: 0.7,
  textAlign: "center"
}
