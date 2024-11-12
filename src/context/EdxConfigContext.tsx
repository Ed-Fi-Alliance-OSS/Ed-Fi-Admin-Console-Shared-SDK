// ConfigContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { EdxAppConfig } from '../core'

// Define the shape of the context, including the update function
interface ConfigContextType {
  config: EdxAppConfig;
}

// Create the context with the correct type, allowing undefined as the initial value
const EdxConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const EdxConfigProvider: React.FC<{ children: ReactNode, config: EdxAppConfig }> = ({ children, config }) => {

  // Provide the correct type for the `value` prop
  return (
    <EdxConfigContext.Provider value={{ config }}>
      {children}
    </EdxConfigContext.Provider>
  );
};

// Custom hook to access the configuration context
export const useConfig = (): ConfigContextType => {
  const context = useContext(EdxConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};

export default EdxConfigProvider;
