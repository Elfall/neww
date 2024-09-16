import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/router'
import FinancialSummary from '../components/FinancialSummary'
import BudgetOverview from '../components/BudgetOverview'
import RecentExpenses from '../components/RecentExpenses'
import ScholarshipOverview from '../components/ScholarshipOverview'
import FinancialGoals from '../components/FinancialGoals'

const Dashboard: React.FC = () => {
  const { user, loading } = useAuth()
  const router = useRouter()

  if (loading) return <div>Loading...</div>

  if (!user) {
    router.push('/login')
    return null
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Student Finance Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <FinancialSummary />
        <BudgetOverview />
        <RecentExpenses />
        <ScholarshipOverview />
        <FinancialGoals />
      </div>
    </div>
  )
}

export default Dashboard