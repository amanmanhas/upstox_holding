import React, {useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {themeColors} from '../colors';

// Define the type for the theme
export type Theme = {
  themeColors: {
    BACKGROUND: string;
    TEXT: string;
    // Add more theme colors as needed
  };
};

interface ThemeProps {
  children: React.ReactNode;
}
// Create a context for the theme
export const ThemeContext = React.createContext<Theme | undefined>(undefined);

// Define the ThemeProvider component
const ThemeProvider: React.FC<ThemeProps> = ({children}: ThemeProps) => {
  // Get the current color scheme
  const themeName = useColorScheme();

  // Memoize the theme based on the color scheme
  const theme = useMemo<Theme>(
    () => ({
      themeColors: themeName === 'light' ? themeColors.light : themeColors.dark,
    }),
    [themeName],
  );

  // Render the ThemeProvider component with the theme context
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
