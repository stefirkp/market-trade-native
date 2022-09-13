import { useQuery, UseQueryResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';

import { supportedCurrenciesAPI } from '../config/wallet';
import { APIResponse, ResponseCode } from '../types/apiResponse';
import type {
  SupportedCurrenciesListType,
  SupportedCurrenciesResponse,
} from '../types/entities/wallet';

const clientSideServiceEndpoint = 'https://api.pintu.co.id/v2';
export const supportedCurrenciesEndpoint = `${clientSideServiceEndpoint}${supportedCurrenciesAPI}`;

// get supported currenccies data
export async function getSupportedCurrencies() {
  let url = supportedCurrenciesEndpoint;

  const res: AxiosResponse<APIResponse<SupportedCurrenciesListType>> = await axios(url);

  if (res.data.code != ResponseCode.SUCCESS) {
    throw res;
  }

  return res;
}

export const useGetSupportedCurrencies = (): UseQueryResult<SupportedCurrenciesResponse> => {
  return useQuery(
    ['suppurtedCurrencies'],
    async () => {
      const { data } = await getSupportedCurrencies();
      return data;
    },
    {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  );
};
