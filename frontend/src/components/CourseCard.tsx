interface CourseCardProps {
  title: string
  description: string
  progress: number
}

function CourseCard({
  title,
  description,
  progress,
}: CourseCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h4 className="text-lg font-semibold text-slate-900">
            {title}
          </h4>

          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>
        </div>

        <button className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
          Continue
        </button>

      </div>

      <div className="mt-6">

        <div className="mb-2 flex justify-between text-sm">
          <span className="text-slate-500">
            Progress
          </span>

          <span className="font-medium text-slate-700">
            {progress}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-indigo-600"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>

    </div>
  )
}

export default CourseCard