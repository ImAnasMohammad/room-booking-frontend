import React from "react";

const DynamicTable = ({ data, actions }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">No data available.</div>
    );
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gradient-to-r from-blue-50 to-blue-100 sticky top-0 z-10">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-semibold text-blue-800 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
            {actions && (
              <th className="px-6 py-3 text-left text-xs font-semibold text-blue-800 uppercase tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="hover:bg-blue-50 transition-colors duration-150"
            >
              {headers.map((header) => (
                <td
                  key={header}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                >
                  {row[header]}
                </td>
              ))}
              {actions && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 flex gap-2">
                  {actions(row)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;