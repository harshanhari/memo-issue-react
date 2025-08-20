import React from 'react'
import StatusTable from './components/StatusTable.jsx'
import AdvancedSearchTable from './components/AdvancedSearchTable.jsx'
import JewelryTable from './components/JewelryTable.jsx'
import MainForm from './components/MainForm.jsx'
import GstPanel from './components/GstPanel.jsx'
import dataJson from './data/mock.json'
import ActionsBar from './components/ActionsBar.jsx'
import FormActionsBar from './components/FormActionsBar.jsx'

export default function App() {
  const [data] = React.useState(dataJson)
  const [model, setModel] = React.useState(data.form)
  const actions = data.actions
  const { status, advancedSearch, jewelry } = data

  // Tab state: 0 = Status, 1 = Advanced Search, 2 = Jewelry
  const [activeTab, setActiveTab] = React.useState(0)

  const tabList = [
    { label: "Status", rows: status.rows.length },
    { label: "Advanced Search", rows: advancedSearch.rows.length },
    { label: "Jewelry", rows: jewelry.rows.length }
  ]

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl tracking-tight text-center">Memo Issue</h1>
        </div>
      </header>

      <main className="max-w-8xl px-4 py-6 space-y-6">
        <div className="flex gap-4 items-start">
          <div className="flex-1">
            <MainForm model={model} setModel={setModel} actions={actions} />
          </div>
          <div>
            <FormActionsBar actions={actions} />
          </div>
        </div>
        <ActionsBar actions={actions} />

        <GstPanel model={model} setModel={setModel} />

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex border-b border-slate-800">
            {tabList.map((tab, idx) => (
              <button
                key={tab.label}
                className={`px-4 py-2 -mb-px border-b-2 transition-colors ${
                  activeTab === idx
                    ? "border-orange-500 text-orange-500 font-semibold"
                    : "border-transparent text-slate-400 hover:text-orange-400"
                }`}
                onClick={() => setActiveTab(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panels */}
        <section className="card">
          {activeTab === 0 && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl">Status (Main Table)</h2>
              </div>
              <StatusTable columns={status.columns} rows={status.rows} />
            </>
          )}
          {activeTab === 1 && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl">Advanced Search</h2>
              </div>
              <AdvancedSearchTable columns={advancedSearch.columns} rows={advancedSearch.rows} />
            </>
          )}
          {activeTab === 2 && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl">Jewelry</h2>
              </div>
              <JewelryTable columns={jewelry.columns} rows={jewelry.rows} />
            </>
          )}
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 text-sm text-slate-400">
          Built with Vite + React + Tailwind. Dark theme • Accent: Orange
        </div>
      </footer>
    </div>
  )
}
