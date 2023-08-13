import React from 'react';

import {
  RadioGroupContainer, RadioButtonWrapper, RadioButton, GroupLabel, ButtonLabel, ButtonRow,
} from './Styles';

const RadioGroup: React.FC<RadioGroupProps> = ({ value, setValue, label, radioOptions }) => (
  <RadioGroupContainer>
    <GroupLabel>{label}</GroupLabel>
    <ButtonRow>
      {radioOptions.map((option) => (
        <RadioButtonWrapper key={option.value}>
          <ButtonLabel htmlFor={option.value} checked={option.value === value}>{option.label}</ButtonLabel>
          <RadioButton
            id={option.value}
            type="radio"
            name="radio-group"
            value={option.value}
            checked={option.value === value}
            onChange={(e) => { setValue(e.target.value); }}
          />
        </RadioButtonWrapper>
      ))}
    </ButtonRow>
  </RadioGroupContainer>
);

interface RadioGroupProps {
  value: string
  setValue: (value: string) => void
  label: string
  radioOptions: { label: string; value: string }[]
}

export default RadioGroup;
