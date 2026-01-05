import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

import { navigateLinks } from "../assets/data"

const Header = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    })

    return <header className={`fixed top-0 left-0 w-full z-50 p-5 lg:px-10 transition-all duration-300 ${isScroll ? "backdrop-blur-md bg-black/20 text-white" : "text-white-80"}`}>
      <div className="container mx-auto px-2 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-6 lg:gap-16">
            {/* Logo */}
            <div className="text-3xl lg:text-4xl relative space-font tracking-tighter max-w-fit text-white">
                Boulevard <sup className="text-[10px] font-thin absolute top-1 -right-4">TM</sup>
            </div>

            {/* Location */}
            {/* <p className={`text-xs lg:text-lg 2xl:text-xl hidden lg:inline-flex tracking-wide mt-1 ${isScroll ? "text-zinc-500" : "text-white"}`}>
                • France, 03:45 PM (GMT+2)
            </p> */}
        </div>
        {/* Right */}
        <div className="hidden lg:flex items-center gap-12 lg:gap-24">
            {/* Nav */}
            <nav className="flex items-center gap-2 text-[10px] lg:text-xs font-bold uppercase tracking-widest">
                {
                    navigateLinks.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <a href={`#${item.toLowerCase()}`} className="cursor-pointer text-white/80 hover:underline underline-offset-2 transition hover:-translate-y-1">
                                {item}
                            </a>
                            {index !== navigateLinks.length -1 && <span className="ml-1">,</span>}
                        </div>
                    ))   
                }
            </nav>
            {/* CTA */}
            <p className={`text-[10px] text-white/90 cursor-pointer lg:text-xs font-bold uppercase tracking-widest pb-0.5 hover:opacity-60 transition ${isScroll ? "border-b border-white" : "border-b border-white/40 "}`}>
                Get Connected
            </p>
        </div>
        
      {/* Mobile */}
      <div 
        className="lg:hidden cursor-pointer z-50 relative" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
          {isMenuOpen ? <X className="size-8 text-white" /> : <Menu className="size-8 text-white" />}
        </div>
      </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-0 bg-black/40 backdrop-blur-2xl z-40 transition-all duration-500 ease-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-6 px-8">
          {/* Decorative Line */}
          <div className="absolute top-24 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          
          {navigateLinks.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className={`text-white text-3xl font-light uppercase tracking-[0.3em] hover:tracking-[0.5em] hover:text-white/80 transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          
          {/* CTA Button */}
          <div 
            className={`mt-8 transform transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: `${navigateLinks.length * 100 + 300}ms` }}
          >
            <a 
              href="#contact"
              className="group relative px-8 py-4 text-white text-sm font-bold uppercase tracking-[0.2em] border border-white/30 hover:border-white/60 transition-all duration-300 overflow-hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Get Connected</span>
              {/* <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" /> */}
            </a>
          </div>

          {/* Bottom Info */}
          <div 
            className={`absolute bottom-12 left-8 right-8 flex justify-between items-center text-white/50 text-xs tracking-wider transform transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: `${navigateLinks.length * 100 + 400}ms` }}
          >
            <span>• France, GMT+2</span>
            <span>© 2026 Boulevard</span>
          </div>

          {/* Decorative Line Bottom */}
          <div className="absolute bottom-24 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </nav>
      </div>
    </header>
}

export default Header
