import styled from 'styled-components';

export const DepositCalculatorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  margin-top: 5rem;
  margin-bottom: 3rem;
`;

export const CalcContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const SubmitButton = styled.button`
  width: 20%;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  margin-top: 0.5rem;
  border: 2px solid #9BE368;
  border-radius: 0.2rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;

  &:hover {
    background: #9BE368;
    color: white;
    transform: scale(0.9);
  }
`;
