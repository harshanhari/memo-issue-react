import React from 'react'
import InputText from './fields/InputText.jsx'
import InputNumber from './fields/InputNumber.jsx'
import Select from './fields/Select.jsx'
import Checkbox from './fields/Checkbox.jsx'
import DateInput from './fields/DateInput.jsx'

export default function MainForm({ model, setModel, actions }) {
  const patch = (k, v) => setModel(prev => ({ ...prev, [k]: v }))

  return (
    <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-4 text-slate-900 dark:text-slate-100">
      <form>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <Select label="Product Type" value={model.productType} onChange={v => patch('productType', v)} options={model.options.productType} />
          <InputText label="Memo No" value={model.memoNo} onChange={v => patch('memoNo', v)} />
          <Select label="Through By" value={model.throughBy} onChange={v => patch('throughBy', v)} options={model.options.throughBy} />
          <Select label="Customer" value={model.customer} onChange={v => patch('customer', v)} options={model.options.customer} />
          <InputText label="Ref.No" value={model.refNo} onChange={v => patch('refNo', v)} />
          <Select label="Insurance By" value={model.insuranceBy} onChange={v => patch('insuranceBy', v)} options={model.options.insuranceBy} />
          <Select label="Memo Type" value={model.memoType} onChange={v => patch('memoType', v)} options={model.options.memoType} />
          <DateInput label="Date" value={model.date} onChange={v => patch('date', v)} />
          <Select label="Broker Name" value={model.brokerName} onChange={v => patch('brokerName', v)} options={model.options.brokerName} />
          <InputNumber label="Due Days" value={model.dueDays} onChange={v => patch('dueDays', v)} />
          <DateInput label="Due Date" value={model.dueDate} onChange={v => patch('dueDate', v)} />
          <Select label="TermCode" value={model.termCode} onChange={v => patch('termCode', v)} options={model.options.termCode} />
          <Select label="Charge On" value={model.chargeOn} onChange={v => patch('chargeOn', v)} options={model.options.chargeOn} />
          <Select label="Sales Man" value={model.salesMan} onChange={v => patch('salesMan', v)} options={model.options.salesMan} />
          <InputText label="SaleRefNo" value={model.saleRefNo} onChange={v => patch('saleRefNo', v)} />
          <InputNumber label="Brokerage %" value={model.brokeragePct} onChange={v => patch('brokeragePct', v)} />
          <Select label="Currency" value={model.currency} onChange={v => patch('currency', v)} options={model.options.currency} />
          <Select label="LocalBank" value={model.localBank} onChange={v => patch('localBank', v)} options={model.options.localBank} />
          <InputNumber label="ConvRate" value={model.convRate} onChange={v => patch('convRate', v)} />
          <Select label="Tax/Disc" value={model.taxDisc} onChange={v => patch('taxDisc', v)} options={model.options.taxDisc} />
          <InputNumber label="Tax/DiscAmt" value={model.taxDiscAmt} onChange={v => patch('taxDiscAmt', v)} />
          <Select label="Quality Group" value={model.qualityGroup} onChange={v => patch('qualityGroup', v)} options={model.options.qualityGroup} />
          <InputText label="Contact Person" value={model.contactPerson} onChange={v => patch('contactPerson', v)} />
          <InputText label="Delivery Person" value={model.deliveryPerson} onChange={v => patch('deliveryPerson', v)} />
          <Checkbox label="Stone Location" checked={model.stoneLocation} onChange={v => patch('stoneLocation', v)} />
          <Select label="Dist Cd" value={model.distCd} onChange={v => patch('distCd', v)} options={model.options.distCd} />
          <Checkbox label="ImpRej" checked={model.impRej} onChange={v => patch('impRej', v)} />
          <Select label="Bussiness" value={model.bussiness} onChange={v => patch('bussiness', v)} options={model.options.bussiness} />
          <InputText label="Image" value={model.image} onChange={v => patch('image', v)} />
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          <InputNumber label="Total" value={model.total} onChange={v => patch('total', v)} />
          <InputText label="Remark" value={model.remark} onChange={v => patch('remark', v)} />
          <InputNumber label="Amount1" value={model.amount1} onChange={v => patch('amount1', v)} />
          <InputNumber label="Exp.Rej%" value={model.expRejPct} onChange={v => patch('expRejPct', v)} />
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          <InputText label="Copy MemoIssue" value={model.copyMemoIssue} onChange={v => patch('copyMemoIssue', v)} />
          <InputText label="CopyPurchase" value={model.copyPurchase} onChange={v => patch('copyPurchase', v)} />
          <InputText label="CpMemoRtn" value={model.cpMemoRtn} onChange={v => patch('cpMemoRtn', v)} />
          <InputText label="DetailCustomer" value={model.detailCustomer} onChange={v => patch('detailCustomer', v)} />
          <InputText label="UserNameAndDate" value={model.userNameAndDate} onChange={v => patch('userNameAndDate', v)} />
          <InputText label="toMemoRecvRefNo" value={model.toMemoRecvRefNo} onChange={v => patch('toMemoRecvRefNo', v)} />
          <InputText label="frmMemoRecvRefNo" value={model.frmMemoRecvRefNo} onChange={v => patch('frmMemoRecvRefNo', v)} />
          <InputText label="View" value={model.view} onChange={v => patch('view', v)} />
          <InputText label="Request" value={model.request} onChange={v => patch('request', v)} />
          <InputText label="Documents" value={model.documents} onChange={v => patch('documents', v)} />
          <InputText label="Import Stone" value={model.importStone} onChange={v => patch('importStone', v)} />
          <InputText label="REFBTN" value={model.refbtn} onChange={v => patch('refbtn', v)} />
          <InputText label="Image" value={model.image} onChange={v => patch('image', v)} />
        </div>
      </form>
    </div>
  )
}
