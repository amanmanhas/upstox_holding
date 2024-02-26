import {StyleSheet} from 'react-native';
import {Colors} from '../../colors';

interface StylesProps {
  themeColors: {
    BACKGROUND: string;
  };
}

const styles = ({themeColors}: StylesProps) => {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: Colors.gray,
    },
    subContainer: {
      backgroundColor: themeColors.BACKGROUND,
    },
    btmContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: themeColors.BACKGROUND,
      shadowColor: Colors.black,
    },
  });
};

export default styles;
