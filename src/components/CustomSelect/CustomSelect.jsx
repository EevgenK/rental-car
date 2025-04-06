import Select from 'react-select';
import { useState } from 'react';
import s from './CustomSelect.module.css';
import CustomArrowIcon from '../CustomArrowIcon/CustomArrowIcon';

const CustomSelect = ({ label, name, placeholder, setFieldValue, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    const value = selected.value;
    const displayValue = name === 'brand' ? value : `To $ ${value}`;
    setFieldValue(name, value);
    setSelectedOption({ label: displayValue, value });
  };

  const selectOptions = options.map((el) => ({ label: el, value: el }));

  return (
    <label className={s.label}>
      {label}
      <Select
        name={name}
        value={selectedOption}
        onChange={handleChange}
        options={selectOptions}
        placeholder={placeholder}
        classNamePrefix="custom"
        className={s.selectWrapper}
        onMenuOpen={() => setIsOpen(true)}
        onMenuClose={() => setIsOpen(false)}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => <CustomArrowIcon isOpen={isOpen} />,
        }}
      />
    </label>
  );
};

export default CustomSelect;
