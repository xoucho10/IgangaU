'use client'
import React, { useState } from 'react'
import Link from 'next/link'

function SmartImage({ srcList, alt, className }: { srcList: string[], alt: string, className?: string }) {
  const [idx, setIdx] = React.useState(0)
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={srcList[idx]}
      alt={alt}
      className={className}
      onError={() => { if (idx < srcList.length - 1) setIdx(idx+1) }}
    />
  )
}

export default function Home2Page() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#FFFBF5] text-[#1A1A1A] font-sans">

      {/* HEADER - RESPONSIVE DESKTOP + MOBILE */}
      <header className="sticky top-0 z-50 bg-[#FFFBF5]/95 backdrop-blur-xl border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[70px] sm:h-[84px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <SmartImage srcList={["/logo.png","/logo.jpg","/new1.jpeg"]} alt="logo" className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-black" />
            <span className="text-[16px] sm:text-[20px] font-black tracking-widest uppercase">IGANGA <span className="text-[#9C6B2F]">UNITED</span></span>
          </Link>

          {/* DESKTOP NAV - RIGHT */}
          <nav className="hidden md:flex items-center gap-8 text-[12px] font-black uppercase tracking-[0.18em]">
            <Link href="/" className="text-black/50 hover:text-black transition">Home1</Link>
            <Link href="/red" className="text-black border-b-2 border-black pb-1">Home2</Link>
            <Link href="/blue" className="text-black/50 hover:text-black transition">Home3</Link>
          </nav>

          {/* MOBILE HAMBURGER */}
          <button onClick={()=>setMobileOpen(!mobileOpen)} className="md:hidden w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-black">
            {mobileOpen? '✕' : '☰'}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden bg-[#FFFBF5] border-t border-black/10 px-6 py-6 flex flex-col gap-4 text-[13px] font-black uppercase tracking-widest">
            <Link href="/" onClick={()=>setMobileOpen(false)} className="py-3 border-b border-black/10">Home1</Link>
            <Link href="/red" onClick={()=>setMobileOpen(false)} className="py-3 border-b border-black/10 text-black">Home2 • Current</Link>
            <Link href="/blue" onClick={()=>setMobileOpen(false)} className="py-3">Home3</Link>
          </div>
        )}
      </header>

      <div className="pointer-events-none select-none">

        {/* HERO - RESPONSIVE MOBILE + DESKTOP - BG VISIBLE */}
        <section className="relative w-full overflow-hidden mx-2 sm:mx-3 mt-3 rounded-[20px] sm:rounded-[24px] border border-black/5 min-h-[600px] sm:min-h-[520px] flex items-center">
          <SmartImage srcList={["/new1.jpeg","/new2.jpeg","/new1.jpg"]} alt="hero" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBF5] via-[#FFFBF5]/90 to-[#FFFBF5]/40 sm:via-[#FFFBF5]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFBF5] via-transparent to-[#FFFBF5]/40" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div className="space-y-4">
              <span className="bg-[#1A1A1A] text-[#FFFBF5] px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] inline-block">Sunday 27 Sep 2025 • 15:00 EAT • Iganga Stadium</span>
              <h1 className="text-[42px] sm:text-6xl font-black uppercase leading-[0.9] tracking-tighter">IGANGA <br /><span className="text-[#9C6B2F] italic font-serif font-normal">VS PAKWACHI</span></h1>
              <p className="text-black/70 text-[13px] sm:text-[14px] max-w-md leading-relaxed pt-1 font-medium">Big clash in Uganda Premier League. Iganga United host Pakwachi Young Stars at home. Come support the Red and White.</p>
              <div className="flex gap-3 pt-2 sm:hidden">
                <div className="bg-white border border-black/10 rounded-xl px-4 py-2 text-center shadow-sm flex-1"><p className="text-[9px] tracking-widest font-black opacity-50">HOME</p><p className="font-black text-xs">IGANGA</p></div>
                <div className="bg-white border border-black/10 rounded-xl px-4 py-2 text-center shadow-sm flex-1"><p className="text-[9px] tracking-widest font-black opacity-50">AWAY</p><p className="font-black text-xs">PAKWACHI</p></div>
              </div>
            </div>

            <div className="bg-white border border-black/10 rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 flex flex-col gap-4 sm:gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] w-full max-w-md mx-auto lg:ml-auto">
              <p className="text-[10px] font-black tracking-[0.3em] text-center text-black/40">NEXT MATCH</p>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-center gap-2"><SmartImage srcList={["/logo.png","/new1.jpeg"]} alt="Iganga" className="w-14 h-14 sm:w-16 sm:h-16 object-contain" /><span className="font-black text-[10px] sm:text-[11px]">IGANGA UTD</span></div>
                <span className="text-xl sm:text-2xl font-black italic">VS</span>
                <div className="flex flex-col items-center gap-2"><SmartImage srcList={["/pklogo.png","/pklogo.jpg"]} alt="Pakwachi" className="w-14 h-14 sm:w-16 sm:h-16 object-contain" /><span className="font-black text-[10px] sm:text-[11px]">PAKWACHI</span></div>
              </div>
              <div className="w-full text-center border-t border-black/10 pt-4"><p className="font-black text-[13px] sm:text-sm">27. Sep. 2025 - Sunday - 3:00 PM</p><p className="text-[11px] opacity-60">Iganga Saza Ground, Busoga</p></div>
              <div className="w-full bg-[#FFFBF5] border border-black/10 rounded-full py-2.5 sm:py-3 text-center text-[10px] font-black tracking-widest">TICKETS AT GATE</div>
            </div>
          </div>
        </section>

        {/* SQUAD - RESPONSIVE */}
        <section className="py-12 sm:py-16 bg-[#FFFBF5] border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#9C6B2F]">First Team</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase mt-1 mb-6 sm:mb-8">IGANGA SQUAD</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {[
                { num: '01', name: 'TEAM CAPTAIN', pos: 'GOALKEEPER', files: ["/team1.jpg"] },
                { num: '05', name: 'DEFENCE WALL', pos: 'DEFENDER', files: ["/team2.jpg"] },
                { num: '10', name: 'MIDFIELD ENGINE', pos: 'MIDFIELDER', files: ["/team3.jpg"] },
                { num: '09', name: 'TOP SCORER', pos: 'FORWARD', files: ["/team4.jpg"] },
              ].map((p) => (
                <div key={p.num} className="bg-white border border-black/10 rounded-2xl overflow-hidden">
                  <div className="aspect-[4/5] bg-white relative flex items-center justify-center overflow-hidden">
                    <SmartImage srcList={p.files} alt={p.name} className="w-full h-full object-contain bg-white" />
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 text-[10px] sm:text-[11px] font-black bg-white px-2 sm:px-2.5 py-1 rounded-full border shadow-sm">{p.num}</div>
                  </div>
                  <div className="p-3 sm:p-4 border-t border-black/5 bg-white"><p className="text-[9px] sm:text-[10px] font-black opacity-40 uppercase tracking-widest">{p.pos}</p><p className="text-[11px] sm:text-[13px] font-black uppercase mt-1">{p.name}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KITS - RESPONSIVE */}
        <section className="py-12 sm:py-16 bg-white border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#9C6B2F]">Official Kits</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase mt-1 mb-6 sm:mb-8">25/26 KITS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                { title: 'HOME KIT 25/26', price: 'UGX 85,000', tag: 'HOME', files: ["/kit1.jpg"] },
                { title: 'AWAY KIT 25/26', price: 'UGX 85,000', tag: 'AWAY', files: ["/kit2.jpg"] },
                { title: 'THIRD KIT 25/26', price: 'UGX 90,000', tag: 'THIRD', files: ["/kit3.jpg"] },
              ].map((kit, i) => (
                <div key={i} className="bg-[#FFFBF5] border border-black/10 p-3 sm:p-4 rounded-2xl">
                  <div className="relative aspect-[4/5] bg-white rounded-xl overflow-hidden flex items-center justify-center">
                    <SmartImage srcList={kit.files} alt={kit.title} className="w-full h-full object-contain p-3 bg-white" />
                    <span className="absolute top-3 left-3 bg-black text-white text-[9px] font-black px-2.5 py-1 rounded-full">{kit.tag}</span>
                  </div>
                  <h3 className="text-[12px] sm:text-[13px] font-black uppercase mt-4">{kit.title}</h3>
                  <p className="text-[#9C6B2F] font-bold text-sm mt-1">{kit.price}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-[11px] font-black tracking-[0.3em] mb-4">SPONSOR</p>
              <div className="bg-[#FFFBF5] border border-black/10 rounded-2xl inline-block p-4">
                <SmartImage srcList={["/sponsor.png","/sponsor.jpg"]} alt="sponsor" className="h-12 sm:h-14 object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* NEWS - RESPONSIVE */}
        <section className="py-12 sm:py-16 bg-[#FFFBF5] border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-black uppercase mb-6 sm:mb-8">Iganga vs Pakwachi News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                { img: ["/new1.jpeg","/new1.jpg"], date: "24 SEP 2025", title: "Iganga ready to host Pakwachi on Sunday" },
                { img: ["/new2.jpeg","/new2.jpg"], date: "25 SEP 2025", title: "Fans expected to fill Saza Ground" },
                { img: ["/new3.jpeg","/new3.jpg"], date: "26 SEP 2025", title: "Head to Head: Iganga vs Pakwachi" },
              ].map((n,i)=>(
                <div key={i} className="bg-white border border-black/10 rounded-2xl overflow-hidden"><SmartImage srcList={n.img} alt="news" className="w-full h-44 sm:h-48 object-cover" /><div className="p-4"><p className="text-[10px] font-black text-[#9C6B2F]">{n.date}</p><p className="font-black uppercase mt-2 text-sm leading-tight">{n.title}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER - RESPONSIVE */}
        <footer className="bg-[#111] text-white/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <div className="space-y-4 sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-3"><SmartImage srcList={["/logo.png","/new1.jpeg"]} alt="logo" className="w-10 h-10 rounded-full object-cover border border-white/20" /><span className="text-[18px] font-black tracking-widest uppercase text-white">IGANGA UNITED</span></div>
              <p className="text-[13px] leading-relaxed text-white/60">Pride of Busoga, nurturing local talent and aiming for Uganda Premier League promotion. Red and White army.</p>
            </div>
            <div><h4 className="font-black text-white uppercase tracking-[0.2em] mb-4 sm:mb-5 text-[12px]">Match - 27.Sep.25</h4><ul className="space-y-2 text-[13px]"><li>Iganga Utd vs Pakwachi</li><li>Sunday 3:00 PM EAT</li><li>Iganga Saza Ground</li><li>FUFA Big League</li></ul></div>
            <div><h4 className="font-black text-white uppercase tracking-[0.2em] mb-4 sm:mb-5 text-[12px]">Club</h4><ul className="space-y-2 text-[13px]"><li>Red & White - Red Army</li><li>igangaunited@gmail.com</li></ul></div>
            <div><h4 className="font-black text-white uppercase tracking-[0.2em] mb-4 sm:mb-5 text-[12px]">Visit</h4><p className="text-[13px] leading-relaxed">Iganga - Jinja Highway<br/>Busoga, Uganda<br/>#IgangaUnited</p></div>
          </div>
          <div className="border-t border-white/10 py-6 text-center text-[9px] sm:text-[10px] tracking-widest uppercase text-white/40 px-4">© 2025 IGANGA UNITED • 27.SEP.25 IGANGA VS PAKWACHI • MOBILE + DESKTOP READY</div>
        </footer>

      </div>
    </div>
  )
}