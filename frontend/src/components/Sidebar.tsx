interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          w-64 bg-slate-950 p-5 text-white
          transition-transform duration-300
          lg:static lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        <div className="mb-10 flex items-start justify-between">

          <div>
            <h1 className="text-2xl font-bold">
              AI Coding Lab
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Learn. Code. Improve.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 lg:hidden"
            aria-label="Close navigation"
          >
            ✕
          </button>

        </div>

        <nav className="space-y-2">

          <NavItem label="🏠 Dashboard" active />
          <NavItem label="📚 Courses" />
          <NavItem label="💻 Problems" />
          <NavItem label="🤖 AI Tutor" />
          <NavItem label="📊 Progress" />
          <NavItem label="📝 Submissions" />

        </nav>

        <div className="mt-10 border-t border-slate-800 pt-5">

          <NavItem label="⚙ Settings" />
          <NavItem label="🚪 Logout" danger />

        </div>

      </aside>
    </>
  )
}


interface NavItemProps {
  label: string
  active?: boolean
  danger?: boolean
}

function NavItem({
  label,
  active = false,
  danger = false,
}: NavItemProps) {
  return (
    <button
      className={`
        w-full rounded-lg px-4 py-3 text-left text-sm
        transition
        ${
          active
            ? "bg-indigo-600 text-white"
            : danger
              ? "text-red-400 hover:bg-slate-800"
              : "text-slate-300 hover:bg-slate-800"
        }
      `}
    >
      {label}
    </button>
  )
}

export default Sidebar