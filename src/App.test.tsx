import React from 'react';
import { render, screen } from '@testing-library/react';
import DepositCalculator from './components/DepositCalculator';

const startingAmount = 10000;
const interestRatePercent = 1.1;
const investmentTermMonths = 24;
const interestPaid = 'month';
const finalBalance = 10222;

describe('Term Deposit Calculator', () => {
  test('correctly calculates and displays the final balance', () => {
    render(
      <DepositCalculator />,
    );

    const finalBalanceElement = screen.getByTestId('final-balance');
    expect(finalBalanceElement).toHaveTextContent(finalBalance.toString());
  });
});
