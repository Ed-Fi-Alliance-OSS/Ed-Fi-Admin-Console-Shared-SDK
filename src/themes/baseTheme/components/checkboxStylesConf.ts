import { defineStyleConfig } from "@chakra-ui/styled-system";

const checkboxStylesConf = defineStyleConfig({
  baseStyle: {
    control: {
      color: "gray.800",
      border: '1px',
      borderColor: 'gray.300',
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
}) as any

export default checkboxStylesConf
