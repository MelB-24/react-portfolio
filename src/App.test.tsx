import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DepositCalculator from './components/DepositCalculator';

const startingAmount = '10000';
const interestRatePercent = '2.7';
const investmentTermMonths = '24';
const interestPaidLabel = 'Quarterly';
const finalBalance = '$10,553';

describe('Term Deposit Calculator', () => {
  test('correctly calculates and displays the final balance', () => {
    render(
      <DepositCalculator />,
    );

    const depositInput = screen.getByLabelText('Starting Deposit ($)');
    fireEvent.change(depositInput, { target: { value: startingAmount } });
    expect(depositInput).toHaveValue(startingAmount);

    const interestRateInput = screen.getByLabelText('Interest Rate (% p.a.)');
    fireEvent.change(interestRateInput, { target: { value: interestRatePercent } });
    expect(interestRateInput).toHaveValue(interestRatePercent);

    const investmentTermInput = screen.getByLabelText('Investment Term (months)');
    fireEvent.change(investmentTermInput, { target: { value: investmentTermMonths } });
    expect(investmentTermInput).toHaveValue(investmentTermMonths);

    const interestPaidQuarterlyRadio = screen.getByLabelText(interestPaidLabel);
    fireEvent.click(interestPaidQuarterlyRadio);
    expect(interestPaidQuarterlyRadio).toBeChecked();

    const finalBalanceElement = screen.getByTestId('final-balance');
    expect(finalBalanceElement).toHaveTextContent(`Final Balance: ${finalBalance}`);
  });
});
