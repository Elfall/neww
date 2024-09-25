"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import WelcomeCard from '../components/WelcomeCard';
import MetricCard from '../components/MetricCard';
import WalletCard from '../components/WalletCard';
import Calendar from '../components/Calendar';
import FinancialGoals from '../components/FinancialGoals';
import BudgetOverview from '../components/BudgetOverview';
import FinancialSummary from '../components/FinancialSummary';
import RecentExpenses from '../components/RecentExpenses';
import ScholarshipOverview from '../components/ScholarshipOverview';
import PortfolioDistribution from '../components/PortfolioDistribution';
import FinancialTrends from '../components/FinancialTrends';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <WelcomeCard balance={12500} percentage={5} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricCard title="Total Users" value={1234} change={15} icon={<span>👥</span>} />
        <MetricCard title="Active Users" value={789} change={-5} icon={<span>🏃</span>} />
        <MetricCard title="Revenue" value={10234} change={20} icon={<span>💰</span>} />
      </div>
      <WalletCard title="Main Wallet" balance={5000} change={2.5} currency="€" color="from-blue-500 to-blue-700" />
      <Calendar />
      <FinancialGoals />
      <BudgetOverview />
      <FinancialSummary />
      <RecentExpenses />
      <ScholarshipOverview />
      <PortfolioDistribution />
      <FinancialTrends />
    </main>
  );
}