interface NavbarProps {
  onMenuClick: () => void
}

function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
      
      <div className="flex items-center gap-3">

        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
          aria-label="Open navigation"
        >
          ☰
        </button>

        <div className="lg:hidden">
          <h1 className="font-bold text-slate-900">
            AI Coding Lab
          </h1>

          <p className="text-xs text-slate-400">
            Learn. Code. Improve.
          </p>
        </div>

      </div>

      <div className="flex items-center gap-4">

        <button
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
          aria-label="Notifications"
        >
          🔔
        </button>

        <div className="hidden items-center gap-3 sm:flex">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
            D
          </div>

          <div>
            <p className="text-sm font-medium text-slate-900">
              Dishan
            </p>

            <p className="text-xs text-slate-400">
              Student
            </p>
          </div>

        </div>

      </div>

    </header>
  )
}

export default Navbar