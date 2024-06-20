import React, { useState } from 'react';
import { Button } from 'components/Button';
import { useDateCalculation } from '../hooks/useDateCalculation';
import Layout from 'components/Layout';
import BackButton from 'components/BackButton';
import { DateInput } from 'components/DateInput';
import { NumberInput } from 'components/NumberInput';

const DateCalculationPage: React.FC = () => {
  const [dateA, setDateA] = useState('');
  const [dateB, setDateB] = useState('');
  const [daysToAdd, setDaysToAdd] = useState('');
  const { dateResult, calculateDateDifference, calculateFutureDate } = useDateCalculation();

  return (
    <Layout>
      <BackButton />
      <section className="bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-semibold mb-4">Date and Time Calculation Tool</h2>
        <DateInput id="dateA" label="Date Start (e.g., 14/06/2024):" value={dateA} onChange={(e) => setDateA(e.target.value)} />
        <DateInput id="dateB" label="Date End (e.g., 15/06/2024):" value={dateB} onChange={(e) => setDateB(e.target.value)} />
        <NumberInput id="daysToAdd" label="Find specific dates from the start date:" value={daysToAdd} onChange={(e) => setDaysToAdd(e.target.value)} placeholder={''} />
        <div className="mb-4 flex gap-2">
          <Button id="dateDifference" label="Calculate Date Difference" color="primary" onClick={() => calculateDateDifference(new Date(dateA), new Date(dateB))} />
          <Button id="calculateFutureDate" label="Calculate Future Date" color="neutral" onClick={() => calculateFutureDate(new Date(dateA), Number(daysToAdd))} />
        </div>
        <div id="dateResult" className="mt-4 text-lg font-semibold">{dateResult}</div>
      </section>
    </Layout>
  );
};

export default DateCalculationPage;