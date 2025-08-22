import React from 'react'

export default function Checkbox({ label, checked=false, onChange=()=>{}, readOnly=false }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="mr-2 accent-orange-500 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        disabled={readOnly}
      />
      <label className="text-slate-700 dark:text-slate-300">{label}</label>
    </div>
  )
}
