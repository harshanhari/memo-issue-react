import React, { useState } from 'react';
import { FormField, ActionButton } from './FormField';


const MemoIssue = () => {
  const [formData, setFormData] = useState({
    productType: 'Polish',
    customer: '',
    memoType: 'Job Work',
    termCode: '',
    salesMan: '',
    currency: 'RS',
    memoNo: '',
    refNo: '',
    date: '2025-08-18',
    dueDays: 0,
    saleRefNo: '',
    convRate: 1.0,
    throughBy: '',
    insuranceBy: '',
    brokerName: '',
    chargeOn: '',
    localBank: '',
    brokerage: 0,
    taxDisc: '',
    taxDiscAmt: 0.00,
    contactPerson: '',
    deliveryPerson: '',
    expRejection: 0.00
  });

  const [tableData, setTableData] = useState([
    {
      sn: 1,
      quality: 1,
      qualityName: '',
      stoneId: '',
      description: '',
      size: '',
      pcs: '',
      carat: 0.000,
      rate: 0.00,
      amt: 0.000,
      cost: 0.00,
      sale: 0.000,
      return: 0.000,
      balance: 0.00,
      expR: 0.000,
      sizeCol: 0.00,
      rejPer: 0.00,
      rem: 0.00,
      costCol: 0.00,
      org: '?',
      qltyCo: '',
      distCd: ''
    }
  ]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans text-sm">
      {/* Header */}
      <div className="bg-white border border-gray-300 mb-4 p-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider">M E M O I S S U E</div>
          <div className="flex space-x-8">
            <div className="text-red-600 font-semibold">KP SANGHVI & SONS LLP</div>
            <div className="text-red-600 font-semibold">25-26 User: m</div>
            <div className="bg-yellow-100 px-2 py-1 rounded text-sm font-medium">Pending</div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white border border-gray-300 p-4 mb-4">
        <div className="grid grid-cols-6 gap-3 mb-4">
          {/* Row 1 */}
          <FormField
            label="Product Type*"
            type="select"
            value={formData.productType}
            onChange={(value) => handleInputChange('productType', value)}
            options={['Polish', 'Diamond', 'Gold']}
          />
          
          <FormField
            label="Customer*"
            type="select"
            value={formData.customer}
            onChange={(value) => handleInputChange('customer', value)}
            options={['', 'Customer 1', 'Customer 2']}
          />
          
          <FormField
            label="Memo Type*"
            type="select"
            value={formData.memoType}
            onChange={(value) => handleInputChange('memoType', value)}
            options={['Job Work', 'Sale', 'Purchase']}
          />
          
          <FormField
            label="Term Code"
            type="select"
            value={formData.termCode}
            onChange={(value) => handleInputChange('termCode', value)}
            options={['', 'Term 1', 'Term 2']}
          />
          
          <FormField
            label="Sales Man"
            type="select"
            value={formData.salesMan}
            onChange={(value) => handleInputChange('salesMan', value)}
            options={['', 'Sales 1', 'Sales 2']}
          />
          
          <FormField
            label="Currency*"
            type="select"
            value={formData.currency}
            onChange={(value) => handleInputChange('currency', value)}
            options={['RS', 'USD', 'EUR']}
          />

          {/* Row 2 */}
          <FormField
            label="Memo No"
            type="input"
            value={formData.memoNo}
            onChange={(value) => handleInputChange('memoNo', value)}
          />
          
          <FormField
            label="Ref.No"
            type="input"
            value={formData.refNo}
            onChange={(value) => handleInputChange('refNo', value)}
          />
          
          <FormField
            label="Date"
            type="date"
            value={formData.date}
            onChange={(value) => handleInputChange('date', value)}
          />
          
          <FormField
            label="Due Days"
            type="number"
            value={formData.dueDays}
            onChange={(value) => handleInputChange('dueDays', value)}
          />
          
          <FormField
            label="SaleRefNo"
            type="select"
            value={formData.saleRefNo}
            onChange={(value) => handleInputChange('saleRefNo', value)}
            options={['', 'Ref 1', 'Ref 2']}
          />
          
          <div className="flex items-end space-x-2">
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">ConvRate</label>
              <input
                type="number"
                step="0.01"
                value={formData.convRate}
                onChange={(e) => handleInputChange('convRate', parseFloat(e.target.value))}
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center space-x-1">
              <span className="px-2 py-1 border border-gray-300 rounded text-xs bg-gray-50">M</span>
              <input
                type="number"
                defaultValue={80.0}
                className="w-16 px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <span className="px-2 py-1 border border-gray-300 rounded text-xs bg-gray-50">D</span>
            </div>
          </div>

          {/* Row 3 */}
          <FormField
            label="Through By"
            type="select"
            value={formData.throughBy}
            onChange={(value) => handleInputChange('throughBy', value)}
            options={['', 'Option 1', 'Option 2']}
          />
          
          <FormField
            label="Insurance By"
            type="select"
            value={formData.insuranceBy}
            onChange={(value) => handleInputChange('insuranceBy', value)}
            options={['', 'Insurance 1', 'Insurance 2']}
          />
          
          <FormField
            label="Broker Name"
            type="select"
            value={formData.brokerName}
            onChange={(value) => handleInputChange('brokerName', value)}
            options={['', 'Broker 1', 'Broker 2']}
          />
          
          <FormField
            label="Due Date"
            type="date"
            value="2025-08-18"
            readOnly
          />
          
          <FormField
            label="LocalBank"
            type="select"
            value={formData.localBank}
            onChange={(value) => handleInputChange('localBank', value)}
            options={['', 'Bank 1', 'Bank 2']}
          />
          
          <FormField
            label="Brokerage %"
            type="number"
            value={formData.brokerage}
            onChange={(value) => handleInputChange('brokerage', value)}
          />

          {/* Row 4 */}
          <FormField
            label="Charge On"
            type="select"
            value={formData.chargeOn}
            onChange={(value) => handleInputChange('chargeOn', value)}
            options={['', 'Charge 1', 'Charge 2']}
          />
          
          <FormField
            label="Tax/Disc"
            type="select"
            value={formData.taxDisc}
            onChange={(value) => handleInputChange('taxDisc', value)}
            options={['', 'Tax 1', 'Tax 2']}
          />
          
          <FormField
            label="Tax/DiscAmt"
            type="number"
            value={formData.taxDiscAmt}
            readOnly
          />
          
          <FormField
            label="Contact Person"
            type="input"
            value={formData.contactPerson}
            onChange={(value) => handleInputChange('contactPerson', value)}
          />
          
          <FormField
            label="Delivery Person"
            type="input"
            value={formData.deliveryPerson}
            onChange={(value) => handleInputChange('deliveryPerson', value)}
          />
          
          <FormField
            label="Exp.Rejection %"
            type="number"
            step="0.01"
            value={formData.expRejection}
            onChange={(value) => handleInputChange('expRejection', value)}
          />
        </div>

        {/* Checkbox Section */}
        <div className="mb-4">
          <label className="flex items-center text-xs">
            <input type="checkbox" className="mr-2" />
            Stone Location
          </label>
        </div>

        {/* Action Buttons Section */}
        <div className="flex flex-wrap gap-2 mb-4">
          <ActionButton label="Save" variant="primary" />
          <ActionButton label="Search" />
          <ActionButton label="Edit" disabled />
          <ActionButton label="Delete" disabled />
          <ActionButton label="Cancel" />
          <ActionButton label="Print" />
          <ActionButton label="Exit" />
          <ActionButton label="ASearch" />
          <ActionButton label="Print DC" disabled />
          <ActionButton label="New DC" />
          <ActionButton label="CpMemoRecd" />
        </div>

        {/* Additional Action Buttons */}
        <div className="flex gap-2 mb-4">
          <ActionButton label="CopyPurch" variant="secondary" />
          <ActionButton label="Imp Qlty" variant="secondary" />
          <ActionButton label="Exp Qlty" variant="secondary" />
          <ActionButton label="Doc" variant="secondary" />
          <ActionButton label="Imp Stone" variant="secondary" />
          <ActionButton label="CpMemIssue" variant="secondary" />
          <ActionButton label="Det Cost" variant="secondary" />
          <ActionButton label="View" variant="secondary" />
          <ActionButton label="Stock" variant="secondary" />
          <ActionButton label="CpMemoRtn" variant="secondary" />
          <ActionButton label="Gen PL" variant="secondary" />
        </div>

        {/* Special Buttons */}
        <div className="flex gap-2 mb-4">
          <button className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded border border-blue-300 hover:bg-blue-200">
            Business
          </button>
          <button className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded border border-green-300 hover:bg-green-200">
            Image
          </button>
          <button className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded border border-purple-300 hover:bg-purple-200">
            CopyPurch
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white border border-gray-300">
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead className="bg-gray-100">
              <tr>
                {[
                  'S/N', 'Quality', 'Quality Name', 'Stone Id', 'Description', 'Size', 'Pcs', 
                  'Carat', 'Rate', 'Amt', 'Cost', 'Sale...', 'Return...', 'Bala...', 
                  'Exp.R.', 'Size...', 'Rej%', 'Rem...', 'Cost...', 'Org...', 'QltyCo...', 'Dist.Cd'
                ].map((header, index) => (
                  <th key={index} className="border border-gray-300 p-1 text-left font-medium bg-gray-200">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-1">{row.sn}</td>
                  <td className="border border-gray-300 p-1">{row.quality}</td>
                  <td className="border border-gray-300 p-1">
                    <input 
                      type="text" 
                      value={row.qualityName}
                      className="w-full border-none outline-none bg-transparent text-xs"
                    />
                  </td>
                  <td className="border border-gray-300 p-1">
                    <input 
                      type="text" 
                      value={row.stoneId}
                      className="w-full border-none outline-none bg-transparent text-xs"
                    />
                  </td>
                  <td className="border border-gray-300 p-1">
                    <input 
                      type="text" 
                      value={row.description}
                      className="w-full border-none outline-none bg-transparent text-xs"
                    />
                  </td>
                  <td className="border border-gray-300 p-1">
                    <input 
                      type="text" 
                      value={row.size}
                      className="w-full border-none outline-none bg-transparent text-xs"
                    />
                  </td>
                  <td className="border border-gray-300 p-1">
                    <input 
                      type="text" 
                      value={row.pcs}
                      className="w-full border-none outline-none bg-transparent text-xs"
                    />
                  </td>
                  <td className="border border-gray-300 p-1 text-right">{row.carat.toFixed(3)}</td>
                  <td className="border border-gray-300 p-1 text-right">{row.rate.toFixed(2)}</td>
                  <td className="border border-gray-300 p-1 text-right">{row.amt.toFixed(3)}</td>
                  <td className="border border-gray-300 p-1 text-right">{row.cost.toFixed(2)}</td>
                  <td className="border border-gray-300 p-1 text-right">{row.sale.toFixed(3)}</td>
                  <td className="border border-gray-300 p-1 text-right">{row.return.toFixed(3)}</td>
                  <td className="border border-gray-300 p-1 text-right">{row.balance.toFixed(2)}</td>
                  <td className="border border-gray-300 p-1 text-right">{row.expR.toFixed(3)}</td>
                  <td className="border border-gray-300 p-1 text-right">{row.sizeCol.toFixed(2)}</td>
                  <td className="border border-gray-300 p-1 text-right">{row.rejPer.toFixed(2)}</td>
                  <td className="border border-gray-300 p-1 text-right">{row.rem.toFixed(2)}</td>
                  <td className="border border-gray-300 p-1 text-right">{row.costCol.toFixed(2)}</td>
                  <td className="border border-gray-300 p-1 text-center">{row.org}</td>
                  <td className="border border-gray-300 p-1">{row.qltyCo}</td>
                  <td className="border border-gray-300 p-1">{row.distCd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemoIssue;
