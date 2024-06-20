import { useState } from 'react';

export const useDateCalculation = () => {
  const [dateResult, setDateResult] = useState('');

  const calculateDateDifference = (startDate: Date, endDate: Date) => {
    if (startDate < endDate) {
      const timeDiff = endDate.getTime() - startDate.getTime();
      const days = timeDiff / (1000 * 3600 * 24);
      const weeks = days / 7;
      const months = days / 30;
      setDateResult(`Difference: ${days.toFixed(2)} days, ${weeks.toFixed(2)} weeks, ${months.toFixed(2)} months.`);
    } else {
      setDateResult("Please enter valid dates. Date A should be before Date B.");
    }
  };

  const calculateFutureDate = (startDate: Date, daysToAdd: number) => {
    const futureDate = new Date(startDate);
    futureDate.setDate(futureDate.getDate() + daysToAdd);
    setDateResult(`Future Date: ${futureDate.toDateString()}.`);
  };

  return { dateResult, calculateDateDifference, calculateFutureDate };
};
