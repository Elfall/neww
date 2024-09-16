import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/router'
import ExpenseLogger from '../components/ExpenseLogger'
import RecentExpenses from '../components/RecentExpenses'

const ExpensesPage: React.FC = () => {
  const { user, loading } = useAuth()
  const router = useRouter()

  if (loading) return <div>Loading...</div>

  if (!user) {
    router.push('/login')
    return null
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Log New Expense</h2>
          <ExpenseLogger />
        </div>
        <div>
          <RecentExpenses />
        </div>
      </div>
    </div>
  )
}

export default ExpensesPage