import { defineStyleConfig } from "@chakra-ui/styled-system";

const selectStyleConf = defineStyleConfig({
  baseStyle: {
    field: {
      color: "gray.800",
      border: '1px',
      borderColor: 'gray.300',
      borderRadius: "4px",
      fontFamily: 'Poppins',
      fontWeight: 400,
      _disabled: {
        backgroundColor: 'gray.200',
        _placeholder: {
          opacity: 1,
          color: "gray.800"
        },
        opacity: 0.4,
      }
    }
  },
  variants: {
    outline: {
      field: {
        color: "gray.800",
        border: '1px',
        borderColor: 'gray.300',
        borderRadius: "4px",
        fontFamily: 'Poppins',
        fontWeight: 400,
        _disabled: {
          backgroundColor: 'gray.200',
          _placeholder: {
            opacity: 1,
            color: "gray.800"
          },
          opacity: 0.4,
        }
      }
    }
  },
  defaultProps: {

  }
}) as any;

export default selectStyleConf;
