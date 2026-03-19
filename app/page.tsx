export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-serif overflow-hidden">
        {/* Stars */}
<div className="flex min-h-screen items-center justify-center bg-black font-serif overflow-hidden">

        {/* Stars background grid
        <div className="absolute inset-0 
          bg-[radial-gradient(circle,white_1px,transparent_1px)] 
          bg-[length:40px_40px] opacity-20">
        </div> */}

        {/* Glowing stars */}
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}

      </div>

      <main className="relative flex min-h-screen w-full max-w-4xl flex-col justify-center sm:items-center">
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 text-white">

          <h1 className="text-8xl text-center">
            Hey there,
          </h1>

          <h2 className="text-4xl text-center">
            I'm Sudeep, Something is being built here. Not ready yet but neither am I, and that's never stopped me
          </h2>

          <a href="https://github.com/Sudeep-T-Pillai">
            Visit GitHub
          </a>

          <a href="https://www.linkedin.com/in/sudeep-t-pillai">
            Visit LinkedIn
          </a>

        </div>

      </main>
    </div>
  );
}