const colors = {
  black: { value: "#000" },
  blackAlpha: {
    50: { value: "rgba(0, 0, 0, 0.04)" },
    100: { value: "rgba(0, 0, 0, 0.06)" },
    200: { value: "rgba(0, 0, 0, 0.08)" },
    300: { value: "rgba(0, 0, 0, 0.18)" },
    400: { value: "rgba(0, 0, 0, 0.24)" },
    500: { value: "rgba(0, 0, 0, 0.36)" },
    600: { value: "rgba(0, 0, 0, 0.48)" },
    700: { value: "rgba(0, 0, 0, 0.64)" },
    800: { value: "rgba(0, 0, 0, 0.8)" },
    900: { value: "rgba(0, 0, 0, 0.92)" }
  },
  white: { value: "#FFF" },
  whiteAlpha: {
    50: { value: "rgba(255, 255, 255, 0.04)" },
    100: { value: "rgba(255, 255, 255, 0.06)" },
    200: { value: "rgba(255, 255, 255, 0.08)" },
    300: { value: "rgba(255, 255, 255, 0.18)" },
    400: { value: "rgba(255, 255, 255, 0.24)" },
    500: { value: "rgba(255, 255, 255, 0.36)" },
    600: { value: "rgba(255, 255, 255, 0.48)" },
    700: { value: "rgba(255, 255, 255, 0.64)" },
    800: { value: "rgba(255, 255, 255, 0.8)" },
    900: { value: "rgba(255, 255, 255, 0.92)" }
  },
  gray: {
    50: { value: "#F6F9FB" },
    100: { value: "#EFF4F6" },
    200: { value: "#E0E7EB" },
    300: { value: "#CED8DD" },
    400: { value: "#849299" },
    500: { value: "#697781" },
    600: { value: "#455763" },
    700: { value: "#203A4A" },
    800: { value: "#1E2D36" },
    900: { value: "#161F24" }
  },
  blue: {
    50: { value: "#EDFBFF" },
    100: { value: "#C2E5F0" },
    200: { value: "#AEDBF4" },
    300: { value: "#84BCFF" },
    400: { value: "#4299FF" },
    500: { value: "#3D5EFC" },
    600: { value: "#1C3DAA" },
    700: { value: "#072D93" },
    800: { value: "#03247D" },
    900: { value: "#001C66" }
  },
  red: {
    50: { value: "#FFF4F1" },
    100: { value: "#FFD8CC" },
    200: { value: "#FFBAA5" },
    300: { value: "#FF8F6C" },
    400: { value: "#FF6A3C" },
    500: { value: "#FF3D00" },
    600: { value: "#DC3625" },
    700: { value: "#9C2405" },
    800: { value: "#7B1D05" },
    900: { value: "#621804" }
  },
  green: {
    50: { value: "#e8ffee" },
    100: { value: "#CBFFDA" },
    200: { value: "#8AE3A4" },
    300: { value: "#75da92" },
    400: { value: "#6ec687" },
    500: { value: "#53AE6E" },
    600: { value: "#3D8452" },
    700: { value: "#1a6638" },
    800: { value: "#145025" },
    900: { value: "#0a3817" }
  },
  teal: {
    50: { value: "#e6fffa" },
    100: { value: "#b2f5ea" },
    200: { value: "#81e6d9" },
    300: { value: "#4fd1c5" },
    400: { value: "#38b2ac" },
    500: { value: "#319795" },
    600: { value: "#2c7a7b" },
    700: { value: "#285e61" },
    800: { value: "#234e52" },
    900: { value: "#1d4044" }
  },
  yellow: {
    50: { value: "#fffdf4" },
    100: { value: "#fff6d2" },
    200: { value: "#ffe67d" },
    300: { value: "#ffd56c" },
    400: { value: "#ffbf21" },
    500: { value: "#e6a606" },
    600: { value: "#b17e00" },
    700: { value: "#975a16" },
    800: { value: "#744210" },
    900: { value: "#5f370e" }
  },
  orange: {
    50: { value: "#fff7f0" },
    100: { value: "#ffe2c8" },
    200: { value: "#ffcfa2" },
    300: { value: "#ffb978" },
    400: { value: "#ff820f" },
    500: { value: "#dc7619" },
    600: { value: "#b45905" },
    700: { value: "#9c4221" },
    800: { value: "#7b341e" },
    900: { value: "#652b19" }
  },
  cyan: {
    50: { value: "#edfdfd" },
    100: { value: "#c4f1f9" },
    200: { value: "#9decf9" },
    300: { value: "#76e4f7" },
    400: { value: "#0bc5ea" },
    500: { value: "#00b5d8" },
    600: { value: "#00a3c4" },
    700: { value: "#0987a0" },
    800: { value: "#086f83" },
    900: { value: "#065666" }
  },
  purple: {
    50: { value: "#fdf5ff" },
    100: { value: "#f7dfff" },
    200: { value: "#e6bbf5" },
    300: { value: "#d18ce9" },
    400: { value: "#b06ac9" },
    500: { value: "#9452ab" },
    600: { value: "#824597" },
    700: { value: "#713087" },
    800: { value: "#633473" },
    900: { value: "#4c2659" }
  },
  pink: {
    50: { value: "#fff4f6" },
    100: { value: "#ffd7de" },
    200: { value: "#ffb0bf" },
    300: { value: "#ff8ea3" },
    400: { value: "#ed647d" },
    500: { value: "#e34763" },
    600: { value: "#bc2641" },
    700: { value: "#8c293b" },
    800: { value: "#631422" },
    900: { value: "#4c1b24" }
  },
  bodyColor: {
    base: { value: "{colors.black.value}" },
    _dark: { value: "{colors.white.value}" },
  },
  bodyBg: {
    base: { value: "{colors.gray.50.value}" },
    _dark: { value: "{colors.blue.800.value}" },
  },

};

export default colors;
