import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-serif dark:bg-black  overflow-hidden">
      <main className="relative flex min-h-screen w-full max-w-4xl flex-col justify-center bg-white dark:bg-black sm:items-center ">
        <div className="flex flex-col items-center row gap-4 ">

          <h1 className="text-8xl text-center">
            Hey there,  
          </h1>
          <h2 className="text-4xl text-center" >
            I'm Sudeep, Something is being built here. Not ready yet  but neither am I, and that's never stopped me
          </h2>
            <a href="https://github.com/Sudeep-T-Pillai" target="_blank" rel="noopener noreferrer">
            Visit GitHub
          </a>
            <a href="https://www.linkedin.com/in/sudeep-t-pillai" target="_blank" rel="noopener noreferrer">
            Visit LinkedIn
         </a>
        </div>
      </main>
    </div>
  );
}
