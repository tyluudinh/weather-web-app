import * as React from 'react';
import { useState } from 'react';
import { BMI } from 'types';
import './BMIForm.scss';
import { Button } from 'components/Button';
import { InputRange } from 'components/Input';
export type BMIFormProps = {
  bmi: BMI;
  onCalculate: (e: BMI) => void;
};
export const BMIForm: React.FC<BMIFormProps> = ({ bmi, onCalculate }) => {
  const [bmiInput, setBmiInput] = useState<BMI>(bmi);
  return (
    <div className={'bmi-form'}>
      <p className={'text-uppercase text-purple m-0'}>Calculate</p>
      <h2 className={'text-uppercase text-purple m-0 font-weight-bold'}>Your BMI</h2>
      <InputRange
        className={'mt-6'}
        division={10}
        label={'Height'}
        prefix={'m'}
        value={bmiInput.height}
        max={3}
        onChange={(e) => setBmiInput({ ...bmiInput, height: e })}
      />
      <InputRange
        className={'mb-6 mt-6'}
        label={'Weight'}
        prefix={' kg'}
        value={bmiInput.weight}
        max={200}
        onChange={(e) => setBmiInput({ ...bmiInput, weight: e })}
      />
      <Button onClick={() => onCalculate(bmiInput)} variant={'primary'} className={'width-100 mt-4 font-weight-bold'}>
        CALCULATE
      </Button>
    </div>
  );
};

export default BMIForm;
