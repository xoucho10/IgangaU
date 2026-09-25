"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header(){
  const pathname = usePathname();
  return(
    <header className="bg-[#122544] text-white sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 h-[64px] flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="" className="h-9 w-9 bg-white rounded-full p-1" />
          <p className="font-black text-[14px] leading-none">IGANGA UNITED F.C<br/><span className="text-white/60 text-[9px] tracking-widest">LIONS OF BUSOGA</span></p>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3 font-black text-[11px]">
          <Link href="/" className={`px-5 py-2.5 rounded-[10px] ${pathname==="/"? "bg-[#EAA324] text-black" : "bg-[#EAA324] text-black opacity-80 hover:opacity-100"}`}>Home!</Link>
          <Link href="/red" className={`px-5 py-2.5 rounded-full ${pathname==="/red"? "bg-white text-black" : "bg-[#E11D48] text-white hover:bg-white hover:text-black"}`}>Home2</Link>
          <Link href="/blue" className={`px-5 py-2.5 rounded-full ${pathname==="/blue"? "bg-white text-black" : "bg-[#1D4ED8] text-white hover:bg-white hover:text-black"}`}>Home3</Link>
          <div className="bg-white/10 text-white/50 px-5 py-2.5 rounded-[10px] cursor-default">SPONSOR</div>
        </nav>
      </div>
      <div className="h-[12px] bg-[#EAA324] w-full"></div>
    </header>
  )
}