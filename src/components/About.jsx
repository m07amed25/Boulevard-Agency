import { ArrowDown, ArrowUp } from "lucide-react"
import { users, iconPathDrawing } from "../assets/data"

const About = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4">
        {/* Head */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10 sm:mb-12 md:mb-16 gap-6 sm:gap-8 lg:gap-12">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] max-w-5xl">
                Reshaping what exists, we're here to help you stand out-
                <span className="text-zinc-400">with clarity, creativity, and egde.</span>
            </h2>
            {/* Icon Badge */}
            <div className="hidden lg:flex size-10 lg:size-12 bg-prime-accent rounded-full items-center justify-center shrink-0">
                <span className="text-zinc-900 text-xs font-bold flex flex-col items-center leading-none">
                    <span><ArrowUp size={15} /></span>
                    <span><ArrowDown size={15} /></span>
                </span>
            </div>
        </div>
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16 md:mb-20">
            {/* Card: Brand Story */}
            <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] justify-between p-6 sm:p-8 lg:p-10 text-white flex flex-col min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                {/* Icon */}
                <div className="size-10 sm:size-12 text-prime-accent">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
                        <path d={iconPathDrawing} />
                    </svg>
                </div>
                {/* Text */}
                <div className="">
                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15rem] sm:tracking-[0.2rem] mb-3 sm:mb-4 opacity-70">
                        Made for the Bold
                    </p>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium leading-tight">
                        Design experiences, not just screens. Tell stories, not just taglines.
                    </h3>
                </div>
            </div>
            {/* Card: Dark Image */}
            <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] items-center justify-center p-6 sm:p-8 lg:p-10 text-white flex flex-col min-h-[300px] sm:min-h-[350px] md:min-h-[400px] relative">
                {/* Visual Placeholder */}
                <div className="text-white/20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic">
                    error
                </div>
                <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-4 sm:left-5 md:left-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-zinc-800/50 backdrop-blur-md rounded-full border border-white/10">
                    <span className="text-[10px] sm:text-xs font-medium text-white">Est. 2010</span>
                </div>
            </div>
            {/* Card: Growth */}
            <div className="bg-zinc-50 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] justify-between p-6 sm:p-8 lg:p-10 text-white flex flex-col min-h-[300px] sm:min-h-[350px] md:min-h-[400px] sm:col-span-2 lg:col-span-1">
                <div>
                    <p className="text-[10px] sm:text-xs font-medium text-zinc-400 mb-4 sm:mb-6">(Growth)</p>
                    <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                        +32%
                    </h3>
                </div>
                <div className="pt-6 sm:pt-8 border-t border-zinc-200 flex flex-col gap-4 sm:gap-6">
                    <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-[200px]">
                        Design experiences, not just screens.
                    </p>
                    {/* Avatar */}
                    <div className="flex -space-x-2 sm:-space-x-3">
                        {users.map((user, index) => (
                            <div key={index} className="size-8 sm:size-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                                <div className="size-full bg-zinc-300 center-item">
                                    <img src={user} alt="user-image" className="size-full object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        {/* Bottom Bar */}
      </div>
    </section>
  )
}

export default About
