import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import useThemedStyles from '../../Theme/useThemedStyles';
import styles, {flexDirectionStyle} from './styles';
import {CustomText} from '..';

interface StockData {
  symbol: string;
  ltp: number;
  quantity: number;
  avgPrice: number;
}

const StockListing: React.FC<{stockData: StockData[]}> = ({stockData}) => {
  const style = useThemedStyles(styles);

  // RenderItem component
  const RenderItem = useCallback(
    ({item}: {item: StockData}) => {
      const currentValue = item?.ltp * item?.quantity;
      const investmentValue = item?.avgPrice * item?.quantity;
      const totalPL = (currentValue - investmentValue).toFixed(2);
      return (
        <View style={style.container}>
          <View style={flexDirectionStyle(false)}>
            <CustomText customStyle={style.titleStyle} text={item?.symbol} />
            <View style={flexDirectionStyle(false)}>
              <CustomText customStyle={style.textStyle} text={'LTP: '} />
              <CustomText
                customStyle={style.priceStyle}
                text={`₹ ${item?.ltp}`}
              />
            </View>
          </View>
          <View style={flexDirectionStyle(true)}>
            <CustomText customStyle={style.textStyle} text={item?.quantity} />
            <View style={flexDirectionStyle(false)}>
              <CustomText customStyle={style.textStyle} text={'P/L: '} />
              <CustomText
                customStyle={style.priceStyle}
                text={`₹ ${totalPL}`}
              />
            </View>
          </View>
        </View>
      );
    },
    [style],
  );

  // Return the StockListing component
  return (
    <FlatList
      data={stockData}
      keyExtractor={item => item?.symbol}
      renderItem={RenderItem}
    />
  );
};

export default StockListing;
