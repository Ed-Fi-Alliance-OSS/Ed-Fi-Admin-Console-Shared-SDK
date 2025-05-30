import { defineStyleConfig } from "@chakra-ui/styled-system"
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const headingStylesConf = defineStyleConfig({
  baseStyle: (props: StyleFunctionProps) => ({
    color: mode('black', 'white')(props),
  }),
  sizes: {
    '2xl': {
      fontSize: "32px",
      fontWeight: '700',
      fontFamily: 'Poppins',
      lineHeight: '42px',
    },
    xl: {
      fontSize: "28px",
      fontWeight: '700',
      fontFamily: 'Poppins',
      lineHeight: '32px',
    },
    lg: {
      fontSize: "24px",
      fontWeight: '700',
      fontFamily: 'Poppins',
      lineHeight: '30px',
    },
    md: {
      fontSize: "20px",
      fontWeight: '700',
      fontFamily: 'Poppins',
      lineHeight: '28px',
    },
    sm: {
      fontSize: "18px",
      fontWeight: '700',
      fontFamily: 'Poppins',
      lineHeight: '24px',
    },
    xs: {
      fontSize: "16px",
      fontWeight: 'normal',
      fontFamily: 'Poppins',
      lineHeight: '20px',
    }
  },
  variants: {
    "blue.900-white": (props: StyleFunctionProps) => ({
      color: mode("blue.900", "white")(props)
    })
  }
}) as any

export default headingStylesConf
