import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Header, PLBottomSheet, StockListing} from '../../components';
import apiCall from '../../services';
import styles from './styles';
import useThemedStyles from '../../Theme/useThemedStyles';

const Home: React.FC = () => {
  const [stockData, setStockData] = useState([]);

  const style = useThemedStyles(styles);

  useEffect(() => {
    // Fetch stock data from API
    apiCall().then((res: any) => {
      setStockData(res?.userHolding);
    });
  }, []);

  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <Header />
        <StockListing stockData={stockData} />
      </View>
      <View style={style.btmContainer}>
        <PLBottomSheet stockData={stockData} />
      </View>
    </View>
  );
};

export default Home;
