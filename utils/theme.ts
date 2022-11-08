import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  breakpoints: {
    xs: "220px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
})

export default theme