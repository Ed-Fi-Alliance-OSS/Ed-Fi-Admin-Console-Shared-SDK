import { defineStyleConfig } from "@chakra-ui/styled-system"
import { mode } from "@chakra-ui/theme-tools"
import type { StyleFunctionProps } from "@chakra-ui/theme-tools"

const buttonStylesConf = defineStyleConfig({
  baseStyle: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    borderRadius: 'base',
  },
  sizes: {
    xs: {
      fontSize: '12px',
      fontWeight: 600,
      height: '24px',
      minW: '93px',
      width: 'auto'
    },
    sm: {
      fontSize: '14px',
      fontWeight: 600,
      height: '32px',
      minW: '116px',
      width: 'auto'
    },
    md: {
      fontSize: '16px',
      fontWeight: 600,
      height: '40px',
      minW: "135px",
      width: 'auto',
    },
    lg: {
      fontSize: '18px',
      fontWeight: 600,
      h: '48px',
      minW: '157px',
      w: 'auto'
    }
  },
  variants: {
    outline: (props: StyleFunctionProps) => ({
      color: mode('black', 'white')(props),
    }),
    simple: (props: StyleFunctionProps) => ({
      color: mode('blue.900', 'white')(props),
      outline: 'none',
      border: 'none',
      _hover: { background: 'none' },
      p: 0,
    }),
    primaryBlue600: (props: StyleFunctionProps) => ({
      color: 'white',
      bg: mode('blue.600', 'blue.900')(props),
      border: '2px',
      borderColor: 'blue.600',
      _hover: {
        backgroundColor: mode('blue.900', 'blue.800')(props),
        borderColor: mode('blue.900', 'blue.600')(props),
        _disabled: {
          background: "blue.600"
        }
      },
      _disabled: {
        opacity: 0.4,
      },
      _loading: {
        backgroundColor: "blue.600",
        _hover: {
          backgroundColor: "blue.600"
        }
      }
    }),
    primaryBlue500: (props: StyleFunctionProps) => ({
      color: 'white',
      bg: mode('blue.500', 'blue.600')(props),
      border: '2px',
      borderColor: 'blue.500',
      _hover: {
        backgroundColor: mode('blue.700', 'blue.800')(props),
        borderColor: mode('blue.600', 'blue.600')(props),
        _disabled: {
          background: "blue.500"
        }
      },
      _disabled: {
        opacity: 0.4
      }
    }),
    primaryBlue400: (props: StyleFunctionProps) => ({
      color: 'white',
      bg: mode('blue.400', 'blue.600')(props),
      border: '2px',
      borderColor: 'blue.400',
      _hover: {
        backgroundColor: mode('blue.500', 'blue.800')(props),
        borderColor: mode('blue.500', 'blue.600')(props),
        _disabled: {
          background: "blue.400"
        }
      },
      _disabled: {
        opacity: 0.4
      }
    }),
    primaryRed500: (props: StyleFunctionProps) => ({
      color: 'white',
      bg: mode('red.500', 'blue.600')(props),
      border: '2px',
      borderColor: 'red.500',
      _hover: {
        backgroundColor: mode('red.600', 'blue.800')(props),
        borderColor: mode('red.600', 'blue.600')(props),
        _disabled: {
          background: "red.500"
        }
      },
      _disabled: {
        opacity: 0.4
      }
    }),
    primaryOrange400: (props: StyleFunctionProps) => ({
      color: 'black',
      bg: mode('orange.400', 'blue.600')(props),
      border: '2px',
      borderColor: 'orange.400',
      _hover: {
        backgroundColor: mode('orange.600', 'blue.800')(props),
        borderColor: mode('orange.600', 'blue.600')(props),
        _disabled: {
          background: "orange.400"
        }
      },
      _disabled: {
        opacity: 0.4
      }
    }),
    primaryGreen500: (props: StyleFunctionProps) => ({
      color: 'white',
      bg: mode('green.500', 'green.600')(props),
      border: '2px',
      borderColor: 'green.500',
      _hover: {
        backgroundColor: mode('green.800', 'blue.800')(props),
        borderColor: mode('green.800', 'blue.600')(props),
        _disabled: {
          background: 'green.500'
        }
      },
      _disabled: {
        opacity: 0.4
      }
    }),
    primaryGreen600: (props: StyleFunctionProps) => ({
      color: 'white',
      bg: mode('green.600', 'green.600')(props),
      border: '2px',
      borderColor: 'green.600',
      _hover: {
        backgroundColor: mode('green.800', 'green.800')(props),
        borderColor: mode('green.800', 'green.600')(props),
        _disabled: {
          background: 'green.500'
        }
      },
      _disabled: {
        opacity: 0.4
      }
    }),
    primaryGreen800: (props: StyleFunctionProps) => ({
      color: 'white',
      bg: mode('green.800', 'green.600')(props),
      border: '2px',
      borderColor: 'green.800',
      _hover: {
        backgroundColor: mode('green.800', 'green.800')(props),
        borderColor: mode('green.800', 'green.800')(props),
        _disabled: {
          background: 'green.800'
        }
      },
      _disabled: {
        opacity: 0.4
      }
    }),
    primaryGray300: (props: StyleFunctionProps) => ({
      color: mode("blue.900", "blue.900")(props),
      bg: mode('gray.300', 'gray.300')(props),
      border: '2px',
      borderColor: 'gray.300',
      _hover: {
        backgroundColor: mode('gray.400', 'gray.400')(props),
        borderColor: mode('gray.400', 'gray.300')(props),
        _disabled: {
          background: 'gray.300'
        }
      },
      _disabled: {
        opacity: 0.4
      }
    }),
    primaryWhite: (props: StyleFunctionProps) => ({
      color: 'blue.900',
      bg: mode('white', 'blue.600')(props),
      border: '2px',
      borderColor: 'white',
      _hover: {
        backgroundColor: mode('gray.200', 'blue.800')(props),
        borderColor: mode('gray.200', 'blue.600')(props),
        _disabled: {
          background: 'white'
        }
      },
      _disabled: {
        opacity: 0.4
      }
    }),
    secondaryBlue600: (props: StyleFunctionProps) => ({
      color: mode('blue.600', 'white')(props),
      bg: 'transparent',
      border: '2px',
      borderColor: mode('blue.600', "blue.700")(props),
      _hover: {
        backgroundColor: mode('#e9ecf7', 'blue.700')(props),
        borderColor: mode('blue.900', 'rgba(61, 94, 252, 0.1)')(props),
        _disabled: {
          background: '#e9ecf7'
        }
      }
    }),
    secondaryBlue500: (props: StyleFunctionProps) => ({
      color: mode('blue.500', 'white')(props),
      bg: 'transparent',
      border: '2px',
      borderColor: "blue.500",
      _hover: {
        backgroundColor: mode('rgba(28, 61, 170, 0.1)', 'rgba(67, 153, 255, 0.1)')(props),
        borderColor: mode('blue.500', "blue.600")(props),
        _disabled: {
          background: 'rgba(28, 61, 170, 0.1)'
        }
      }
    }),
    secondaryRed500: (props: StyleFunctionProps) => ({
      color: mode('red.500', 'white')(props),
      bg: 'transparent',
      border: '2px',
      borderColor: 'red.500',
      _hover: {
        backgroundColor: mode('rgba(255, 61, 0, 0.1)', 'rgba(255, 61, 0, 0.1)')(props),
        borderColor: mode('rgba(255, 61, 0, 0.1)', 'red.500')(props),
        _disabled: {
          background: 'rgba(255, 61, 0, 0.1)'
        }
      }
    }),
    secondaryOrange400: (props: StyleFunctionProps) => ({
      color: mode('orange.400', 'white')(props),
      bg: 'transparent',
      border: '2px',
      borderColor: 'orange.400',
      _hover: {
        backgroundColor: mode('rgba(255, 129, 16, 0.1)', 'rgba(255, 129, 16, 0.1)')(props),
        borderColor: mode('rgba(255, 129, 16, 0.1)', 'orange.400')(props),
        _disabled: {
          background: 'rgba(255, 129, 16, 0.1)'
        }
      }
    }),
    secondaryGreen500: (props: StyleFunctionProps) => ({
      color: mode('green.500', 'white')(props),
      bg: 'transparent',
      border: '2px',
      borderColor: 'green.500',
      _hover: {
        backgroundColor: mode('rgba(61, 132, 82, 0.1)', 'rgba(61, 132, 82, 0.1)')(props),
        borderColor: mode('rgba(61, 132, 82, 0.1)', 'green.500')(props),
        _disabled: {
          background: 'rgba(61, 132, 82, 0.1)'
        }
      }
    }),
    secondaryGreen600: (props: StyleFunctionProps) => ({
      color: mode('green.600', 'white')(props),
      bg: 'transparent',
      border: '2px',
      borderColor: 'green.600',
      _hover: {
        backgroundColor: mode('rgba(61, 132, 82, 0.1)', 'rgba(61, 132, 82, 0.1)')(props),
        borderColor: mode('rgba(61, 132, 82, 0.1)', 'green.600')(props),
        _disabled: {
          background: 'green.600'
        }
      }
    }),
    secondaryGreen800: (props: StyleFunctionProps) => ({
      color: mode('green.800', 'white')(props),
      bg: 'transparent',
      border: '2px',
      borderColor: 'green.800',
      _hover: {
        backgroundColor: mode('transparent', 'transparent')(props),
        borderColor: mode('green.800', 'green.800')(props),
        _disabled: {
          background: 'green.800'
        }
      }
    }),
    secondaryGray300: (props: StyleFunctionProps) => ({
      color: mode('blue.900', 'white')(props),
      bg: 'transparent',
      border: '2px',
      borderColor: mode('gray.300', 'gray.400')(props),
      _hover: {
        backgroundColor: mode('rgba(132, 146, 153, 0.1)', 'rgba(132, 146, 153, 0.1)')(props),
        borderColor: mode('rgba(132, 146, 153, 0.1)', 'gray.400')(props),
        _disabled: {
          background: 'rgba(132, 146, 153, 0.1)'
        }
      }
    }),
    secondaryWhite: (props: StyleFunctionProps) => ({
      color: mode('blue.900', 'white')(props),
      bg: 'transparent',
      border: '2px',
      borderColor: mode('white', 'white')(props),
      _hover: {
        backgroundColor: mode('rgba(132, 146, 153, 0.1)', 'rgba(255, 255, 255, 0.1)')(props),
        borderColor: mode('white', 'white')(props),
        _disabled: {
          background: 'rgba(132, 146, 153, 0.1)'
        }
      }
    }),
    icon: (props: StyleFunctionProps) => ({
      color: mode('blue.900', 'white')(props),
      bg: 'transparent',
      border: '2px',
      borderColor: 'blue.600',
      height: '30px',
      padding: '12px',
      fontSize: 'md',
      width: '12px',
      maxW: '16px',
      minW: '30px',
      _hover: {
        backgroundColor: mode('#e9ecf7', 'blue.800')(props),
        borderColor: mode('blue.900', 'blue.600')(props)
      }
    }),
  },
  defaultProps: {
    size: 'xs',
    variant: 'simple'
  },
}) as any

export default buttonStylesConf
