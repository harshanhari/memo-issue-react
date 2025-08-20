import React from 'react'
export default function InputText({ label, value='', onChange=()=>{}, placeholder='', readOnly=false }){
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm text-slate-300">{label}</span>
      <input
        className="w-full px-3 py-2 rounded-2xl bg-slate-900 border focus:outline-none focus:ring-2 focus:ring-accent-600"
        style={{ borderColor: 'darkslategrey' }}
        type="text" value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} readOnly={readOnly}
      />
    </label>
  )
}
