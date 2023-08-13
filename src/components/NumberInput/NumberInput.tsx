import React from 'react';

import {
  NumberInputContainer, Input, InputLabel,
} from './Styles';

const NumberInput: React.FC<NumberInputProps> = ({ value, setValue, label, htmlFor }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const validInput = /^(\d+(\.\d{0,2})?)?$/.test(inputValue);

    if (validInput) {
      setValue(inputValue);
    }
  };

  return (
    <NumberInputContainer>
      <InputLabel htmlFor={htmlFor}>{label}</InputLabel>
      <Input
        id={htmlFor}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </NumberInputContainer>
  );
};

interface NumberInputProps {
  value: string
  setValue: (value: string) => void
  label: string
  htmlFor: string
}

export default NumberInput;
