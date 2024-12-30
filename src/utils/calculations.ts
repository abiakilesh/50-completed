// Utility functions for financial calculations
export const calculateProfit = (totalCollection: string, totalExpenses: string): string => {
  const collection = parseFloat(totalCollection) || 0;
  const expenses = parseFloat(totalExpenses) || 0;
  return (collection - expenses).toString();
};

export const calculateTotalExpenses = (
  dieselAmount: string,
  laborCharge: string,
  drSalary: string,
  rtoPC: string,
  miscellaneous: string
): string => {
  const diesel = parseFloat(dieselAmount) || 0;
  const labor = parseFloat(laborCharge) || 0;
  const salary = parseFloat(drSalary) || 0;
  const rto = parseFloat(rtoPC) || 0;
  const misc = parseFloat(miscellaneous) || 0;
  
  return (diesel + labor + salary + rto + misc).toString();
};