import React from 'react'

export default async function page() {
  const res = await fetch('http://localhost:3000/api/admin', {
    method: 'GET',
    cache: 'no-store', // optional: skip caching
  });

  const data = await res.json();

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <h1 className="text-xl font-bold">Welcome to Admin Dashboard!</h1>
      <p className="mt-4 text-gray-700">API says: {data.message}</p>
    </div>
  )
}
