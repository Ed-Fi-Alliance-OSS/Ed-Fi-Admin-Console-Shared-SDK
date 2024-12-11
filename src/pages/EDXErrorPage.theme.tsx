import { defineStyleConfig } from "@chakra-ui/react";

export const EDXErrorPageTheme: any = defineStyleConfig({
  baseStyle: {
    bgColor: "gray.50",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    minWidth: "100vw",
    height: "100vh",
    minHeight: "100vh",

    ".content-container": {
      flexDirection: "column",
      maxWidth: "37.5rem",
      gap: "1rem",
      padding: "1rem 0",
    },

    ".error-code-container": {
      color: "#000",
      textAlign: "center",
      fontFamily: "Poppins",
      fontSize: "1.5rem",
      fontWeight: "600",
      textTransform: "uppercase",
    },

    ".error-title-container": {
      color: "#000",
      textAlign: "center",
      fontFamily: "Poppins",
      fontSize: "2rem",
      fontWeight: "700",
    },

    ".error-description": {
      padding: "0 1rem",
      color: "#000",
      textAlign: "center",
      fontFamily: "Poppins",
      fontSize: "1rem",
      fontWeight: "400",
    },

    ".buttons-container": {
      gap: "1rem",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "1rem",
    },

    ".primary-button": {
      fontSize: "0.75rem",
      fontWeight: "600",
      lineHeight: "1.5rem",
      textTransform: "uppercase",
      height: "2rem",
      borderRadius: "0.25rem",
      padding: "0 0.5rem",
    },

    ".secondary-button": {
      fontSize: "0.75rem",
      fontWeight: "600",
      lineHeight: "1.5rem",
      textTransform: "uppercase",
      height: "2rem",
      borderRadius: "0.25rem",
      padding: "0 0.5rem",
    },
  },
});
