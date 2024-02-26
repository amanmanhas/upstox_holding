// utils/styleUtils.ts
import {Dimensions, PixelRatio} from 'react-native';

// UI styling helper
const {width, height} = Dimensions.get('window');

// FONT SCALING
// Usage: nf(16)
const scaleNew: number = height / 852;
const normalizeFont = (size: number): number => {
  const newSize = size * scaleNew;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Usage: wpx(141), hpx(220)
const widthFromPixel = (widthPx: number, w: number = 393): number =>
  widthPx * (width / w);
const heightFromPixel = (heightPx: number, h: number = 852): number =>
  heightPx * (height / h);

// Font Sizes
const FontSize = {
  font14: normalizeFont(14),
  font16: normalizeFont(16),
  font26: normalizeFont(26),
  font30: normalizeFont(30),
};

// Text Styles
const TextUtils = {
  PR16: {
    fontSize: FontSize.font16,
    lineHeight: heightFromPixel(20),
  },
  PB14: {
    fontSize: FontSize.font14,
    fontWeight: 'bold',
    lineHeight: heightFromPixel(16),
  },
  PB16: {
    fontSize: FontSize.font16,
    fontWeight: 'bold',
    lineHeight: heightFromPixel(20),
  },
} as const;

export {
  TextUtils,
  normalizeFont as nf,
  widthFromPixel as wpx,
  heightFromPixel as hpx,
};
