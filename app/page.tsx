"use client"
import { useState, useEffect } from "react";
import Header from "../components/Header";

function TickerBar(){
  const [tl,setTl]=useState({d:"01",h:"14",m:"22"});
  const targetDateStr = `2026-09-27T16:00:00+03:00`;
  const liveText = `NEXT: Iganga United Vs Pakwach Young Star • SUN 27 SEP 16:00 EAT • The Prime Arena Bugabwe`;
  useEffect(()=>{
    const target=new Date(targetDateStr).getTime();
    const iv=setInterval(()=>{const diff=target-Date.now(); if(diff<=0)return; setTl({d:Math.floor(diff/86400000).toString().padStart(2,"0"),h:Math.floor(diff%86400000/3600000).toString().padStart(2,"0"),m:Math.floor(diff%3600000/60000).toString().padStart(2,"0")})},1000);
    return()=>clearInterval(iv);
  },[]);
  return(
    <div className="bg-[#EAA324] px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 select-none">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <span className="bg-[#122544] text-white font-black text-[10px] px-3 py-1.5 rounded-[6px] w-fit">BIG LEAGUE • LIVE IN</span>
        <p className="font-black text-black text-[11px] sm:text-[13px] leading-tight">{liveText}</p>
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
        <div className="flex gap-2">
          <div className="bg-[#122544] text-white rounded-[8px] px-3 py-2 text-center min-w-[48px]"><p className="font-black text-[14px] leading-none">{tl.d}</p><p className="font-bold text-[9px] opacity-60">DAYS</p></div>
          <div className="bg-[#122544] text-white rounded-[8px] px-3 py-2 text-center min-w-[48px]"><p className="font-black text-[14px] leading-none">{tl.h}</p><p className="font-bold text-[9px] opacity-60">HRS</p></div>
          <div className="bg-[#122544] text-white rounded-[8px] px-3 py-2 text-center min-w-[48px]"><p className="font-black text-[14px] leading-none">{tl.m}</p><p className="font-bold text-[9px] opacity-60">MINS</p></div>
        </div>
        <div className="bg-[#122544] text-white/60 font-black text-[11px] px-4 py-3 rounded-[8px] ml-2 whitespace-nowrap cursor-default pointer-events-none">BUY TICKET →</div>
      </div>
    </div>
  );
}

const ALL_PLAYERS = [
  {id:1, no:"7", pos:"FWD", name:"Lions Star 7", image:"/team1.jpg"},
  {id:2, no:"10", pos:"MID", name:"Lions Star 10", image:"/team2.jpg"},
  {id:3, no:"9", pos:"FWD", name:"Lions Star 9", image:"/team3.jpeg"},
  {id:4, no:"11", pos:"MID", name:"Lions Star 11", image:"/team4.jpg"},
];

const KITS = [
  {id:1,name:"Home Jersey 25/26",price:"50000",tag:"HOME",image:"/kit1.jpg"},
  {id:2,name:"Away Jersey 25/26",price:"50000",tag:"AWAY",image:"/kit2.jpg"},
  {id:3,name:"Third Kit 25/26",price:"45000",tag:"THIRD",image:"/kit3.jpg"},
];

const NEWS_HEADLINES = [
  {id:1, title:"Lions Roar in Final Training Ahead of Historic Pakwach Clash", tag:"TRAINING • TODAY", date:"25 SEP 2025 • 2 hours ago", desc:"Iganga United completed intense final session at Prime Arena Bugabwe with full squad focus on Sunday opener.", image:"/new1.jpg"},
  {id:2, title:"Prime Arena Bugabwe Ready: Preparations Complete for Big League Debut", tag:"MATCH PREVIEW", date:"25 SEP 2025 • 5 hours ago", desc:"Groundsmen, security and fans prepare for Sunday 4PM kickoff as Lions host Pakwach Young Star.", image:"/new2.jpg"},
  {id:3, title:"Coach Confident: Squad Ready for First Big League Battle", tag:"COACH SPEAK", date:"24 SEP 2025 • Yesterday", desc:"Head coach says team morale high after morning drills and tactical preparations for Sunday.", image:"/new3.jpg"},
];

// FIXED IMAGE - NO BROKEN ALT, SMART FALLBACK
function NewsImg({src}:{src:string}){
  const [current, setCurrent] = useState(src);
  return (
    <img
      src={current}
      alt=""
      className="w-[90px] h-[90px] object-cover rounded-[8px] flex-shrink-0 pointer-events-none bg-gray-100"
      onError={()=>{
        if(current === "/new1.jpg") setCurrent("/new1.jpeg");
        else if(current === "/new1.jpeg") setCurrent("/new1.png");
        else if(current === "/new2.jpg") setCurrent("/new2.jpeg");
        else if(current === "/new2.jpeg") setCurrent("/new2.png");
        else if(current === "/new3.jpg") setCurrent("/new3.jpeg");
        else if(current === "/new3.jpeg") setCurrent("/new3.png");
        else setCurrent("/team1.jpg"); // final fallback = team pic so never broken
      }}
    />
  )
}

function DisplayFooter(){
  return(
    <footer className="bg-[#122544] text-white mt-10 border-t-4 border-[#EAA324] select-none pointer-events-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-10 w-10 bg-white rounded-full p-1" />
            <p className="font-black text-[16px] leading-none">IGANGA UNITED<br/><span className="text-[#EAA324] text-[10px]">LIONS OF BUSOGA</span></p>
          </div>
          <img src="/sponsor.png" alt="Zain" className="mt-4 h-12 bg-white rounded p-1 object-contain" />
        </div>
        <div><p className="font-black text-[12px] text-[#EAA324]">NAV</p><div className="mt-3 space-y-2 text-[11px] font-bold text-white/70"><p>Home! - Main</p><p>Home2 - Squad</p><p>Home3 - News</p></div></div>
        <div><p className="font-black text-[12px] text-[#EAA324]">FANS</p><div className="mt-3 space-y-2 text-[11px] font-bold text-white/70"><p>Shop - Jerseys 25/26</p><p>The Prime Arena Bugabwe</p></div></div>
        <div><p className="font-black text-[12px] text-[#EAA324]">CONTACT</p><div className="mt-3 space-y-2 text-[11px] font-bold text-white/70"><p>info@igangaunited.com</p></div></div>
      </div>
      <div className="border-t border-white/10 py-4 text-center"><p className="text-white/40 text-[10px] font-black">© 2025/26 IGANGA UNITED FC • DISPLAY MODE</p></div>
    </footer>
  )
}

export default function HomePage(){
  return(
    <div className="min-h-screen bg-[#FFFEFB] overflow-x-hidden">
      {/* NAVBAR ONLY CLICKABLE */}
      <Header/>
      <TickerBar />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-6 select-none">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="col-span-1 lg:col-span-7 bg-[#1e335c] rounded-[16px] relative overflow-hidden p-6 sm:p-10 min-h-[380px] flex flex-col justify-center cursor-default">
            <div className="absolute inset-0 bg-[#1e335c]/60"></div>
            <div className="relative z-10 pointer-events-none">
              <span className="bg-[#EAA324] text-black font-black text-[10px] px-3 py-1.5 rounded">BIG LEAGUE 2025/26 - NEW SEASON</span>
              <h1 className="font-black text-white text-[32px] sm:text-[48px] leading-[0.9] mt-5 whitespace-pre-line">WE ARE THE LIONS{"\n"}OF BUSOGA</h1>
              <p className="text-white/70 text-[12px] sm:text-[13px] mt-4 max-w-[460px]">Final training done! Next: Pakwach Young Star at The Prime Arena Bugabwe - SUN 27 SEP 16:00 EAT</p>
              <div className="mt-6 flex gap-3">
                <div className="bg-white text-black/40 font-black text-[11px] px-5 py-3 rounded-[10px] cursor-default">MEET THE SQUAD →</div>
                <div className="bg-[#EAA324] text-black/40 font-black text-[11px] px-5 py-3 rounded-[10px] cursor-default">FULL FIXTURES</div>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-5 bg-white border-2 border-black/10 rounded-[16px] p-5 sm:p-6 shadow-sm cursor-default">
            <div className="flex justify-between items-center pointer-events-none"><span className="font-black text-[13px]">NEXT MATCH - MD 1</span><span className="bg-[#EAA324] text-black font-black text-[10px] px-3 py-1 rounded-full">FUFA BIG LEAGUE</span></div>
            <div className="mt-8 flex justify-between items-center pointer-events-none">
              <div className="text-center"><div className="w-20 h-20 bg-[#f5f5f5] rounded-full flex items-center justify-center mx-auto"><img src="/logo.png" alt="" className="w-12 h-12"/></div><p className="font-black text-[11px] mt-3">IGANGA UTD</p></div>
              <p className="font-black text-[20px]">VS</p>
              <div className="text-center"><div className="w-20 h-20 bg-[#f5f5f5] rounded-full flex items-center justify-center mx-auto overflow-hidden"><img src="/pklogo.png" alt="Pakwach" className="w-full h-full object-contain p-2" /></div><p className="font-black text-[11px] mt-3">PAKWACH YS</p></div>
            </div>
            <div className="mt-8 bg-[#f8f8f8] border rounded-[10px] px-4 py-3 pointer-events-none"><p className="font-bold text-[12px]">2026-09-27 • The Prime Arena Bugabwe • 16:00</p></div>
            <div className="block w-full mt-4 bg-[#122544]/50 text-white/50 font-black text-[13px] py-3.5 rounded-[10px] text-center cursor-default pointer-events-none">BUY TICKET - 10000 UGX</div>
          </div>
        </div>

        <div className="bg-white border-2 border-black/10 rounded-[16px] p-4 sm:p-6 cursor-default">
          <div className="flex items-center gap-3 pointer-events-none"><div className="w-1 h-5 bg-[#EAA324]"></div><p className="font-black text-[13px]">MEET THE LIONS • FIRST TEAM</p></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
            {ALL_PLAYERS.map((p:any)=>(
              <div key={p.id} className="bg-white border-2 border-black/10 rounded-[16px] overflow-hidden cursor-default">
                <div className="h-[300px] bg-[#e9eef5] relative overflow-hidden pointer-events-none">
                  <img src={p.image} alt="" className="w-full h-full object-cover object-top" />
                  <div className="absolute top-3 left-3 bg-[#122544] text-white font-black text-[11px] w-8 h-8 flex items-center justify-center rounded-full border-2 border-white">{p.no}</div>
                </div>
                <div className="p-4 bg-[#fafafa] text-center pointer-events-none"><p className="font-black text-[12px]">{p.name}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-2 border-black/10 rounded-[16px] p-4 sm:p-6 cursor-default">
          <div className="flex items-center gap-3 pointer-events-none"><div className="w-1 h-5 bg-[#EAA324]"></div><p className="font-black text-[13px]">HOME & AWAY KIT 25/26</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {KITS.map((k:any)=>(
              <div key={k.id} className="bg-[#fafafa] border-2 border-black/10 rounded-[16px] overflow-hidden cursor-default">
                <div className="h-[360px] bg-white flex items-center justify-center relative overflow-hidden pointer-events-none">
                  <img src={k.image} alt="" className="w-full h-full object-contain p-2"/>
                  <div className="absolute top-3 right-3 bg-[#EAA324] text-black font-black text-[10px] px-2.5 py-1 rounded-full">{k.tag}</div>
                </div>
                <div className="p-4 text-center pointer-events-none"><p className="font-black text-[13px]">{k.name}</p><p className="text-[12px] font-black text-[#EAA324] mt-1">{k.price} UGX</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 cursor-default">
          <div className="bg-white border-2 border-black/10 rounded-[16px] p-5 shadow-sm">
            <p className="font-black text-[13px] tracking-wide pointer-events-none">BIG LEAGUE TABLE</p>
            <div className="mt-4 space-y-2 pointer-events-none">
              <div className="flex justify-between p-3 rounded-[8px] text-[12px] font-bold bg-[#fafafa] border"><span>1. Blacks Tower</span><span>0 PTS</span></div>
              <div className="flex justify-between p-3 rounded-[8px] text-[12px] font-bold bg-[#FFF4DB] border border-[#EAA324]/50"><span>5. Iganga United</span><span>0 PTS</span></div>
              <div className="flex justify-between p-3 rounded-[8px] text-[12px] font-bold bg-[#fafafa] border"><span>8. Kataka FC</span><span>0 PTS</span></div>
            </div>
            <div className="block mt-4 bg-[#122544]/50 text-white/50 text-center font-black text-[11px] py-3 rounded-[10px] cursor-default pointer-events-none">VIEW FULL TABLE →</div>
          </div>

          <div className="bg-white border-2 border-black/10 rounded-[16px] p-5 shadow-sm">
            <div className="flex justify-between items-center pointer-events-none"><p className="font-black text-[13px] tracking-wide">LATEST NEWS</p><div className="text-[10px] font-black bg-[#EAA324]/50 text-black/50 px-3 py-1 rounded-full">VIEW ALL</div></div>
            <div className="mt-4 space-y-3">
              {NEWS_HEADLINES.map((n:any)=>(
                <div key={n.id} className="flex gap-3 bg-[#fafafa] border border-black/10 rounded-[10px] p-3 cursor-default">
                  <NewsImg src={n.image} />
                  <div className="flex-1 pointer-events-none">
                    <p className="font-black text-[12px] leading-tight line-clamp-2">{n.title}</p>
                    <p className="text-[10px] opacity-60 mt-1 font-bold">{n.tag} • {n.date}</p>
                    <p className="text-[11px] opacity-70 mt-1 leading-snug line-clamp-2">{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-black/10 rounded-[16px] p-5 shadow-sm">
            <p className="font-black text-[13px] tracking-wide pointer-events-none">NEXT FIXTURES</p>
            <div className="mt-4 space-y-3 pointer-events-none">
              <div className="bg-[#fafafa] border border-black/10 rounded-[10px] p-3">
                <p className="font-black text-[12px]">Iganga United vs Pakwach Young Star</p>
                <p className="text-[11px] opacity-60 mt-1 font-bold">2026-09-27 • The Prime Arena Bugabwe • 16:00 EAT</p>
                <span className="inline-block mt-2 text-[9px] font-black bg-[#EAA324] text-black px-2.5 py-1 rounded-full">MD 1 • HOME</span>
              </div>
              <div className="bg-[#fafafa] border border-black/10 rounded-[10px] p-3">
                <p className="font-black text-[12px]">Kataka FC vs Iganga United</p>
                <p className="text-[11px] opacity-60 mt-1 font-bold">2026-10-05 • Mbale City Stadium • 16:00 EAT</p>
                <span className="inline-block mt-2 text-[9px] font-black bg-black text-white px-2.5 py-1 rounded-full">MD 2 • AWAY</span>
              </div>
            </div>
            <div className="block mt-4 bg-[#122544]/50 text-white/50 text-center font-black text-[11px] py-3 rounded-[10px] cursor-default pointer-events-none">FULL FIXTURES →</div>
          </div>
        </div>

        <div className="bg-[#122544] rounded-[16px] p-6 border-2 border-[#122544] text-center cursor-default">
          <div className="flex items-center gap-3 justify-center pointer-events-none"><div className="w-1 h-5 bg-[#EAA324]"></div><p className="font-black text-[14px] text-white">OUR SPONSOR • PROUD PARTNER</p></div>
          <div className="mt-6 bg-white rounded-[16px] p-8 max-w-[420px] mx-auto pointer-events-none">
            <img src="/sponsor.png" alt="" className="h-32 w-full object-contain mx-auto" />
            <p className="font-black text-[13px] mt-4">ZAIN BUILDING MATERIALS</p>
            <p className="text-[10px] font-black bg-[#EAA324] text-black px-3 py-1 rounded-full mt-2 inline-block">10M UGX • OFFICIAL SPONSOR</p>
          </div>
        </div>

      </div>
      <DisplayFooter />
    </div>
  );
}