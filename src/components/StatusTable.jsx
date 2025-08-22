import React from 'react'

export default function StatusTable({ columns, rows }) {
  return (
    <div className="w-full overflow-x-auto rounded-xl">
      <table className="min-w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th
                key={col.key || idx}
                className="px-4 py-2 border-b border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 whitespace-nowrap"
                style={col.minWidth ? { minWidth: col.minWidth } : {}}
              >
                {col.label || col.key || String(col)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className="even:bg-slate-50 dark:even:bg-slate-800">
              {columns.map((col, cIdx) => (
                <td
                  key={col.key || cIdx}
                  className="px-4 py-2 border-b border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 whitespace-nowrap"
                  style={col.minWidth ? { minWidth: col.minWidth } : {}}
                >
                  {row[col.key] ?? row[cIdx] ?? ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
