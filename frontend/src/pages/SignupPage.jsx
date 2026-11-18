import AnimatedBackground from "../components/AnimatedBackground";
import SignupForm from "../components/SignupForm";

export default function SignupPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
      <AnimatedBackground />
      <div className="relative w-full max-w-md rounded-2xl border border-sky-200/10 bg-slate-900/70 p-8 shadow-2xl shadow-sky-500/10 backdrop-blur-xl">
        <SignupForm onSubmit={(data) => console.log("Inscription :", data)} />
      </div>
     
    </main>
  );
}

