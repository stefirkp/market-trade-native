import { StyleSheet, Text, View } from 'react-native';

const TopSearchBar: React.FC = () => {

  return (
    <View className='flex justify-between mt-[60px] mx-[15px] mb-[10px]'>
      <Text style={styles.h1}>Market</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topWrapper: {
    flexDirection: 'row',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default TopSearchBar;
