import React from 'react'
export default function Button({ text, kind='default', onClick=()=>{} }){
  const base = 'btn'
  const tone = kind==='accent' ? ' btn-accent' : ''
  return <button className={base + tone} onClick={onClick}>{text}</button>
}
