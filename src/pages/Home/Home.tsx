import * as React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Place, BMI, defaultBMI } from 'types';
import { getCurrentLocation } from 'services';
import { WeatherDetail } from './WeatherDetail';
import { BMIForm } from './BMIForm';
import { ROUTES } from 'constants/routes';

export type HomePageProps = {};
export const HomePage: React.FC<HomePageProps> = () => {
  const [place, setPlace] = React.useState<Place | null>(null);
  const [bmi, setBMI] = React.useState<BMI>(defaultBMI);
  const { push } = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCurrentLocation();
      setPlace(result);
    };
    fetchData();
  }, []);
  function onCalculateBMI(e: BMI) {
    setBMI(e);
    push(`${ROUTES.BMI}/${e.height}/${e.weight}`);
  }

  return (
    <div>
      <WeatherDetail place={place} />
      <BMIForm bmi={bmi} onCalculate={(e) => onCalculateBMI(e)} />
    </div>
  );
};

export default HomePage;
