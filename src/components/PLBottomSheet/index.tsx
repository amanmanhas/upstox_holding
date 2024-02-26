import React, {useMemo, useState} from 'react';
import {Animated, Image, Pressable, View, useColorScheme} from 'react-native';
import useThemedStyles from '../../Theme/useThemedStyles';
import styles, {flexDirectionStyle} from './styles';
import {CustomText} from '..';
import {DownIcon, UpIcon} from '../../assests';
import {hpx} from '../../utils/UiUtils';
import en from '../../translations/en.json';
import {Colors} from '../../colors';

interface StockData {
  ltp: number;
  quantity: number;
  avgPrice: number;
  close: number;
}

const PLBottomSheet: React.FC<{stockData: StockData[]}> = ({stockData}) => {
  const style = useThemedStyles(styles);
  const [heightAnim] = useState(new Animated.Value(0));
  const [showData, setShowData] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  // Calculate the current value, investment value, total PL, and today's PL using useMemo
  const {currentValue, investmentValue, totalPL, todayPL} = useMemo(() => {
    let sum = {
      todayPL: 0,
      currentValue: 0,
      investmentValue: 0,
    };

    stockData?.forEach(item => {
      sum.currentValue = sum.currentValue + item?.ltp * item?.quantity;
      sum.investmentValue =
        sum.investmentValue + item?.avgPrice * item?.quantity;
      sum.todayPL = sum.todayPL + (item.close - item.ltp) * item.quantity;
    });

    const tempTotalPL = (sum.currentValue - sum.investmentValue).toFixed(2);

    return {
      currentValue: sum.currentValue.toFixed(2),
      investmentValue: sum.investmentValue.toFixed(2),
      totalPL: tempTotalPL,
      todayPL: sum.todayPL.toFixed(2),
    };
  }, [stockData]);

  // Function to toggle the visibility of data
  const showDataFunc = () => {
    setShowData(!showData);

    Animated.timing(heightAnim, {
      toValue: showData ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  // Define the content height based on the showData state
  const contentHeight = heightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, hpx(85)],
  });

  return (
    <View style={style.container}>
      <Pressable onResponderEnd={showDataFunc} style={style.imgContainer}>
        <Image
          tintColor={isDarkMode ? Colors.white : Colors.black}
          style={style.imgStyle}
          source={showData ? DownIcon : UpIcon}
        />
      </Pressable>
      <Animated.View style={{...style.contentContainer, height: contentHeight}}>
        {showData && (
          <>
            <View style={flexDirectionStyle(false)}>
              <CustomText
                customStyle={style.titleStyle}
                text={en?.currentValue}
              />

              <CustomText
                customStyle={style.textStyle}
                text={`₹${currentValue}`}
              />
            </View>
            <View style={flexDirectionStyle(false)}>
              <CustomText
                customStyle={style.titleStyle}
                text={en?.totalInvestment}
              />

              <CustomText
                customStyle={style.textStyle}
                text={`₹${investmentValue}`}
              />
            </View>
            <View style={flexDirectionStyle(false)}>
              <CustomText
                customStyle={style.titleStyle}
                text={en?.todaysProfitLoss}
              />

              <CustomText customStyle={style.textStyle} text={`₹${totalPL}`} />
            </View>
          </>
        )}
      </Animated.View>
      <View style={flexDirectionStyle(showData ? true : false)}>
        <CustomText customStyle={style.titleStyle} text={en.profitLoss} />

        <CustomText customStyle={style.textStyle} text={`₹${todayPL}`} />
      </View>
    </View>
  );
};

export default PLBottomSheet;
