import React, { useState } from 'react';
import { NumberInput } from 'components/NumberInput';
import { Button } from 'components/Button';
import Layout from 'components/Layout';
import BackButton from 'components/BackButton';
import { useTwoNumberCalculation } from 'hooks/useTwoNumberCalculation';

const DifferenceCalculationPage = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');

  const [baseValue, setBaseValue] = useState('');
  const [percentage, setPercentage] = useState('');
  const { percentageResult, valueAfterPercentageChange, calculateEqualPercentage, calculateIncreasePercentage, calculateDecreasePercentage, increaseValueByPercentage, decreaseValueByPercentage } = useTwoNumberCalculation();

  const handleFirstNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => setFirstNumber(e.target.value);
  const handleSecondNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => setSecondNumber(e.target.value);
  const handlePercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => setPercentage(e.target.value);
  const handleBaseValueChange = (e: React.ChangeEvent<HTMLInputElement>) => setBaseValue(e.target.value);

  return (
    <Layout>
      <BackButton />
      <div className="flex flex-wrap -mx-4">
        <section className="w-full md:w-1/2 px-4 ">
          <div className="bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-semibold mb-4">Difference Calculation Tool</h2>
            <NumberInput id="firstNumber" label="First Number:" placeholder="Enter first number" value={firstNumber} onChange={handleFirstNumberChange} />
            <NumberInput id="secondNumber" label="Second Number:" placeholder="Enter second number" value={secondNumber} onChange={handleSecondNumberChange} />
            <div className="mb-4 flex gap-2">
              <div data-tip="Ex: (Base Value / Compare Value) * 100 = Result%" className="tooltip" data-placement="bottom">
                <Button id="percentageEqual" label="Calculate % Between 2 Number" color="primary" onClick={() => calculateEqualPercentage(Number(firstNumber), Number(secondNumber))} />
              </div>
              <div data-tip="Ex: ((New Value - Initial Value) / Initial Value) * 100 = Result%" className="tooltip" data-placement="bottom">
                <Button id="percentageIncrease" label="Calculate % Increase" color="neutral" onClick={() => calculateIncreasePercentage(Number(firstNumber), Number(secondNumber))} />
              </div>
              <div data-tip="Ex: ((Initial Value - New Value) / Initial Value) * 100 = Result%" className="tooltip" data-placement="bottom">
                <Button id="percentageDecrease" label="Calculate % Decrease" color="accent" onClick={() => calculateDecreasePercentage(Number(firstNumber), Number(secondNumber))} />
              </div>
            </div>
            <div id="differenceResult" className="mt-4 text-lg font-semibold">{percentageResult}</div>
          </div>
        </section>
        <section className="w-full md:w-1/2 px-4">
          <div className="bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-semibold mb-4">Percent Calculations</h2>
            <NumberInput label="Base Value:" placeholder="Enter base value" value={baseValue} onChange={handleBaseValueChange} />
            <NumberInput label="Percentage:" placeholder="Enter percentage" value={percentage} onChange={handlePercentageChange} />
            <div className="mb-4 flex gap-2">
              <Button id="increaseByPercent" label="Increase Base by %" color="success" onClick={() => increaseValueByPercentage(Number(baseValue), Number(percentage))} />
              <Button id="decreaseByPercent" label="Decrease Base by %" color="warning" onClick={() => decreaseValueByPercentage(Number(baseValue), Number(percentage))} />
            </div>
            <div id="percentResult" className="mt-4 text-lg font-semibold">{valueAfterPercentageChange}</div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DifferenceCalculationPage;