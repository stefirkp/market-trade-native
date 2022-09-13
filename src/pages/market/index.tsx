import { StyleSheet, Text, View } from 'react-native';

import { MarketProvider } from '../../context/MarketContext';
import TopSearchBar from './components/TopSearchBar';
import TagsNavigation from './components/TagsNavigatioin';
import MarketTable from './components/MarketTable';

const MarketPage: React.FC = () => {
  return (
    <MarketProvider>
      <View>
        <TopSearchBar/>
        <TagsNavigation/>
        <MarketTable />
      </View>
    </MarketProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MarketPage;
