import { defineStyleConfig } from "@chakra-ui/styled-system"
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"

const textRecipe = {
  base: {
    color: { value: '{colors.black.value}', _dark: { value: '{colors.white.value}' } },
  },
  variants: {
    'blue.900-white': {
      color: { value: '{colors.blue.900.value}', _dark: { value: '{colors.white.value}' } },
    },
  },
  sizes: {
    lg: {
      fontSize: { value: '18px' },
      fontFamily: { value: 'Poppins' },
      lineHeight: { value: '26px' },
    },
    md: {
      fontSize: { value: '16px' },
      fontFamily: { value: 'Poppins' },
      lineHeight: { value: '22px' },
    },
    sm: {
      fontSize: { value: '14px' },
      fontFamily: { value: 'Poppins' },
      lineHeight: { value: '20px' },
    },
    xs: {
      fontSize: { value: '12px' },
      fontFamily: { value: 'Poppins' },
      lineHeight: { value: '16px' },
    },
  },
};

export default textRecipe;
