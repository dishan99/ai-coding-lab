function AITutorCard() {
  return (
    <div className="rounded-2xl bg-slate-950 p-6 text-white shadow-sm">

      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-xl">
          🤖
        </div>

        <div>
          <h4 className="text-xl font-semibold">
            AI Tutor
          </h4>

          <p className="mt-1 text-sm text-slate-400">
            Get help understanding and improving your code.
          </p>
        </div>

      </div>

      <div className="mt-6 flex flex-wrap gap-3">

        <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm transition hover:bg-slate-700">
          Explain my code
        </button>

        <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm transition hover:bg-slate-700">
          Give me a hint
        </button>

        <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm transition hover:bg-slate-700">
          Debug my code
        </button>

      </div>

    </div>
  )
}

export default AITutorCard