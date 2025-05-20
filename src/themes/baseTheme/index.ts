import { createSystem, defaultConfig, mergeConfigs } from "@chakra-ui/react";
import config from "./config";
import styles from "./styles";
import colors from "./colors";
import fonts from "./fonts";
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

const mergedConfig = mergeConfigs(defaultConfig, config);

const baseTheme = createSystem(mergedConfig, {
  theme: {
    tokens: {
      colors: colors,
      fonts: fonts,

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
