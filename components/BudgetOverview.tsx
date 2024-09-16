import React from 'react'

const BudgetOverview: React.FC = () => {
  // This would typically fetch data from your backend or Firestore
  const budgets = [
    { category: 'Rent', allocated: 1000, spent: 1000 },
    { category: 'Food', allocated: 500, spent: 450 },
    { category: 'Entertainment', allocated: 200, spent: 180 },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Budget Overview</h2>
      {budgets.map((budget, index) => (
        <div key={index} className="mb-2">
          <p>{budget.category}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${(budget.spent / budget.allocated) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">
            ${budget.spent} / ${budget.allocated}
          </p>
        </div>
      ))}
    </div>
  )
}

export default BudgetOverview