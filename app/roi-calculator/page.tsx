"use client";

import { useState } from "react";

export default function ROICalculatorPage() {
  // Input states
  const [propertyValue, setPropertyValue] = useState<string>("");
  const [monthlyIncome, setMonthlyIncome] = useState<string>("");
  const [monthlyExpenses, setMonthlyExpenses] = useState<string>("");
  const [cashInvestment, setCashInvestment] = useState<string>("");
  const [growthRate, setGrowthRate] = useState<string>("");
  const [investmentTerm, setInvestmentTerm] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  // Calculate ROI
  const calculateROI = () => {
    const propertyValueNum = parseFloat(propertyValue) || 0;
    const monthlyIncomeNum = parseFloat(monthlyIncome) || 0;
    const monthlyExpensesNum = parseFloat(monthlyExpenses) || 0;
    const cashInvestmentNum = parseFloat(cashInvestment) || 0;
    const growthRateNum = parseFloat(growthRate) || 0;
    const investmentTermNum = parseFloat(investmentTerm) || 0;

    // Calculate annual income and expenses
    const annualIncome = monthlyIncomeNum * 12;
    const annualExpenses = monthlyExpensesNum * 12;
    const annualNetIncome = annualIncome - annualExpenses;

    // Basic ROI and yield (ignoring capital gain)
    const annualROI = cashInvestmentNum > 0 ? (annualNetIncome / cashInvestmentNum) * 100 : 0;
    const annualYield = propertyValueNum > 0 ? (annualNetIncome / propertyValueNum) * 100 : 0;

    // Capital growth calculation
    const futurePropertyValue = propertyValueNum * Math.pow(1 + growthRateNum / 100, investmentTermNum);
    const capitalGain = futurePropertyValue - propertyValueNum;

    // Total profit includes capital gain and income over term
    const totalProfit = annualNetIncome * investmentTermNum + capitalGain;
    const totalRoi = cashInvestmentNum > 0 ? (totalProfit / cashInvestmentNum) * 100 : 0;

    return {
      annualNetIncome,
      annualROI,
      annualYield,
      totalProfit,
      totalRoi,
    };
  };

  const results = showResults ? calculateROI() : null;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-[60px] 650:py-[80px] lg:py-[100px] px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
      <div className="max-w-[500px] mx-auto bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] shadow-lg p-6 lg:p-8">
        <h2 className="font-crimson text-[24px] md:text-[32px] leading-tight tracking-tight text-[#002f57] text-center mb-6">
          Return on Investment Calculator
        </h2>

        <form onSubmit={handleCalculate}>
          <div className="space-y-4 mb-6">
            <div>
              <label htmlFor="propertyValue" className="block font-manrope font-semibold text-[14px] leading-[20px] text-[#002f57] mb-2">
                Property Purchase Price (£)
              </label>
              <input
                type="number"
                id="propertyValue"
                value={propertyValue}
                onChange={(e) => setPropertyValue(e.target.value)}
                placeholder="e.g. 200000"
                min="0"
                step="0.01"
                className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
              />
            </div>

            <div>
              <label htmlFor="monthlyIncome" className="block font-manrope font-semibold text-[14px] leading-[20px] text-[#002f57] mb-2">
                Monthly Rental Income (£)
              </label>
              <input
                type="number"
                id="monthlyIncome"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                placeholder="e.g. 1500"
                min="0"
                step="0.01"
                className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
              />
            </div>

            <div>
              <label htmlFor="monthlyExpenses" className="block font-manrope font-semibold text-[14px] leading-[20px] text-[#002f57] mb-2">
                Monthly Expenses (£)
              </label>
              <input
                type="number"
                id="monthlyExpenses"
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(e.target.value)}
                placeholder="e.g. 200"
                min="0"
                step="0.01"
                className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
              />
            </div>

            <div>
              <label htmlFor="cashInvestment" className="block font-manrope font-semibold text-[14px] leading-[20px] text-[#002f57] mb-2">
                Cash Investment / Deposit (£)
              </label>
              <input
                type="number"
                id="cashInvestment"
                value={cashInvestment}
                onChange={(e) => setCashInvestment(e.target.value)}
                placeholder="e.g. 50000"
                min="0"
                step="0.01"
                className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
              />
            </div>

            <div>
              <label htmlFor="growthRate" className="block font-manrope font-semibold text-[14px] leading-[20px] text-[#002f57] mb-2">
                Expected Annual Growth Rate (%)
              </label>
              <input
                type="number"
                id="growthRate"
                value={growthRate}
                onChange={(e) => setGrowthRate(e.target.value)}
                placeholder="e.g. 3"
                min="0"
                step="0.1"
                className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
              />
            </div>

            <div>
              <label htmlFor="investmentTerm" className="block font-manrope font-semibold text-[14px] leading-[20px] text-[#002f57] mb-2">
                Investment Term (years)
              </label>
              <input
                type="number"
                id="investmentTerm"
                value={investmentTerm}
                onChange={(e) => setInvestmentTerm(e.target.value)}
                placeholder="e.g. 5"
                min="1"
                step="1"
                className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#002f57] hover:bg-[#003d70] text-white font-manrope font-semibold text-[16px] leading-[24px] rounded-[8px] transition-colors cursor-pointer"
          >
            Calculate
          </button>
        </form>

        {showResults && results && (
          <div className="mt-6 bg-[#F0F8FF] border border-[rgba(0,0,0,0.08)] rounded-[8px] p-6">
            <h3 className="font-crimson font-semibold text-[18px] leading-[24px] text-[#002f57] mb-4">
              Results
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-manrope font-semibold text-[16px] leading-[24px] text-[#333]">Annual Net Income:</span>
                <span className="font-manrope font-semibold text-[16px] leading-[24px] text-[#002f57]">{formatCurrency(results.annualNetIncome)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-manrope font-semibold text-[16px] leading-[24px] text-[#333]">Annual ROI:</span>
                <span className="font-manrope font-semibold text-[16px] leading-[24px] text-[#002f57]">{formatPercent(results.annualROI)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-manrope font-semibold text-[16px] leading-[24px] text-[#333]">Annual Yield:</span>
                <span className="font-manrope font-semibold text-[16px] leading-[24px] text-[#002f57]">{formatPercent(results.annualYield)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-manrope font-semibold text-[16px] leading-[24px] text-[#333]">Total Profit (incl. capital gain):</span>
                <span className="font-manrope font-semibold text-[16px] leading-[24px] text-[#002f57]">{formatCurrency(results.totalProfit)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-manrope font-semibold text-[16px] leading-[24px] text-[#333]">Total ROI (incl. capital gain):</span>
                <span className="font-manrope font-semibold text-[16px] leading-[24px] text-[#002f57]">{formatPercent(results.totalRoi)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
