import { SystemStyleObject } from "@chakra-ui/react";

// Define styles as token definitions for CreateSystem v3
const styles: Record<string, SystemStyleObject> = {
  bodyColor: {
    color: "{colors.black.value}",
    _dark: { color: "white" }
  },
  bodyBg: {
    backgroundColor: "{colors.gray.50.value}",
    _dark: { backgroundColor: "{colors.blue.800.value}" }
  }
};

export default styles;
