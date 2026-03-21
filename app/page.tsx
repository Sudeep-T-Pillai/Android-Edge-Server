import DownArrow from "./components/DownArrow";
import skills from "./components/Lists";
export default function Home() {
  return (
    <div className="flex min-h-screen  bg-black font-serif ">

      <header className="fixed top-0 z-10 w-full p-4 flex justify-end gap-4 text-sm text-gray-400">
          <nav className=" fixed flex gap-4">
            <a href="https://github.com/Sudeep-T-Pillai">
              Visit GitHub
            </a>

            <a href="https://www.linkedin.com/in/sudeep-t-pillai">
              Visit LinkedIn
            </a>   
          </nav>          
        </header> 

      <main className="relative flex min-h-screen w-full flex-col">
        <section id=  "welcome-section" className="min-h-screen inset-0 flex justify-center items-center px-6">
          {/* Content */}
          <div className="flex flex-col items-center gap-4 max-w-4xl text-white">

            <h1 className="text-8xl text-center font-mono">
              Hey there,
            </h1>

            <h2 className="text-4xl text-center font-mono">
            I'm Sudeep, Something is being built here. Not ready yet but neither am I, and that's never stopped me :)
            </h2>
            <div className="flex items-center justify-center mt-60">
              <DownArrow />
            </div>         
         </div>
       </section>

       <section id="about-me" className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-10 gap-8 mt-20">
  
          {/* Box 1: About Me */}
          <div className="flex flex-col rounded-3xl border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] p-6 md:p-10 gap-3">
              <h2 className="text-3xl md:text-5xl font-mono">
                About Me 
              </h2>
              <div className="space-y-4 text-lg md:text-2xl text-justify font-mono">
                <p>
                  A backend and AI developer building at the intersection of machine learning and scalable infrastructure.
                  From publishing IEEE research paper to managing my own home lab,
                  I love turning complex data into functional systems. Currently an undergrad at TKM College of Engineering (Class of '26).
                </p>
                <p>
                  I usually find ways to push hardware to its limits.
                  Right now, my focus is between maintaining a custom Alpine Linux edge server routed through Cloudflare tunnels,
                  training Spiking Neural Networks for BCI applications, and writing state-machine logic for my Arduino-based desk pet.
                </p>
              </div>
          </div>

          {/* Box 2: Tech Stacks */}
          <div className="flex flex-col rounded-3xl border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] p-6 md:p-10">
              <h2 className="text-3xl md:text-5xl font-mono mb-6">
                Tech Stacks I use
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xl md:text-2xl font-mono">
                {skills.map(({ name, icon: Icon }) => (
                  <li key={name} className="flex items-center gap-2">
                    <Icon className="shrink-0 text-cyan-400" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
          </div>
        </section>

       <section id="projects" className="flex flex-col items-center gap-4 mt-20">
          <h2 className="text-5xl font-mono">
            Projects
          </h2>
          <p className="text-2xl text-justify font-mono max-w-3xl">
            This section is under construction, but feel free to check out my GitHub for some of the projects I've been working on!
          </p>
       </section>
      </main>
    </div>
  );
}