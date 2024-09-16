import React from 'react'

const FinancialGoals: React.FC = () => {
  // This would typically fetch data from your backend or Firestore
  const goals = [
    { name: 'Emergency Fund', target: 5000, current: 2500 },
    { name: 'Textbook Savings', target: 1000, current: 750 },
    { name: 'Graduation Trip', target: 3000, current: 1000 },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Financial Goals</h2>
      {goals.map((goal, index) => (
        <div key={index} className="mb-2">
          <p>{goal.name}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${(goal.current / goal.target) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">
            ${goal.current} / ${goal.target}
          </p>
        </div>
      ))}
    </div>
  )
}

export default FinancialGoals