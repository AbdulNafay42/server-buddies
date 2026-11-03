var ServerBuddies=(()=>{var be=Object.defineProperty;var lt=Object.getOwnPropertyDescriptor;var ct=Object.getOwnPropertyNames;var dt=Object.prototype.hasOwnProperty;var ft=(e,s)=>{for(var t in s)be(e,t,{get:s[t],enumerable:!0})},ht=(e,s,t,r)=>{if(s&&typeof s=="object"||typeof s=="function")for(let a of ct(s))!dt.call(e,a)&&a!==t&&be(e,a,{get:()=>s[a],enumerable:!(r=lt(s,a))||r.enumerable});return e};var bt=e=>ht(be({},"__esModule",{value:!0}),e);var Lt={};ft(Lt,{ACCESSORIES:()=>G,ACTIONS:()=>U,HANG_STYLES:()=>ke,MOODS:()=>K,POSITIONS:()=>ve,characters:()=>Mt,createBuddy:()=>ee,defineServerBuddyElement:()=>te,ensureStyles:()=>J,renderPreview:()=>Ze});var w='style="fill:var(--sb-main)"',m='style="fill:var(--sb-dark)"',T='style="fill:var(--sb-light)"',ue='style="fill:var(--sb-shell)"',pe='style="fill:var(--sb-screen)"',y=(e,s,t,r,a="")=>`<circle class="sb-led ${a}" cx="${e}" cy="${s}" r="${t}" fill="${r}"/>`,ye={sclera:"#f8fafc",scleraStroke:"",pupil:"#0f172a",line:"#e2e8f0",mouth:"#38bdf8",down:"#f87171",cheek:"#f472b6"},z={sclera:"#ffffff",scleraStroke:"#475569",pupil:"#0f172a",line:"#334155",mouth:"#334155",down:"#dc2626",cheek:"#fb7185"},E={server:{id:"server",name:"Server",blurb:"The classic rack-mount server.",colors:{main:"#0058c3",shell:"#1e293b",screen:"#0b1220"},theme:ye,face:{dx:0,dy:0,k:1},anchor:{y:14,hw:60,earY:36},body:e=>`
      <line x1="80" y1="14" x2="80" y2="5" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
      ${y(80,4,4,e.led)}
      <rect x="20" y="14" width="120" height="44" rx="13" ${ue}/>
      <rect x="28" y="20" width="104" height="32" rx="9" ${pe}/>
      <rect x="20" y="62" width="120" height="38" rx="13" ${w}/>
      <rect x="30" y="71" width="62" height="7" rx="3.5" ${m}/>
      <rect x="30" y="83" width="62" height="7" rx="3.5" ${m}/>
      ${y(108,75,3.2,e.led)}${y(120,75,3.2,"#93c5fd","sb-led-b")}
      ${y(108,87,3.2,"#93c5fd","sb-led-c")}${y(120,87,3.2,e.led,"sb-led-d")}
      <rect x="34" y="100" width="22" height="7" rx="3.5" fill="#334155"/>
      <rect x="104" y="100" width="22" height="7" rx="3.5" fill="#334155"/>`},robot:{id:"robot",name:"Robot",blurb:"Round visor, tiny arms, big opinions.",colors:{main:"#f97316",shell:"#e2e8f0",screen:"#0b1220"},theme:ye,face:{dx:0,dy:1,k:1},anchor:{y:12,hw:56,earY:40},body:e=>`
      <line x1="80" y1="12" x2="80" y2="5" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
      ${y(80,4,4.5,e.led)}
      <rect x="17" y="30" width="12" height="22" rx="6" ${m}/>
      <rect x="131" y="30" width="12" height="22" rx="6" ${m}/>
      <rect x="24" y="12" width="112" height="56" rx="26" ${ue}/>
      <rect x="34" y="20" width="92" height="40" rx="19" ${pe}/>
      <rect x="27" y="74" width="13" height="26" rx="6.5" ${m}/>
      <rect x="120" y="74" width="13" height="26" rx="6.5" ${m}/>
      <rect x="46" y="72" width="68" height="30" rx="11" ${w}/>
      <rect x="55" y="80" width="30" height="6" rx="3" ${m}/>
      <rect x="55" y="90" width="30" height="6" rx="3" ${m}/>
      ${y(98,83,3.4,e.led)}${y(98,93,3.4,"#fed7aa","sb-led-b")}
      <rect x="50" y="102" width="24" height="7" rx="3.5" fill="#475569"/>
      <rect x="86" y="102" width="24" height="7" rx="3.5" fill="#475569"/>`},cat:{id:"cat",name:"Cat",blurb:"Collar tag doubles as the status light.",colors:{main:"#f59e0b",shell:"#fef3c7",screen:"#0b1220"},theme:{...z,sclera:"#ffffff",scleraStroke:"",line:"#44403c",mouth:"#44403c"},face:{dx:0,dy:8,k:1},anchor:{y:15,hw:56,earY:52},body:e=>`
      <path d="M112 98C142 98 148 70 134 62" fill="none" stroke-width="8" stroke-linecap="round" style="stroke:var(--sb-dark)"/>
      <ellipse cx="80" cy="92" rx="34" ry="17" ${w}/>
      <ellipse cx="62" cy="106" rx="11" ry="5" ${T}/>
      <ellipse cx="98" cy="106" rx="11" ry="5" ${T}/>
      <path d="M26 44L30 10L58 26Z" ${w}/>
      <path d="M134 44L130 10L102 26Z" ${w}/>
      <path d="M33 34L35 19L49 27Z" fill="#fbcfe8"/>
      <path d="M127 34L125 19L111 27Z" fill="#fbcfe8"/>
      <ellipse cx="80" cy="52" rx="58" ry="38" ${w}/>
      <ellipse cx="80" cy="63" rx="22" ry="14" ${T}/>
      <rect x="62" y="82" width="36" height="6" rx="3" fill="#ef4444"/>
      ${y(80,91,4.5,e.led)}
      <path d="M30 60H10M32 67L12 73M130 60H150M128 67L148 73" stroke="#64748b" stroke-width="2" stroke-linecap="round" fill="none"/>`},ghost:{id:"ghost",name:"Ghost",blurb:"Friendly, floaty, slightly judgemental.",colors:{main:"#e0e7ff",shell:"#1e293b",screen:"#0b1220"},theme:z,face:{dx:0,dy:3,k:1},anchor:{y:8,hw:50,earY:40},blush:!0,body:e=>`
      <path d="M28 100V52C28 24 50 8 80 8C110 8 132 24 132 52V100Q122 110 112 100Q102 90 92 100Q82 110 72 100Q62 90 52 100Q42 110 28 100Z" ${w}/>
      <ellipse cx="27" cy="68" rx="10" ry="6" transform="rotate(35 27 68)" ${w}/>
      <ellipse cx="133" cy="68" rx="10" ry="6" transform="rotate(-35 133 68)" ${w}/>
      <ellipse cx="80" cy="82" rx="30" ry="12" ${T} opacity=".55"/>
      ${y(80,83,5,e.led)}`},cloud:{id:"cloud",name:"Cloud",blurb:"Perfect for hosting and cloud products.",colors:{main:"#7dd3fc",shell:"#1e293b",screen:"#0b1220"},theme:z,face:{dx:0,dy:6,k:1},anchor:{y:12,hw:38,earY:44},body:e=>`
      <g ${w}>
        <circle cx="46" cy="62" r="24"/>
        <circle cx="80" cy="44" r="32"/>
        <circle cx="114" cy="60" r="26"/>
        <rect x="34" y="56" width="92" height="34" rx="17"/>
      </g>
      <ellipse cx="80" cy="84" rx="38" ry="5" ${T} opacity=".6"/>
      <path class="sb-led" d="M84 92l-11 13h8l-5 12 15-16h-8l5-9z" fill="${e.led}"/>`},database:{id:"database",name:"Database",blurb:"Stacked drives with status lights.",colors:{main:"#10b981",shell:"#1e293b",screen:"#0b1220"},theme:{...z,scleraStroke:"",line:"#064e3b",mouth:"#064e3b",down:"#7f1d1d"},face:{dx:0,dy:3,k:1},anchor:{y:13,hw:46,earY:42},body:e=>`
      <path d="M30 24V92C30 102 52 108 80 108C108 108 130 102 130 92V24Z" ${w}/>
      <path d="M30 58C30 68 52 74 80 74C108 74 130 68 130 58" fill="none" stroke-width="4" style="stroke:var(--sb-dark)"/>
      <path d="M30 84C30 94 52 100 80 100C108 100 130 94 130 84" fill="none" stroke-width="4" style="stroke:var(--sb-dark)"/>
      <ellipse cx="80" cy="24" rx="50" ry="13" ${T}/>
      <rect x="40" y="81" width="38" height="6" rx="3" ${m}/>
      ${y(102,85,3.2,e.led)}${y(114,85,3.2,"#a7f3d0","sb-led-b")}`},router:{id:"router",name:"Router",blurb:"Flat, wide and always broadcasting.",colors:{main:"#a78bfa",shell:"#1e293b",screen:"#0b1220"},theme:{...z,scleraStroke:"",line:"#3b0764",mouth:"#3b0764",down:"#be123c"},face:{dx:0,dy:22,k:1},anchor:{y:38,hw:62,earY:62},blush:!0,body:e=>`
      <line x1="34" y1="40" x2="22" y2="10" stroke="#4c1d95" stroke-width="5" stroke-linecap="round"/>
      <line x1="126" y1="40" x2="138" y2="10" stroke="#4c1d95" stroke-width="5" stroke-linecap="round"/>
      ${y(22,8,4.5,e.led)}${y(138,8,4.5,e.led,"sb-led-b")}
      <g fill="none" stroke-width="3.5" stroke-linecap="round" style="stroke:var(--sb-main)" opacity=".85">
        <path d="M66 28Q80 18 94 28"/><path d="M58 20Q80 3 102 20"/>
      </g>
      <rect x="12" y="40" width="136" height="62" rx="22" ${w}/>
      <rect x="12" y="40" width="136" height="62" rx="22" fill="none" stroke-width="3" style="stroke:var(--sb-dark)"/>
      <rect x="28" y="88" width="14" height="8" rx="3" ${m}/><rect x="48" y="88" width="14" height="8" rx="3" ${m}/>
      <rect x="68" y="88" width="14" height="8" rx="3" ${m}/><rect x="88" y="88" width="14" height="8" rx="3" ${m}/>
      ${y(116,92,3.4,e.led)}${y(128,92,3.4,"#ddd6fe","sb-led-c")}`},shield:{id:"shield",name:"Shield",blurb:"The firewall. Nothing gets past it.",colors:{main:"#e11d48",shell:"#1e293b",screen:"#0b1220"},theme:{...z,scleraStroke:"",line:"#4c0519",mouth:"#4c0519",down:"#fef08a"},face:{dx:0,dy:2,k:1},anchor:{y:10,hw:52,earY:38},body:e=>`
      <path d="M80 6L136 22V58C136 84 112 102 80 114C48 102 24 84 24 58V22Z" ${w}/>
      <path d="M80 6L136 22V58C136 84 112 102 80 114Z" ${m} opacity=".35"/>
      <path d="M80 14L128 28V58C128 79 108 95 80 106C52 95 32 79 32 58V28Z" fill="none" stroke-width="3" style="stroke:var(--sb-light)" opacity=".7"/>
      ${y(80,90,5,e.led)}`},bug:{id:"bug",name:"Bug",blurb:"A friendly bug. Promise it's a feature.",colors:{main:"#65a30d",shell:"#1e293b",screen:"#0b1220"},theme:z,face:{dx:0,dy:4,k:1},anchor:{y:14,hw:54,earY:46},body:e=>`
      <path d="M58 20Q50 6 38 4M102 20Q110 6 122 4" fill="none" stroke="#365314" stroke-width="3.5" stroke-linecap="round"/>
      ${y(38,4,3.6,e.led)}${y(122,4,3.6,e.led,"sb-led-b")}
      <path d="M30 70L12 62M30 84L10 86M32 98L16 110M130 70L148 62M130 84L150 86M128 98L144 110" stroke="#365314" stroke-width="4" stroke-linecap="round" fill="none"/>
      <ellipse cx="80" cy="76" rx="44" ry="34" ${w}/>
      <path d="M80 44V110" stroke-width="3" style="stroke:var(--sb-dark)" fill="none"/>
      <circle cx="60" cy="86" r="6" ${m}/><circle cx="100" cy="86" r="6" ${m}/><circle cx="66" cy="102" r="4.5" ${m}/><circle cx="94" cy="102" r="4.5" ${m}/>
      <ellipse cx="80" cy="46" rx="48" ry="30" ${w}/>
      <ellipse cx="80" cy="62" rx="24" ry="9" ${T} opacity=".5"/>`},container:{id:"container",name:"Container",blurb:"Ships anywhere. Works on every machine.",colors:{main:"#0ea5e9",shell:"#1e293b",screen:"#0b1220"},theme:ye,face:{dx:0,dy:0,k:1},anchor:{y:16,hw:58,earY:40},body:e=>`
      <rect x="20" y="16" width="120" height="86" rx="8" ${w}/>
      <g style="stroke:var(--sb-dark)" stroke-width="4" stroke-linecap="round">
        <path d="M38 22V96M54 22V96M106 22V96M122 22V96"/>
      </g>
      <rect x="28" y="20" width="104" height="38" rx="8" ${pe}/>
      <rect x="62" y="70" width="36" height="24" rx="5" ${ue}/>
      <rect x="70" y="76" width="20" height="5" rx="2.5" ${m}/>
      ${y(80,87,3.4,e.led)}
      <rect x="14" y="98" width="132" height="8" rx="4" fill="#334155"/>`}},W=Object.keys(E),G=["auto","none","nightcap","partyhat","crown","glasses","shades","headphones"];function ut(e,s){let t=s.y;if(e==="nightcap")return`<path d="M58 ${t+2}Q62 ${t-36} 102 ${t-22}L104 ${t+2}Z" fill="#ef4444"/>
      <rect x="54" y="${t-3}" width="52" height="8" rx="4" fill="#f8fafc"/>
      <circle cx="103" cy="${t-22}" r="5.5" fill="#f8fafc"/>`;if(e==="partyhat")return`<path d="M63 ${t+2}L80 ${t-34}L97 ${t+2}Z" fill="#f472b6"/>
      <path d="M70 ${t-12}L90 ${t-12}M66 ${t-3}L94 ${t-3}" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="80" cy="${t-35}" r="4.5" fill="#fde047"/>`;if(e==="crown")return`<path d="M58 ${t+3}L57 ${t-18}L69 ${t-7}L80 ${t-22}L91 ${t-7}L103 ${t-18}L102 ${t+3}Z" fill="#facc15" stroke="#ca8a04" stroke-width="2" stroke-linejoin="round"/>
      <circle cx="80" cy="${t-8}" r="3" fill="#ef4444"/><circle cx="66" cy="${t-1}" r="2" fill="#38bdf8"/><circle cx="94" cy="${t-1}" r="2" fill="#38bdf8"/>`;if(e==="headphones"){let r=80-s.hw,a=80+s.hw;return`<path d="M${r+1} ${s.earY}C${r+1} ${t-24} ${a-1} ${t-24} ${a-1} ${s.earY}" fill="none" stroke="#1f2937" stroke-width="5" stroke-linecap="round"/>
      <rect x="${r-6}" y="${s.earY-11}" width="12" height="22" rx="6" fill="#111827"/>
      <rect x="${a-6}" y="${s.earY-11}" width="12" height="22" rx="6" fill="#111827"/>
      <rect x="${r-3}" y="${s.earY-6}" width="4" height="12" rx="2" fill="#38bdf8"/>
      <rect x="${a-1}" y="${s.earY-6}" width="4" height="12" rx="2" fill="#38bdf8"/>`}return""}function pt(e){return e==="glasses"?`<g fill="rgba(186,230,253,.18)" stroke="#0f172a" stroke-width="2.6">
      <circle cx="62" cy="35" r="12"/><circle cx="98" cy="35" r="12"/><path d="M74 35h12" fill="none"/></g>`:e==="shades"?`<g fill="#0f172a"><rect x="47" y="25" width="28" height="18" rx="7"/><rect x="85" y="25" width="28" height="18" rx="7"/></g>
      <path d="M75 31h10" stroke="#0f172a" stroke-width="3.2"/>
      <path d="M52 29l7 0M90 29l7 0" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round" opacity=".55"/>`:""}function yt(e,s,t){let r=e.theme,{dx:a,dy:u,k:f}=e.face,c=s.state==="down",i=s.eyesClosed,d=s.squint&&!c&&!i,$=s.state==="curious",B=`fill="${r.sclera}"${r.scleraStroke?` stroke="${r.scleraStroke}" stroke-width="1.6"`:""}`,p="";if(c)p+=`<g stroke="${r.down}" stroke-width="3" stroke-linecap="round"><path d="M56 29l12 12M68 29L56 41"/><path d="M92 29l12 12M104 29L92 41"/></g>`;else if(i)p+=`<g stroke="${r.line}" stroke-width="3" stroke-linecap="round" fill="none"><path d="M56 36q6 5 12 0"/><path d="M92 36q6 5 12 0"/></g>`;else if(d)p+=`<g stroke="${r.line}" stroke-width="3" stroke-linecap="round" fill="none"><path d="M56 38q6-9 12 0"/><path d="M92 38q6-9 12 0"/></g>`;else{let q=$?8.5:7.5;p+=`<circle cx="62" cy="35" r="${q}" ${B}/><circle cx="98" cy="35" r="${q}" ${B}/>
      <g class="sb-pupils"><circle cx="62" cy="35" r="3.6" fill="${r.pupil}"/><circle cx="98" cy="35" r="3.6" fill="${r.pupil}"/>
      <circle cx="63.2" cy="33.6" r="1.1" fill="#fff"/><circle cx="99.2" cy="33.6" r="1.1" fill="#fff"/></g>`}return(d||e.blush)&&(p+=`<g fill="${r.cheek}" opacity="${d?.6:.32}"><ellipse cx="46" cy="${d?42:44}" rx="5" ry="3"/><ellipse cx="114" cy="${d?42:44}" rx="5" ry="3"/></g>`),c?p+=`<path d="M71 49q9-7 18 0" stroke="${r.down}" stroke-width="2.6" stroke-linecap="round" fill="none"/>`:s.idleAct==="yawn"?p+=`<ellipse cx="80" cy="46" rx="4.5" ry="5.5" fill="${r.mouth}"/>`:s.state==="sleeping"?p+=`<path d="M75 46h10" stroke="${r.mouth}" stroke-width="2.4" stroke-linecap="round"/>`:$?p+=`<circle cx="80" cy="46" r="2.8" fill="none" stroke="${r.mouth}" stroke-width="2.4"/>`:p+=`<path d="M71 45q9 7 18 0" stroke="${r.mouth}" stroke-width="2.6" stroke-linecap="round" fill="none"/>`,p+=pt(t),`<g transform="translate(${80+a} ${40+u}) scale(${f}) translate(-80 -40)">${p}</g>`}function me(e,s,t){let r=['<g class="sb-body">',e.body(s),yt(e,s,t),ut(t,e.anchor),"</g>"];return(s.state==="down"||s.nervous)&&r.push('<path class="sb-sweat" d="M138 20q5 8 0 12q-5-4 0-12z" fill="#7dd3fc"/>'),s.state==="down"&&r.push('<g class="sb-smoke" fill="#94a3b8"><circle class="sb-smoke-1" cx="64" cy="2" r="4"/><circle class="sb-smoke-2" cx="76" cy="-2" r="3"/><circle class="sb-smoke-3" cx="96" cy="2" r="4"/></g>'),s.state==="sleeping"&&r.push('<g class="sb-zzz" fill="#64748b" font-weight="700" font-family="sans-serif"><text x="124" y="14" font-size="11">z</text><text x="134" y="6" font-size="8">z</text></g>'),r.join("")}var ge="server-buddies-styles",Re=`
.sb-hanger{position:fixed;z-index:40;width:104px;pointer-events:none;box-sizing:border-box}
.sb-hanger *{box-sizing:border-box}
.sb-hanger[hidden]{display:none!important}
.sb-hanger.sb-in-mount{position:absolute}
@media print{.sb-hanger{display:none!important}}

.sb-sway,.sb-swing{transform-origin:50% 0}
.sb-hanger[data-pivot="bottom"] .sb-swing,.sb-hanger[data-pivot="bottom"] .sb-sway{transform-origin:50% 100%}
.sb-hanger[data-hang="rope"] .sb-sway{animation:sb-sway 5s ease-in-out infinite}
.sb-hanger[data-hang="chain"] .sb-sway{animation:sb-sway-s 4.2s ease-in-out infinite}
.sb-hanger[data-hang="spring"] .sb-sway{animation:sb-sway-s 3s ease-in-out infinite}
.sb-hanger[data-hang="thread"] .sb-sway{animation:sb-sway-l 6.5s ease-in-out infinite}
.sb-hanger[data-hang="balloon"] .sb-sway{animation:sb-float 4.5s ease-in-out infinite}

.sb-tether{display:block;margin:0 auto;pointer-events:none}
.sb-tether-rope{width:3px;border-radius:2px;background:repeating-linear-gradient(180deg,#94a3b8 0 5px,#64748b 5px 8px)}
.sb-tether-thread{width:1.5px;border-radius:1px;background:linear-gradient(180deg,#e2e8f0,#94a3b8)}
.sb-tether-svg{overflow:visible;transform-origin:50% 0}
.sb-tether-balloon{display:flex;flex-direction:column;align-items:center}
.sb-balloon{display:block;width:54px;height:auto;overflow:visible}
.sb-balloon-string{display:block;width:1.5px;background:#94a3b8}

.sb-drop{will-change:transform}
.sb-buddy{position:relative;display:block;width:100%;margin:0;padding:0;border:0;border-radius:0;background:none;font:inherit;
  color:inherit;cursor:grab;pointer-events:auto;touch-action:none;perspective:500px;isolation:isolate;
  -webkit-tap-highlight-color:transparent;-webkit-appearance:none;appearance:none}
.sb-buddy[data-drag="off"]{touch-action:auto}
.sb-buddy[data-boop="off"][data-drag="off"]{cursor:default;pointer-events:none}
.sb-buddy:focus-visible{outline:2px solid var(--sb-main,#0058c3);outline-offset:4px;border-radius:14px}
.sb-buddy.sb-grabbed{cursor:grabbing}

.sb-svg{display:block;width:100%;height:auto;overflow:visible;transform-origin:50% 100%;transition:transform .15s ease}
.sb-buddy:active .sb-svg{transform:scale(1.06,.9)}

.sb-buddy[data-state="happy"] .sb-body,.sb-buddy[data-state="curious"] .sb-body{animation:sb-bob 3.2s ease-in-out infinite}
.sb-buddy[data-state="down"] .sb-body{animation:sb-shake .5s linear infinite}
.sb-buddy[data-state="sleeping"] .sb-body{animation:sb-breathe 4s ease-in-out infinite;transform-origin:50% 100%}
.sb-pupils{transition:transform .06s linear}
.sb-led{animation:sb-blink 1.8s ease-in-out infinite}
.sb-led-b{animation-delay:.4s}.sb-led-c{animation-delay:.9s}.sb-led-d{animation-delay:1.3s}
.sb-buddy[data-state="down"] .sb-led{animation-duration:.45s}
.sb-sweat{animation:sb-sweat 1.4s ease-in infinite}
.sb-smoke circle{opacity:0;animation:sb-smoke 2s ease-out infinite}
.sb-smoke-2{animation-delay:.6s}.sb-smoke-3{animation-delay:1.2s}
.sb-zzz{animation:sb-zzz 2.4s ease-in-out infinite}

.sb-bubble{position:absolute;right:70%;top:6px;padding:3px 9px;border-radius:10px;background:#0f172a;color:#fff;
  font:700 11px/1.35 system-ui,-apple-system,"Segoe UI",sans-serif;white-space:nowrap;opacity:0;pointer-events:none;z-index:4}
.sb-hanger[data-side="right"] .sb-bubble{right:auto;left:70%}
.sb-bubble-show{animation:sb-bubble 1.4s ease-out forwards}

.sb-svg.sb-flinch .sb-body{animation:sb-flinch .5s ease-out}
.sb-svg.sb-nervous .sb-body{animation:sb-jitter .28s linear infinite}
.sb-svg.sb-pass .sb-led{filter:brightness(2.4) drop-shadow(0 0 3px #86efac)}
.sb-svg.sb-nod .sb-body{animation:sb-nod .7s ease-in-out}
.sb-buddy[data-act="dance"] .sb-body{animation:sb-dance .45s ease-in-out infinite}
.sb-buddy[data-act="dance"] .sb-led{animation-duration:.25s}
.sb-buddy[data-act="yawn"] .sb-body{animation:sb-yawn 2.4s ease-in-out}
.sb-buddy[data-combo="spin"] .sb-svg{animation:sb-spin .8s ease-in-out}
.sb-buddy[data-combo="fall"]{animation:sb-fall 3.2s both}
.sb-buddy[data-period="morning"] .sb-svg{filter:drop-shadow(0 0 12px rgba(251,191,36,.6))}

.sb-confetti{position:absolute;left:50%;top:24px;width:0;height:0;z-index:3;pointer-events:none}
.sb-confetti i{position:absolute;left:0;top:0;border-radius:1px;opacity:0;animation:sb-confetti 2.4s ease-out forwards}
.sb-alarm{position:absolute;inset:-18px;z-index:-1;border-radius:50%;
  background:radial-gradient(circle,rgba(239,68,68,.6),transparent 65%);animation:sb-alarm .5s ease-in-out infinite alternate;pointer-events:none}

@keyframes sb-sway{0%,100%{transform:rotate(-2.2deg)}50%{transform:rotate(2.2deg)}}
@keyframes sb-sway-s{0%,100%{transform:rotate(-1.3deg)}50%{transform:rotate(1.3deg)}}
@keyframes sb-sway-l{0%,100%{transform:rotate(-3.6deg)}50%{transform:rotate(3.6deg)}}
@keyframes sb-float{0%,100%{transform:translateY(0) rotate(-1.8deg)}50%{transform:translateY(5px) rotate(1.8deg)}}
@keyframes sb-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
@keyframes sb-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-1.5px)}75%{transform:translateX(1.5px)}}
@keyframes sb-breathe{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.97)}}
@keyframes sb-blink{0%,100%{opacity:1}50%{opacity:.35}}
@keyframes sb-sweat{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(18px);opacity:0}}
@keyframes sb-smoke{0%{transform:translateY(0) scale(.6);opacity:.7}100%{transform:translateY(-18px) scale(1.5);opacity:0}}
@keyframes sb-zzz{0%,100%{transform:translateY(0);opacity:.4}50%{transform:translateY(-4px);opacity:1}}
@keyframes sb-bubble{0%{opacity:0;transform:translateY(6px)}15%,70%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(-4px)}}
@keyframes sb-bubble-static{0%,80%{opacity:1}100%{opacity:0}}
@keyframes sb-flinch{0%{transform:translate(0,0) scale(1)}20%{transform:translate(-3px,2px) scale(.94,1.04)}45%{transform:translate(3px,0) scale(1.03)}100%{transform:translate(0,0) scale(1)}}
@keyframes sb-jitter{0%,100%{transform:translateX(0)}25%{transform:translateX(-.8px)}75%{transform:translateX(.8px)}}
@keyframes sb-nod{0%,100%{transform:translateY(0)}30%{transform:translateY(5px)}60%{transform:translateY(-2px)}}
@keyframes sb-dance{0%,100%{transform:translate(0,0) rotate(0)}25%{transform:translate(-3px,-4px) rotate(-4deg)}75%{transform:translate(3px,-4px) rotate(4deg)}}
@keyframes sb-yawn{0%,100%{transform:scale(1)}40%,60%{transform:scale(1.05,.96)}}
@keyframes sb-spin{from{transform:rotateY(0)}to{transform:rotateY(360deg)}}
@keyframes sb-fall{0%{transform:translateY(0) rotate(0);animation-timing-function:cubic-bezier(.5,0,.9,.6)}22%{transform:translateY(115vh) rotate(24deg)}62%{transform:translateY(115vh) rotate(24deg);animation-timing-function:cubic-bezier(.2,.7,.3,1)}100%{transform:translateY(0) rotate(0)}}
@keyframes sb-confetti{0%{transform:translate(0,0) rotate(0);opacity:1}25%{transform:translate(calc(var(--x) * .8),-56px) rotate(var(--r));opacity:1}100%{transform:translate(var(--x),170px) rotate(calc(var(--r) + 540deg));opacity:0}}
@keyframes sb-alarm{from{opacity:.35}to{opacity:1}}

@media (prefers-reduced-motion:reduce){
  .sb-sway,.sb-buddy *,.sb-buddy .sb-body,.sb-tether{animation:none!important;transition:none!important}
  .sb-buddy .sb-bubble-show{animation:sb-bubble-static 1.8s forwards!important}
}
`.trim();var Ne=typeof window!="undefined"&&typeof document!="undefined",v=(e,s,t)=>Math.max(s,Math.min(t,e)),U=["eyes","swing","drag","boop","combos","idle","sleep","hover","timeOfDay","effects"],ke=["rope","chain","spring","thread","balloon","none"],ve=["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"],K=["happy","curious","down"],Ve={rope:{len:150,k:14,damp:.9,max:60},chain:{len:150,k:18,damp:1.5,max:48},spring:{len:120,k:14,damp:.5,max:55,bounce:!0},thread:{len:210,k:8,damp:.3,max:75},balloon:{len:90,k:8,damp:.6,max:40},none:{len:0,k:40,damp:3,max:9}},mt={boop:["Beep!","Boop!","Hi there!","Ping!","200 OK"],hello:"Here we go!",ouch:"Ouch!",celebrate:"Looking healthy!",panic:"Mayday!",paste:"Got it!",throw:"Wheee!",spin:"Wheee!",fall:"Whoa!!",recover:"Phew!",watch:"Hmm\u2026 {time}?"},xe=["#0058c3","#22c55e","#f59e0b","#ec4899","#38bdf8"],gt=Array.from({length:22},(e,s)=>({x:s*37%120-60,delay:s%7*.07,rotate:s*53%360,size:5+s%3*2,color:xe[s%xe.length]}));function xt(e){if(typeof e!="string")return null;let s=e.trim().replace(/^#/,"");return s.length===3&&(s=s.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(s)?[0,2,4].map(t=>parseInt(s.slice(t,t+2),16)):null}function Xe(e,s,t){let r=xt(e);return r?"#"+r.map((u,f)=>Math.round(u+(s[f]-u)*t)).map(u=>u.toString(16).padStart(2,"0")).join(""):e}function je(e,s){let t={...e.colors,...s.color?{main:s.color}:{},...s.colors||{}};return{main:t.main,dark:t.dark||Xe(t.main,[0,0,0],.3),light:t.light||Xe(t.main,[255,255,255],.55),shell:t.shell,screen:t.screen,balloon:t.balloon||"#f43f5e"}}function wt(e){let s={};if(Array.isArray(e))for(let t of U)s[t]=e.includes(t);else for(let t of U)s[t]=!(e&&e[t]===!1);return s}function we(e={}){var c,i,d,$;let s=W.includes(e.character)?e.character:"server",t=ve.includes(e.position)?e.position:"top-right",r=t.startsWith("bottom"),a=ke.includes(e.hang)?e.hang:"rope";r&&(a="none");let u=v(Number(e.size)||104,40,400),f=typeof e.offset=="number"?{x:e.offset,y:0}:{x:28,y:0,...e.offset||{}};return{...e,character:s,position:t,hang:a,size:u,offset:f,length:Number.isFinite(e.length)?v(e.length,0,2e3):Ve[a].len,accessory:G.includes(e.accessory)?e.accessory:"auto",zIndex:(c=e.zIndex)!=null?c:40,hideBelow:Number(e.hideBelow)||0,mood:K.includes(e.mood)?e.mood:"happy",sleepAfter:(i=e.sleepAfter)!=null?i:15e3,idleAfter:(d=e.idleAfter)!=null?d:7e3,label:($=e.label)!=null?$:"Server buddy: click to boop, drag to swing",injectStyles:e.injectStyles!==!1,actions:wt(e.actions),messages:{...mt,...e.messages||{}}}}function J(){if(!Ne||document.getElementById(ge))return;let e=document.createElement("style");e.id=ge,e.textContent=Re,document.head.appendChild(e)}function Pe(e){return`--sb-main:${e.main};--sb-dark:${e.dark};--sb-light:${e.light};--sb-shell:${e.shell};--sb-screen:${e.screen};--sb-balloon:${e.balloon}`}function kt(e,s){if(e==="none"||s<=0)return"";if(e==="rope")return`<span class="sb-tether sb-tether-rope" style="height:${s}px" aria-hidden="true"></span>`;if(e==="thread")return`<span class="sb-tether sb-tether-thread" style="height:${s}px" aria-hidden="true"></span>`;if(e==="chain"){let t="";for(let r=0,a=6;a<s;r++,a+=9)t+=r%2?`<ellipse cx="8" cy="${a}" rx="1.7" ry="6" fill="#64748b"/>`:`<ellipse cx="8" cy="${a}" rx="4.6" ry="6" fill="none" stroke="#94a3b8" stroke-width="2.2"/>`;return`<svg class="sb-tether sb-tether-svg" width="16" height="${s}" viewBox="0 0 16 ${s}" aria-hidden="true">${t}</svg>`}if(e==="spring"){let t="M11 0";for(let r=0;r+12<=s;r+=12)t+=`Q22 ${r+3} 11 ${r+6}Q0 ${r+9} 11 ${r+12}`;return`<svg class="sb-tether sb-tether-svg" width="22" height="${s}" viewBox="0 0 22 ${s}" preserveAspectRatio="none" aria-hidden="true"><path d="${t}" fill="none" stroke="#94a3b8" stroke-width="2.6" stroke-linecap="round"/></svg>`}return e==="balloon"?`<span class="sb-tether sb-tether-balloon" aria-hidden="true">
      <svg class="sb-balloon" viewBox="0 0 60 76"><path d="M30 2C9 2 2 21 4 36C6 52 20 64 30 66C40 64 54 52 56 36C58 21 51 2 30 2Z" style="fill:var(--sb-balloon)"/>
      <path d="M30 66l-5 8h10z" style="fill:var(--sb-balloon)"/><ellipse cx="19" cy="22" rx="5" ry="9" fill="#fff" opacity=".35" transform="rotate(20 19 22)"/></svg>
      <span class="sb-balloon-string" style="height:${s}px"></span></span>`:""}function Ze(e,s={}){let t=E[e]||E.server,r=we({...s,character:t.id}),a=je(t,r),u={state:s.state||"happy",eyesClosed:!1,squint:!1,idleAct:"",nervous:!1,led:"#22c55e"};u.state==="down"?u.led="#ef4444":u.state==="curious"&&(u.led="#f59e0b");let f=r.accessory==="auto"?"none":r.accessory;return J(),`<svg class="sb-svg sb-static" viewBox="0 0 160 120" role="img" aria-label="${t.name} character" style="${Pe(a)};overflow:visible">${me(t,u,f)}</svg>`}function vt(){let e=()=>{};return{el:null,update:e,say:e,setMood:e,celebrate:e,panic:e,flinch:e,pass:e,nod:e,nervous:e,boop:e,sleep:e,wake:e,show:e,hide:e,destroy:e}}function ee(e={}){if(!Ne)return vt();let s={...e},t=Fe(we(s)),r=!1,a=f=>(...c)=>r?void 0:t[f](...c);return{get el(){return r?null:t.root},update(f={}){if(r)return;s={...s,...f};let c={mood:t.S.mood,hidden:t.isHidden()};t.destroy(),t=Fe(we({...s,mood:"mood"in f?f.mood:c.mood})),c.hidden&&t.hide()},say:a("say"),setMood:a("setMood"),celebrate:a("celebrate"),panic:a("panic"),flinch:a("flinch"),pass:a("pass"),nod:a("nod"),nervous:a("nervous"),boop:a("boop"),sleep:a("sleep"),wake:a("wake"),show:a("show"),hide:a("hide"),destroy(){r||(r=!0,t.destroy())}}}function Fe(e){let s=E[e.character],t=e.actions,r=Ve[e.hang],a=je(s,e);e.injectStyles&&J();let u=new Set,f=(n,o)=>{let l=setTimeout(()=>{u.delete(l),n()},o);return u.add(l),l},c={mood:e.mood,sleeping:!1,idleAct:"",squint:!1,typing:!1,nod:!1,flinch:!1,pass:!1,nervous:!1,fx:"",combo:"",period:"day"},i={angle:0,velocity:0,y:0,vy:0,running:!1,last:0,lastX:null},d={active:!1,moved:!1,startX:0,startY:0,lastAngle:0,lastT:0,velocity:0},$="translate(0px, 0px)",B=0,p=!1,q=Date.now(),$e=0,se=0,ne=0,N=0,re=!1,D=[],oe=0,Me=0,V=!1,ae=!1,Le="",H=!0,R=e.position,L=typeof e.mount=="string"?document.querySelector(e.mount):e.mount||null,h=document.createElement("div");h.className="sb-hanger"+(L?" sb-in-mount":""),h.setAttribute("data-server-buddy",e.character),h.setAttribute("data-hang",e.hang),h.setAttribute("data-pivot",R.startsWith("bottom")||e.hang==="none"?"bottom":"top"),h.setAttribute("data-side",R.endsWith("left")?"right":"left"),h.style.cssText=Pe(a),h.style.width=`${e.size}px`,h.style.zIndex=String(e.zIndex);let Ae=R.startsWith("top"),We=e.offset.y+(Ae&&e.hang==="none"?12:0);h.style[Ae?"top":"bottom"]=`${We}px`,R.endsWith("right")?h.style.right=`${e.offset.x}px`:R.endsWith("left")?h.style.left=`${e.offset.x}px`:(h.style.left="50%",h.style.marginLeft=`${-e.size/2}px`),h.innerHTML=`<div class="sb-sway"><div class="sb-swing">${kt(e.hang,e.length)}<div class="sb-drop"><button type="button" class="sb-buddy"><span class="sb-bubble" aria-hidden="true"></span><span class="sb-fxlayer" aria-hidden="true"></span><svg class="sb-svg" viewBox="0 0 160 120" aria-hidden="true"></svg></button></div></div></div>`;let ie=h.querySelector(".sb-swing"),Ce=h.querySelector(".sb-drop"),j=h.querySelector(".sb-tether"),g=h.querySelector(".sb-buddy"),P=h.querySelector(".sb-bubble"),le=h.querySelector(".sb-fxlayer"),S=h.querySelector(".sb-svg"),X=null;g.setAttribute("data-drag",t.drag&&r.len>0?"on":"off"),g.setAttribute("data-boop",t.boop?"on":"off"),t.boop||t.drag?g.setAttribute("aria-label",e.label):(g.setAttribute("aria-hidden","true"),g.tabIndex=-1);let ce=null;L?(getComputedStyle(L).position==="static"&&(ce=L.style.position,L.style.position="relative"),L.appendChild(h)):document.body.appendChild(h);let Ge=()=>c.mood==="down"?"down":c.sleeping?"sleeping":c.mood==="curious"||c.typing?"curious":"happy";function Ee(){if(!H)return;let n=Ge(),o=n==="down",l=n==="sleeping"||c.idleAct==="yawn"&&!o,x=o?"#ef4444":n==="curious"?"#f59e0b":"#22c55e",M={state:n,eyesClosed:l,squint:c.squint,idleAct:c.idleAct,nervous:c.nervous&&!o,led:x},F=e.accessory==="auto"?t.timeOfDay&&c.period==="night"?"nightcap":"none":e.accessory;g.dataset.state=n,g.dataset.act=c.idleAct,g.dataset.fx=c.fx,g.dataset.combo=c.combo,g.dataset.period=t.timeOfDay?c.period:"day",S.classList.toggle("sb-flinch",c.flinch),S.classList.toggle("sb-pass",c.pass),S.classList.toggle("sb-nod",c.nod),S.classList.toggle("sb-nervous",M.nervous);let O=me(s,M,F);O!==Le&&(Le=O,S.innerHTML=O,X=S.querySelector(".sb-pupils"),X&&(X.style.transform=$))}function Z(){if(c.fx==="celebrate"){let n=[a.main,...xe.slice(1)];le.innerHTML='<span class="sb-confetti">'+gt.map((o,l)=>`<i style="--x:${o.x}px;--r:${o.rotate}deg;width:${o.size}px;height:${o.size}px;background:${n[l%n.length]};animation-delay:${o.delay}s"></i>`).join("")+"</span>"}else c.fx==="panic"?le.innerHTML='<span class="sb-alarm"></span>':le.innerHTML=""}function b(n){let o=!1;for(let l in n)c[l]!==n[l]&&(c[l]=n[l],o=!0);o&&Ee()}function k(n){!H||!n||(Me=Date.now(),P.textContent=n,P.classList.remove("sb-bubble-show"),P.offsetWidth,P.classList.add("sb-bubble-show"))}function Ue(){r.bounce&&(Ce.style.transform=`translateY(${i.y}px)`,j&&(j.style.transform=`scaleY(${(e.length+i.y)/Math.max(e.length,1)})`))}function Se(n){if(!H)return;if(d.moved){i.running=!1;return}let o=Math.min((n-i.last)/1e3,.04);i.last=n,i.velocity+=(-r.k*i.angle-r.damp*i.velocity)*o,i.angle=v(i.angle+i.velocity*o,-r.max,r.max),ie.style.transform=`rotate(${i.angle}deg)`;let l=!0;if(r.bounce&&(i.vy+=(-70*i.y-3.2*i.vy)*o,i.y=v(i.y+i.vy*o,-30,60),Ue(),l=Math.abs(i.y)<.05&&Math.abs(i.vy)<.5),Math.abs(i.angle)<.05&&Math.abs(i.velocity)<.3&&l){i.angle=i.velocity=i.y=i.vy=0,ie.style.transform="",r.bounce&&(Ce.style.transform="",j&&(j.style.transform="")),i.running=!1;return}requestAnimationFrame(Se)}function I(n,o=0){p||!t.swing||(i.velocity=v(i.velocity+n,-400,400),r.bounce&&(i.vy=v(i.vy+o,-300,300)),i.running||(i.running=!0,i.last=performance.now(),requestAnimationFrame(Se)))}function Q(n,o){let l=S.getBoundingClientRect(),x=n-(l.left+l.width/2),M=o-(l.top+l.height*.3),F=Math.hypot(x,M)||1,O=Math.min(F/220,1)*3.5;$=`translate(${x/F*O}px, ${M/F*O}px)`,X&&(X.style.transform=$)}function Y(){q=Date.now(),c.sleeping&&b({sleeping:!1})}let A=window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)"):null,de=()=>{p=!!(A&&A.matches)};de(),A&&A.addEventListener&&A.addEventListener("change",de);let fe=(n,o)=>!!(o&&n instanceof Element&&n.matches(o)),Ye=n=>{if(Y(),d.active){if(!d.moved&&Math.hypot(n.clientX-d.startX,n.clientY-d.startY)>6&&(d.moved=!0,i.velocity=0,d.lastAngle=i.angle,d.lastT=performance.now(),g.classList.add("sb-grabbed")),d.moved){let o=h.getBoundingClientRect(),l=v(Math.atan2(n.clientX-(o.left+o.width/2),n.clientY-o.top)*180/Math.PI,-55,55),x=performance.now(),M=Math.max((x-d.lastT)/1e3,.001);d.velocity=d.velocity*.6+(l-d.lastAngle)/M*.4,d.lastAngle=l,d.lastT=x,i.angle=l,ie.style.transform=`rotate(${l}deg)`}return}if(t.eyes){let o=e.lookAt&&n.target instanceof Element?n.target.closest(e.lookAt):null;if(o){let l=o.getBoundingClientRect();Q(l.left+l.width/2,l.top+l.height/2)}else Date.now()>se&&(cancelAnimationFrame(B),B=requestAnimationFrame(()=>Q(n.clientX,n.clientY)))}if(t.swing&&i.lastX!==null){let o=g.getBoundingClientRect(),l=Math.hypot(n.clientX-(o.left+o.width/2),n.clientY-(o.top+o.height/2)),x=170*(e.size/104);l<x&&I(v(n.clientX-i.lastX,-30,30)*1.4*(1-l/x))}i.lastX=n.clientX},_=()=>{if(!d.active)return;let n=d.moved;if(d.active=!1,g.classList.remove("sb-grabbed"),n){re=!0,f(()=>re=!1,50),d.moved=!1;let o=v(d.velocity,-400,400);d.velocity=0,I(o),t.boop&&Math.abs(o)>120&&k(e.messages.throw)}},Te=n=>{var x;let o=n.getBoundingClientRect(),l=(x=n.selectionStart)!=null?x:(n.value||"").length;Q(o.left+Math.min(o.width-24,8+l*8.6),o.top+o.height/2)},ze=n=>{!t.eyes||!fe(n.target,e.watchInput)||(Y(),se=Date.now()+1800,Te(n.target),b({typing:!0}),clearTimeout(ne),ne=setTimeout(()=>b({typing:!1}),350))},Be=n=>{!t.eyes||!fe(n.target,e.watchInput)||(Y(),se=Date.now()+1500,Te(n.target))},Ie=n=>{fe(n.target,e.watchInput)&&(b({nod:!0}),k(e.messages.paste),f(()=>b({nod:!1}),700))},Oe=window.scrollY,qe=()=>{let n=window.scrollY-Oe;if(Oe=window.scrollY,Y(),!(Math.abs(n)<8)&&(I(v(n,-60,60)*.6,v(n,-60,60)*1.6),t.eyes)){let o=g.getBoundingClientRect();Q(o.left+o.width/2,o.top+o.height/2+(n>0?300:-300))}},De=()=>Y(),Ke=setInterval(()=>{let n=Date.now(),o=n-q;if(t.sleep&&o>e.sleepAfter){b({sleeping:!0,idleAct:""});return}if(t.idle&&o>e.idleAfter&&n>$e&&c.mood!=="down"&&!p&&!d.active){let l=["yawn","watch","dance"],x=l[Math.floor(Math.random()*l.length)];if($e=n+5e3+Math.random()*3e3,b({idleAct:x}),x==="watch"){let M=new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});k(e.messages.watch.replace("{time}",M))}f(()=>b({idleAct:""}),2400)}},1e3);window.addEventListener("pointermove",Ye,{passive:!0}),window.addEventListener("pointerup",_),window.addEventListener("pointercancel",_),window.addEventListener("scroll",qe,{passive:!0}),window.addEventListener("keydown",De,{passive:!0}),e.watchInput&&(document.addEventListener("input",ze,!0),document.addEventListener("focusin",Be,!0),document.addEventListener("paste",Ie,!0));let Je=()=>{re||!t.boop||He()},et=n=>{!t.drag||r.len<=0||n.button!==0&&n.pointerType==="mouse"||(d.active=!0,d.moved=!1,d.startX=n.clientX,d.startY=n.clientY,d.velocity=0)},tt=()=>{t.hover&&(clearTimeout(N),N=setTimeout(()=>b({squint:!0}),1100))},st=()=>{clearTimeout(N),b({squint:!1})};g.addEventListener("click",Je),g.addEventListener("pointerdown",et),g.addEventListener("pointerenter",tt),g.addEventListener("pointerleave",st);let C=null,he=()=>{ae=!!(C&&C.matches),h.hidden=V||ae};e.hideBelow>0&&window.matchMedia&&(C=window.matchMedia(`(max-width:${e.hideBelow-1}px)`),C.addEventListener&&C.addEventListener("change",he),he());function He(){Y(),oe+=1,I(oe%2?110:-110,120);let n=Date.now();D=D.filter(x=>n-x<3500),D.push(n);let o=D.length;if(t.combos&&o>=10&&!p){D=[],b({combo:"fall"}),k(e.messages.fall),f(()=>{b({combo:""}),k(e.messages.recover)},3300);return}if(t.combos&&o===5&&!p){b({combo:"spin"}),k(e.messages.spin),f(()=>b({combo:""}),900);return}let l=e.messages.boop;k(c.mood==="down"?e.messages.ouch:l[oe%l.length])}function nt(){I(90),k(e.messages.celebrate),!(p||!t.effects)&&(b({fx:"celebrate"}),Z(),f(()=>{b({fx:""}),Z()},3200))}function rt(){I(160),k(e.messages.panic),!(p||!t.effects)&&(b({fx:"panic"}),Z(),f(()=>{b({fx:""}),Z()},3600))}function ot(){b({flinch:!0}),f(()=>b({flinch:!1}),500),Date.now()-Me>1500&&k(e.messages.ouch)}function at(){b({pass:!0}),f(()=>b({pass:!1}),300)}function it(){b({nod:!0}),f(()=>b({nod:!1}),700)}if(t.timeOfDay){let n=new Date().getHours();c.period=n>=21||n<5?"night":n<9?"morning":"day"}return Ee(),{root:h,S:c,say:k,setMood(n){K.includes(n)&&b({mood:n})},celebrate:nt,panic:rt,flinch:ot,pass:at,nod:it,nervous(n=!0){b({nervous:!!n})},boop:He,sleep(){b({sleeping:!0,idleAct:""})},wake:Y,show(){V=!1,h.hidden=ae},hide(){V=!0,h.hidden=!0},isHidden:()=>V,destroy(){H&&(H=!1,clearInterval(Ke),clearTimeout(ne),clearTimeout(N),u.forEach(clearTimeout),u.clear(),cancelAnimationFrame(B),A&&A.removeEventListener&&A.removeEventListener("change",de),C&&C.removeEventListener&&C.removeEventListener("change",he),window.removeEventListener("pointermove",Ye),window.removeEventListener("pointerup",_),window.removeEventListener("pointercancel",_),window.removeEventListener("scroll",qe),window.removeEventListener("keydown",De),document.removeEventListener("input",ze,!0),document.removeEventListener("focusin",Be,!0),document.removeEventListener("paste",Ie,!0),h.remove(),ce!==null&&L&&(L.style.position=ce))}}}var $t=["character","hang","position","accessory","color","size","length","actions","mood","mount","watch-input","look-at","hide-below","offset-x","offset-y"];function Qe(e){let s=f=>e.hasAttribute(f)?e.getAttribute(f):void 0,t=f=>f===void 0||f===""?void 0:Number(f),r=s("actions"),a=t(s("offset-x")),u=t(s("offset-y"));return{character:s("character"),hang:s("hang"),position:s("position"),accessory:s("accessory"),color:s("color"),size:t(s("size")),length:t(s("length")),mood:s("mood"),mount:s("mount"),watchInput:s("watch-input"),lookAt:s("look-at"),hideBelow:t(s("hide-below")),offset:a!==void 0||u!==void 0?{...a!==void 0&&{x:a},...u!==void 0&&{y:u}}:void 0,actions:r===void 0?void 0:r.split(",").map(f=>f.trim()).filter(Boolean)}}var _e=e=>Object.fromEntries(Object.entries(e).filter(([,s])=>s!==void 0));function te(e="server-buddy"){typeof window=="undefined"||typeof customElements=="undefined"||customElements.get(e)||customElements.define(e,class extends HTMLElement{static get observedAttributes(){return $t}connectedCallback(){this.style.display="none",this.buddy=ee(_e(Qe(this)))}disconnectedCallback(){this.buddy&&this.buddy.destroy(),this.buddy=null}attributeChangedCallback(){this.buddy&&this.buddy.update(_e(Qe(this)))}})}var Mt=W.map(e=>({id:e,name:E[e].name,blurb:E[e].blurb}));te();return bt(Lt);})();
