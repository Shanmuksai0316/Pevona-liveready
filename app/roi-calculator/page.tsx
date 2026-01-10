"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ROICalculatorPage() {
  // Input states
  const [propertyPrice, setPropertyPrice] = useState<string>("300000");
  const [downPayment, setDownPayment] = useState<string>("75000");
  const [loanAmount, setLoanAmount] = useState<string>("225000");
  const [interestRate, setInterestRate] = useState<string>("5.5");
  const [loanTerm, setLoanTerm] = useState<string>("25");
  const [monthlyRent, setMonthlyRent] = useState<string>("1500");
  const [annualRentIncrease, setAnnualRentIncrease] = useState<string>("3");
  const [vacancyRate, setVacancyRate] = useState<string>("5");
  const [propertyManagementFee, setPropertyManagementFee] = useState<string>("10");
  const [maintenanceCost, setMaintenanceCost] = useState<string>("1200");
  const [insuranceCost, setInsuranceCost] = useState<string>("800");
  const [propertyTax, setPropertyTax] = useState<string>("2400");
  const [otherExpenses, setOtherExpenses] = useState<string>("500");

  // Calculations
  const propertyPriceNum = parseFloat(propertyPrice) || 0;
  const downPaymentNum = parseFloat(downPayment) || 0;
  const loanAmountNum = parseFloat(loanAmount) || 0;
  const interestRateNum = parseFloat(interestRate) || 0;
  const loanTermNum = parseFloat(loanTerm) || 25;
  const monthlyRentNum = parseFloat(monthlyRent) || 0;
  const annualRentIncreaseNum = parseFloat(annualRentIncrease) || 0;
  const vacancyRateNum = parseFloat(vacancyRate) || 0;
  const propertyManagementFeeNum = parseFloat(propertyManagementFee) || 0;
  const maintenanceCostNum = parseFloat(maintenanceCost) || 0;
  const insuranceCostNum = parseFloat(insuranceCost) || 0;
  const propertyTaxNum = parseFloat(propertyTax) || 0;
  const otherExpensesNum = parseFloat(otherExpenses) || 0;

  // Monthly mortgage calculation
  const monthlyInterestRate = interestRateNum / 100 / 12;
  const numberOfPayments = loanTermNum * 12;
  const monthlyMortgagePayment =
    loanAmountNum > 0 && monthlyInterestRate > 0
      ? (loanAmountNum *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
      : 0;

  // Annual calculations
  const grossAnnualRent = monthlyRentNum * 12;
  const effectiveRent = grossAnnualRent * (1 - vacancyRateNum / 100);
  const propertyManagementCost = (effectiveRent * propertyManagementFeeNum) / 100;
  const totalAnnualExpenses =
    propertyManagementCost +
    maintenanceCostNum +
    insuranceCostNum +
    propertyTaxNum +
    otherExpensesNum;
  const netOperatingIncome = effectiveRent - totalAnnualExpenses;
  const annualMortgagePayments = monthlyMortgagePayment * 12;
  const cashFlow = netOperatingIncome - annualMortgagePayments;

  // ROI calculations
  const rentalYield = propertyPriceNum > 0 ? (effectiveRent / propertyPriceNum) * 100 : 0;
  const netYield = propertyPriceNum > 0 ? (netOperatingIncome / propertyPriceNum) * 100 : 0;
  const cashOnCashReturn = downPaymentNum > 0 ? (cashFlow / downPaymentNum) * 100 : 0;
  const capRate = propertyPriceNum > 0 ? (netOperatingIncome / propertyPriceNum) * 100 : 0;

  // 5-year projection
  const calculateProjection = (years: number) => {
    const projectedRent = grossAnnualRent * Math.pow(1 + annualRentIncreaseNum / 100, years);
    const projectedEffectiveRent = projectedRent * (1 - vacancyRateNum / 100);
    const projectedManagementCost = (projectedEffectiveRent * propertyManagementFeeNum) / 100;
    const projectedExpenses =
      projectedManagementCost +
      maintenanceCostNum +
      insuranceCostNum +
      propertyTaxNum +
      otherExpensesNum;
    const projectedNOI = projectedEffectiveRent - projectedExpenses;
    const projectedCashFlow = projectedNOI - annualMortgagePayments;
    return {
      year: years,
      rent: projectedRent,
      effectiveRent: projectedEffectiveRent,
      expenses: projectedExpenses,
      noi: projectedNOI,
      cashFlow: projectedCashFlow,
    };
  };

  const projections = [1, 2, 3, 4, 5].map(calculateProjection);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[850px] lg:h-[760px] overflow-hidden">
        <div className="relative max-w-[1920px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] z-10 h-full">
          {/* Mobile Background */}
          <div className="lg:hidden absolute inset-0 z-0 -mx-5 350:-mx-5 480:-mx-5 650:-mx-[60px]">
            <div className="relative w-full h-[850px] rounded-b-[24px] sm:rounded-b-[30px] overflow-hidden bg-gradient-to-br from-[#002f57] to-[#004a7a]">
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          {/* Desktop Background */}
          <div className="hidden lg:block absolute inset-0 z-0 -mx-[60px] lg:-mx-[80px] 1300:-mx-[80px] 1400:-mx-[80px] 1500:-mx-[100px] 1600:-mx-[130px]">
            <div className="relative w-full h-[760px] rounded-b-[36px] overflow-hidden bg-gradient-to-br from-[#002f57] to-[#004a7a]">
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          {/* Mobile Content */}
          <div className="lg:hidden relative flex items-end justify-center h-[850px] pb-[50px]">
            <div className="max-w-[780px] w-full text-center space-y-4 sm:space-y-6 text-white">
              <h1 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
                ROI Calculator
              </h1>
              <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
                Calculate your potential return on investment for UK property. Get instant insights into rental yield, cash flow, and long-term projections.
              </p>
            </div>
          </div>

          {/* Desktop Content */}
          <div className="hidden lg:block relative max-w-[780px] pt-[200px] sm:pt-[250px] md:pt-[300px] pb-[80px] sm:pb-[120px] md:pb-[150px] space-y-4 sm:space-y-6 text-white">
            <h1 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              ROI Calculator
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              Calculate your potential return on investment for UK property. Get instant insights into rental yield, cash flow, and long-term projections.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Input Form */}
          <div className="space-y-6">
            <h2 className="font-crimson text-[22px] md:text-[40px] leading-tight md:leading-[48px] tracking-tight md:tracking-[-0.06em] text-[#002f57]">
              Property Details
            </h2>

            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 space-y-6">
              {/* Property Price */}
              <div>
                <label className="block font-manrope font-medium text-[16px] leading-[24px] text-[#002f57] mb-2">
                  Property Purchase Price (£)
                </label>
                <input
                  type="number"
                  value={propertyPrice}
                  onChange={(e) => {
                    setPropertyPrice(e.target.value);
                    const price = parseFloat(e.target.value) || 0;
                    const down = parseFloat(downPayment) || 0;
                    setLoanAmount((price - down).toString());
                  }}
                  className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
                  placeholder="300000"
                />
              </div>

              {/* Down Payment */}
              <div>
                <label className="block font-manrope font-medium text-[16px] leading-[24px] text-[#002f57] mb-2">
                  Down Payment (£)
                </label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => {
                    setDownPayment(e.target.value);
                    const price = parseFloat(propertyPrice) || 0;
                    const down = parseFloat(e.target.value) || 0;
                    setLoanAmount((price - down).toString());
                  }}
                  className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
                  placeholder="75000"
                />
              </div>

              {/* Loan Amount (auto-calculated but editable) */}
              <div>
                <label className="block font-manrope font-medium text-[16px] leading-[24px] text-[#002f57] mb-2">
                  Loan Amount (£)
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#002f57]"
                  placeholder="225000"
                />
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block font-manrope font-medium text-[16px] leading-[24px] text-[#002f57] mb-2">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
                  placeholder="5.5"
                />
              </div>

              {/* Loan Term */}
              <div>
                <label className="block font-manrope font-medium text-[16px] leading-[24px] text-[#002f57] mb-2">
                  Loan Term (Years)
                </label>
                <input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
                  placeholder="25"
                />
              </div>
            </div>

            <h2 className="font-crimson text-[22px] md:text-[40px] leading-tight md:leading-[48px] tracking-tight md:tracking-[-0.06em] text-[#002f57] mt-8">
              Rental Income
            </h2>

            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 space-y-6">
              {/* Monthly Rent */}
              <div>
                <label className="block font-manrope font-medium text-[16px] leading-[24px] text-[#002f57] mb-2">
                  Monthly Rental Income (£)
                </label>
                <input
                  type="number"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
                  placeholder="1500"
                />
              </div>

              {/* Annual Rent Increase */}
              <div>
                <label className="block font-manrope font-medium text-[16px] leading-[24px] text-[#002f57] mb-2">
                  Annual Rent Increase (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={annualRentIncrease}
                  onChange={(e) => setAnnualRentIncrease(e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
                  placeholder="3"
                />
              </div>

              {/* Vacancy Rate */}
              <div>
                <label className="block font-manrope font-medium text-[16px] leading-[24px] text-[#002f57] mb-2">
                  Vacancy Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={vacancyRate}
                  onChange={(e) => setVacancyRate(e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
                  placeholder="5"
                />
              </div>
            </div>

            <h2 className="font-crimson text-[22px] md:text-[40px] leading-tight md:leading-[48px] tracking-tight md:tracking-[-0.06em] text-[#002f57] mt-8">
              Annual Expenses
            </h2>

            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 space-y-6">
              {/* Property Management Fee */}
              <div>
                <label className="block font-manrope font-medium text-[16px] leading-[24px] text-[#002f57] mb-2">
                  Property Management Fee (% of rent)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={propertyManagementFee}
                  onChange={(e) => setPropertyManagementFee(e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
                  placeholder="10"
                />
              </div>

              {/* Maintenance */}
              <div>
                <label className="block font-manrope font-medium text-[16px] leading-[24px] text-[#002f57] mb-2">
                  Maintenance & Repairs (£/year)
                </label>
                <input
                  type="number"
                  value={maintenanceCost}
                  onChange={(e) => setMaintenanceCost(e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
                  placeholder="1200"
                />
              </div>

              {/* Insurance */}
              <div>
                <label className="block font-manrope font-medium text-[16px] leading-[24px] text-[#002f57] mb-2">
                  Insurance (£/year)
                </label>
                <input
                  type="number"
                  value={insuranceCost}
                  onChange={(e) => setInsuranceCost(e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
                  placeholder="800"
                />
              </div>

              {/* Property Tax */}
              <div>
                <label className="block font-manrope font-medium text-[16px] leading-[24px] text-[#002f57] mb-2">
                  Property Tax / Council Tax (£/year)
                </label>
                <input
                  type="number"
                  value={propertyTax}
                  onChange={(e) => setPropertyTax(e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
                  placeholder="2400"
                />
              </div>

              {/* Other Expenses */}
              <div>
                <label className="block font-manrope font-medium text-[16px] leading-[24px] text-[#002f57] mb-2">
                  Other Expenses (£/year)
                </label>
                <input
                  type="number"
                  value={otherExpenses}
                  onChange={(e) => setOtherExpenses(e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[16px] focus:outline-none focus:ring-2 focus:ring-[#002f57]"
                  placeholder="500"
                />
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <div className="space-y-6">
            <h2 className="font-crimson text-[22px] md:text-[40px] leading-tight md:leading-[48px] tracking-tight md:tracking-[-0.06em] text-[#002f57]">
              Investment Metrics
            </h2>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6">
                <p className="font-manrope text-[14px] leading-[20px] text-[#666] mb-2">Rental Yield</p>
                <p className="font-crimson font-semibold text-[32px] leading-[40px] text-[#002f57]">
                  {formatPercent(rentalYield)}
                </p>
              </div>

              <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6">
                <p className="font-manrope text-[14px] leading-[20px] text-[#666] mb-2">Net Yield</p>
                <p className="font-crimson font-semibold text-[32px] leading-[40px] text-[#002f57]">
                  {formatPercent(netYield)}
                </p>
              </div>

              <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6">
                <p className="font-manrope text-[14px] leading-[20px] text-[#666] mb-2">Cash-on-Cash Return</p>
                <p className="font-crimson font-semibold text-[32px] leading-[40px] text-[#002f57]">
                  {formatPercent(cashOnCashReturn)}
                </p>
              </div>

              <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6">
                <p className="font-manrope text-[14px] leading-[20px] text-[#666] mb-2">Cap Rate</p>
                <p className="font-crimson font-semibold text-[32px] leading-[40px] text-[#002f57]">
                  {formatPercent(capRate)}
                </p>
              </div>
            </div>

            {/* Annual Breakdown */}
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 space-y-4">
              <h3 className="font-crimson font-semibold text-[24px] leading-[30px] text-[#002f57]">
                Annual Breakdown
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-[rgba(0,0,0,0.08)]">
                  <span className="font-manrope text-[16px] leading-[24px] text-[#333]">Gross Annual Rent</span>
                  <span className="font-manrope font-semibold text-[16px] leading-[24px] text-[#002f57]">
                    {formatCurrency(grossAnnualRent)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[rgba(0,0,0,0.08)]">
                  <span className="font-manrope text-[16px] leading-[24px] text-[#333]">
                    Less Vacancy ({vacancyRate}%)
                  </span>
                  <span className="font-manrope text-[16px] leading-[24px] text-[#666]">
                    -{formatCurrency(grossAnnualRent - effectiveRent)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[rgba(0,0,0,0.08)]">
                  <span className="font-manrope text-[16px] leading-[24px] text-[#333]">Effective Rent</span>
                  <span className="font-manrope font-semibold text-[16px] leading-[24px] text-[#002f57]">
                    {formatCurrency(effectiveRent)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[rgba(0,0,0,0.08)]">
                  <span className="font-manrope text-[16px] leading-[24px] text-[#333]">Property Management</span>
                  <span className="font-manrope text-[16px] leading-[24px] text-[#666]">
                    -{formatCurrency(propertyManagementCost)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[rgba(0,0,0,0.08)]">
                  <span className="font-manrope text-[16px] leading-[24px] text-[#333]">Maintenance</span>
                  <span className="font-manrope text-[16px] leading-[24px] text-[#666]">
                    -{formatCurrency(maintenanceCostNum)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[rgba(0,0,0,0.08)]">
                  <span className="font-manrope text-[16px] leading-[24px] text-[#333]">Insurance</span>
                  <span className="font-manrope text-[16px] leading-[24px] text-[#666]">
                    -{formatCurrency(insuranceCostNum)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[rgba(0,0,0,0.08)]">
                  <span className="font-manrope text-[16px] leading-[24px] text-[#333]">Property Tax</span>
                  <span className="font-manrope text-[16px] leading-[24px] text-[#666]">
                    -{formatCurrency(propertyTaxNum)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[rgba(0,0,0,0.08)]">
                  <span className="font-manrope text-[16px] leading-[24px] text-[#333]">Other Expenses</span>
                  <span className="font-manrope text-[16px] leading-[24px] text-[#666]">
                    -{formatCurrency(otherExpensesNum)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[rgba(0,0,0,0.12)]">
                  <span className="font-manrope font-semibold text-[16px] leading-[24px] text-[#333]">
                    Total Expenses
                  </span>
                  <span className="font-manrope font-semibold text-[16px] leading-[24px] text-[#002f57]">
                    -{formatCurrency(totalAnnualExpenses)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[rgba(0,0,0,0.12)]">
                  <span className="font-manrope font-semibold text-[18px] leading-[28px] text-[#002f57]">
                    Net Operating Income (NOI)
                  </span>
                  <span className="font-crimson font-semibold text-[20px] leading-[28px] text-[#002f57]">
                    {formatCurrency(netOperatingIncome)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[rgba(0,0,0,0.08)]">
                  <span className="font-manrope text-[16px] leading-[24px] text-[#333]">Mortgage Payments</span>
                  <span className="font-manrope text-[16px] leading-[24px] text-[#666]">
                    -{formatCurrency(annualMortgagePayments)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 pt-4 bg-[#FAFAFA] -mx-2 px-2 rounded-[8px]">
                  <span className="font-crimson font-semibold text-[20px] leading-[28px] text-[#002f57]">
                    Annual Cash Flow
                  </span>
                  <span
                    className={`font-crimson font-semibold text-[24px] leading-[32px] ${
                      cashFlow >= 0 ? "text-[#10b981]" : "text-[#ef4444]"
                    }`}
                  >
                    {formatCurrency(cashFlow)}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="font-manrope text-[14px] leading-[20px] text-[#666]">Monthly Cash Flow</span>
                  <span
                    className={`font-manrope font-semibold text-[16px] leading-[24px] ${
                      cashFlow >= 0 ? "text-[#10b981]" : "text-[#ef4444]"
                    }`}
                  >
                    {formatCurrency(cashFlow / 12)}
                  </span>
                </div>
              </div>
            </div>

            {/* 5-Year Projection */}
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 space-y-4">
              <h3 className="font-crimson font-semibold text-[24px] leading-[30px] text-[#002f57]">
                5-Year Projection
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[rgba(0,0,0,0.12)]">
                      <th className="text-left py-2 font-manrope font-semibold text-[14px] leading-[20px] text-[#002f57]">
                        Year
                      </th>
                      <th className="text-right py-2 font-manrope font-semibold text-[14px] leading-[20px] text-[#002f57]">
                        Rent
                      </th>
                      <th className="text-right py-2 font-manrope font-semibold text-[14px] leading-[20px] text-[#002f57]">
                        NOI
                      </th>
                      <th className="text-right py-2 font-manrope font-semibold text-[14px] leading-[20px] text-[#002f57]">
                        Cash Flow
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {projections.map((proj) => (
                      <tr key={proj.year} className="border-b border-[rgba(0,0,0,0.08)]">
                        <td className="py-3 font-manrope text-[16px] leading-[24px] text-[#333]">
                          Year {proj.year}
                        </td>
                        <td className="text-right py-3 font-manrope text-[16px] leading-[24px] text-[#333]">
                          {formatCurrency(proj.effectiveRent)}
                        </td>
                        <td className="text-right py-3 font-manrope text-[16px] leading-[24px] text-[#333]">
                          {formatCurrency(proj.noi)}
                        </td>
                        <td
                          className={`text-right py-3 font-manrope font-semibold text-[16px] leading-[24px] ${
                            proj.cashFlow >= 0 ? "text-[#10b981]" : "text-[#ef4444]"
                          }`}
                        >
                          {formatCurrency(proj.cashFlow)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] mb-[60px] lg:mb-[120px]">
        <div className="bg-[#002f57] rounded-[24px] p-8 lg:p-12 text-center space-y-6">
          <h2 className="font-crimson text-[22px] md:text-[40px] leading-tight md:leading-[48px] tracking-tight md:tracking-[-0.06em] text-white">
            Ready to Invest?
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-white/80 max-w-[720px] mx-auto">
            Our team can help you find investment properties that match your ROI goals. Book a consultation to discuss your property investment strategy.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[48px] px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

