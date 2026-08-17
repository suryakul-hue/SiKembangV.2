import{c as e,n as t,o as n,t as r,u as i}from"./app-DLhu_Xmb.js";import{t as a}from"./AuthenticatedLayout-Cj2FxBrk.js";var o=i(e(),1),s=r();function c(e){let{auth:r,history:i=[],children:c}=e,l={primary:`#E53935`,light:`#FFCDD2`,deep:`#C62828`,accent:`#FF7043`,success:`#43A047`,info:`#1E88E5`,purple:`#8E24AA`,cream:`#FFF3E0`,rose:`#FFEBEE`,surface:`#FAFAFA`},[u,d]=(0,o.useState)(`tracker`),[f,p]=(0,o.useState)(()=>S()),[m,h]=(0,o.useState)({hemoglobin:``,tanggal_cek:new Date().toISOString().split(`T`)[0],catatan:``}),[g,_]=(0,o.useState)({}),[v,y]=(0,o.useState)(!1),[b,x]=(0,o.useState)(!1);function S(){let e=new Date,t=new Date(e.getFullYear(),0,1),n=e-t+(t.getDay()+1)*864e5;return Math.ceil(n/6048e5)}function C(e,t=new Date().getFullYear()){let n=new Date(t,0,1+(e-1)*7),r=new Date(n);return r.setDate(r.getDate()+6),{start:n,end:r,days:Array.from({length:7},(e,t)=>{let r=new Date(n);return r.setDate(r.getDate()+t),r})}}let w=async e=>{e.preventDefault(),y(!0),await new Promise(e=>setTimeout(e,1e3)),n.post(route(`hemoglobin.store`),m,{onSuccess:()=>{x(!0),setTimeout(()=>x(!1),3e3),h({hemoglobin:``,tanggal_cek:new Date().toISOString().split(`T`)[0],catatan:``})},onFinish:()=>y(!1)})},T=(0,o.useCallback)((e,t)=>{_(n=>({...n,[e]:{...n[e],[t]:!n[e]?.[t]}}))},[]),E=async e=>{let t=Object.values(g[e]||{}).filter(Boolean).length;n.post(route(`tablet-routine.store`),{minggu:e,tahun:new Date().getFullYear(),total_minum:t,detail_harian:g[e]||{}},{onSuccess:()=>alert(`Progress minggu ${e} tersimpan! ${t}/7 hari minum tablet.`)})},D=(0,o.useMemo)(()=>{let e=parseFloat(m.hemoglobin);if(!e||e<=0)return null;let t=`normal`,n=l.success,r=`Kadar hemoglobin normal`,i=`✅`;return e<8?(t=`severe`,n=l.deep,r=`Anemia Berat - Segera ke dokter!`,i=`🚨`):e<11?(t=`moderate`,n=l.primary,r=`Anemia Ringan-Sedang - Perlu perhatian`,i=`⚠️`):e<12&&(t=`borderline`,n=l.accent,r=`Batas bawah normal - Pantau terus`,i=`💡`),{status:t,color:n,message:r,icon:i,hb:e}},[m.hemoglobin]),O=(0,o.useMemo)(()=>C(f),[f]);return(0,s.jsxs)(a,{auth:r,header:null,children:[(0,s.jsx)(t,{title:`Riwayat Tablet Tambah Darah`}),(0,s.jsx)(`style`,{children:`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

                .ttd-root {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    background: linear-gradient(135deg, #FFF5F5 0%, #FFF8F0 50%, #F3E5F5 100%);
                    min-height: 100vh;
                    padding-bottom: 4rem;
                }

                /* Hero Section */
                .ttd-hero {
                    background: linear-gradient(135deg, #E53935 0%, #C62828 50%, #8E24AA 100%);
                    position: relative;
                    overflow: hidden;
                }

                .ttd-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
                    background-size: 20px 20px;
                    opacity: 0.3;
                }

                /* Glass Card */
                .glass-card {
                    background: rgba(255,255,255,0.95);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255,255,255,0.8);
                    border-radius: 24px;
                    box-shadow: 0 8px 32px rgba(229,57,53,0.08);
                }

                /* Modern Input */
                .modern-input {
                    width: 100%;
                    padding: 1rem 1rem 1rem 3rem;
                    border: 2px solid #E0E0E0;
                    border-radius: 16px;
                    font-family: 'Inter', sans-serif;
                    font-size: 1rem;
                    background: white;
                    transition: all 0.3s ease;
                }
                .modern-input:focus {
                    outline: none;
                    border-color: #E53935;
                    box-shadow: 0 0 0 4px rgba(229,57,53,0.1);
                }

                /* Week Selector */
                .week-card {
                    background: white;
                    border-radius: 20px;
                    padding: 1.5rem;
                    border: 2px solid transparent;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .week-card:hover {
                    border-color: #FFCDD2;
                    transform: translateY(-2px);
                }
                .week-card.active {
                    border-color: #E53935;
                    background: linear-gradient(135deg, #FFEBEE 0%, white 100%);
                }

                /* Day Toggle */
                .day-toggle {
                    width: 56px;
                    height: 56px;
                    border-radius: 16px;
                    border: 2px solid #E0E0E0;
                    background: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                }
                .day-toggle:hover {
                    border-color: #E53935;
                    transform: scale(1.05);
                }
                .day-toggle.taken {
                    background: linear-gradient(135deg, #43A047 0%, #2E7D32 100%);
                    border-color: #43A047;
                    color: white;
                    box-shadow: 0 4px 16px rgba(67,160,71,0.3);
                }
                .day-toggle.taken::after {
                    content: '✓';
                    position: absolute;
                    top: 4px;
                    right: 4px;
                    font-size: 12px;
                    font-weight: bold;
                }

                /* Progress Ring */
                .progress-ring {
                    transform: rotate(-90deg);
                }
                .progress-ring-circle {
                    transition: stroke-dashoffset 0.5s ease;
                }

                /* Hemoglobin Gauge */
                .hb-gauge {
                    position: relative;
                    width: 200px;
                    height: 100px;
                    margin: 0 auto;
                }
                .hb-gauge-bg {
                    fill: none;
                    stroke: #E0E0E0;
                    stroke-width: 20;
                }
                .hb-gauge-fill {
                    fill: none;
                    stroke-width: 20;
                    stroke-linecap: round;
                    transition: stroke-dasharray 0.5s ease;
                }

                /* Animated Button */
                .btn-primary {
                    background: linear-gradient(135deg, #E53935 0%, #C62828 100%);
                    color: white;
                    border: none;
                    border-radius: 16px;
                    padding: 1rem 2rem;
                    font-weight: 700;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 16px rgba(229,57,53,0.3);
                    position: relative;
                    overflow: hidden;
                }
                .btn-primary:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(229,57,53,0.4);
                }
                .btn-primary:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                /* Success Animation */
                @keyframes successPop {
                    0% { transform: scale(0); opacity: 0; }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); opacity: 1; }
                }
                .success-badge {
                    animation: successPop 0.5s ease;
                }

                /* Pulse Animation */
                @keyframes pulse-ring {
                    0% { transform: scale(0.8); opacity: 0.5; }
                    100% { transform: scale(1.3); opacity: 0; }
                }
                .pulse-indicator {
                    position: relative;
                }
                .pulse-indicator::before {
                    content: '';
                    position: absolute;
                    inset: -4px;
                    border-radius: 50%;
                    background: #E53935;
                    animation: pulse-ring 2s ease-out infinite;
                }

                /* Table Styles */
                .modern-table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 0 8px;
                }
                .modern-table th {
                    text-align: left;
                    padding: 1rem;
                    font-weight: 600;
                    color: #666;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .modern-table td {
                    padding: 1rem;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                }
                .modern-table tr:hover td {
                    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
                    transform: translateY(-1px);
                    transition: all 0.2s ease;
                }

                /* Tab Pills */
                .tab-pill {
                    padding: 0.875rem 1.75rem;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    background: rgba(255,255,255,0.6);
                    color: #666;
                }
                .tab-pill.active {
                    background: linear-gradient(135deg, #E53935 0%, #C62828 100%);
                    color: white;
                    box-shadow: 0 4px 16px rgba(229,57,53,0.3);
                }

                /* Status Badge */
                .status-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    border-radius: 50px;
                    font-size: 0.875rem;
                    font-weight: 600;
                }

                /* Floating Card */
                .float-card {
                    animation: floatUp 0.6s ease;
                }
                @keyframes floatUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 768px) {
                    .day-toggle {
                        width: 44px;
                        height: 44px;
                        font-size: 0.75rem;
                    }
                }
            `}),(0,s.jsxs)(`div`,{className:`ttd-root`,children:[(0,s.jsxs)(`section`,{className:`ttd-hero py-16 md:py-24 relative`,children:[(0,s.jsx)(`div`,{className:`absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl`}),(0,s.jsx)(`div`,{className:`absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl`}),(0,s.jsxs)(`div`,{className:`relative z-10 max-w-6xl mx-auto px-4 text-center`,children:[(0,s.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6 pulse-indicator`,children:[(0,s.jsx)(`span`,{children:`💊`}),(0,s.jsx)(`span`,{children:`Program Tablet Tambah Darah`})]}),(0,s.jsxs)(`h1`,{className:`text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight`,children:[`Pantau Kesehatan `,(0,s.jsx)(`span`,{className:`text-yellow-300`,children:`Anemia`})]}),(0,s.jsx)(`p`,{className:`text-red-100 text-lg md:text-xl max-w-2xl mx-auto mb-8`,children:`Tracking rutin konsumsi tablet besi dan monitoring kadar hemoglobin untuk kesehatan optimal.`}),(0,s.jsx)(`div`,{className:`flex flex-wrap justify-center gap-4 mt-8`,children:[{value:`90%`,label:`Efektivitas TTD`,icon:`📈`},{value:`1x/Hari`,label:`Dosis Rutin`,icon:`⏰`},{value:`12 mg`,label:`Zat Besi`,icon:`⚡`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`glass-card px-6 py-4 flex items-center gap-3`,children:[(0,s.jsx)(`span`,{className:`text-2xl`,children:e.icon}),(0,s.jsxs)(`div`,{className:`text-left`,children:[(0,s.jsx)(`div`,{className:`font-bold text-gray-900 text-lg`,children:e.value}),(0,s.jsx)(`div`,{className:`text-gray-500 text-sm`,children:e.label})]})]},t))})]}),(0,s.jsx)(`div`,{className:`absolute bottom-0 left-0 w-full`,children:(0,s.jsx)(`svg`,{viewBox:`0 0 1440 60`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,s.jsx)(`path`,{d:`M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 37 768 43 864 45C960 47 1056 45 1152 41.7C1248 38 1344 33 1392 30.3L1440 28V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z`,fill:`#FFF5F5`})})})]}),(0,s.jsx)(`div`,{className:`max-w-6xl mx-auto px-4 -mt-8 relative z-20`,children:(0,s.jsxs)(`div`,{className:`glass-card p-2 inline-flex gap-2`,children:[(0,s.jsx)(`button`,{className:`tab-pill ${u===`tracker`?`active`:``}`,onClick:()=>d(`tracker`),children:`📅 Tracking Mingguan`}),(0,s.jsx)(`button`,{className:`tab-pill ${u===`hemoglobin`?`active`:``}`,onClick:()=>d(`hemoglobin`),children:`🩸 Cek Hemoglobin`}),(0,s.jsx)(`button`,{className:`tab-pill ${u===`history`?`active`:``}`,onClick:()=>d(`history`),children:`📊 Riwayat Lengkap`})]})}),(0,s.jsxs)(`div`,{className:`max-w-6xl mx-auto px-4 mt-8`,children:[u===`tracker`&&(0,s.jsxs)(`div`,{className:`float-card space-y-6`,children:[(0,s.jsxs)(`div`,{className:`glass-card p-6`,children:[(0,s.jsxs)(`div`,{className:`flex items-center justify-between mb-6`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`h2`,{className:`text-2xl font-bold text-gray-900`,children:[`Minggu ke-`,f]}),(0,s.jsxs)(`p`,{className:`text-gray-500 mt-1`,children:[O.start.toLocaleDateString(`id-ID`,{day:`numeric`,month:`long`}),` - `,O.end.toLocaleDateString(`id-ID`,{day:`numeric`,month:`long`,year:`numeric`})]})]}),(0,s.jsxs)(`div`,{className:`flex gap-2`,children:[(0,s.jsx)(`button`,{onClick:()=>p(e=>e-1),className:`p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors`,children:`←`}),(0,s.jsx)(`button`,{onClick:()=>p(S()),className:`px-4 py-3 rounded-xl bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition-colors`,children:`Minggu Ini`}),(0,s.jsx)(`button`,{onClick:()=>p(e=>e+1),className:`p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors`,children:`→`})]})]}),(0,s.jsx)(`div`,{className:`grid grid-cols-7 gap-3 md:gap-4`,children:O.days.map((e,t)=>{let n=[`Min`,`Sen`,`Sel`,`Rab`,`Kam`,`Jum`,`Sab`],r=g[f]?.[t],i=new Date().toDateString()===e.toDateString();return(0,s.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,s.jsx)(`span`,{className:`text-xs font-semibold ${i?`text-red-600`:`text-gray-500`}`,children:n[e.getDay()]}),(0,s.jsxs)(`button`,{onClick:()=>T(f,t),className:`day-toggle ${r?`taken`:``} ${i?`ring-2 ring-red-500 ring-offset-2`:``}`,children:[(0,s.jsx)(`span`,{className:`text-lg font-bold`,children:e.getDate()}),(0,s.jsx)(`span`,{className:`text-[10px] opacity-80`,children:r?`Sudah`:`Belum`})]})]},t)})}),(0,s.jsxs)(`div`,{className:`mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-100`,children:[(0,s.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h3`,{className:`font-bold text-gray-900 text-lg`,children:`Progress Minggu Ini`}),(0,s.jsxs)(`p`,{className:`text-gray-600 text-sm mt-1`,children:[Object.values(g[f]||{}).filter(Boolean).length,` dari 7 hari sudah minum tablet`]})]}),(0,s.jsxs)(`div`,{className:`relative w-24 h-24`,children:[(0,s.jsxs)(`svg`,{className:`progress-ring w-24 h-24`,viewBox:`0 0 100 100`,children:[(0,s.jsx)(`circle`,{cx:`50`,cy:`50`,r:`45`,fill:`none`,stroke:`#E0E0E0`,strokeWidth:`10`}),(0,s.jsx)(`circle`,{cx:`50`,cy:`50`,r:`45`,fill:`none`,stroke:`#E53935`,strokeWidth:`10`,strokeDasharray:`${2*Math.PI*45}`,strokeDashoffset:`${2*Math.PI*45*(1-Object.values(g[f]||{}).filter(Boolean).length/7)}`,className:`progress-ring-circle`,strokeLinecap:`round`})]}),(0,s.jsxs)(`div`,{className:`absolute inset-0 flex items-center justify-center font-bold text-xl text-gray-900`,children:[Math.round(Object.values(g[f]||{}).filter(Boolean).length/7*100),`%`]})]})]}),(0,s.jsx)(`button`,{onClick:()=>E(f),className:`btn-primary w-full mt-4 flex items-center justify-center gap-2`,children:`💾 Simpan Progress Minggu Ini`})]})]}),(0,s.jsxs)(`div`,{className:`glass-card p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100`,children:[(0,s.jsxs)(`h3`,{className:`font-bold text-gray-900 mb-4 flex items-center gap-2`,children:[(0,s.jsx)(`span`,{children:`💡`}),` Tips Konsumsi Tablet`]}),(0,s.jsx)(`div`,{className:`grid md:grid-cols-2 gap-4`,children:[{icon:`🍊`,title:`Minum dengan Vitamin C`,desc:`Jus jeruk atau tomat membantu absorbsi zat besi`},{icon:`☕`,title:`Hindari Kopi/Teh`,desc:`Jangan minum 1 jam sebelum/sesudah tablet`},{icon:`🥛`,title:`Jauhi Susu`,desc:`Kalsium menghambat penyerapan zat besi`},{icon:`⏰`,title:`Waktu Terbaik`,desc:`Minum saat perut kosong di pagi hari`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`flex items-start gap-3 p-3 bg-white/70 rounded-xl`,children:[(0,s.jsx)(`span`,{className:`text-2xl`,children:e.icon}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h4`,{className:`font-semibold text-gray-900 text-sm`,children:e.title}),(0,s.jsx)(`p`,{className:`text-gray-600 text-xs mt-0.5`,children:e.desc})]})]},t))})]})]}),u===`hemoglobin`&&(0,s.jsx)(`div`,{className:`float-card max-w-2xl mx-auto`,children:(0,s.jsxs)(`div`,{className:`glass-card p-8`,children:[(0,s.jsxs)(`div`,{className:`text-center mb-8`,children:[(0,s.jsx)(`div`,{className:`w-20 h-20 mx-auto bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center text-4xl mb-4`,children:`🩸`}),(0,s.jsx)(`h2`,{className:`text-2xl font-bold text-gray-900`,children:`Input Data Hemoglobin`}),(0,s.jsx)(`p`,{className:`text-gray-500 mt-2`,children:`Catat hasil pemeriksaan darah terbaru Anda`})]}),(0,s.jsxs)(`form`,{onSubmit:w,className:`space-y-6`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`label`,{className:`block text-sm font-semibold text-gray-700 mb-2`,children:`Kadar Hemoglobin (g/dL)`}),(0,s.jsxs)(`div`,{className:`relative`,children:[(0,s.jsx)(`span`,{className:`absolute left-4 top-1/2 -translate-y-1/2 text-2xl`,children:`🧪`}),(0,s.jsx)(`input`,{type:`number`,step:`0.1`,value:m.hemoglobin,onChange:e=>h(t=>({...t,hemoglobin:e.target.value})),className:`modern-input text-center text-2xl font-bold`,placeholder:`12.0`,required:!0})]}),D&&(0,s.jsxs)(`div`,{className:`mt-4 p-4 rounded-xl border-2 transition-all`,style:{backgroundColor:`${D.color}15`,borderColor:D.color},children:[(0,s.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,s.jsx)(`span`,{className:`text-3xl`,children:D.icon}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{className:`font-bold text-lg`,style:{color:D.color},children:D.message}),(0,s.jsxs)(`div`,{className:`text-gray-600 text-sm`,children:[`Kadar HB: `,(0,s.jsxs)(`strong`,{children:[D.hb,` g/dL`]})]})]})]}),(0,s.jsxs)(`div`,{className:`hb-gauge mt-4`,children:[(0,s.jsxs)(`svg`,{viewBox:`0 0 200 100`,className:`w-full`,children:[(0,s.jsx)(`path`,{d:`M 20 100 A 80 80 0 0 1 180 100`,className:`hb-gauge-bg`}),(0,s.jsx)(`path`,{d:`M 20 100 A 80 80 0 0 1 180 100`,className:`hb-gauge-fill`,stroke:D.color,strokeDasharray:`${Math.min(D.hb/16*251,251)} 251`}),(0,s.jsx)(`text`,{x:`20`,y:`115`,fontSize:`10`,fill:`#999`,children:`0`}),(0,s.jsx)(`text`,{x:`95`,y:`20`,fontSize:`10`,fill:`#999`,children:`8`}),(0,s.jsx)(`text`,{x:`180`,y:`115`,fontSize:`10`,fill:`#999`,children:`16`})]}),(0,s.jsxs)(`div`,{className:`absolute bottom-0 left-1/2 -translate-x-1/2 text-center`,children:[(0,s.jsx)(`div`,{className:`text-2xl font-bold`,style:{color:D.color},children:D.hb}),(0,s.jsx)(`div`,{className:`text-xs text-gray-500`,children:`g/dL`})]})]})]})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`label`,{className:`block text-sm font-semibold text-gray-700 mb-2`,children:`Tanggal Pemeriksaan`}),(0,s.jsxs)(`div`,{className:`relative`,children:[(0,s.jsx)(`span`,{className:`absolute left-4 top-1/2 -translate-y-1/2 text-xl`,children:`📅`}),(0,s.jsx)(`input`,{type:`date`,value:m.tanggal_cek,onChange:e=>h(t=>({...t,tanggal_cek:e.target.value})),className:`modern-input`,required:!0})]})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`label`,{className:`block text-sm font-semibold text-gray-700 mb-2`,children:`Catatan (Opsional)`}),(0,s.jsxs)(`div`,{className:`relative`,children:[(0,s.jsx)(`span`,{className:`absolute left-4 top-4 text-xl`,children:`📝`}),(0,s.jsx)(`textarea`,{value:m.catatan,onChange:e=>h(t=>({...t,catatan:e.target.value})),className:`modern-input min-h-[100px] resize-none`,placeholder:`Contoh: Minum tablet rutin, makan daging merah...`,rows:3})]})]}),(0,s.jsx)(`button`,{type:`submit`,disabled:v,className:`btn-primary w-full flex items-center justify-center gap-2`,children:v?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(`svg`,{className:`animate-spin h-5 w-5`,viewBox:`0 0 24 24`,children:[(0,s.jsx)(`circle`,{className:`opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`,fill:`none`}),(0,s.jsx)(`path`,{className:`opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z`})]}),`Menyimpan...`]}):(0,s.jsx)(s.Fragment,{children:`💾 Simpan Data Hemoglobin`})}),b&&(0,s.jsxs)(`div`,{className:`success-badge bg-green-100 text-green-700 p-4 rounded-xl text-center font-semibold flex items-center justify-center gap-2`,children:[(0,s.jsx)(`span`,{children:`✅`}),`Data berhasil disimpan!`]})]}),(0,s.jsxs)(`div`,{className:`mt-8 p-4 bg-gray-50 rounded-xl`,children:[(0,s.jsx)(`h4`,{className:`font-bold text-gray-900 mb-3 text-sm`,children:`📚 Standar Hemoglobin (WHO)`}),(0,s.jsxs)(`div`,{className:`grid grid-cols-2 gap-2 text-sm`,children:[(0,s.jsxs)(`div`,{className:`flex justify-between p-2 bg-white rounded-lg`,children:[(0,s.jsx)(`span`,{className:`text-gray-600`,children:`Anemia Berat`}),(0,s.jsx)(`span`,{className:`font-bold text-red-600`,children:`< 8 g/dL`})]}),(0,s.jsxs)(`div`,{className:`flex justify-between p-2 bg-white rounded-lg`,children:[(0,s.jsx)(`span`,{className:`text-gray-600`,children:`Anemia Sedang`}),(0,s.jsx)(`span`,{className:`font-bold text-orange-500`,children:`8-10.9 g/dL`})]}),(0,s.jsxs)(`div`,{className:`flex justify-between p-2 bg-white rounded-lg`,children:[(0,s.jsx)(`span`,{className:`text-gray-600`,children:`Anemia Ringan`}),(0,s.jsx)(`span`,{className:`font-bold text-yellow-600`,children:`11-11.9 g/dL`})]}),(0,s.jsxs)(`div`,{className:`flex justify-between p-2 bg-white rounded-lg`,children:[(0,s.jsx)(`span`,{className:`text-gray-600`,children:`Normal`}),(0,s.jsx)(`span`,{className:`font-bold text-green-600`,children:`≥ 12 g/dL`})]})]})]})]})}),u===`history`&&(0,s.jsxs)(`div`,{className:`float-card space-y-6`,children:[(0,s.jsxs)(`div`,{className:`glass-card p-6`,children:[(0,s.jsxs)(`div`,{className:`flex items-center justify-between mb-6`,children:[(0,s.jsx)(`h2`,{className:`text-2xl font-bold text-gray-900`,children:`📊 Riwayat Lengkap`}),(0,s.jsxs)(`div`,{className:`flex gap-2`,children:[(0,s.jsxs)(`select`,{className:`px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm`,children:[(0,s.jsx)(`option`,{children:`Semua Tahun`}),(0,s.jsx)(`option`,{children:`2026`}),(0,s.jsx)(`option`,{children:`2025`})]}),(0,s.jsx)(`button`,{className:`px-4 py-2 bg-red-50 text-red-600 rounded-xl font-semibold text-sm hover:bg-red-100 transition-colors`,children:`📥 Export`})]})]}),(0,s.jsxs)(`div`,{className:`mb-8`,children:[(0,s.jsxs)(`h3`,{className:`font-bold text-gray-800 mb-4 flex items-center gap-2`,children:[(0,s.jsx)(`span`,{className:`w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600`,children:`💊`}),`Riwayat Konsumsi Tablet`]}),(0,s.jsxs)(`table`,{className:`modern-table`,children:[(0,s.jsx)(`thead`,{children:(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`th`,{children:`Minggu`}),(0,s.jsx)(`th`,{children:`Periode`}),(0,s.jsx)(`th`,{children:`Frekuensi`}),(0,s.jsx)(`th`,{children:`Status`}),(0,s.jsx)(`th`,{children:`Aksi`})]})}),(0,s.jsx)(`tbody`,{children:[{week:10,period:`3-9 Maret 2026`,taken:7,total:7,status:`perfect`},{week:9,period:`24 Feb - 2 Mar 2026`,taken:5,total:7,status:`good`},{week:8,period:`17-23 Feb 2026`,taken:3,total:7,status:`warning`}].map((e,t)=>(0,s.jsxs)(`tr`,{children:[(0,s.jsxs)(`td`,{className:`font-semibold`,children:[`Minggu `,e.week]}),(0,s.jsx)(`td`,{className:`text-gray-600 text-sm`,children:e.period}),(0,s.jsx)(`td`,{children:(0,s.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,s.jsx)(`div`,{className:`w-16 h-2 bg-gray-200 rounded-full overflow-hidden`,children:(0,s.jsx)(`div`,{className:`h-full rounded-full ${e.taken===7?`bg-green-500`:e.taken>=5?`bg-yellow-500`:`bg-red-500`}`,style:{width:`${e.taken/7*100}%`}})}),(0,s.jsxs)(`span`,{className:`text-sm font-medium`,children:[e.taken,`/7`]})]})}),(0,s.jsx)(`td`,{children:(0,s.jsx)(`span`,{className:`status-badge ${e.status===`perfect`?`bg-green-100 text-green-700`:e.status===`good`?`bg-yellow-100 text-yellow-700`:`bg-red-100 text-red-700`}`,children:e.status===`perfect`?`✅ Sempurna`:e.status===`good`?`👍 Baik`:`⚠️ Perlu Perhatian`})}),(0,s.jsx)(`td`,{children:(0,s.jsx)(`button`,{className:`text-red-600 hover:text-red-700 font-medium text-sm`,children:`Detail →`})})]},t))})]})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`h3`,{className:`font-bold text-gray-800 mb-4 flex items-center gap-2`,children:[(0,s.jsx)(`span`,{className:`w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600`,children:`🩸`}),`Riwayat Pemeriksaan Hemoglobin`]}),(0,s.jsxs)(`table`,{className:`modern-table`,children:[(0,s.jsx)(`thead`,{children:(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`th`,{children:`Tanggal`}),(0,s.jsx)(`th`,{children:`Nilai (g/dL)`}),(0,s.jsx)(`th`,{children:`Status`}),(0,s.jsx)(`th`,{children:`Tren`}),(0,s.jsx)(`th`,{children:`Catatan`})]})}),(0,s.jsx)(`tbody`,{children:[{date:`10 Mar 2026`,value:12.5,prev:11.8,note:`Setelah minum tablet 3 bulan`},{date:`15 Jan 2026`,value:11.8,prev:10.5,note:`Mulai program TTD`},{date:`10 Des 2025`,value:10.5,prev:null,note:`Pemeriksaan awal`}].map((e,t)=>(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{className:`font-medium`,children:e.date}),(0,s.jsx)(`td`,{children:(0,s.jsx)(`span`,{className:`text-lg font-bold ${e.value>=12?`text-green-600`:e.value>=11?`text-yellow-600`:`text-red-600`}`,children:e.value})}),(0,s.jsx)(`td`,{children:(0,s.jsx)(`span`,{className:`px-3 py-1 rounded-full text-xs font-bold ${e.value>=12?`bg-green-100 text-green-700`:e.value>=11?`bg-yellow-100 text-yellow-700`:`bg-red-100 text-red-700`}`,children:e.value>=12?`Normal`:e.value>=11?`Borderline`:`Anemia`})}),(0,s.jsx)(`td`,{children:e.prev?(0,s.jsxs)(`span`,{className:`flex items-center gap-1 text-sm ${e.value>e.prev?`text-green-600`:`text-red-600`}`,children:[e.value>e.prev?`↑`:`↓`,Math.abs(e.value-e.prev).toFixed(1)]}):(0,s.jsx)(`span`,{className:`text-gray-400 text-sm`,children:`-`})}),(0,s.jsx)(`td`,{className:`text-gray-600 text-sm max-w-xs truncate`,children:e.note})]},t))})]})]})]}),(0,s.jsxs)(`div`,{className:`grid md:grid-cols-3 gap-4`,children:[(0,s.jsxs)(`div`,{className:`glass-card p-6 text-center`,children:[(0,s.jsx)(`div`,{className:`text-4xl mb-2`,children:`📈`}),(0,s.jsx)(`div`,{className:`text-3xl font-bold text-gray-900`,children:`85%`}),(0,s.jsx)(`div`,{className:`text-gray-500 text-sm`,children:`Keteraturan Minum Tablet`})]}),(0,s.jsxs)(`div`,{className:`glass-card p-6 text-center`,children:[(0,s.jsx)(`div`,{className:`text-4xl mb-2`,children:`🎯`}),(0,s.jsx)(`div`,{className:`text-3xl font-bold text-green-600`,children:`+2.0`}),(0,s.jsx)(`div`,{className:`text-gray-500 text-sm`,children:`Peningkatan HB (g/dL)`})]}),(0,s.jsxs)(`div`,{className:`glass-card p-6 text-center`,children:[(0,s.jsx)(`div`,{className:`text-4xl mb-2`,children:`🏆`}),(0,s.jsx)(`div`,{className:`text-3xl font-bold text-purple-600`,children:`12`}),(0,s.jsx)(`div`,{className:`text-gray-500 text-sm`,children:`Minggu Berturut-turut`})]})]})]})]})]})]})}export{c as default};