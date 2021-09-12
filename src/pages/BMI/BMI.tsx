import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from 'components/Button/Button';
import { calculateBMI } from 'utils';
import './BMI.scss';
import { BMI } from 'types';
import { ROUTES } from 'constants/routes';
export type BMIPageProps = {};
export const BMIPage: React.FC<BMIPageProps> = () => {
  const { push } = useHistory();
  const bmi = useParams<BMI>();
  const result = calculateBMI(bmi);
  function goBack() {
    push(ROUTES.ROOT);
  }
  return (
    <div className={'d-flex align-center justify-center bmi-page flex-column'}>
      <h3 className={'font-weight-bold text-uppercase title m-0'}>Your Result</h3>
      <h2 className={'text-purple result mb-1 mt-2'}>{result.result}</h2>
      <p className={'mt-2'}>{result.description}</p>
      <img src={result.image} alt={result.description} />
      <Button isGhost onClick={goBack} className={'mt-5'}>
        Go Back
      </Button>
    </div>
  );
};

export default BMIPage;
