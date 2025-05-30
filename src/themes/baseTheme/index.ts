import { createSystem, defaultConfig } from "@chakra-ui/react";
import themeModeConfig from "./config";
import colors from "./colors";
import fonts from "./fonts";
import globalStyles from "./styles";
import buttonStylesConf from "./components/buttonStylesConf";
import textStylesConf from "./components/textStylesConf";
import headingStylesConf from "./components/headingStylesConf";
import inputStylesConf from "./components/inputStylesConf";
import checkboxStylesConf from "./components/checkboxStylesConf";
import numberInputStylesConf from "./components/numberInputStylesConf";
import radioStylesConf from "./components/radioStylesConf";
import selectStyleConf from "./components/selectStylesConf";
import switchStylesConf from "./components/switchStylesConf";
import textAreaStylesConf from "./components/textAreaStylesConf";
import fieldStylesConf from "./components/fieldStylesConf";
import { EDXErrorPageTheme } from "../../pages/EDXErrorPage.theme";

// Merge color mode config with defaultConfig
const mergedConfig = { ...defaultConfig, ...themeModeConfig };

const baseTheme = createSystem(mergedConfig, {
  globalCss: globalStyles,
  theme: {
    tokens: {
      colors: colors,
      fonts: fonts,
    },
    semanticTokens: {
      colors: {
        "chakra-body-text": {
          default: { value: "{colors.black}" }
        },
        "chakra-body-bg": {
          default: { value: "{colors.gray.50}" }
        },
        // For colorPalette functionality, define blue palette semantic tokens
        blue: {
          solid: { value: "{colors.blue.500}" },
          contrast: { value: "{colors.blue.100}" },
          fg: { value: "{colors.blue.700}" },
          muted: { value: "{colors.blue.100}" },
          subtle: { value: "{colors.blue.200}" },
          emphasized: { value: "{colors.blue.300}" },
          focusRing: { value: "{colors.blue.500}" },
        },
        // Add other color palettes as needed
      },
    },
    recipes: {
      Button: buttonStylesConf,
      Text: textStylesConf as any,
      Heading: headingStylesConf,
      Input: inputStylesConf,
      Checkbox: checkboxStylesConf,
      NumberInput: numberInputStylesConf,
      Radio: radioStylesConf,
      Select: selectStyleConf,
      Switch: switchStylesConf,
      Textarea: textAreaStylesConf,
      Field: fieldStylesConf,
      EDXErrorPage: EDXErrorPageTheme as any,
    },
  },
});

export default baseTheme;
