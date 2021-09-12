import * as React from 'react';
import cn from 'classnames';
import './InputRange.scss';
export type InputRangeProps = {
  value: number;
  max: number;
  min?: number;
  label: string;
  prefix: string;
  backgroundColorValue?: string;
  division?: number;
  onChange: (e: number) => void;
} & React.ButtonHTMLAttributes<HTMLInputElement>;
export const InputRange: React.FC<InputRangeProps> = ({
  className,
  value,
  max,
  min = 0,
  label,
  prefix,
  backgroundColorValue = '#6655E5',
  onChange,
  division = 1,
}) => {
  return (
    <div className={cn('input-range w-100', className)}>
      <div className="d-flex justify-between">
        <span className={'label'}>{label}</span>
        <span className={'prefix'}>
          {value.toFixed(division === 1 ? 0 : 1)}
          {prefix}
        </span>
      </div>
      <input
        style={{
          background: `linear-gradient(to right, ${backgroundColorValue} 0%, ${backgroundColorValue} ${
            ((value - min) / (max - min)) * 100
          }%, #4B4B4B ${((value - min) / (max - min)) * 100}%, #4B4B4B 100%)`,
        }}
        className={'width-100'}
        onChange={(event) => onChange(+event.target.value / division)}
        type="range"
        max={max * division}
        value={value * division}
      />
    </div>
  );
};

export default InputRange;
