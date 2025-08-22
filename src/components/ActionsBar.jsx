import React from 'react'
import Button from './fields/Button.jsx'

export default function ActionsBar({ actions=[] }){
  return (
    <div className="card flex flex-wrap gap-2 bg-white dark:bg-slate-900 p-3 rounded-xl shadow">
      {actions.map((a, i) => (
        <Button
          key={i}
          text={a}
          className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200 border-2 border-orange-500 shadow hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
      ))}
    </div>
  )
}
