import { useQuery, UseQueryResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';

import { priceChangesAPI } from '../config/trade';
import { APIResponse, ResponseCode } from '../types/apiResponse';
import type { PriceChangesListType, PriceChangesResponse } from '../types/entities/trade';

const clientSideServiceEndpoint = 'https://api.pintu.co.id/v2';
export const priceChangesEndpoint = `${clientSideServiceEndpoint}${priceChangesAPI}`;
// get price changes data
export async function getTradePriceChanges() {
  let url = priceChangesEndpoint;

  const res: AxiosResponse<APIResponse<PriceChangesListType>> = await axios(url);

  if (res.data.code != ResponseCode.SUCCESS) {
    throw res;
  }

  return res;
}

export const useGetTradePriceChanges = (): UseQueryResult<PriceChangesResponse> => {
  return useQuery(
    ['tradePriceChanges'],
    async () => {
      const { data } = await getTradePriceChanges();
      return data;
    },
    {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  );
};
