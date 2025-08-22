import React from 'react'
import { FiSave, FiSearch, FiEdit, FiTrash2, FiX, FiPrinter } from 'react-icons/fi'

const btnClass =
  "btn btn-square btn-sm flex items-center justify-center rounded-md border-2 border-orange-500 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200 transition-colors duration-200 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"

export default function FormActionsBar({ onSave, onSearch, onEdit, onDelete, onCancel, onPrint }) {
  return (
    <div className="card flex flex-col gap-2 justify-end">
      <button className={btnClass} title="Save" onClick={onSave}><FiSave size={20} /></button>
      <button className={btnClass} title="Search" onClick={onSearch}><FiSearch size={20} /></button>
      <button className={btnClass} title="Edit" onClick={onEdit}><FiEdit size={20} /></button>
      <button className={btnClass} title="Delete" onClick={onDelete}><FiTrash2 size={20} /></button>
      <button className={btnClass} title="Cancel" onClick={onCancel}><FiX size={20} /></button>
      <button className={btnClass} title="Print" onClick={onPrint}><FiPrinter size={20} /></button>
    </div>
  )
}