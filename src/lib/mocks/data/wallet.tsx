import type { SupportedCurrenciesListType } from '@lib/types/entities/wallet';

export const supportedCurrenciesListMock: SupportedCurrenciesListType = [
  {
    currencyGroup: 'IDR',
    color: '#0A68F4',
    currencySymbol: 'Rp',
    name: 'Rupiah Token',
    logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_IDRT.svg',
    decimal_point: 0,
    listingDate: '2020-03-11T15:13:52.000Z',
    wallets: [
      {
        currencyGroup: 'IDR',
        tokenSymbol: 'IDRT',
        decimal_point: 2,
        tokenType: 'ERC-20',
        blockchain: 'Ethereum',
        explorer: 'https://etherscan.io/tx/',
        listingDate: '2020-09-15T09:43:42.000Z',
        blockchainName: 'Ethereum',
        logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/ERC-20.svg',
      },
      {
        currencyGroup: 'IDR',
        tokenSymbol: 'IDRTB',
        decimal_point: 8,
        tokenType: 'BEP-2',
        blockchain: 'Binance',
        explorer: 'https://explorer.binance.org/tx/',
        listingDate: '2020-09-15T09:43:42.000Z',
        blockchainName: 'BNB Beacon Chain',
        logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/BEP-2.svg',
      },
      {
        currencyGroup: 'IDR',
        tokenSymbol: 'IDRTBSC',
        decimal_point: 2,
        tokenType: 'BEP-20',
        blockchain: 'Binance Smartchain',
        explorer: 'https://bscscan.com/tx/',
        listingDate: '2022-04-11T09:02:03.000Z',
        blockchainName: 'BNB Smart Chain',
        logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/BEP-20+(BSC).svg',
      },
    ],
  },
  {
    currencyGroup: 'BTC',
    color: '#F78B1A',
    currencySymbol: 'BTC',
    name: 'Bitcoin',
    logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg',
    decimal_point: 8,
    listingDate: '2020-03-11T15:13:52.000Z',
    wallets: [
      {
        currencyGroup: 'BTC',
        tokenSymbol: 'BTC',
        decimal_point: 8,
        tokenType: 'Bitcoin',
        blockchain: 'Bitcoin',
        explorer: 'https://explorer.bitcoin.com/btc/tx/',
        listingDate: '2020-09-15T09:43:42.000Z',
        blockchainName: 'Bitcoin',
        logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/Bitcoin.svg',
      },
    ],
  },
  {
    currencyGroup: 'ETH',
    color: '#9011FE',
    currencySymbol: 'ETH',
    name: 'Ethereum',
    logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_ETH.svg',
    decimal_point: 18,
    listingDate: '2020-03-11T15:31:48.000Z',
    wallets: [
      {
        currencyGroup: 'ETH',
        tokenSymbol: 'ETH',
        decimal_point: 18,
        tokenType: 'ERC-20',
        blockchain: 'Ethereum',
        explorer: 'https://etherscan.io/tx/',
        listingDate: '2020-09-15T09:43:42.000Z',
        blockchainName: 'Ethereum',
        logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/ERC-20.svg',
      },
    ],
  },
  {
    currencyGroup: 'USDT',
    color: '#15A57C',
    currencySymbol: 'USDT',
    name: 'Tether',
    logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_USDT.svg',
    decimal_point: 6,
    listingDate: '2020-03-11T16:09:42.000Z',
    wallets: [
      {
        currencyGroup: 'USDT',
        tokenSymbol: 'USDT',
        decimal_point: 6,
        tokenType: 'ERC-20',
        blockchain: 'Ethereum',
        explorer: 'https://etherscan.io/tx/',
        listingDate: '2020-09-15T09:43:42.000Z',
        blockchainName: 'Ethereum',
        logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/ERC-20.svg',
      },
      {
        currencyGroup: 'USDT',
        tokenSymbol: 'USDTPOLYGON',
        decimal_point: 6,
        tokenType: 'Polygon',
        blockchain: 'Polygon',
        explorer: 'https://polygonscan.com/tx/',
        listingDate: '2022-06-02T07:00:00.000Z',
        blockchainName: 'Polygon',
        logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/MATIC.svg',
      },
      {
        currencyGroup: 'USDT',
        tokenSymbol: 'USDTSOLANA',
        decimal_point: 6,
        tokenType: 'Solana',
        blockchain: 'Solana',
        explorer: 'https://explorer.solana.com/tx/',
        listingDate: '2022-05-20T03:22:57.000Z',
        blockchainName: 'Solana',
        logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/SOL.svg',
      },
      {
        currencyGroup: 'USDT',
        tokenSymbol: 'USDTBSC',
        decimal_point: 18,
        tokenType: 'BEP-20',
        blockchain: 'Binance Smartchain',
        explorer: 'https://bscscan.com/tx/',
        listingDate: '2022-06-02T07:00:00.000Z',
        blockchainName: 'BNB Smart Chain',
        logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/BEP-20+(BSC).svg',
      },
      {
        currencyGroup: 'USDT',
        tokenSymbol: 'USDTAVAX',
        decimal_point: 6,
        tokenType: 'AVAX - C Chain',
        blockchain: 'Avalanche C-Chain',
        explorer: 'https://snowtrace.io/tx/',
        listingDate: '2022-06-02T07:00:00.000Z',
        blockchainName: 'AVAX - C Chain',
        logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/AVAX.svg',
      },
    ],
  },
];
