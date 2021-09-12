import qs from 'query-string';
import { Place, Weather } from 'types';
import { fetcher } from 'utils';
import { URLS, API_KEY } from 'constants/api';

export interface FetchWeatherDetailParams extends Place {}

export const fetchWeatherDetail = (fetchParams: FetchWeatherDetailParams | null) => {
  return (): Promise<Weather | null> | null => {
    if (!fetchParams) {
      return null;
    }
    const queryString = qs.stringify({
      ...fetchParams,
      APPID: API_KEY,
      lang: 'vi',
    });
    return fetcher<Weather>({
      uri: `${URLS.WEATHER}?${queryString}`,
      method: 'GET',
    });
  };
};
