import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

import {hpx, wpx, TextUtils} from '../../utils/UiUtils';
import {Colors} from '../../colors';

interface Styles {
  container: ViewStyle;
  textStyle: TextStyle;
}

const styles = ({}: {themeColors: any}): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      backgroundColor: Colors.violetColor,
      paddingHorizontal: wpx(20),
      paddingVertical: hpx(15),
    },
    textStyle: {
      color: Colors.white,
      ...TextUtils.PB16,
    },
  });
};

export default styles;
