import { defineStyleConfig } from "@chakra-ui/styled-system";

const switchStylesConf = defineStyleConfig({
  baseStyle: {
    track: {
      border: '1px',
      borderColor: 'gray.300',
      backgroundColor: "gray.300",
      _checked: {
        backgroundColor: 'blue.600',
      },
      _disabled: {
        backgroundColor: 'gray.200',
        opacity: 0.4,
      }
    }
  },
  variants: {
    outline: {
      track: {
        border: '1px',
        borderColor: 'gray.300',
        backgroundColor: "gray.300",
        _checked: {
          backgroundColor: 'blue.600',
        },
        _disabled: {
          backgroundColor: 'gray.200',
          opacity: 0.4,
        }
      }
    }
  },
  defaultProps: {}
}) as any;

export default switchStylesConf;
