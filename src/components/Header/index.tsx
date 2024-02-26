import React from 'react';
import {View} from 'react-native';
import useThemedStyles from '../../Theme/useThemedStyles';
import styles from './styles';
import {CustomText} from '..';
import en from '../../translations/en.json';

const Header: React.FC = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      {/* Rendering the CustomText component with custom style and text */}
      <CustomText customStyle={style.textStyle} text={en?.upstoxHolding} />
    </View>
  );
};
export default Header;
