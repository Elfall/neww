import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/router'

const ScholarshipsPage: React.FC = () => {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  if (loading) return <div>Loading...</div>

  if (!user) {
    router.push('/login')
    return null
  }

  // This would typically fetch data from your backend or Firestore
  const scholarships = [
    { id: 1, name: 'Merit Scholarship', amount: 5000, deadline: '2023-08-01', field: 'General' },
    { id: 2, name: 'STEM Grant', amount: 7500, deadline: '2023-07-15', field: 'STEM' },
    { id: 3, name: 'Community Service Award', amount: 3000, deadline: '2023-09-01', field: 'Social Sciences' },
    { id: 4, name: 'Future Leaders Scholarship', amount: 10000, deadline: '2023-10-01', field: 'Business' },
  ]

  const filteredScholarships = scholarships.filter(scholarship =>
    scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scholarship.field.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Scholarship Finder</h1>
      <input
        type="text"
        placeholder="Search scholarships..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredScholarships.map((scholarship) => (
          <div key={scholarship.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{scholarship.name}</h2>
            <p>Amount: ${scholarship.amount}</p>
            <p>Deadline: {scholarship.deadline}</p>
            <p>Field: {scholarship.field}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScholarshipsPage