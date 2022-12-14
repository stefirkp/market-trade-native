import { rest } from 'msw';
import { priceChangesEndpoint } from '../../services/trade';
import { priceChangesListMock } from '../data/trade';

import { ResponseCode, SuccessResponse } from '../../types/apiResponse';
import type { PriceChangesListType } from '../../types/entities/trade';

export const getTradePriceChanges = rest.get(priceChangesEndpoint, async (_, res, ctx) => {
  return res(
    ctx.json<SuccessResponse<PriceChangesListType>>({
      code: ResponseCode.SUCCESS,
      payload: priceChangesListMock,
      message: '',
    }),
  );
});

export const getTradePriceChangesError = rest.get(priceChangesEndpoint, async (_, res, ctx) => {
  return res(
    ctx.json({
      code: 'error',
      payload: null,
      message: '',
    }),
  );
});
