import React from 'react'
export default function Select({ label, value, onChange=()=>{}, options=[] }){
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm text-slate-300">{label}</span>
      <select
        className="w-full px-3 py-2 rounded-2xl bg-slate-900 border focus:outline-none focus:ring-2 focus:ring-accent-600"
        style={{ borderColor: 'darkslategrey' }}
        value={value} onChange={e=>onChange(e.target.value)}
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  )
}
