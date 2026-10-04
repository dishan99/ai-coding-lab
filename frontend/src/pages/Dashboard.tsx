import { useEffect, useState } from "react"

import StatCard from "../components/StatCard"
import CourseCard from "../components/CourseCard"
import AITutorCard from "../components/AITutorCard"
import { getApiInfo } from "../api/client"

function Dashboard() {
  const [apiStatus, setApiStatus] = useState("Connecting...")

  useEffect(() => {
    getApiInfo()
      .then((data) => {
        setApiStatus(data.status)
      })
      .catch(() => {
        setApiStatus("Backend unavailable")
      })
  }, [])
  return (
    <main className="flex-1 bg-slate-100 p-4 sm:p-6 lg:p-8">

      {/* Welcome */}
      <div className="mb-8">
        <p className="text-sm text-slate-500">
          Student Dashboard
        </p>

        <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
          Good evening, Dishan 👋
        </h2>

        <p className="mt-2 text-slate-500">
          Ready to continue learning?
        </p>

        <p className="mt-2 text-xs text-slate-400">
          Backend: {apiStatus}
        </p>
      </div>


      {/* Statistics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

        <StatCard
          title="Problems"
          value="24"
          description="Available to solve"
        />

        <StatCard
          title="Solved"
          value="18"
          description="Problems completed"
        />

        <StatCard
          title="Progress"
          value="72%"
          description="Overall learning progress"
        />

      </section>


      {/* Course */}
      <section className="mt-8">

        <h3 className="mb-4 text-xl font-bold text-slate-900">
          Continue Learning
        </h3>

        <CourseCard
          title="Python Fundamentals"
          description="Learn Python programming from the fundamentals."
          progress={72}
        />

      </section>


      {/* AI Tutor */}
      <section className="mt-8">

        <h3 className="mb-4 text-xl font-bold text-slate-900">
          Learn With AI
        </h3>

        <AITutorCard />

      </section>

    </main>
  )
}

export default Dashboard