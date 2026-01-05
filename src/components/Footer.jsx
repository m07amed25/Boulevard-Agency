import { ArrowRight, ArrowUp } from "lucide-react"
import { navigateLinks, socialLinks } from "../assets/data"


const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 sm:mb-16 gap-6 sm:gap-8">
          {/* Text */}
          <div className="w-full lg:w-auto">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3 sm:mb-4">
              Have any project in mind?
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold tracking-tighter bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 bg-clip-text text-transparent pb-2 sm:pb-4 break-all sm:break-normal">
              hello@boulevard.com
            </h2>
          </div>
          {/* CTA Btn */}
          <button className="flex items-center gap-2 sm:gap-3 bg-white text-zinc-900 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-transform hover:scale-105 shrink-0">
            Book a Call
            <div className="size-6 sm:size-8 bg-zinc-900 rounded-full flex items-center justify-center">
              <ArrowRight className="text-white size-3 sm:size-4" />
            </div>
          </button>
        </div>

        <hr className="border-zinc-800 mb-10 sm:mb-12 md:mb-16" />
        {/* Middle: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-24">
          {/* Info */}
          <div className="sm:col-span-2 md:col-span-6 lg:col-span-7">
            <p className="text-xs sm:text-sm text-zinc-400 mb-4 sm:mb-6">
              &copy; {new Date().getFullYear()} Boulevard Cafe.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-medium leading-snug max-w-sm">
              Work with our strategists, designers, and developers who deliver high-quality work with passion.
            </p>
          </div>
          {/* Navigation Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 sm:mb-6">
              Navigate
            </p>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {navigateLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm sm:text-base text-zinc-300 hover:text-white transition-colors">{link}</a>
                  </li>
              ))}
            </ul>
          </div>
           {/* Social */}
           <div className="md:col-span-3">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 sm:mb-6">
              Social Media
            </p>

            <ul className="flex flex-col gap-2 sm:gap-3">
              {socialLinks.map((link) => (
                <li key={link}>
                  <a href={link} target="_blank" className="text-sm sm:text-base text-zinc-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
           </div>
        </div>

        {/* Bottom: Branding */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold tracking-tighter leading-none relative text-center sm:text-left">
            Boulevard <sup className="font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl absolute -top-1 sm:top-0">TM</sup>
          </h1>

          <button onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} className="mb-0 sm:mb-4 size-10 sm:size-12 cursor-pointer rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition-colors shrink-0">
            <ArrowUp className="size-4 sm:size-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
