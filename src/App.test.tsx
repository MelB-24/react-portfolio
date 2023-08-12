import React from 'react';
import { render, screen } from '@testing-library/react';
import DepositCalculator from './components/DepositCalculator';

describe('Term Deposit Calculator', () => {
  test('correctly calculates and displays the final balance', () => {
    const startingAmount = 10000;
    const interestRatePercent = 1.1;
    const investmentTermMonths = 24;
    const interestPaid = 'month';
    const finalBalance = 10222;

    render(
      <DepositCalculator
        startingAmount={startingAmount}
        interestRatePercent={interestRatePercent}
        investmentTermMonths={investmentTermMonths}
        interestPaid={interestPaid}
      />,
    );

    const finalBalanceElement = screen.getByTestId('final-balance');
    expect(finalBalanceElement).toHaveTextContent(finalBalance.toString());
  });
});
