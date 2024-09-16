import React from 'react'

const FinancialSummary: React.FC = () => {
  // This would typically fetch data from your backend or Firestore
  const totalSavings = 5000
  const totalExpenses = 1500

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Financial Summary</h2>
      <p>Total Savings: ${totalSavings}</p>
      <p>Total Expenses: ${totalExpenses}</p>
    </div>
  )
}

export default FinancialSummary