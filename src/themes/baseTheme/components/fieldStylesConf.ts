import { defineStyleConfig } from "@chakra-ui/system";

const fieldStylesConf = defineStyleConfig({
  baseStyle: {
    // Add any base styles for the Field component here
    // For example:
    // helperText: {
    //   fontSize: 'sm',
    //   color: 'gray.500',
    // },
    // errorText: {
    //   fontSize: 'sm',
    //   color: 'red.500',
    // },
  },
  variants: {
    // Add any custom variants for the Field component here
  },
  sizes: {
    // Add any custom sizes for the Field component here
  },
  defaultProps: {
    // Set any default props for the Field component here
  },
});

export default fieldStylesConf;
