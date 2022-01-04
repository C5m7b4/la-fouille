import React, { FC } from 'react';
import ToggleSwitch from '../toggle';

export interface TogglesProps {
  toggleDivClassName?: string;
  toggleDivStyle?: object;
  toggleMainDivStyle?: object;
  toggleMainDivClassName?: string;
  toggleInputClassName?: string;
  toggleInputStyle?: object;
  toggleLabelClassName?: string;
  toggleLabelStyle?: object;
  toggleLabelSpan1ClassName?: string;
  toggleLabelSpan2ClassName?: string;
  handleSearchChange: () => void;
  liveShowSearch: boolean;
  handleSortChange: () => void;
  liveShowSort: boolean;
  handleFilterChange: () => void;
  liveShowFilter: boolean;
}

const Toggles: FC<TogglesProps> = ({
  toggleDivClassName = '',
  toggleDivStyle,
  toggleMainDivStyle,
  toggleMainDivClassName,
  toggleInputClassName,
  toggleInputStyle,
  toggleLabelClassName,
  toggleLabelStyle,
  toggleLabelSpan1ClassName,
  toggleLabelSpan2ClassName,
  handleSearchChange,
  liveShowSearch = false,
  handleSortChange,
  liveShowSort = false,
  handleFilterChange,
  liveShowFilter = false,
}) => {
  return (
    <div className={toggleDivClassName} style={toggleDivStyle}>
      <span>
        <label>Show Search: </label>
        <ToggleSwitch
          mainDivStyle={toggleMainDivStyle}
          mainDivClassName={toggleMainDivClassName}
          inputClassName={toggleInputClassName}
          inputStyle={toggleInputStyle}
          labelClassName={toggleLabelClassName}
          labelStyle={toggleLabelStyle}
          labelSpan1ClassName={toggleLabelSpan1ClassName}
          labelSpan2ClassName={toggleLabelSpan2ClassName}
          handleChange={handleSearchChange}
          active={liveShowSearch}
        />
      </span>
      <span>
        <label>Show Sorter: </label>
        <ToggleSwitch
          mainDivStyle={toggleMainDivStyle}
          mainDivClassName={toggleMainDivClassName}
          inputClassName={toggleInputClassName}
          inputStyle={toggleInputStyle}
          labelClassName={toggleLabelClassName}
          labelStyle={toggleLabelStyle}
          labelSpan1ClassName={toggleLabelSpan1ClassName}
          labelSpan2ClassName={toggleLabelSpan2ClassName}
          handleChange={handleSortChange}
          active={liveShowSort}
        />
      </span>
      <span>
        <label>Show Filters: </label>
        <ToggleSwitch
          mainDivStyle={toggleMainDivStyle}
          mainDivClassName={toggleMainDivClassName}
          inputClassName={toggleInputClassName}
          inputStyle={toggleInputStyle}
          labelClassName={toggleLabelClassName}
          labelStyle={toggleLabelStyle}
          labelSpan1ClassName={toggleLabelSpan1ClassName}
          labelSpan2ClassName={toggleLabelSpan2ClassName}
          handleChange={handleFilterChange}
          active={liveShowFilter}
        />
      </span>
    </div>
  );
};

export default Toggles;
