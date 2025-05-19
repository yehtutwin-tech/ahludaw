import React from 'react'

export default async function page() {
  const res = await fetch('http://localhost:3000/api/admin/cash-in', {
    method: 'GET',
    cache: 'no-store', // optional: skip caching
  });

  const data = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">Home Page</h1>
      <p className="mt-4 text-gray-700">API says: {data.message}</p>
    </main>
  )
}
