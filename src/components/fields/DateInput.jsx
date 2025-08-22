import React from 'react'

export default function DateInput({ label, value='', onChange=()=>{}, readOnly=false }) {
  return (
    <div>
      <label className="block mb-1 text-slate-700 dark:text-slate-300">{label}</label>
      <input
        type="date"
        className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
        value={value}
        onChange={e => onChange(e.target.value)}
        readOnly={readOnly}
      />
    </div>
  )
}
