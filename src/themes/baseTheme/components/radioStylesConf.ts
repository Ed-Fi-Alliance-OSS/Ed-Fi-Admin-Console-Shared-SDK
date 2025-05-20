import { defineStyleConfig } from "@chakra-ui/styled-system";

const radioStylesConf = defineStyleConfig({
    baseStyle: {
        control: {
            color: 'red.500',
            border: '1px',
            borderColor: 'gray.300',
            fontWeight: 400,
            _checked: {
                backgroundColor: "blue.600"
            },
            _disabled: {
                backgroundColor: 'gray.300',
                _placeholder: {
                    opacity: 1,
                    color: "gray.800"
                },
                opacity: 0.4,
            }
        },
        label: {
            color: "gray.800",
            fontFamily: 'Poppins',
        }
    },
    variants: {
       outline: {
        control: {
            color: 'red.500',
            border: '1px',
            borderColor: 'gray.300',
            fontWeight: 400,
            _checked: {
                backgroundColor: "blue.600"
            },
            _disabled: {
                backgroundColor: 'gray.200',
                _placeholder: {
                    opacity: 1,
                    color: "gray.800"
                },
                opacity: 0.4,
            }
        },
        label: {
            color: "gray.800",
            fontFamily: 'Poppins',
        }
       }
    }
}) as any;

export default radioStylesConf;
