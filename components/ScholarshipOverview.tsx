import React from 'react'
import Link from 'next/link'

const ScholarshipOverview: React.FC = () => {
  // This would typically fetch data from your backend or Firestore
  const scholarships = [
    { id: 1, name: 'Merit Scholarship', deadline: '2023-08-01' },
    { id: 2, name: 'STEM Grant', deadline: '2023-07-15' },
    { id: 3, name: 'Community Service Award', deadline: '2023-09-01' },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Scholarship Opportunities</h2>
      <ul>
        {scholarships.map((scholarship) => (
          <li key={scholarship.id} className="mb-2">
            <p>{scholarship.name}</p>
            <p className="text-sm text-gray-600">Deadline: {scholarship.deadline}</p>
          </li>
        ))}
      </ul>
      <Link href="/scholarships" className="text-blue-500 hover:underline">
        View all scholarships
      </Link>
    </div>
  )
}

export default ScholarshipOverview