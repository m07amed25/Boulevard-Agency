import { ArrowRight } from "lucide-react"

const Hero = () => {
  return <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden text-white bg-gradient-to-tr from-zinc-950 via-blue-700 to-indigo-300">
    {/* Grain Texture */}
    <div style={{
        backgroundImage: "url(/images/grain.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        mixBlendMode: "overlay",
    }} className="absolute inset-0 bg-zinc-600 pointer-events-none opacity-50" />
    {/* Hero Elements */}
    <div className="container mx-auto px-8 lg:px-4 relative z-10 mb-45">
        <div className="max-w-4xl">
        {/* Subtitle */}
            <p className="uppercase text-white/50 text-xs lg:text-sm 2xl:text-base font-bold tracking-[.3rem] mb-8">
                AGENCY THAT MOVES CULTURE
            </p>
            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl 2xl:text-7xl max-w-2xl 2xl:max-w-4xl font-medium tracking-tighter">
                Design studio that not only creates digital products but also experiences.
            </h2>
            {/* CTA Button */}
            <button className="mt-12 p-3 px-6 flex items-center gap-4 tracking-tight cursor-pointer rounded-full bg-prime-accent text-black font-semibold transition-all duration-300 hover:scale-105">
                let's Collaborate 
                <div className="size-10 bg-zinc-900 rounded-full center-item">
                    <ArrowRight className="text-prime-accent" size={20} />
                </div>
            </button>
        </div>
    </div>
    {/* Huge Brand-Text */}
    <div className="relative w-full">
        <h1 className="absolute text-white text-[100px] tracking-tighter font-bold -rotate-90 bottom-2 2xl:-bottom-60 -right-42 2xl:left-[120px] lg:rotate-0 lg:left-[60px] lg:-bottom-32 lg:text-[20vw] leading-none select-none opacity-100">
            Boulevard
        </h1>
        
        {/* Scroll Indicator */}
        <div className="absolute right-14 -top-40 text-[10px] uppercase font-bold tracking-[0.2rem] opacity-60 hidden lg:block">
            (Scroll for more)
        </div>
    </div>
  </section>
}

export default Hero
