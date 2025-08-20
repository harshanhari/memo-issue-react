import React from 'react'
export default function DateInput({ label, value, onChange=()=>{} }){
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm text-slate-300">{label}</span>
      <input type="date" className="w-full px-3 py-2 rounded-2xl bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-accent-600" value={value} onChange={e=>onChange(e.target.value)} />
    </label>
  )
}
