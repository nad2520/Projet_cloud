export default function Input({ label, id, error, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm text-sky-100/80">
        {label}
      </label>
      <input
        id={id}
        name={id}
        aria-invalid={!!error}
        className={`w-full rounded-xl border bg-slate-950/60 px-4 py-3 text-sm text-sky-50 placeholder-slate-500 outline-none transition focus:ring-2 ${
          error
            ? "border-rose-400/60 focus:border-rose-300 focus:ring-rose-300/30"
            : "border-sky-200/15 focus:border-sky-300 focus:ring-sky-300/30"
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-rose-300">{error}</p>}
    </div>
  );
}