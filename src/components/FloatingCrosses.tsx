const FloatingCrosses = () => {
  const crosses = [
    { size: "w-8 h-8", top: "10%", left: "5%", delay: "0s", opacity: "opacity-20" },
    { size: "w-12 h-12", top: "20%", right: "10%", delay: "1s", opacity: "opacity-10" },
    { size: "w-6 h-6", top: "40%", left: "15%", delay: "2s", opacity: "opacity-15" },
    { size: "w-10 h-10", top: "60%", right: "5%", delay: "1.5s", opacity: "opacity-10" },
    { size: "w-8 h-8", top: "80%", left: "10%", delay: "0.5s", opacity: "opacity-20" },
    { size: "w-6 h-6", top: "30%", right: "20%", delay: "2.5s", opacity: "opacity-15" },
    { size: "w-10 h-10", top: "70%", left: "80%", delay: "1s", opacity: "opacity-10" },
    { size: "w-8 h-8", top: "15%", left: "70%", delay: "3s", opacity: "opacity-15" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {crosses.map((cross, index) => (
        <div
          key={index}
          className={`absolute ${cross.size} ${cross.opacity} animate-float`}
          style={{
            top: cross.top,
            left: cross.left,
            right: cross.right,
            animationDelay: cross.delay,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full"
            style={{
              filter: "drop-shadow(0 0 10px hsl(var(--health-green) / 0.3))",
            }}
          >
            <path
              d="M9 2H15V9H22V15H15V22H9V15H2V9H9V2Z"
              fill="hsl(140, 70%, 55%)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingCrosses;
