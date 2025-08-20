import React from 'react'
import InputNumber from './fields/InputNumber.jsx'
import Checkbox from './fields/Checkbox.jsx'

export default function GstPanel({ model, setModel }) {
  const patch = (k, v) => setModel(prev => ({ ...prev, [k]: v }))
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg">GST / Taxes</h3>
        <Checkbox label="GST Dealer" checked={model.gstDealer} onChange={v => patch('gstDealer', v)} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        <InputNumber label="IGST" value={model.igst} onChange={v => patch('igst', v)} />
        <InputNumber label="CGST" value={model.cgst} onChange={v => patch('cgst', v)} />
        <InputNumber label="SGST" value={model.sgst} onChange={v => patch('sgst', v)} />
        <InputNumber label="CESS" value={model.cess} onChange={v => patch('cess', v)} />
        <InputNumber label="Inv Total" value={model.invTotal} onChange={v => patch('invTotal', v)} />
        
      </div>
    </div>
  )
}
