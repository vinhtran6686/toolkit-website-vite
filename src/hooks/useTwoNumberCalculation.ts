import { useState } from "react";

export const useTwoNumberCalculation = () => {
  const [percentageResult, setPercentageResult] = useState<string>("");
  const [valueAfterPercentageChange, setValueAfterPercentageChange] =
    useState<string>("");

  const calculateEqualPercentage = (
    baseValue: number,
    compareValue: number
  ) => {
    const calculationResult: number = (baseValue / compareValue) * 100;
    setPercentageResult(
      `${baseValue} is ${calculationResult}% of ${compareValue}`
    );
  };

  const calculateIncreasePercentage = (
    initialValue: number,
    newValue: number
  ) => {
    const calculationResult: number =
      ((newValue - initialValue) / initialValue) * 100;
    setPercentageResult(`${initialValue} is increases by ${calculationResult}%`);
  };

  const calculateDecreasePercentage = (
    initialValue: number,
    newValue: number
  ) => {
    const calculationResult: number =
      ((initialValue - newValue) / initialValue) * 100;
    setPercentageResult(`${initialValue} is reduced by ${calculationResult}%`);
  };

  const increaseValueByPercentage = (
    initialValue: number,
    increasePercent: number
  ) => {
    const updatedValue: number =
      initialValue + (initialValue * increasePercent) / 100;
    setValueAfterPercentageChange(
      `After increasing by ${increasePercent}%, the value is ${updatedValue}`
    );
  };

  const decreaseValueByPercentage = (
    initialValue: number,
    decreasePercent: number
  ) => {
    const updatedValue: number =
      initialValue - (initialValue * decreasePercent) / 100;
    setValueAfterPercentageChange(
      `After decreasing by ${decreasePercent}%, the value is ${updatedValue}`
    );
  };

  return {
    percentageResult,
    valueAfterPercentageChange,
    calculateEqualPercentage,
    calculateIncreasePercentage,
    calculateDecreasePercentage,
    increaseValueByPercentage,
    decreaseValueByPercentage,
  };
};
