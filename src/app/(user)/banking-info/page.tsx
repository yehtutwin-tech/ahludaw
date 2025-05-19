import React from "react";

export default function page() {
  return (
    <div className="max-w-6xl mx-auto mt-8 px-4 mb-8">
      <h2 className="text-2xl font-bold mb-4">Banking Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Bank 1 */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Example Bank</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Account Number</p>
              <p className="font-medium">1234-5678-9012-3456</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Account Holder</p>
              <p className="font-medium">Donation Organization</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Swift Code</p>
              <p className="font-medium">EXBKUS12</p>
            </div>
          </div>
        </div>

        {/* Bank 2 */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Global Bank</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Account Number</p>
              <p className="font-medium">9876-5432-1098-7654</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Account Holder</p>
              <p className="font-medium">Donation Organization</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Swift Code</p>
              <p className="font-medium">GLBKUS34</p>
            </div>
          </div>
        </div>

        {/* Bank 3 */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">City Bank</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Account Number</p>
              <p className="font-medium">4567-8901-2345-6789</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Account Holder</p>
              <p className="font-medium">Donation Organization</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Swift Code</p>
              <p className="font-medium">CTBKUS56</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
        <div className="prose max-w-none">
          <p className="text-gray-600">
            Please include your name and email in the transfer description for
            proper tracking of your donation. For any questions about donations,
            please contact us at support@example.com
          </p>
        </div>
      </div>
    </div>
  );
}
