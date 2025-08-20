import React from 'react'
import Button from './fields/Button.jsx'

export default function ActionsBar({ actions=[] }){
  return (
    <div className="card flex flex-wrap gap-2">
      {actions.map((a, i) => (
        <Button key={i} text={a} className="border-2 border-orange-500" />
      ))}
    </div>
  )
}
