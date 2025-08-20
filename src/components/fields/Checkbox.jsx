import React from 'react'
export default function Checkbox({ label, checked=false, onChange=()=>{} }){
  return (
    <label className="inline-flex items-center gap-2">
      <input type="checkbox" className="w-4 h-4 rounded bg-slate-900 border-slate-700" checked={checked} onChange={e=>onChange(e.target.checked)} />
      <span className="text-sm text-slate-300">{label}</span>
    </label>
  )
}
