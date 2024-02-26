import {useContext} from 'react';

// Import the ThemeContext from the appropriate location
import {ThemeContext, Theme} from '.';

// Define a custom hook called useTheme
const useTheme = (): Theme => {
  // Use the useContext hook to access the ThemeContext
  return useContext(ThemeContext) ?? ({} as Theme);
};

export default useTheme;
