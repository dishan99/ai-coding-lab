function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-950 text-white p-5">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          AI Coding Lab
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Learn. Code. Improve.
        </p>
      </div>

      <nav className="space-y-2">
        <a
          href="#"
          className="block rounded-lg bg-indigo-600 px-4 py-3"
        >
          🏠 Dashboard
        </a>

        <a
          href="#"
          className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800"
        >
          📚 Courses
        </a>

        <a
          href="#"
          className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800"
        >
          💻 Problems
        </a>

        <a
          href="#"
          className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800"
        >
          🤖 AI Tutor
        </a>

        <a
          href="#"
          className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800"
        >
          📊 Progress
        </a>

        <a
          href="#"
          className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800"
        >
          📝 Submissions
        </a>
      </nav>

      <div className="mt-10 border-t border-slate-800 pt-5">
        <a
          href="#"
          className="block rounded-lg px-4 py-3 text-slate-400 hover:bg-slate-800"
        >
          ⚙ Settings
        </a>

        <a
          href="#"
          className="block rounded-lg px-4 py-3 text-red-400 hover:bg-slate-800"
        >
          🚪 Logout
        </a>
      </div>
    </aside>
  )
}

export default Sidebar