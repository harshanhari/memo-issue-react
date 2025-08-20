import React from 'react'
export default function TableBase({ columns = [], rows = [] }) {
  return (<div className="w-full overflow-auto rounded-2xl border border-slate-800">
    <table className="w-full text-sm md:text-base"><thead className="bg-slate-900"><tr className="[&>th]:px-3 [&>th]:py-2 [&>th]:text-left [&>th]:font-medium [&>th]:whitespace-nowrap">
      {columns.map((c) => (<th key={c.key} style={{minWidth: c.minWidth || 120}}>{c.label}</th>))}
    </tr></thead><tbody className="divide-y divide-slate-800">
      {rows.map((r, idx) => (<tr key={idx} className="hover:bg-slate-900/60">
        {columns.map((c) => (<td key={c.key} className="px-3 py-2 align-top">{r[c.key] ?? ''}</td>))}
      </tr>))}
    </tbody></table></div>)
}
