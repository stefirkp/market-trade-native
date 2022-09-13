import { View,ScrollView, Button } from 'react-native';

const TagsNavigation: React.FC = () => {
  
  const tagsList = [
    { label: 'Terbaru' },
    { label: 'Defi' },
    { label: 'NFT/Gaming' },
    { label: 'CEX' },
    { label: 'DEX' },
    { label: 'Layer-1' },
    { label: 'Infrastructure' },
    { label: 'Lending' },
    { label: 'Layer-2' },
    {
      label: 'Ekosistem Stablecoin'
    },
  ];

  return (
    <ScrollView horizontal={true} className="mb-[16px] mx-[10px]">
      <View className='flex justify-between flex-row'>
        {tagsList.map(({ label }, idx) => (
          <Button
            title={label}
            color="#5a5353"
            onPress={() => {}}
            key={idx}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default TagsNavigation;
