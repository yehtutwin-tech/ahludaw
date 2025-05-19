import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Cash Out List</h2>
            <Link href="/admin/cash-out/entry" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Add New Entry
            </Link>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-4 flex justify-between items-center">
                <input type="text" placeholder="Search..." className="w-full md:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <div className="flex space-x-2">
                    <button className="px-4 py-2 border rounded-md hover:bg-gray-50">Filter</button>
                    <button className="px-4 py-2 border rounded-md hover:bg-gray-50">Export</button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recipient</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Method</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">2024-01-19</td>
                            <td className="px-6 py-4 whitespace-nowrap">Charity Organization</td>
                            <td className="px-6 py-4 whitespace-nowrap">$500.00</td>
                            <td className="px-6 py-4 whitespace-nowrap">Bank Transfer</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                    Pending
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <button className="text-blue-600 hover:text-blue-900">Edit</button>
                                <button className="ml-2 text-red-600 hover:text-red-900">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bg-white px-4 py-3 border-t border-gray-200">
                <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">
                        Showing 1 to 10 of 20 entries
                    </div>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Previous</button>
                        <button className="px-3 py-1 border rounded-md bg-blue-600 text-white">1</button>
                        <button className="px-3 py-1 border rounded-md hover:bg-gray-50">2</button>
                        <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
