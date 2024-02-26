// COLORS CONSTANTS
export const Colors = {
  white: '#ffffff',
  black: '#1D1D1B',
  violetColor: '#751B7C',
  gray: '#C7C7CC',
};

interface ThemeColors {
  BACKGROUND: string;
  TEXT: string;
}

const light: ThemeColors = {
  BACKGROUND: Colors.white,
  TEXT: Colors.black,
};

const dark: ThemeColors = {
  BACKGROUND: Colors.black,
  TEXT: Colors.white,
};

export const themeColors = {light, dark};
