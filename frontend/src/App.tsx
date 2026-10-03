import { useState } from "react"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="flex min-h-screen">

        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="flex min-w-0 flex-1 flex-col">

          <Navbar
            onMenuClick={() => setSidebarOpen(true)}
          />

          <Dashboard />

        </div>

      </div>

    </div>
  )
}

export default App