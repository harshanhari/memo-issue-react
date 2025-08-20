import React from 'react'
export default function InputNumber({ label, value=0, onChange=()=>{}, step='any' }){
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm text-slate-300">{label}</span>
      <input
        className="w-full px-3 py-2 rounded-2xl bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-accent-600 text-right"
        type="number" value={value} step={step} onChange={e=>onChange(e.target.value)}
      />
    </label>
  )
}
