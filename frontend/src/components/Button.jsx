export default function Button({children, ...props}){
    return (
        <button 
              className="w-full rounded-xl bg-sky-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-200/60 active:scale-[0.99]"
                {...props}
        >
            {children}
        </button>
    );
}