import React from 'react'
import StatusTable from './components/StatusTable.jsx'
import AdvancedSearchTable from './components/AdvancedSearchTable.jsx'
import JewelryTable from './components/JewelryTable.jsx'
import MainForm from './components/MainForm.jsx'
import GstPanel from './components/GstPanel.jsx'
import dataJson from './data/mock.json'
import ActionsBar from './components/ActionsBar.jsx'
import FormActionsBar from './components/FormActionsBar.jsx'

function AnalogClockDisplay({ currentTime }) {
  const [expanded, setExpanded] = React.useState(false);
  // Calculate angles
  const sec = currentTime.getSeconds();
  const min = currentTime.getMinutes();
  const hour = currentTime.getHours();
  const secAngle = sec * 6;
  const minAngle = min * 6 + sec * 0.1;
  const hourAngle = ((hour % 12) + min / 60) * 30;
  // Sizes
  const size = expanded ? 64 : 24;
  const center = size / 2;
  const radius = size / 2 - 2;
  return (
    <div
      className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur border border-slate-300 dark:border-slate-700 shadow-lg font-mono text-lg font-semibold tracking-tight text-slate-700 dark:text-slate-200 cursor-pointer select-none ${expanded ? 'flex-col min-w-[200px]' : ''}`}
      onClick={() => setExpanded(e => !e)}
      title={expanded ? 'Hide details' : 'Show date & time'}
      style={{ minWidth: expanded ? 200 : undefined }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="text-orange-500" style={{display:'block'}}>
        <circle cx={center} cy={center} r={radius} stroke="currentColor" strokeWidth={expanded ? 4 : 2} fill="none" />
        {/* Hour hand */}
        <line x1={center} y1={center} x2={center + (radius-10)*Math.sin(Math.PI*hourAngle/180)} y2={center - (radius-10)*Math.cos(Math.PI*hourAngle/180)} stroke="#f59e42" strokeWidth={expanded ? 4 : 2.5} strokeLinecap="round" />
        {/* Minute hand */}
        <line x1={center} y1={center} x2={center + (radius-5)*Math.sin(Math.PI*minAngle/180)} y2={center - (radius-5)*Math.cos(Math.PI*minAngle/180)} stroke="#f59e42" strokeWidth={expanded ? 3 : 1.5} strokeLinecap="round" />
        {/* Second hand */}
        <line x1={center} y1={center} x2={center + (radius-2)*Math.sin(Math.PI*secAngle/180)} y2={center - (radius-2)*Math.cos(Math.PI*secAngle/180)} stroke="#fb923c" strokeWidth={1} strokeLinecap="round" />
        <circle cx={center} cy={center} r={expanded ? 3 : 1.5} fill="#f59e42" />
      </svg>
      {expanded && (
        <div className="flex flex-col items-center text-xs md:text-base mt-2">
          <span>
            {currentTime.toLocaleString('en-US', {
              weekday: 'short',
              month: 'short',
              day: '2-digit',
              year: 'numeric',
            })}
          </span>
          <span>
            {currentTime.toLocaleString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true
            })}
          </span>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [data] = React.useState(dataJson)
  const [model, setModel] = React.useState(data.form)
  const actions = data.actions
  const { status, advancedSearch, jewelry } = data
  const [theme, setTheme] = React.useState('dark')
  const [currentTime, setCurrentTime] = React.useState(new Date())
  const [exited, setExited] = React.useState(false)

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Tab state: 0 = Status, 1 = Advanced Search, 2 = Jewelry
  const [activeTab, setActiveTab] = React.useState(0)

  // Modal state for mobile "More Options"
  const [showOptions, setShowOptions] = React.useState(false)

  const tabList = [
    { label: "Status", rows: status.rows.length },
    { label: "Advanced Search", rows: advancedSearch.rows.length },
    { label: "Jewelry", rows: jewelry.rows.length }
  ]

  if (exited) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">You have exited the application</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-2">You may now close this tab or window.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <header className="sticky top-0 z-10 border-b border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl tracking-tight text-center flex-1 text-slate-900 dark:text-slate-100">Memo Issue</h1>
          <div className="flex items-center gap-4">
            {/* Analog Clock with Toggle */}
            <AnalogClockDisplay currentTime={currentTime} />
            <button
              className="flex items-center justify-center px-3 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200 shadow hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="currentColor" strokeWidth="2" fill="currentColor" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="5" fill="currentColor" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" />
                </svg>
              )}
            </button>
            <button
              className="flex items-center justify-center px-3 py-2 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 shadow hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              onClick={() => setExited(true)}
              aria-label="Exit application"
              title="Exit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </header >

      {/* Desktop Layout */}
      <main main className="max-w-8xl px-4 py-6 space-y-6 hidden md:block" >
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
          <div className="flex border-b border-slate-300 dark:border-slate-800">
            {tabList.map((tab, idx) => (
              <button
                key={tab.label}
                className={`px-4 py-2 -mb-px border-b-2 transition-colors ${activeTab === idx
                  ? "border-orange-500 text-orange-500 font-semibold"
                  : "border-transparent text-slate-500 dark:text-slate-400 hover:text-orange-400"
                  }`}
                onClick={() => setActiveTab(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panels */}
        <section className="card bg-white dark:bg-slate-900 rounded-2xl shadow-soft p-4">
          {activeTab === 0 && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-slate-900 dark:text-slate-100">Status (Main Table)</h2>
              </div>
              <StatusTable columns={status.columns} rows={status.rows} />
            </>
          )}
          {activeTab === 1 && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-slate-900 dark:text-slate-100">Advanced Search</h2>
              </div>
              <AdvancedSearchTable columns={advancedSearch.columns} rows={advancedSearch.rows} />
            </>
          )}
          {activeTab === 2 && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-slate-900 dark:text-slate-100">Jewelry</h2>
              </div>
              <JewelryTable columns={jewelry.columns} rows={jewelry.rows} />
            </>
          )}
        </section>
      </main >

      {/* Mobile Layout */}
      <main main className="block md:hidden px-2 py-2 space-y-4" >
        <MainForm model={model} setModel={setModel} actions={actions} />
        <GstPanel model={model} setModel={setModel} />

        {/* Tabs */}
        <div className="mb-2">
          <div className="flex border-b border-slate-300 dark:border-slate-800">
            {tabList.map((tab, idx) => (
              <button
                key={tab.label}
                className={`flex-1 px-2 py-2 border-b-2 transition-colors text-xs ${activeTab === idx
                  ? "border-orange-500 text-orange-500 font-semibold"
                  : "border-transparent text-slate-500 dark:text-slate-400 hover:text-orange-400"
                  }`}
                onClick={() => setActiveTab(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panels */}
        <div className="pb-24">
          {activeTab === 0 && <StatusTable columns={status.columns} rows={status.rows} />}
          {activeTab === 1 && <AdvancedSearchTable columns={advancedSearch.columns} rows={advancedSearch.rows} />}
          {activeTab === 2 && <JewelryTable columns={jewelry.columns} rows={jewelry.rows} />}
        </div>

        {/* Floating More Options Button */}
        <button
          className="fixed bottom-6 right-6 z-50 bg-orange-500 text-white rounded-full shadow-lg p-4"
          aria-label="More Options"
          onClick={() => setShowOptions(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="12" cy="8" r="1.5" fill="currentColor" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <circle cx="12" cy="16" r="1.5" fill="currentColor" />
          </svg>
        </button>

        {/* Simple Modal for More Options */}
        {
          showOptions && (
            <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/80 backdrop-blur-sm">
              <div
                className="w-full max-w-md mx-auto rounded-t-2xl shadow-2xl pb-6 pt-4 px-4 bg-white dark:bg-slate-900"
                style={{
                  background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
                  borderTop: "2px solid #f59e42"
                }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-orange-400">More Options</span>
                  <button
                    onClick={() => setShowOptions(false)}
                    className="text-slate-500 dark:text-slate-400 hover:text-orange-400 text-2xl font-bold transition"
                    aria-label="Close"
                  >
                    &times;
                  </button>
                </div>
                <div className='subDataForTab overflow-y-auto' style={{maxHeight: 'calc(80vh - 56px)'}}>
                  {/* Main Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                    <FormActionsBar actions={actions} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <ActionsBar actions={actions} />
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </main >

      <footer className="border-t border-slate-300 dark:border-slate-800 py-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 text-sm text-slate-500 dark:text-slate-400">
          {/* Built with Vite + React + Tailwind. Dark theme • Accent: Orange */}
        </div>
      </footer>
    </div >
  )
}