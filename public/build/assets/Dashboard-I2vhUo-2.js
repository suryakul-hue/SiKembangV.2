import{c as e,n as t,o as n,r,t as i,u as a}from"./app-DLhu_Xmb.js";import{t as o}from"./AuthenticatedLayout-Cj2FxBrk.js";var s=a(e(),1),c=i();function l(e){let{auth:i,stats:a,recentChecks:l,featuredRecipes:u,dailyReminder:d,upcomingAppointments:f=[]}=e,p=i?.user,[m,h]=(0,s.useState)(``),[g,_]=(0,s.useState)(new Date),[v,y]=(0,s.useState)(d?.taken_this_week||!1),[b,x]=(0,s.useState)(!1),[S,C]=(0,s.useState)(d?!d.taken_this_week:!1),[w,T]=(0,s.useState)(0),[E,D]=(0,s.useState)({}),[O,k]=(0,s.useState)(null),[A,j]=(0,s.useState)(!1),M=(0,s.useRef)(null),N=(0,s.useRef)(null);(0,s.useEffect)(()=>{let e=new Date().getHours();h(e<11?`Selamat Pagi`:e<15?`Selamat Siang`:e<18?`Selamat Sore`:`Selamat Malam`);let t=setInterval(()=>_(new Date),6e4);return()=>clearInterval(t)},[]),(0,s.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollHeight-window.innerHeight,t=e>0?window.scrollY/e*100:0;T(t)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,s.useEffect)(()=>{let e=new IntersectionObserver(([t])=>{t.isIntersecting&&(j(!0),e.disconnect())},{threshold:.1,rootMargin:`0px 0px -50px 0px`});return M.current&&e.observe(M.current),()=>e.disconnect()},[]),(0,s.useEffect)(()=>{A&&R.forEach((e,t)=>{let n=e.value,r=performance.now(),i=e=>{let a=e-r,o=Math.min(a/2e3,1),s=1-(1-o)**3,c=Math.floor(0+(n-0)*s);D(e=>({...e,[t]:c})),o<1&&requestAnimationFrame(i)};requestAnimationFrame(i)})},[A]);let P=(0,s.useCallback)(async e=>{if(!b){x(!0);try{await n.post(route(`reminder.tablet-darah.update`),{taken_today:e},{preserveScroll:!0,onSuccess:()=>{y(!0),setTimeout(()=>C(!1),3e3)},onFinish:()=>x(!1)})}catch(e){console.error(e),x(!1)}}},[b]),F=a||{total_checks:0,healthy:0,stunting:0,wasting:0,total_recipes:24,avg_hemoglobin:0},I=l||[],L=u||[],R=(0,s.useMemo)(()=>[{label:`Total Pemeriksaan`,value:F.total_checks,icon:(0,c.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01`})}),trend:`+12%`,color:`teal`,bgColor:`bg-teal-50`,textColor:`text-teal-700`,borderColor:`border-teal-100`,gradientFrom:`from-teal-500`,gradientTo:`to-teal-600`},{label:`Anak Sehat`,value:F.healthy,icon:(0,c.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`})}),trend:`+5%`,color:`emerald`,bgColor:`bg-emerald-50`,textColor:`text-emerald-700`,borderColor:`border-emerald-100`,gradientFrom:`from-emerald-500`,gradientTo:`to-emerald-600`},{label:`Perlu Perhatian`,value:F.stunting+F.wasting,icon:(0,c.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z`})}),trend:`-8%`,color:`amber`,bgColor:`bg-amber-50`,textColor:`text-amber-700`,borderColor:`border-amber-100`,gradientFrom:`from-amber-500`,gradientTo:`to-amber-600`},{label:`Rata-rata HB`,value:F.avg_hemoglobin||0,suffix:`g/dL`,icon:(0,c.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z`})}),trend:`Normal`,color:`violet`,bgColor:`bg-violet-50`,textColor:`text-violet-700`,borderColor:`border-violet-100`,gradientFrom:`from-violet-500`,gradientTo:`to-violet-600`}],[F]),z=[{icon:`💊`,title:`Minum Tablet TTD`,desc:`Konsumsi tablet tambah darah secara rutin setiap minggu`},{icon:`🥬`,title:`Gizi Seimbang`,desc:`Perbanyak sayur hijau dan protein hewani`},{icon:`💧`,title:`Hidrasi`,desc:`Minum minimal 8 gelas air putih setiap hari`},{icon:`😴`,title:`Istirahat Cukup`,desc:`Tidur 7-8 jam untuk pemulihan optimal`}],[B,V]=(0,s.useState)(0);(0,s.useEffect)(()=>{let e=setInterval(()=>{V(e=>(e+1)%z.length)},5e3);return()=>clearInterval(e)},[]);let H=(e,t)=>{if(!t.current)return;let n=t.current.getBoundingClientRect(),r=e.clientX-n.left,i=e.clientY-n.top;t.current.style.setProperty(`--mouse-x`,`${r}px`),t.current.style.setProperty(`--mouse-y`,`${i}px`)};return(0,c.jsxs)(o,{auth:i,header:null,children:[(0,c.jsx)(t,{title:`Dashboard Kesehatan`}),(0,c.jsx)(`style`,{children:`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

                body {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    background: #F8FAFC;
                    color: #1E293B;
                }

                /* Scroll Progress - lebih subtle */
                .scroll-progress {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #0D9488 0%, #059669 100%);
                    z-index: 9999;
                    transition: width 0.1s linear;
                }

                /* Modern Hero - Clean Medical Gradient */
                .hero-section {
                    background: linear-gradient(135deg, #0F766E 0%, #0D9488 40%, #134E4A 100%);
                    position: relative;
                    min-height: 70vh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                }

                /* Subtle background pattern */
                .hero-pattern {
                    position: absolute;
                    inset: 0;
                    opacity: 0.03;
                    background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0);
                    background-size: 40px 40px;
                }

                /* Soft floating shapes - lebih subtle */
                .hero-shape {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(100px);
                    opacity: 0.15;
                }

                .shape-1 {
                    width: 500px;
                    height: 500px;
                    background: white;
                    top: -100px;
                    right: -100px;
                    animation: float 15s infinite ease-in-out;
                }

                .shape-2 {
                    width: 400px;
                    height: 400px;
                    background: #5EEAD4;
                    bottom: -100px;
                    left: -100px;
                    animation: float 18s infinite ease-in-out reverse;
                }

                @keyframes float {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(20px, -20px) scale(1.05); }
                }

                /* Wave Separator - lebih clean */
                .wave-container {
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    width: 100%;
                    overflow: hidden;
                    line-height: 0;
                }

                .wave-svg {
                    position: relative;
                    display: block;
                    width: calc(100% + 1.3px);
                    height: 100px;
                }

                /* Cards - Clean Medical Style */
                .medical-card {
                    background: white;
                    border: 1px solid #E2E8F0;
                    border-radius: 20px;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .medical-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.08);
                    border-color: #CBD5E1;
                }

                /* Stat Cards */
                .stat-card {
                    position: relative;
                    background: white;
                    border-radius: 20px;
                    padding: 24px;
                    border: 1px solid #E2E8F0;
                    transition: all 0.3s ease;
                    overflow: hidden;
                }

                .stat-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, var(--stat-color) 0%, var(--stat-color-light) 100%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .stat-card:hover::before {
                    opacity: 1;
                }

                .stat-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.08);
                }

                /* Icon Box */
                .icon-box {
                    width: 48px;
                    height: 48px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .stat-card:hover .icon-box {
                    transform: scale(1.05);
                }

                /* Action Cards - FIX: Mouse tracking yang benar */
                .action-card {
                    position: relative;
                    background: white;
                    border-radius: 24px;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid #E2E8F0;
                }

                .action-card::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(13, 148, 136, 0.04), transparent 40%);
                    opacity: 0;
                    transition: opacity 0.3s;
                    pointer-events: none;
                }

                .action-card:hover::after {
                    opacity: 1;
                }

                .action-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 20px 40px -5px rgba(13, 148, 136, 0.1);
                    border-color: #0D9488;
                }

                /* Status Badges - Pill style */
                .status-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 14px;
                    border-radius: 9999px;
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 0.01em;
                }

                .status-badge::before {
                    content: '';
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: currentColor;
                }

                /* Table Rows */
                .table-row-hover {
                    transition: all 0.2s ease;
                    border-radius: 14px;
                }

                .table-row-hover:hover {
                    background: #F8FAFC;
                    transform: scale(1.005);
                }

                /* Buttons */
                .btn-primary {
                    background: linear-gradient(135deg, #0D9488 0%, #0F766E 100%);
                    color: white;
                    border: none;
                    border-radius: 14px;
                    padding: 14px 28px;
                    font-weight: 600;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(13, 148, 136, 0.25);
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }

                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(13, 148, 136, 0.35);
                }

                .btn-secondary {
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 14px;
                    padding: 14px 28px;
                    font-weight: 600;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }

                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.2);
                    border-color: rgba(255, 255, 255, 0.5);
                }

                /* Gradient Text */
                .gradient-text {
                    background: linear-gradient(135deg, #0D9488 0%, #059669 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                /* Floating Animation - lebih subtle */
                @keyframes gentleFloat {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }

                .float-animation {
                    animation: gentleFloat 8s ease-in-out infinite;
                }

                /* Pulse Ring - lebih soft */
                @keyframes pulseRing {
                    0% { transform: scale(0.9); opacity: 0.4; }
                    100% { transform: scale(1.4); opacity: 0; }
                }

                .pulse-ring::before {
                    content: '';
                    position: absolute;
                    inset: -3px;
                    border-radius: 50%;
                    border: 2px solid currentColor;
                    animation: pulseRing 2.5s ease-out infinite;
                }

                /* Custom Scrollbar */
                ::-webkit-scrollbar {
                    width: 6px;
                    height: 6px;
                }

                ::-webkit-scrollbar-track {
                    background: #F1F5F9;
                }

                ::-webkit-scrollbar-thumb {
                    background: #CBD5E1;
                    border-radius: 3px;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: #94A3B8;
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    .wave-svg {
                        height: 70px;
                    }
                }

                @media (max-width: 768px) {
                    .hero-section {
                        min-height: auto;
                        padding: 80px 0 100px;
                    }
                    
                    .wave-svg {
                        height: 50px;
                    }
                }
            `}),(0,c.jsx)(`div`,{className:`scroll-progress`,style:{width:`${w}%`}}),(0,c.jsxs)(`div`,{className:`min-h-screen bg-slate-50`,children:[S&&(0,c.jsx)(`div`,{className:`container mx-auto px-4 sm:px-6 lg:px-8 pt-6`,children:(0,c.jsx)(`div`,{className:`max-w-4xl mx-auto mb-6 animate-[slideIn_0.5s_ease]`,children:(0,c.jsxs)(`div`,{className:`medical-card overflow-hidden`,children:[(0,c.jsx)(`div`,{className:`p-5 ${v?`bg-emerald-50/50`:`bg-amber-50/50`} border-b border-gray-100`,children:(0,c.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,c.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,c.jsx)(`div`,{className:`w-12 h-12 rounded-full flex items-center justify-center ${v?`bg-emerald-500 text-white`:`bg-amber-500 text-white`} pulse-ring relative shadow-lg`,children:v?(0,c.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,c.jsx)(`span`,{className:`text-xl`,children:`💊`})}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h3`,{className:`font-bold text-gray-900 text-lg`,children:v?`Sudah Minum Tablet!`:`Tablet TTD Hari Ini`}),(0,c.jsx)(`p`,{className:`text-sm text-gray-600`,children:v?`Terima kasih sudah rutin minum tablet`:`Jangan lupa konsumsi tablet besi hari ini`})]})]}),(0,c.jsx)(`button`,{onClick:()=>C(!1),className:`text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full`,children:(0,c.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`})})})]})}),!v&&(0,c.jsxs)(`div`,{className:`p-6`,children:[(0,c.jsx)(`p`,{className:`text-sm text-gray-600 mb-5 leading-relaxed`,children:`Konsumsi tablet tambah darah (TTD) secara rutin membantu mencegah anemia dan menjaga stamina Anda selama masa pemulihan.`}),(0,c.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,c.jsx)(`button`,{onClick:()=>P(!0),disabled:b,className:`btn-primary`,children:b?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`svg`,{className:`animate-spin h-4 w-4`,viewBox:`0 0 24 24`,children:[(0,c.jsx)(`circle`,{className:`opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`,fill:`none`}),(0,c.jsx)(`path`,{className:`opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z`})]}),(0,c.jsx)(`span`,{children:`Memproses...`})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}),(0,c.jsx)(`span`,{children:`Sudah Minum`})]})}),(0,c.jsx)(`button`,{onClick:()=>C(!1),className:`px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors text-sm`,children:`Nanti Saja`})]})]}),v&&(0,c.jsx)(`div`,{className:`p-6 bg-emerald-50/30`,children:(0,c.jsxs)(`div`,{className:`flex items-center gap-4 text-emerald-700`,children:[(0,c.jsx)(`div`,{className:`w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center`,children:(0,c.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z`})})}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`p`,{className:`font-bold text-emerald-800`,children:`Hebat! 🎉`}),(0,c.jsx)(`p`,{className:`text-sm text-emerald-600`,children:`Anda sudah minum tablet hari ini. Pertahankan konsistensi untuk kesehatan yang optimal!`})]})]})})]})})}),(0,c.jsxs)(`section`,{ref:N,className:`hero-section`,children:[(0,c.jsx)(`div`,{className:`hero-pattern`}),(0,c.jsx)(`div`,{className:`hero-shape shape-1`}),(0,c.jsx)(`div`,{className:`hero-shape shape-2`}),(0,c.jsx)(`div`,{className:`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10`,children:(0,c.jsxs)(`div`,{className:`grid lg:grid-cols-2 gap-12 items-center`,children:[(0,c.jsxs)(`div`,{className:`space-y-8 max-w-2xl`,children:[(0,c.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/95 text-sm font-medium border border-white/20 shadow-lg shadow-teal-900/10`,children:[(0,c.jsx)(`span`,{className:`w-2 h-2 bg-emerald-400 rounded-full animate-pulse`}),(0,c.jsx)(`span`,{children:`Sistem Monitoring Kesehatan Aktif`})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`h1`,{className:`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight`,children:[m,`,`,(0,c.jsx)(`br`,{}),(0,c.jsx)(`span`,{className:`text-teal-200`,children:p?.name||`Pengguna`})]}),(0,c.jsx)(`p`,{className:`mt-6 text-lg sm:text-xl text-teal-100/90 leading-relaxed max-w-xl font-light`,children:`Pantau kesehatan keluarga Anda dengan dashboard modern. Deteksi dini stunting, rekomendasi gizi, dan tracking hemoglobin dalam satu platform terintegrasi.`})]}),(0,c.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,c.jsxs)(r,{href:route(`stunting.check`),className:`btn-primary group`,children:[(0,c.jsx)(`span`,{children:`Mulai Pemeriksaan`}),(0,c.jsx)(`svg`,{className:`w-5 h-5 group-hover:translate-x-1 transition-transform`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]}),(0,c.jsxs)(r,{href:route(`hemoglobin.index`),className:`btn-secondary`,children:[(0,c.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z`})}),(0,c.jsx)(`span`,{children:`Tracking Tablet`})]})]}),(0,c.jsx)(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[{icon:`📊`,label:`WHO Standards`},{icon:`🔒`,label:`Data Aman & Privat`},{icon:`⚡`,label:`Real-time Monitoring`}].map((e,t)=>(0,c.jsxs)(`div`,{className:`flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-white/80 text-sm border border-white/10`,children:[(0,c.jsx)(`span`,{className:`opacity-90`,children:e.icon}),(0,c.jsx)(`span`,{className:`font-medium`,children:e.label})]},t))})]}),(0,c.jsx)(`div`,{className:`hidden lg:block relative`,children:(0,c.jsxs)(`div`,{className:`relative float-animation`,children:[(0,c.jsxs)(`div`,{className:`medical-card p-8 max-w-md ml-auto shadow-2xl shadow-teal-900/10`,children:[(0,c.jsxs)(`div`,{className:`flex items-center justify-between mb-8`,children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`p`,{className:`text-sm font-medium text-gray-500 mb-1`,children:`Status Kesehatan`}),(0,c.jsx)(`p`,{className:`text-2xl font-bold text-gray-900`,children:`Optimal`})]}),(0,c.jsx)(`div`,{className:`w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-2xl shadow-lg shadow-emerald-200`,children:`💪`})]}),(0,c.jsxs)(`div`,{className:`space-y-3`,children:[(0,c.jsxs)(`div`,{className:`flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100`,children:[(0,c.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,c.jsx)(`div`,{className:`w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-sm`,children:`🩸`}),(0,c.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`Hemoglobin`})]}),(0,c.jsx)(`span`,{className:`font-bold text-emerald-600`,children:`12.5 g/dL`})]}),(0,c.jsxs)(`div`,{className:`flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100`,children:[(0,c.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,c.jsx)(`div`,{className:`w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm`,children:`💊`}),(0,c.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`Tablet Minggu Ini`})]}),(0,c.jsx)(`span`,{className:`font-bold text-blue-600`,children:`5/7 Hari`})]}),(0,c.jsxs)(`div`,{className:`flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100`,children:[(0,c.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,c.jsx)(`div`,{className:`w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center text-sm`,children:`📅`}),(0,c.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`Pemeriksaan Terakhir`})]}),(0,c.jsx)(`span`,{className:`font-bold text-gray-900`,children:`2 hari lalu`})]})]})]}),(0,c.jsx)(`div`,{className:`absolute -left-8 top-1/2 medical-card p-4 float-animation shadow-xl`,style:{animationDelay:`-4s`},children:(0,c.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,c.jsx)(`div`,{className:`w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-100`,children:(0,c.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z`})})}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`p`,{className:`text-xs font-semibold text-gray-500 uppercase tracking-wider`,children:`Peringatan`}),(0,c.jsx)(`p`,{className:`text-sm font-bold text-gray-900`,children:`Jadwal Cek HB`})]})]})})]})})]})}),(0,c.jsx)(`div`,{className:`wave-container`,children:(0,c.jsxs)(`svg`,{className:`wave-svg`,viewBox:`0 0 1200 120`,preserveAspectRatio:`none`,children:[(0,c.jsx)(`path`,{d:`M0,60 C300,120 600,0 900,60 C1050,90 1150,40 1200,60 L1200,120 L0,120 Z`,fill:`#F8FAFC`}),(0,c.jsx)(`path`,{d:`M0,80 C200,140 500,20 800,80 C1000,110 1100,60 1200,80 L1200,120 L0,120 Z`,fill:`#F8FAFC`,opacity:`0.5`})]})})]}),(0,c.jsx)(`section`,{ref:M,className:`container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 mb-16`,children:(0,c.jsx)(`div`,{className:`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6`,children:R.map((e,t)=>(0,c.jsxs)(`div`,{className:`stat-card`,style:{"--stat-color":e.color===`teal`?`#0D9488`:e.color===`emerald`?`#059669`:e.color===`amber`?`#D97706`:`#7C3AED`,"--stat-color-light":e.color===`teal`?`#5EEAD4`:e.color===`emerald`?`#6EE7B7`:e.color===`amber`?`#FCD34D`:`#C4B5FD`},onMouseEnter:()=>k(t),onMouseLeave:()=>k(null),children:[(0,c.jsxs)(`div`,{className:`flex items-start justify-between mb-5`,children:[(0,c.jsx)(`div`,{className:`icon-box text-white shadow-lg ${e.bgColor.replace(`bg-`,`text-`).replace(`50`,`600`)} bg-gradient-to-br ${e.gradientFrom} ${e.gradientTo}`,children:e.icon}),(0,c.jsx)(`span`,{className:`text-xs font-bold px-2.5 py-1 rounded-full ${e.bgColor} ${e.textColor} border ${e.borderColor}`,children:e.trend})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`h3`,{className:`text-3xl font-extrabold text-gray-900 tracking-tight`,children:[A?E[t]===void 0?0:E[t]:0,(0,c.jsx)(`span`,{className:`text-lg font-semibold text-gray-400 ml-1`,children:e.suffix||``})]}),(0,c.jsx)(`p`,{className:`text-sm text-gray-500 mt-1.5 font-medium`,children:e.label})]}),(0,c.jsx)(`div`,{className:`mt-5 flex items-end gap-[3px] h-10`,children:[40,65,45,80,55,90,70].map((n,r)=>(0,c.jsx)(`div`,{className:`flex-1 rounded-full transition-all duration-500`,style:{height:`${n}%`,backgroundColor:O===t?e.color===`teal`?`#0D9488`:e.color===`emerald`?`#059669`:e.color===`amber`?`#D97706`:`#7C3AED`:`#E2E8F0`,opacity:O===t?.6:.25}},r))})]},t))})}),(0,c.jsxs)(`section`,{className:`container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-20`,children:[(0,c.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-6`,children:[(0,c.jsx)(r,{href:route(`stunting.check`),className:`action-card group p-8 block`,onMouseMove:e=>H(e,{current:e.currentTarget}),children:(0,c.jsxs)(`div`,{className:`flex items-start gap-6 relative z-10`,children:[(0,c.jsx)(`div`,{className:`w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-3xl shadow-lg shadow-teal-200 group-hover:scale-110 transition-transform duration-300 text-white`,children:`📏`}),(0,c.jsxs)(`div`,{className:`flex-1`,children:[(0,c.jsx)(`h3`,{className:`text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors`,children:`Deteksi Stunting`}),(0,c.jsxs)(`p`,{className:`text-gray-600 mb-5 leading-relaxed text-sm`,children:[`Lakukan pemeriksaan komprehensif dengan pengukuran`,(0,c.jsx)(`span`,{className:`font-semibold text-teal-600`,children:` BB, TB, LiLA, dan IMT `}),`untuk deteksi dini stunting pada anak.`]}),(0,c.jsxs)(`div`,{className:`flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-4 transition-all text-sm`,children:[(0,c.jsx)(`span`,{children:`Mulai Pemeriksaan`}),(0,c.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]})]})]})}),(0,c.jsx)(r,{href:route(`recipes.index`),className:`action-card group p-8 block`,onMouseMove:e=>H(e,{current:e.currentTarget}),children:(0,c.jsxs)(`div`,{className:`flex items-start gap-6 relative z-10`,children:[(0,c.jsx)(`div`,{className:`w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-3xl shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform duration-300 text-white`,children:`🥗`}),(0,c.jsxs)(`div`,{className:`flex-1`,children:[(0,c.jsx)(`h3`,{className:`text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors`,children:`Resep Bergizi`}),(0,c.jsxs)(`p`,{className:`text-gray-600 mb-5 leading-relaxed text-sm`,children:[`Temukan `,(0,c.jsx)(`span`,{className:`font-semibold text-emerald-600`,children:`resep makanan bergizi`}),` yang disusun oleh ahli gizi untuk setiap tahap pertumbuhan anak Anda.`]}),(0,c.jsxs)(`div`,{className:`flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-4 transition-all text-sm`,children:[(0,c.jsx)(`span`,{children:`Jelajahi Resep`}),(0,c.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]})]})]})})]}),(0,c.jsxs)(`div`,{className:`grid lg:grid-cols-3 gap-6`,children:[(0,c.jsx)(`div`,{className:`lg:col-span-1`,children:(0,c.jsxs)(`div`,{className:`medical-card p-6 h-full`,children:[(0,c.jsxs)(`h3`,{className:`text-lg font-bold text-gray-900 mb-5 flex items-center gap-2`,children:[(0,c.jsx)(`span`,{className:`text-xl`,children:`💡`}),(0,c.jsx)(`span`,{children:`Tips Kesehatan`})]}),(0,c.jsx)(`div`,{className:`bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-5 border border-teal-100 mb-5 transition-all duration-500`,children:(0,c.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,c.jsx)(`span`,{className:`text-3xl filter drop-shadow-sm`,children:z[B].icon}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h4`,{className:`font-bold text-gray-900 mb-1.5`,children:z[B].title}),(0,c.jsx)(`p`,{className:`text-sm text-gray-600 leading-relaxed`,children:z[B].desc})]})]})}),(0,c.jsx)(`div`,{className:`flex justify-center gap-2`,children:z.map((e,t)=>(0,c.jsx)(`button`,{onClick:()=>V(t),className:`h-2 rounded-full transition-all duration-300 ${t===B?`w-8 bg-teal-500`:`w-2 bg-gray-300 hover:bg-gray-400`}`},t))})]})}),(0,c.jsx)(`div`,{className:`lg:col-span-2`,children:(0,c.jsxs)(`div`,{className:`medical-card overflow-hidden`,children:[(0,c.jsxs)(`div`,{className:`p-6 border-b border-gray-100 flex justify-between items-center`,children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h3`,{className:`text-lg font-bold text-gray-900`,children:`Pemeriksaan Terbaru`}),(0,c.jsx)(`p`,{className:`text-sm text-gray-500 mt-0.5`,children:`Riwayat 30 hari terakhir`})]}),(0,c.jsxs)(r,{href:route(`stunting.history`),className:`text-sm font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1 transition-colors`,children:[`Lihat Semua`,(0,c.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})]})]}),(0,c.jsx)(`div`,{className:`p-4 space-y-2`,children:I.length>0?I.slice(0,4).map((e,t)=>(0,c.jsxs)(`div`,{className:`table-row-hover flex items-center justify-between p-4 cursor-pointer border border-transparent hover:border-gray-100`,children:[(0,c.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,c.jsx)(`div`,{className:`w-12 h-12 rounded-xl flex items-center justify-center text-lg shadow-sm ${e.status===`normal`?`bg-emerald-50 text-emerald-600 border border-emerald-100`:e.status===`stunting`?`bg-amber-50 text-amber-600 border border-amber-100`:`bg-blue-50 text-blue-600 border border-blue-100`}`,children:e.status===`normal`?(0,c.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):e.status===`stunting`?(0,c.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z`})}):(0,c.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M13 10V3L4 14h7v7l9-11h-7z`})})}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`p`,{className:`font-bold text-gray-900`,children:e.child_name}),(0,c.jsxs)(`p`,{className:`text-sm text-gray-500`,children:[e.age_months,` bulan • `,e.check_date]})]})]}),(0,c.jsxs)(`div`,{className:`text-right`,children:[(0,c.jsx)(`span`,{className:`status-badge ${e.status===`normal`?`bg-emerald-50 text-emerald-700 border border-emerald-100`:e.status===`stunting`?`bg-amber-50 text-amber-700 border border-amber-100`:`bg-blue-50 text-blue-700 border border-blue-100`}`,children:e.status===`normal`?`Normal`:e.status===`stunting`?`Stunting`:`Gizi Kurang`}),(0,c.jsxs)(`p`,{className:`text-xs text-gray-400 mt-1.5 font-medium`,children:[`IMT: `,e.imt]})]})]},t)):(0,c.jsxs)(`div`,{className:`text-center py-12`,children:[(0,c.jsx)(`div`,{className:`w-16 h-16 mx-auto bg-teal-50 rounded-2xl flex items-center justify-center text-2xl mb-4 border border-teal-100`,children:(0,c.jsx)(`svg`,{className:`w-8 h-8 text-teal-500`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2`})})}),(0,c.jsx)(`p`,{className:`text-gray-600 mb-5 font-medium`,children:`Belum ada pemeriksaan`}),(0,c.jsx)(r,{href:route(`stunting.check`),className:`btn-primary text-sm`,children:`Pemeriksaan Pertama`})]})})]})})]}),(0,c.jsxs)(`div`,{className:`grid lg:grid-cols-3 gap-6`,children:[(0,c.jsxs)(`div`,{className:`medical-card p-6`,children:[(0,c.jsx)(`h3`,{className:`text-lg font-bold text-gray-900 mb-5`,children:`Akses Cepat`}),(0,c.jsxs)(`div`,{className:`space-y-3`,children:[(0,c.jsxs)(r,{href:route(`hemoglobin.index`),className:`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-red-50 to-rose-50 border border-red-100 hover:shadow-md transition-all group hover:border-red-200`,children:[(0,c.jsx)(`div`,{className:`w-12 h-12 rounded-xl bg-white text-red-500 flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform border border-red-100`,children:`💊`}),(0,c.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,c.jsx)(`p`,{className:`font-bold text-gray-900 text-sm`,children:`Tracking Tablet TTD`}),(0,c.jsx)(`p`,{className:`text-xs text-gray-500 mt-0.5`,children:`Catat konsumsi rutin`})]}),(0,c.jsx)(`svg`,{className:`w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors flex-shrink-0`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})]}),(0,c.jsxs)(r,{href:route(`hemoglobin.index`),className:`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100 hover:shadow-md transition-all group hover:border-violet-200`,children:[(0,c.jsx)(`div`,{className:`w-12 h-12 rounded-xl bg-white text-violet-500 flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform border border-violet-100`,children:`🩸`}),(0,c.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,c.jsx)(`p`,{className:`font-bold text-gray-900 text-sm`,children:`Cek Hemoglobin`}),(0,c.jsx)(`p`,{className:`text-xs text-gray-500 mt-0.5`,children:`Input hasil lab terbaru`})]}),(0,c.jsx)(`svg`,{className:`w-5 h-5 text-gray-400 group-hover:text-violet-500 transition-colors flex-shrink-0`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})]}),(0,c.jsxs)(r,{href:route(`education.index`),className:`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 hover:shadow-md transition-all group hover:border-amber-200`,children:[(0,c.jsx)(`div`,{className:`w-12 h-12 rounded-xl bg-white text-amber-500 flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform border border-amber-100`,children:`📚`}),(0,c.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,c.jsx)(`p`,{className:`font-bold text-gray-900 text-sm`,children:`Edukasi Gizi`}),(0,c.jsx)(`p`,{className:`text-xs text-gray-500 mt-0.5`,children:`Pelajari tentang stunting`})]}),(0,c.jsx)(`svg`,{className:`w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors flex-shrink-0`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})]})]})]}),(0,c.jsxs)(`div`,{className:`lg:col-span-2 medical-card overflow-hidden`,children:[(0,c.jsxs)(`div`,{className:`p-6 border-b border-gray-100 flex justify-between items-center`,children:[(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`h3`,{className:`text-lg font-bold text-gray-900 flex items-center gap-2`,children:[(0,c.jsx)(`span`,{children:`🍽️`}),` Menu Rekomendasi`]}),(0,c.jsx)(`p`,{className:`text-sm text-gray-500 mt-0.5`,children:`Pilihan terbaik untuk hari ini`})]}),(0,c.jsxs)(r,{href:route(`recipes.index`),className:`text-sm font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition-colors`,children:[`Lihat Semua`,(0,c.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})]})]}),(0,c.jsx)(`div`,{className:`p-6 grid sm:grid-cols-2 gap-4`,children:L.length>0?L.slice(0,2).map((e,t)=>(0,c.jsx)(r,{href:route(`recipes.show`,e.id),className:`group block p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-100 hover:border-emerald-200 transition-all`,children:(0,c.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,c.jsx)(`div`,{className:`w-20 h-20 rounded-xl bg-white shadow-sm flex items-center justify-center text-3xl border border-slate-100 group-hover:border-emerald-200 transition-colors`,children:e.image?`🍽️`:`🥗`}),(0,c.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,c.jsx)(`h4`,{className:`font-bold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-1 text-sm`,children:e.title}),(0,c.jsxs)(`p`,{className:`text-sm text-gray-500 mt-1`,children:[(0,c.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,c.jsx)(`span`,{children:`👶`}),` `,e.age_group]}),(0,c.jsx)(`span`,{className:`mx-2 text-gray-300`,children:`•`}),(0,c.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,c.jsx)(`span`,{children:`⏱️`}),` `,e.cooking_time,` menit`]})]}),(0,c.jsx)(`div`,{className:`flex flex-wrap gap-1.5 mt-3`,children:e.nutrition_tags?.slice(0,2).map((e,t)=>(0,c.jsx)(`span`,{className:`text-[11px] px-2.5 py-1 bg-white rounded-lg border border-emerald-200 text-emerald-700 font-medium shadow-sm`,children:e},t))})]})]})},t)):(0,c.jsx)(c.Fragment,{children:[{title:`Bubur Ayam Wortel`,age:`6-8 bulan`,time:`20`,tags:[`Protein`,`Vit A`],icon:`🥣`},{title:`Tim Ikan Salmon`,age:`9-11 bulan`,time:`15`,tags:[`Omega-3`,`Kalsium`],icon:`🐟`}].map((e,t)=>(0,c.jsx)(`div`,{className:`p-4 rounded-2xl bg-slate-50 border border-slate-100`,children:(0,c.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,c.jsx)(`div`,{className:`w-20 h-20 rounded-xl bg-white shadow-sm flex items-center justify-center text-3xl border border-slate-100`,children:e.icon}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h4`,{className:`font-bold text-gray-900 text-sm`,children:e.title}),(0,c.jsxs)(`p`,{className:`text-sm text-gray-500 mt-1`,children:[`👶 `,e.age,` • ⏱️ `,e.time,` menit`]}),(0,c.jsx)(`div`,{className:`flex gap-1.5 mt-3`,children:e.tags.map((e,t)=>(0,c.jsx)(`span`,{className:`text-[11px] px-2.5 py-1 bg-white rounded-lg border border-slate-200 font-medium text-gray-600`,children:e},t))})]})]})},t))})})]})]}),(0,c.jsx)(`div`,{className:`grid md:grid-cols-3 gap-6`,children:[{icon:`📊`,title:`Standar WHO`,desc:`Pemeriksaan menggunakan standar pertumbuhan WHO untuk hasil akurat dan terpercaya.`,gradient:`bg-gradient-to-br from-teal-500 to-teal-700`},{icon:`🛡️`,title:`Deteksi Dini`,desc:`Deteksi stunting sejak dini untuk intervensi lebih awal dan pertumbuhan optimal anak.`,gradient:`bg-gradient-to-br from-emerald-500 to-emerald-700`},{icon:`🥗`,title:`Gizi Seimbang`,desc:`Resep bergizi yang disusun oleh ahli gizi untuk memenuhi kebutuhan anak.`,gradient:`bg-gradient-to-br from-sky-500 to-blue-600`}].map((e,t)=>(0,c.jsxs)(`div`,{className:`relative overflow-hidden rounded-2xl p-6 text-white ${e.gradient} shadow-lg`,children:[(0,c.jsxs)(`div`,{className:`relative z-10`,children:[(0,c.jsx)(`div`,{className:`w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-2xl mb-4 border border-white/20`,children:e.icon}),(0,c.jsx)(`h4`,{className:`text-lg font-bold mb-2`,children:e.title}),(0,c.jsx)(`p`,{className:`text-white/85 text-sm leading-relaxed`,children:e.desc})]}),(0,c.jsx)(`div`,{className:`absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl`}),(0,c.jsx)(`div`,{className:`absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-10 -mb-10 blur-xl`})]},t))})]})]})]})}export{l as default};