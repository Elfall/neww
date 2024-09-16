import React from 'react'

const RecentExpenses: React.FC = () => {
  // This would typically fetch data from your backend or Firestore
  const expenses = [
    { date: '2023-05-01', category: 'Groceries', amount: 75.50 },
    { date: '2023-05-02', category: 'Transportation', amount: 30.00 },
    { date: '2023-05-03', category: 'Entertainment', amount: 50.00 },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Recent Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className="mb-2">
            <p>{expense.date} - {expense.category}</p>
            <p className="font-semibold">${expense.amount.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentExpenses