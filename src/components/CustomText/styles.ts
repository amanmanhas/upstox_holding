import {StyleSheet} from 'react-native';

interface StylesProps {
  themeColors: {
    TEXT: string;
  };
}

const styles = ({themeColors}: StylesProps) => {
  return StyleSheet.create({
    textColor: {
      color: themeColors.TEXT,
    },
  });
};

export default styles;
