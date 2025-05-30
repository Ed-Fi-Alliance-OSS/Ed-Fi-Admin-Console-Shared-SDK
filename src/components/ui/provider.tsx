import React, { ReactNode } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { baseTheme } from "../../themes";

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return (
    <ChakraProvider value={baseTheme}>
      {children}
    </ChakraProvider>
  );
}
