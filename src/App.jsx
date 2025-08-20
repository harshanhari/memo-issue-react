import React from 'react'
import StatusTable from './components/StatusTable.jsx'
import AdvancedSearchTable from './components/AdvancedSearchTable.jsx'
import JewelryTable from './components/JewelryTable.jsx'
import MainForm from './components/MainForm.jsx'
import GstPanel from './components/GstPanel.jsx'
import dataJson from './data/mock.json'

export default function App() {
  const [data] = React.useState(dataJson)
  const [model, setModel] = React.useState(data.form)
  const actions = data.actions

  const { status, advancedSearch, jewelry } = data

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-3 items-center justify-between">
          <h1 className="text-2xl md:text-3xl tracking-tight">Memo Issue — React</h1>
          <div className="flex gap-2">
            <button className="btn btn-accent">New Memo</button>
            <button className="btn">Export</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <MainForm model={model} setModel={setModel} actions={actions} />
        <GstPanel model={model} setModel={setModel} />

        <section className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl">Status (Main Table)</h2>
            <span className="chip">Rows: {status.rows.length}</span>
          </div>
          <StatusTable columns={status.columns} rows={status.rows} />
        </section>

        <section className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl">Advanced Search</h2>
            <span className="chip">Rows: {advancedSearch.rows.length}</span>
          </div>
          <AdvancedSearchTable columns={advancedSearch.columns} rows={advancedSearch.rows} />
        </section>

        <section className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl">Jewelry</h2>
            <span className="chip">Rows: {jewelry.rows.length}</span>
          </div>
          <JewelryTable columns={jewelry.columns} rows={jewelry.rows} />
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
