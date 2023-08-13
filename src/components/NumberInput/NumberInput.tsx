import React from 'react';

import {
  NumberInputContainer, Input, InputLabel,
} from './Styles';

const NumberInput: React.FC<NumberInputProps> = ({ value, setValue, label, htmlFor }) => {
  // TODO: on blur, wanted to format the string to currency
  // const formatAsAUD = () => {
  //   const validInput = /^(\d+(\.\d{0,2})?)?$/.test(value);

  //   if (validInput) {
  //     // Format the value as Australian dollars
  //     const formattedValue = parseFloat(value || '0').toLocaleString('en-AU', {
  //       style: 'currency',
  //       currency: 'AUD',
  //       minimumFractionDigits: 2,
  //       maximumFractionDigits: 2,
  //     });

  //     setValue(formattedValue);
  //   }
  // };

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
        // onBlur={formatAsAUD}
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
