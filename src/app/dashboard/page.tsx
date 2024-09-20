import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Il contenuto del dashboard è stato spostato nella homepage.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Torna alla Homepage
      </Link>
    </div>
  );
}