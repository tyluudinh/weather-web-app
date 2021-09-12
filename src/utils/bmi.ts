import { BMI, BMIResult } from '../types';

export const calculateBMI = (bmi: BMI): BMIResult => {
  const bmiResult: BMIResult = {
    ...bmi,
    result: +(bmi.weight / (bmi.height * bmi.height)).toFixed(1),
    image: '/images/weight_extreme_obesity.svg',
    description: 'Extreme Obesity',
  };
  if (bmiResult.result < 18.5) {
    bmiResult.image = '/images/weight_under.svg';
    bmiResult.description = 'Under Weight';
  } else {
    if (bmiResult.result <= 24.9) {
      bmiResult.image = '/images/weight_normal.svg';
      bmiResult.description = 'Normal Weight';
    } else {
      if (bmiResult.result <= 29.9) {
        bmiResult.image = '/images/weight_over.svg';
        bmiResult.description = 'Overweight';
      } else {
        if (bmiResult.result <= 39.9) {
          bmiResult.image = '/images/weight_obesity.svg';
          bmiResult.description = 'Obesity';
        }
      }
    }
  }
  return bmiResult;
};
