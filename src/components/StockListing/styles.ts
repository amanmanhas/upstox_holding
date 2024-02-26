import {StyleSheet, ViewStyle} from 'react-native';

import {hpx, wpx, TextUtils} from '../../utils/UiUtils';
import {Colors} from '../../colors';

interface StylesProps {
  themeColors: {
    TEXT: string;
  };
}

export const flexDirectionStyle = (bool: boolean): ViewStyle => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: bool ? hpx(10) : undefined,
});
const styles = ({themeColors}: StylesProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: wpx(20),
      paddingVertical: hpx(10),
      borderBottomWidth: 1,
      borderColor: Colors.gray,
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
