import { View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { withExpoSnack } from 'nativewind';

import MarketPage from './src/pages/market';

const queryClient = new QueryClient();

const App: React.FC = () => {

  return (
    <View>
      <QueryClientProvider client={queryClient}>
        <MarketPage/>
      </QueryClientProvider>
    </View>
  );
}

export default withExpoSnack(App);
