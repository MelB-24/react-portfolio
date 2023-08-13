export const convertPercentToDecimals = (percent: string) => (
  parseFloat(percent) / 100
);

export const convertMonthToYears = (months: string) => (
  parseInt(months, 10) / 12
);

/**
 * Function to calculate compounding interest, to be used when frequency of interest
 * paid is monthly, quarterly or annually.
 * @param initialDeposit - amount customer deposits at start, string
 * @param interestRate - interest rate as a percent per annum, string
 * @param investmentMonths - length of term deposit in months, string
 * @param frequency - frequency of interest paid, valid strings are 'month', 'quarter' or 'annual'
 * @returns finalAmount represented as a number
 */
export const calculateCompoundInterest = ({
  initialDeposit,
  interestRate,
  investmentMonths,
  frequency,
}: {
  initialDeposit: string,
  interestRate: string,
  investmentMonths: string,
  frequency: string,
}) => {
  const percentInDecimals = convertPercentToDecimals(interestRate);
  const depositAmount = parseInt(initialDeposit, 10);

  const timesPerYearCompounded = () => {
    if (frequency === 'month') return 12;
    if (frequency === 'quarter') return 4;
    if (frequency === 'annual') return 1;
    return 0;
  };

  const timeInYears = convertMonthToYears(investmentMonths);

  const interestEarned = (1 + percentInDecimals / timesPerYearCompounded()) ** (timesPerYearCompounded() * timeInYears);

  const finalAmount = depositAmount * interestEarned;

  return finalAmount;
};

/**
 * Function to calculate simple interest, to be used when frequency of interest paid
 * is At Maturity
 * @param initialDeposit - amount customer deposits at start, string
 * @param interestRate - interest rate as a percent per annum, string
 * @param investmentMonths - length of term deposit in months, string
 * @returns finalAmount represented as a number
 */
export const calculateSimpleInterest = ({
  initialDeposit,
  interestRate,
  investmentMonths,
}: {
  initialDeposit: string,
  interestRate: string,
  investmentMonths: string,
}) => {
  const percentInDecimals = convertPercentToDecimals(interestRate);
  const depositAmount = parseInt(initialDeposit, 10);
  const timeInYears = convertMonthToYears(investmentMonths);

  const interestEarned = depositAmount * percentInDecimals * timeInYears;

  return depositAmount + interestEarned;
};
