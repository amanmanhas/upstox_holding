import {StyleSheet, ViewStyle} from 'react-native';

import {hpx, wpx, TextUtils} from '../../utils/UiUtils';

interface StylesProps {
  themeColors: {
    TEXT: string;
  };
}

export const flexDirectionStyle = (bool: boolean): ViewStyle => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: bool ? hpx(40) : 10,
});

const styles = ({themeColors}: StylesProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: wpx(20),
      paddingBottom: hpx(10),
    },
    imgContainer: {
      paddingTop: hpx(10),
      paddingBottom: hpx(5),
      width: '100%',
      alignItems: 'center',
    },
    imgStyle: {
      width: wpx(20),
      height: hpx(20),
    },
    textStyle: {
      color: themeColors.TEXT,
      ...TextUtils.PR16,
    },
    titleStyle: {
      color: themeColors.TEXT,
      ...TextUtils.PB16,
    },
    priceStyle: {
      color: themeColors.TEXT,
      ...TextUtils.PB16,
    },
  });
};

export default styles;
