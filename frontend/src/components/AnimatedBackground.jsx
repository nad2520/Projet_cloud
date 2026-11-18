export default function AnimatedBackground() {
  const blob = "absolute rounded-full blur-[80px] opacity-45 motion-reduce:animate-none";
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className={`${blob} -left-24 -top-24 h-96 w-96 bg-sky-400 animate-drift1`} />
      <div className={`${blob} -bottom-32 right-0 h-[28rem] w-[28rem] bg-blue-600 animate-drift2`} />
      <div className={`${blob} left-1/3 top-1/2 h-72 w-72 bg-cyan-300 animate-drift3`} />
      <div
        className="absolute inset-0 animate-grid motion-reduce:animate-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,211,252,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
}