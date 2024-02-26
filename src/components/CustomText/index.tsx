import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import useThemedStyles from '../../Theme/useThemedStyles';

interface Props {
  numberOfLines?: number;
  text: number | string;
  customStyle: object;
}

const defaultProps: Props = {
  numberOfLines: undefined,
  text: '',
  customStyle: {},
};

const CustomText: React.FC<Props> = props => {
  const {numberOfLines, text, customStyle} = props;
  const style = useThemedStyles(styles);
  return (
    <Text numberOfLines={numberOfLines} style={{...style, ...customStyle}}>
      {text}
    </Text>
  );
};

CustomText.defaultProps = defaultProps;

export default CustomText;
