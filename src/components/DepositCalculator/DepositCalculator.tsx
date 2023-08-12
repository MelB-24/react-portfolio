import React from 'react';

const DepositCalculator: React.FC<DepositCalculatorProps> = ({
  startingAmount,
  interestRatePercent,
  investmentTermMonths,
  interestPaid,
}) => {
  console.log('DepositCalculator component');

  return (
    <>hi</>
  );
};

interface DepositCalculatorProps {
  startingAmount: number
  interestRatePercent: number
  investmentTermMonths: number
  interestPaid: 'month' | 'quarter' | 'annual' | 'maturity'
}

export default DepositCalculator;
