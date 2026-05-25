export default function AmbientBg() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] rounded-full animate-float-1"
        style={{
          left: "5%", top: "10%",
          background:
            "radial-gradient(circle, rgba(232,96,42,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full animate-float-2"
        style={{
          right: "5%", bottom: "15%",
          background:
            "radial-gradient(circle, rgba(59,111,245,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full animate-float-1"
        style={{
          left: "50%", top: "50%",
          background:
            "radial-gradient(circle, rgba(212,137,74,0.03) 0%, transparent 70%)",
          animationDelay: "-10s",
        }}
      />
    </div>
  );
}
