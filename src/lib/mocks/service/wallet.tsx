import { rest } from 'msw';
import { supportedCurrenciesEndpoint } from '../../services/wallet';
import { supportedCurrenciesListMock } from '../data/wallet';

import { ResponseCode, SuccessResponse } from '../../types/apiResponse';
import type { SupportedCurrenciesListType } from '../../types/entities/wallet';

export const getSupportedCurrencies = rest.get(supportedCurrenciesEndpoint, async (_, res, ctx) => {
  return res(
    ctx.json<SuccessResponse<SupportedCurrenciesListType>>({
      code: ResponseCode.SUCCESS,
      payload: supportedCurrenciesListMock,
      message: '',
    }),
  );
});

export const getSupportedCurrenciesError = rest.get(
  supportedCurrenciesEndpoint,
  async (_, res, ctx) => {
    return res(
      ctx.json({
        code: 'error',
        payload: null,
        message: '',
      }),
    );
  },
);
