import { useMemo, ReactNode } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions} from 'react-native';
// import { SvgUri } from 'react-native-svg';

import { useMarketContext } from '../../../context/MarketContext';
import { useGetTradePriceChanges } from '../../../lib/services/trade';
import { formatCurrency } from '../../../lib/utils/currency-format';

import { remapTradeMarketList } from '../functions';

const MarketTable: React.FC = () => {
  const { loading, currenciesData } = useMarketContext();
  const { isLoading: isLoadingPriceChanges, data: priceChangesData } = useGetTradePriceChanges();
  let ScreenHeight = Dimensions.get("window").height;

  const dataMapped = useMemo(() => {
    if (!isLoadingPriceChanges && priceChangesData && !loading && currenciesData) {
      return remapTradeMarketList({
        priceChangesData,
        currenciesData,
      });
    }

    return [];
  }, [isLoadingPriceChanges, loading, priceChangesData, currenciesData]);
  
  const customValuePricePercentage = (value: string | null) => {
    const convertValue = !value ? '0.00' : value;
    const isUp = Number(convertValue) > 0;
    const classValue =
      Number(convertValue) === 0 ? '' : isUp ? 'text-green-500' : 'text-red-500';

    return (
      <Text className={classValue}>
        {isUp && '+'} {convertValue}%
      </Text>
    )
  };

  if (!priceChangesData || !currenciesData) {
    return <View><Text>Oups. Data tidak ditemukan</Text></View>;
  }

  return (
    <View style={{height: ScreenHeight * .8 }}>
      <ScrollView>
        {dataMapped.map((data, idx) => (
          <View style={styles.listWrapper} className='flex justify-between flex-row mx-[20px] mb-[10px] py-[8px]' key={idx}>
            <View className='flex flex-row items-center'>
              <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 40, height: 40}} />
              {/* <SvgUri
                width="100%"
                height="100%"
                uri={data.logo}
              /> */}
              <View className='ml-[10px]'>
                <Text style={styles.fontName}>{data.blockchainName}</Text>
                <Text className='text-[16px] text-gray-600'>{data.symbol}</Text>
              </View>
            </View>
            <View className='flex flex-col items-end justify-center'>
              <Text style={styles.fontPrice}>{formatCurrency(data.converterCurrency, Number(data.latestPrice))}</Text>
              <Text style={styles.fontPercentage}>{customValuePricePercentage(data.day)}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  listWrapper: {
    // borderBottom: '1px solid black'
    fontWeight: 'bold'
  },
  fontName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },
  fontPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  fontPercentage: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

interface itemMap {
  [key: string]: string;
}

type tableFieldType = {
  key: string;
  label?: string | ReactNode;
  customClass?: string;
  customValue?: (Args: itemMap) => string | any;
}[];

export default MarketTable;
