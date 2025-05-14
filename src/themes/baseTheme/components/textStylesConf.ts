import { defineStyleConfig } from "@chakra-ui/react"
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const textStylesConf = defineStyleConfig({
  baseStyle: (props: StyleFunctionProps) => ({
    color: mode('black', 'white')(props),
  }),
  sizes: {
    lg: {
      fontSize: "18px",
      fontFamily: 'Poppins',
      lineHeight: '26px',
    },
    md: {
      fontSize: "16px",
      fontFamily: 'Poppins',
      lineHeight: '22px',
    },
    sm: {
      fontSize: "14px",
      fontFamily: 'Poppins',
      lineHeight: '20px',
    },
    xs: {
      fontSize: "12px",
      fontFamily: 'Poppins',
      lineHeight: '16px',
    }
  },
  variants: {
    "blue.900-white": (props: StyleFunctionProps) => ({
      color: mode("blue.900", "white")(props)
    })
  }
}) as any

export default textStylesConf