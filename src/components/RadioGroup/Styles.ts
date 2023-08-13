import styled from 'styled-components';

export const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const RadioButtonWrapper = styled.div`
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;

export const GroupLabel = styled.label`
  margin-bottom: 0.3rem;
  font-size: 1.1rem;
`;

export const RadioButton = styled.input`
  visibility: hidden;
`;

export const ButtonLabel = styled.label<{ checked: boolean }>`
  font-size: 0.9rem;
  padding: 0.3rem 1.1rem;
  border-radius: 1.5rem;
  background: ${({ checked }) => (checked ? '#493EE3;' : '#498EE3;')};
  color: white;
  cursor: pointer;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.3rem;
`;
