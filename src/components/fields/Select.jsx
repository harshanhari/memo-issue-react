import React from 'react'

export default function Select({ label, value='', onChange=()=>{}, options=[], readOnly=false }) {
  return (
    <div>
      <label className="block mb-1 text-slate-700 dark:text-slate-300">{label}</label>
      <select
        className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={readOnly}
      >
        {options.map(opt =>
          typeof opt === 'object'
            ? <option key={opt.value || opt.id || opt.label} value={opt.value || opt.id || opt.label}>{opt.label || opt.value || opt.id}</option>
            : <option key={opt} value={opt}>{opt}</option>
        )}
      </select>
    </div>
  )
}
