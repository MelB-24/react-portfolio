import React, { useState } from 'react';

import NumberInput from '../NumberInput';
import RadioGroup from '../RadioGroup';

import { CalcContainer, Heading, DepositCalculatorContainer } from './Styles';
import { calculateCompoundInterest, calculateSimpleInterest } from '../../lib/utils';

const DepositCalculator: React.FC<DepositCalculatorProps> = () => {
  const [startingAmount, setStartingAmount] = useState('10000');
  const [interestRatePercent, setInterestRatePercent] = useState('1.11');
  const [investmentTermMonths, setInvestmentTermMonths] = useState('12');
  const [interestPaidFreq, setInterestPaidFreq] = useState('month');

  const radioOptions = [
    {
      label: 'Monthly',
      value: 'month',
    },
    {
      label: 'Quarterly',
      value: 'quarter',
    },
    {
      label: 'Annually',
      value: 'annual',
    },
    {
      label: 'At Maturity',
      value: 'at-maturity',
    },
  ];

  const finalBalance = () => {
    let result = 0;
    if (interestPaidFreq === 'at-maturity') {
      result = calculateSimpleInterest({
        initialDeposit: startingAmount,
        interestRate: interestRatePercent,
        investmentMonths: investmentTermMonths,
      });
    } else {
      result = calculateCompoundInterest({
        frequency: interestPaidFreq,
        initialDeposit: startingAmount,
        interestRate: interestRatePercent,
        investmentMonths: investmentTermMonths,
      });
    }

    const formattedResult = (result || 0).toLocaleString('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formattedResult;
  };

  return (
    <DepositCalculatorContainer>
      <Heading>Term Deposit Calculator</Heading>
      <CalcContainer>
        <NumberInput
          value={startingAmount}
          setValue={setStartingAmount}
          label="Starting Deposit ($)"
          htmlFor="starting-deposit"
        />
        <NumberInput
          value={interestRatePercent}
          setValue={setInterestRatePercent}
          label="Interest Rate (% p.a.)"
          htmlFor="interest-rate"
        />
        <NumberInput
          value={investmentTermMonths}
          setValue={setInvestmentTermMonths}
          label="Investment Term (months)"
          htmlFor="invetment-term"
        />
        <RadioGroup value={interestPaidFreq} setValue={setInterestPaidFreq} label="Interest Paid" radioOptions={radioOptions} />
      </CalcContainer>
      <p data-testid="final-balance">
        Final Balance:
        {' '}
        {finalBalance()}
      </p>
    </DepositCalculatorContainer>
  );
};

interface DepositCalculatorProps { }

export default DepositCalculator;
