import React from 'react'

export default function Button({ text, className = '', ...props }) {
  return (
    <button
      className={`btn btn-sm px-4 py-2 rounded-md border-2 border-orange-500 bg-slate-900 text-white-500 font-semibold transition-colors duration-200 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 ${className}`}
      {...props}
    >
      {text}
    </button>
  )
}
