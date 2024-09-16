import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../lib/firebase/config'

const ExpenseLogger: React.FC = () => {
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')

  const categories = [
    'Tuition', 'Books', 'Housing', 'Food', 'Transportation', 'Entertainment', 'Other'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'expenses'), {
        amount: parseFloat(amount),
        category,
        date,
        createdAt: new Date(),
      })
      setAmount('')
      setCategory('')
      setDate('')
      alert('Expense logged successfully!')
    } catch (error) {
      console.error('Error logging expense:', error)
      alert('Failed to log expense')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="w-full p-2 border rounded"
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Log Expense
      </button>
    </form>
  )
}

export default ExpenseLogger