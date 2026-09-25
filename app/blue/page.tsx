"use client";
import React, { useState } from "react";
import Link from "next/link";

function SmartImage({ srcList, alt, className }: { srcList: string[], alt: string, className?: string }) {
  const [idx, setIdx] = React.useState(0);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={srcList[idx]} alt={alt} className={className} onError={() => { if (idx < srcList.length - 1) setIdx(idx + 1) }} />
  );
}

export default function Home3Page() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full bg-[#F9FAFB] text-[#0F2340] font-sans antialiased overflow-x-hidden">

      {/* HEADER - BIG LOGO + NAV RIGHT */}
      <header className="w-full bg-white h-[90px] px-4 sm:px-5 lg:px-10 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-4">
          <SmartImage srcList={["/logo.png","/logo.jpg"]} alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-[#EAA324] shadow-md" />
          <div className="leading-none">
            <p className="font-black text-[18px] sm:text-[22px] tracking-tight">IGANGA UNITED FC</p>
            <p className="text-[12px] font-black text-[#EAA324] tracking-[0.18em]">LIONS OF BUSOGA</p>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex gap-7 text-[13px] font-black uppercase tracking-widest">
            <Link href="/" className="text-black/50 hover:text-black">Home1</Link>
            <Link href="/red" className="text-black/50 hover:text-black">Home2</Link>
            <Link href="/blue" className="font-bold text-[#EAA324] border-b-2 border-[#EAA324] pb-1">Home3</Link>
          </nav>
          <div className="hidden sm:flex bg-[#EAA324] text-white font-black text-[12px] px-6 py-3 rounded-full">27.SEP.25</div>
          <button onClick={()=>setMobileOpen(!mobileOpen)} className="lg:hidden w-11 h-11 rounded-full bg-[#0F2340] text-white flex items-center justify-center font-black">{mobileOpen? '✕' : '☰'}</button>
        </div>
      </header>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-b px-6 py-5 flex flex-col gap-4 text-[13px] font-black uppercase tracking-widest">
          <Link href="/" onClick={()=>setMobileOpen(false)}>Home1</Link>
          <Link href="/red" onClick={()=>setMobileOpen(false)}>Home2</Link>
          <Link href="/blue" onClick={()=>setMobileOpen(false)} className="text-[#EAA324]">Home3 • Current</Link>
        </div>
      )}

      {/* HERO - STRETCH ACROSS FULL PAGE */}
      <div className="pointer-events-none select-none">
        <section className="relative w-full h-[520px] lg:h-[680px] overflow-hidden">
          <SmartImage srcList={["/new1.jpeg","/new1.jpg","/new2.jpeg"]} alt="hero" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
          <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-5 lg:px-10 flex items-center">
            <div className="max-w-[560px]">
              <p className="text-[#EAA324] font-black text-[14px] tracking-widest">27.SEP.25 • IGANGA VS PAKWACHI • SAZA GROUND</p>
              <h1 className="font-black text-[42px] lg:text-[64px] leading-[0.95] mt-3">Iganga United <br/>Football Club</h1>
              <p className="mt-4 tracking-[0.35em] text-[12px] font-black opacity-70">IGANGA UTD VS PAKWACHI • 3:00 PM EAT</p>
              <p className="mt-5 text-[15px] text-gray-700 leading-relaxed font-medium">Iganga United FC host Pakwachi Young Stars this Sunday. Together we roar - pride of Busoga. Red Army fill Saza Ground.</p>
              <div className="mt-8 flex gap-3">
                <div className="bg-[#EAA324] text-white font-black px-8 py-4 rounded-full text-sm">GET TICKETS - 10K</div>
                <div className="border-2 border-[#0F2340] px-8 py-4 rounded-full text-sm font-black bg-white">LIONS OF BUSOGA</div>
              </div>
              <p className="mt-8 font-serif italic text-[#C99A3A] text-3xl">One Club One Family</p>
            </div>
          </div>
          <div className="absolute bottom-6 right-6 lg:right-10 z-20 bg-white rounded-2xl px-5 py-3 flex items-center gap-4 shadow-xl border">
            <SmartImage srcList={["/logo.png"]} alt="Iganga" className="w-12 h-12 object-contain" />
            <span className="font-black text-[#0F2340]">IGANGA UTD</span>
            <span className="font-black italic text-[#EAA324] text-xl">VS</span>
            <span className="font-black text-[#0F2340]">PAKWACHI</span>
            <SmartImage srcList={["/pklogo.png"]} alt="Pakwachi" className="w-12 h-12 object-contain" />
          </div>
        </section>

        {/* NEXT MATCH + NEWS + STANDINGS */}
        <section className="px-4 sm:px-5 lg:px-10 grid lg:grid-cols-4 gap-5 py-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <div className="bg-[#EAA324] text-white text-[11px] font-bold inline-flex px-3 py-1 rounded-full">📅 NEXT MATCH</div>
            <p className="font-black mt-4 text-lg">FUFA Big League</p>
            <p className="text-sm text-gray-500">Sun 27 Sep 2025 • 3PM</p>
            <p className="font-black text-[16px] mt-3">Iganga United vs Pakwachi</p>
            <p className="text-sm mt-1">📍 Iganga Saza Ground</p>
            <div className="mt-5 flex gap-3 justify-center bg-[#F9FAFB] rounded-xl py-3 border"><SmartImage srcList={["/logo.png"]} alt="logo" className="w-10 h-10 object-contain" /><span className="font-black text-lg">VS</span><SmartImage srcList={["/pklogo.png"]} alt="pk" className="w-10 h-10 object-contain" /></div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <p className="font-black text-[#EAA324] text-base">📰 LATEST NEWS</p>
            <div className="mt-5 space-y-4">
              <div className="flex gap-3"><SmartImage srcList={["/new1.jpeg"]} alt="new1" className="w-14 h-14 rounded-xl object-cover" /><div><span className="text-[10px] bg-[#FFF3D6] text-[#EAA324] px-2 py-0.5 rounded-full font-black">24 SEP</span><p className="font-bold text-[13px] mt-1 leading-tight">Iganga ready to host Pakwachi</p></div></div>
              <div className="flex gap-3"><SmartImage srcList={["/new2.jpeg"]} alt="new2" className="w-14 h-14 rounded-xl object-cover" /><div><span className="text-[10px] bg-[#FFF3D6] text-[#EAA324] px-2 py-0.5 rounded-full font-black">25 SEP</span><p className="font-bold text-[13px] mt-1 leading-tight">Fans expected at Saza Ground</p></div></div>
              <div className="flex gap-3"><SmartImage srcList={["/new3.jpeg"]} alt="new3" className="w-14 h-14 rounded-xl object-cover" /><div><span className="text-[10px] bg-[#FFF3D6] text-[#EAA324] px-2 py-0.5 rounded-full font-black">26 SEP</span><p className="font-bold text-[13px] mt-1 leading-tight">Head to Head analysis</p></div></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <p className="font-black text-[#EAA324] text-base">🏆 TABLE</p>
            <div className="mt-4 bg-[#0F2340] text-white rounded-lg px-4 py-3 flex justify-between text-sm font-bold"><span>Iganga United</span><span>#1 45pts</span></div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between"><span>2 Pakwachi</span><span>42pts</span></div>
              <div className="flex justify-between"><span>3 KCCA FC</span><span>40pts</span></div>
              <div className="flex justify-between"><span>4 Vipers SC</span><span>38pts</span></div>
            </div>
            <div className="mt-6 bg-[#FFF3D6] rounded-xl p-4 text-center"><p className="text-[11px] font-black">OFFICIAL SPONSOR</p><SmartImage srcList={["/sponsor.png"]} alt="sponsor" className="h-12 mx-auto mt-2 object-contain" /></div>
          </div>
          <div className="space-y-5">
            <div className="h-48 rounded-2xl overflow-hidden border"><SmartImage srcList={["/new2.jpeg"]} alt="fans" className="w-full h-full object-cover" /></div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border">
              <p className="text-center font-black text-[#EAA324] text-sm tracking-widest">OUR VALUES</p>
              <div className="grid grid-cols-4 gap-3 mt-4 text-[11px] text-center">
                <div><div className="w-10 h-10 bg-[#FFF3D6] rounded-full mx-auto flex items-center justify-center text-lg">🦁</div><p className="mt-2 font-black">Unity</p></div>
                <div><div className="w-10 h-10 bg-[#FFF3D6] rounded-full mx-auto flex items-center justify-center text-lg">🛡️</div><p className="mt-2 font-black">Pride</p></div>
                <div><div className="w-10 h-10 bg-[#FFF3D6] rounded-full mx-auto flex items-center justify-center text-lg">⭐</div><p className="mt-2 font-black">Roar</p></div>
                <div><div className="w-10 h-10 bg-[#FFF3D6] rounded-full mx-auto flex items-center justify-center text-lg">❤️</div><p className="mt-2 font-black">Family</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* SQUAD + KITS - BIGGER CARDS */}
        <section className="px-4 sm:px-5 lg:px-10 grid lg:grid-cols-[1.1fr_2fr] gap-6 pb-10">
          <div className="bg-white rounded-2xl p-7 shadow-sm border">
            <p className="font-black leading-tight text-xl">Built on Passion • Driven by Community</p>
            <p className="text-sm font-bold mt-2 text-[#EAA324]">Founded 2021 • Iganga Saza Ground</p>
            <p className="text-[14px] text-gray-600 mt-4 leading-relaxed">Iganga United FC is pride of Busoga. This Sunday 27 Sep we host Pakwachi at Saza Ground, 3PM. Red Army will roar.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { file: "/kit1.jpg", name: "HOME KIT" },
                { file: "/kit2.jpg", name: "AWAY KIT" },
                { file: "/kit3.jpg", name: "THIRD KIT" },
              ].map((k)=>(
                <div key={k.name} className="bg-[#F9FAFB] rounded-2xl p-3 text-center border"><SmartImage srcList={[k.file]} alt={k.name} className="w-full h-28 sm:h-36 object-contain" /><p className="text-[10px] font-black mt-2 tracking-widest">{k.name}</p></div>
              ))}
            </div>
            <p className="mt-6 text-[12px] font-black tracking-[0.2em] text-center bg-[#0F2340] text-white py-3 rounded-full">OFFICIAL KITS 25/26 • UGX 85K</p>
          </div>
          <div className="bg-white rounded-2xl p-7 shadow-sm border">
            <div className="flex justify-between items-center"><p className="font-black text-[#EAA324] text-sm tracking-widest">FIRST TEAM SQUAD • IGANGA UNITED</p><p className="text-xs font-black bg-[#F9FAFB] px-3 py-1 rounded-full border">27.SEP.25</p></div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-6">
              {[
                { num: "1", name: "Team Captain", pos: "Goalkeeper", img: "/team1.jpg" },
                { num: "2", name: "Defence Wall", pos: "Defender", img: "/team2.jpg" },
                { num: "3", name: "Midfield Engine", pos: "Midfielder", img: "/team3.jpg" },
                { num: "4", name: "Top Scorer", pos: "Forward", img: "/team4.jpg" },
              ].map((p)=>(
                <div key={p.name} className="text-center border rounded-2xl p-4 bg-[#F9FAFB]">
                  <div className="w-full h-40 sm:h-52 bg-white rounded-xl overflow-hidden flex items-center justify-center border"><SmartImage srcList={[p.img]} alt={p.name} className="w-full h-full object-contain" /></div>
                  <p className="font-black text-sm mt-3 uppercase">{p.name}</p>
                  <p className="text-[11px] text-[#EAA324] font-black mt-1">{p.num} • {p.pos}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER - INFORMATIVE ABOUT TEAM */}
      <footer className="bg-[#0F2340] text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-4">
              <SmartImage srcList={["/logo.png"]} alt="logo" className="w-16 h-16 rounded-2xl bg-white object-cover border-2 border-[#EAA324]" />
              <div>
                <p className="font-black text-lg leading-none">IGANGA UNITED FC</p>
                <p className="text-[#EAA324] font-black text-[11px] tracking-widest mt-1">LIONS OF BUSOGA</p>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-white/70">Pride of Busoga since 2021. More than football - family, community, legacy. Nurturing local talent from Iganga to Uganda Premier League. Red & White Army.</p>
            <div className="flex gap-2 pt-2">
              <div className="bg-[#EAA324] w-8 h-8 rounded-full flex items-center justify-center text-xs font-black">f</div>
              <div className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-xs">X</div>
              <div className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-xs">IG</div>
            </div>
          </div>

          <div>
            <h4 className="font-black text-[#EAA324] text-xs tracking-[0.2em] uppercase mb-5">Matchday 27 Sep</h4>
            <ul className="space-y-3 text-[13px] text-white/80">
              <li className="flex gap-2"><span className="text-[#EAA324]">•</span> Iganga Utd vs Pakwachi Young Stars</li>
              <li className="flex gap-2"><span className="text-[#EAA324]">•</span> Sunday 27 Sep 2025 - 3:00 PM EAT</li>
              <li className="flex gap-2"><span className="text-[#EAA324]">•</span> Iganga Saza Ground, Busoga</li>
              <li className="flex gap-2"><span className="text-[#EAA324]">•</span> FUFA Big League - Matchday 18</li>
              <li className="flex gap-2"><span className="text-[#EAA324]">•</span> Tickets: 10K Regular, 20K VIP at Gate</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#EAA324] text-xs tracking-[0.2em] uppercase mb-5">Club Information</h4>
            <ul className="space-y-3 text-[13px] text-white/80">
              <li>Founded: 2021 - Iganga Municipality</li>
              <li>Stadium: Iganga Saza Ground (5,000)</li>
              <li>Colours: Red & White - Red Army</li>
              <li>Motto: Together We Roar</li>
              <li>Academy: 50+ Youth Players U15-U20</li>
              <li>Community: Busoga Pride Project</li>
              <li className="pt-2 flex items-center gap-2"><SmartImage srcList={["/sponsor.png"]} alt="sponsor" className="h-6 object-contain bg-white rounded px-2 py-0.5" /><span className="text-[11px]">Official Sponsor</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#EAA324] text-xs tracking-[0.2em] uppercase mb-5">Visit & Contact</h4>
            <ul className="space-y-3 text-[13px] text-white/80">
              <li>Iganga - Jinja Highway<br/>Near Saza Ground, Busoga<br/>Iganga, Uganda</li>
              <li className="pt-2">📧 igangaunited@gmail.com</li>
              <li>📞 +256 700 000 000 (Tickets)</li>
              <li className="pt-3 grid grid-cols-3 gap-2">
                <SmartImage srcList={["/kit1.jpg"]} alt="kit1" className="w-full h-16 object-contain bg-white rounded-lg p-1" />
                <SmartImage srcList={["/kit2.jpg"]} alt="kit2" className="w-full h-16 object-contain bg-white rounded-lg p-1" />
                <SmartImage srcList={["/kit3.jpg"]} alt="kit3" className="w-full h-16 object-contain bg-white rounded-lg p-1" />
              </li>
              <li className="text-[10px] tracking-widest">OFFICIAL KITS 25/26 • UGX 85K</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-white/40">
            <p>© 2025 IGANGA UNITED FC. All Rights Reserved. • Lions of Busoga • Founded 2021</p>
            <div className="flex gap-5 font-black uppercase tracking-widest">
              <Link href="/" className="hover:text-[#EAA324]">Home1</Link>
              <Link href="/red" className="hover:text-[#EAA324]">Home2</Link>
              <Link href="/blue" className="text-[#EAA324]">Home3</Link>
            </div>
            <p>27.SEP.25 IGANGA VS PAKWACHI • SAZA GROUND</p>
          </div>
        </div>
      </footer>
    </div>
  );
}