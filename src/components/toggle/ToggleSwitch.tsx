import React from 'react';
import './ToggleSwitch.css';

export interface IToggleProps {
  active: boolean;
  handleChange: () => void;
  mainDivClassName?: string;
  mainDivStyle?: object;
  inputClassName?: string;
  inputStyle?: object;
  labelClassName?: string;
  labelStyle?: object;
  labelSpan1ClassName?: string;
  labelSpan2ClassName?: string;
}

const ToggleSwitch = (props: IToggleProps) => {
  const {
    handleChange,
    active,
    mainDivClassName = 'toggle-switch',
    mainDivStyle,
    inputClassName = 'toggle-switch-checkbox',
    inputStyle,
    labelClassName = 'toggle-switch-label',
    labelSpan1ClassName = 'toggle-switch-inner',
    labelSpan2ClassName = 'toggle-switch-switch',
  } = props;

  return (
    <div
      className={mainDivClassName}
      style={mainDivStyle}
      onClick={handleChange}
    >
      <input
        type="checkbox"
        className={inputClassName}
        style={inputStyle}
        onChange={handleChange}
        checked={active}
      />
      <label className={labelClassName}>
        <span className={labelSpan1ClassName} />
        <span className={labelSpan2ClassName} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
