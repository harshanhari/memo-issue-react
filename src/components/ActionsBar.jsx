import React from 'react'
import Button from './fields/Button.jsx'

export default function ActionsBar({ actions=[] }){
  return (
    <div className="flex flex-wrap gap-2">
      {actions.map((a, i) => (
        <Button key={i} text={a} kind={i===0 ? 'accent' : 'default'} />
      ))}
    </div>
  )
}
