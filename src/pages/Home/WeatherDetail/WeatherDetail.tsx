import * as React from 'react';
import { useEffect, useState } from 'react';
import { isNightTime } from 'utils';
import { Place, ServiceError, Weather } from 'types';
import './WeatherDetail.scss';
import { useQuery } from 'react-query';
import { fetchWeatherDetail } from 'services';
export type WeatherDetailProps = {
  place: Place | null;
};
export const WeatherDetail: React.FC<WeatherDetailProps> = ({ place }) => {
  const { data, refetch } = useQuery<Weather | null, ServiceError>('weatherDetail', fetchWeatherDetail(place), {
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (place && !data) {
      refetch();
    }
  }, [place, refetch, data]);
  const [isNight] = useState(isNightTime());
  const kelvinToCelsius = (kelvin: number) => {
    return (kelvin - 273.15).toFixed(0);
  };
  return (
    <div className={`weather-detail weather-detail__bg-${isNight ? 'night' : 'mornig'}`}>
      <div className={'weather-detail__header'}>
        <div className={'weather-detail__header-col'}>
          <span className={'current-temp'}>
            {data?.main ? kelvinToCelsius(data.main.temp) : '--'}
            <span className={'celsius'}>&#8451;</span>
          </span>
          <span className={'location-name'}>{data?.name}</span>
        </div>
        <div className={'weather-detail__header-col'}>
          <img src={`/images/ic_${isNight ? 'moon' : 'sunny'}.svg`} alt="" />
          <span>{data?.weather[0]?.main}</span>
        </div>
      </div>
      <div className={'weather-detail__footer'}>
        <div className={'weather-detail__footer-col'}>
          <img src="/images/ic_humidity.svg" alt="" />
          <span>{data?.main?.humidity || '--'}%</span>
        </div>
        <div className={'weather-detail__footer-col'}>
          <img src="/images/ic_temp.svg" alt="" />
          <span>{data?.main ? kelvinToCelsius(data?.main?.temp_max) : '--'}&#8451;</span>
          <span>{data?.main ? kelvinToCelsius(data?.main?.temp_min) : '--'}&#8451;</span>
        </div>
        <div className={'weather-detail__footer-col'}>
          <img src="/images/ic_wind_speed.svg" alt="" />
          <span>{data?.wind?.speed || '--'} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
