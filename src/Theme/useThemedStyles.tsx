import useTheme from './useTheme';

const useThemedStyles = (styles: (theme: any) => any) => {
  // Call the useTheme function and assign the returned value to the variable theme
  const theme = useTheme();

  // Call the styles function with the theme as an argument and return the result
  return styles(theme);
};

export default useThemedStyles;
