import{c as e,n as t,o as n,t as r,u as i}from"./app-DLhu_Xmb.js";import{t as a}from"./AuthenticatedLayout-Cj2FxBrk.js";var o=i(e(),1),s=r();function c(e){let{auth:r,children:i}=e,c={primary:`#3FA7D6`,light:`#7EC8E3`,deep:`#2F669F`,forest:`#6FBF4A`,lime:`#A8D86D`,orange:`#F29C38`,peach:`#E6A57E`,cream:`#FFF8F0`,sky:`#E0F4FF`},[l,u]=(0,o.useState)({berat_badan:``,tinggi_badan:``,lingkar_lengan:``,hemoglobin:``,umur_bulan:``,tanggal_pemeriksaan:new Date().toISOString().split(`T`)[0]}),[d,f]=(0,o.useState)({}),[p,m]=(0,o.useState)(!1),[h,g]=(0,o.useState)(null),[_,v]=(0,o.useState)(!1),[y,b]=(0,o.useState)(`form`),x=(0,o.useRef)(null);(0,o.useEffect)(()=>{_&&x.current&&x.current.scrollIntoView({behavior:`smooth`,block:`start`})},[_]);let S=(0,o.useMemo)(()=>{let e=parseFloat(l.berat_badan),t=parseFloat(l.tinggi_badan)/100;return e>0&&t>0?(e/(t*t)).toFixed(2):0},[l.berat_badan,l.tinggi_badan]),C=(0,o.useCallback)(e=>{let{name:t,value:n}=e.target;u(e=>({...e,[t]:n})),d[t]&&f(e=>({...e,[t]:null}))},[d]),w=(0,o.useCallback)(()=>{let e={},t=parseInt(l.umur_bulan);return(!l.umur_bulan||t<0||t>60)&&(e.umur_bulan=`Umur harus 0–60 bulan`),(!l.berat_badan||l.berat_badan<=0)&&(e.berat_badan=`Berat badan tidak valid`),(!l.tinggi_badan||l.tinggi_badan<=0)&&(e.tinggi_badan=`Tinggi badan tidak valid`),(!l.lingkar_lengan||l.lingkar_lengan<=0)&&(e.lingkar_lengan=`LiLA tidak valid`),(!l.hemoglobin||l.hemoglobin<=0)&&(e.hemoglobin=`Hemoglobin tidak valid`),f(e),Object.keys(e).length===0},[l]),T=(0,o.useCallback)(()=>{let e=parseFloat(l.tinggi_badan);parseFloat(l.berat_badan);let t=parseFloat(l.lingkar_lengan),n=parseInt(l.umur_bulan),r=`normal`,i=`normal`,a=`normal`,o=`normal`,s=[];if(n>=0&&n<=60){let t={0:49.9,1:54.7,2:58.4,3:61.4,4:63.9,5:65.9,6:67.6,9:72,12:76,15:79.1,18:82.3,21:85.1,24:87.8,30:92.9,36:96.1,42:99.9,48:103.3,54:106.7,60:110},i=Object.keys(t).map(Number).sort((e,t)=>e-t),a=i[0];for(let e of i)Math.abs(e-n)<Math.abs(a-n)&&(a=e);let s=e/(t[a]||100)*100;s<85?(r=`stunting`,o=`severe`):s<90?(r=`stunting`,o=`moderate`):s<95&&(r=`risk`)}S<14?(i=`wasting`,o=`severe`):S<16&&(i=`wasting`),t<11.5?a=`severe`:t<12.5&&(a=`moderate`),r!==`normal`&&s.push({icon:`📏`,title:`Intervensi Stunting`,desc:`Konsultasi ke dokter anak untuk evaluasi pertumbuhan. Tingkatkan asupan protein hewani, kalsium, dan vitamin D.`,priority:`high`}),i!==`normal`&&s.push({icon:`⚖️`,title:`Gizi Kurang Akut`,desc:`Perlu penanganan gizi intensif. Berikan makanan tinggi kalori dan protein dengan frekuensi lebih sering.`,priority:`high`}),a!==`normal`&&s.push({icon:`💪`,title:`Status Gizi Buruk`,desc:`LiLA menunjukkan massa otot rendah. Tingkatkan asupan protein dan lakukan aktivitas fisik sesuai kemampuan.`,priority:`high`}),s.length===0&&s.push({icon:`✅`,title:`Pertahankan Gizi Baik`,desc:`Anak dalam kondisi gizi baik. Lanjutkan pola makan seimbang dengan karbohidrat, protein, lemak, vitamin dan mineral.`,priority:`normal`}),s.push({icon:`🥗`,title:`MPASI Bergizi`,desc:`Berikan makanan pendamping ASI yang kaya zat besi, protein, dan mikronutrien sesuai usia.`,priority:`normal`});let c=[];r!==`normal`&&c.push(`stunting`),i!==`normal`&&c.push(`gizi kurang`),a!==`normal`&&c.push(`gizi buruk`);let u=c.length===0?`Anak dalam kondisi gizi baik`:c.length===1?`Terdeteksi ${c[0]}`:`Terdeteksi multiple masalah gizi: ${c.join(`, `)}`;return{stuntingStatus:r,wastingStatus:i,lilaStatus:a,bmi:S,severity:o,recommendations:s,summary:u}},[l,S]),E=async e=>{e.preventDefault(),w()&&(m(!0),await new Promise(e=>setTimeout(e,1400)),g(T()),v(!0),b(`result`),m(!1))},D=(0,o.useCallback)(()=>{u({berat_badan:``,tinggi_badan:``,lingkar_lengan:``,hemoglobin:``,umur_bulan:``,tanggal_pemeriksaan:new Date().toISOString().split(`T`)[0]}),g(null),v(!1),b(`form`),f({})},[]),O=(0,o.useCallback)(()=>{n.post(route(`stunting.store`),{...l,imt:S,hasil:h},{onSuccess:()=>alert(`Data berhasil disimpan ke riwayat!`)})},[l,S,h]);(0,o.useCallback)(e=>({normal:c.forest,risk:c.orange,stunting:`#EF4444`,wasting:`#EF4444`,severe:`#EF4444`,mild:c.orange,moderate:c.orange})[e]??`#9CA3AF`,[]);let k=(0,o.useCallback)(e=>({normal:`bg-green-500`,risk:`bg-yellow-500`,stunting:`bg-red-500`,wasting:`bg-red-500`,severe:`bg-red-500`,mild:`bg-orange-400`,moderate:`bg-orange-400`})[e]??`bg-gray-400`,[]),A=(0,o.useCallback)((e,t)=>({stunting:{normal:`Normal`,risk:`Berisiko`,stunting:`Stunting`},wasting:{normal:`Normal`,wasting:`Gizi Kurang`},lila:{normal:`Normal`,moderate:`Gizi Kurang`,severe:`Gizi Buruk`}})[e]?.[t]||t,[]),j=h&&h.stuntingStatus===`normal`&&h.wastingStatus===`normal`&&h.lilaStatus===`normal`;return(0,s.jsxs)(a,{auth:r,header:null,children:[(0,s.jsx)(t,{title:`Deteksi Stunting`}),(0,s.jsx)(`style`,{children:`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700&display=swap');

                .sd-root {
                    font-family: 'Sora', sans-serif;
                    background: linear-gradient(180deg, #E0F4FF 0%, #F0FDF4 50%, #FFFBF5 100%);
                    min-height: 100vh;
                    padding-bottom: 5rem;
                }

                /* Hero */
                .sd-hero {
                    background: linear-gradient(135deg, #3FA7D6 0%, #2F669F 55%, #6FBF4A 100%);
                    position: relative;
                    overflow: hidden;
                }

                .sd-wave { position: absolute; bottom: 0; left: 0; width: 100%; line-height: 0; pointer-events: none; }

                /* Glass card */
                .glass-card {
                    background: rgba(255,255,255,0.92);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255,255,255,0.6);
                    border-radius: 2rem;
                    box-shadow: 0 8px 40px rgba(63,167,214,0.10);
                }

                /* Input */
                .sd-input-wrap { position: relative; }
                .sd-input {
                    width: 100%;
                    padding: 0.875rem 1rem 0.875rem 3rem;
                    border: 2px solid #E5E7EB;
                    border-radius: 1rem;
                    font-family: 'Sora', sans-serif;
                    font-size: 0.95rem;
                    background: white;
                    transition: border-color 0.25s, box-shadow 0.25s;
                    color: #1F2937;
                }
                .sd-input:focus { outline: none; border-color: #3FA7D6; box-shadow: 0 0 0 4px rgba(63,167,214,0.15); }
                .sd-input.err   { border-color: #EF4444; }
                .sd-icon {
                    position: absolute; left: 0.875rem; top: 50%;
                    transform: translateY(-50%); font-size: 1.2rem;
                    pointer-events: none; opacity: 0.55; transition: opacity 0.2s;
                }
                .sd-input-wrap:focus-within .sd-icon { opacity: 1; }

                /* Submit button */
                .sd-btn-primary {
                    flex: 1;
                    padding: 1rem 2rem;
                    background: linear-gradient(135deg, #3FA7D6 0%, #2F669F 100%);
                    color: white; border: none; border-radius: 1rem;
                    font-family: 'Sora', sans-serif;
                    font-size: 1.05rem; font-weight: 700; cursor: pointer;
                    transition: transform 0.25s, box-shadow 0.25s;
                    box-shadow: 0 8px 24px rgba(63,167,214,0.30);
                }
                .sd-btn-primary:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(63,167,214,0.38); }
                .sd-btn-primary:disabled { opacity: 0.65; cursor: not-allowed; }

                /* Tab pill */
                .sd-tab {
                    padding: 0.65rem 1.4rem; border-radius: 9999px;
                    font-weight: 600; font-family: 'Sora', sans-serif;
                    border: none; cursor: pointer; transition: all 0.25s ease;
                    font-size: 0.9rem;
                }
                .sd-tab.active { background: linear-gradient(135deg,#3FA7D6,#2F669F); color: white; box-shadow: 0 6px 18px rgba(63,167,214,0.30); }
                .sd-tab:not(.active) { background: #F3F4F6; color: #6B7280; }
                .sd-tab:not(.active):hover { background: #E5E7EB; color: #374151; }

                /* Metric card */
                .metric-card {
                    background: linear-gradient(135deg, #F9FBFF 0%, #FFFFFF 100%);
                    border: 1px solid #E5E7EB; border-radius: 1.5rem;
                    padding: 1.5rem; transition: transform 0.3s, box-shadow 0.3s;
                }
                .metric-card:hover { transform: translateY(-4px); box-shadow: 0 14px 28px rgba(63,167,214,0.12); }

                /* Recommendation card */
                .rec-card {
                    background: white; border-radius: 1.25rem;
                    padding: 1.25rem 1.5rem; border-left: 4px solid;
                    transition: transform 0.25s, box-shadow 0.25s;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                }
                .rec-card:hover { transform: translateX(4px); box-shadow: 0 8px 20px rgba(0,0,0,0.08); }
                .rec-high   { border-left-color: #EF4444; }
                .rec-normal { border-left-color: #6FBF4A; }

                /* Result card animate */
                @keyframes slideUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
                .result-card { animation: slideUp 0.5s cubic-bezier(0.34,1.2,0.64,1) both; }

                /* Live preview box */
                .live-preview {
                    background: linear-gradient(135deg, #E0F4FF 0%, #F0FDF4 100%);
                    border: 1.5px solid #7EC8E3;
                    border-radius: 1.25rem; padding: 1rem 1.5rem;
                }

                /* Error / hint text */
                .err-text  { color:#EF4444; font-size:0.75rem; margin-top:0.25rem; display:flex; align-items:center; gap:0.25rem; }
                .hint-text { color:#6B7280; font-size:0.75rem; margin-top:0.25rem; display:block; }

                /* Float animation */
                @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
                .float { animation: float 4s ease-in-out infinite; }

                /* Progress bar */
                @keyframes barGrow { from{width:0} to{width:var(--w)} }
                .bar-fill { animation: barGrow 1s cubic-bezier(0.34,1,0.64,1) 0.3s both; }

                /* Input grid layout */
                .input-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.25rem;
                }
                @media (max-width: 640px) {
                    .input-grid { grid-template-columns: 1fr; }
                    .glass-card { border-radius: 1.5rem; }
                }
            `}),(0,s.jsxs)(`div`,{className:`sd-root`,children:[(0,s.jsxs)(`section`,{className:`sd-hero py-14 md:py-20`,children:[(0,s.jsx)(`div`,{className:`absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none`}),(0,s.jsx)(`div`,{className:`absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none`}),(0,s.jsx)(`div`,{className:`absolute top-1/2 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none`}),(0,s.jsxs)(`div`,{className:`relative z-10 max-w-4xl mx-auto px-4 text-center`,children:[(0,s.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-5`,children:[(0,s.jsx)(`span`,{className:`float`,children:`🔬`}),(0,s.jsx)(`span`,{children:`Berdasarkan Standar WHO & Kemenkes`})]}),(0,s.jsxs)(`h1`,{className:`text-3xl md:text-5xl font-bold text-white mb-4`,style:{fontFamily:`Poppins, sans-serif`},children:[`Deteksi `,(0,s.jsx)(`span`,{className:`text-yellow-300`,children:`Stunting`}),` Dini`]}),(0,s.jsx)(`p`,{className:`text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed`,children:`Pemeriksaan komprehensif untuk deteksi stunting dan status gizi — cepat, akurat, terpercaya.`}),(0,s.jsx)(`div`,{className:`flex flex-wrap justify-center gap-3 mt-8`,children:[{label:`Standar WHO`,icon:`🌐`},{label:`Kemenkes RI`,icon:`🏥`},{label:`Analisis Otomatis`,icon:`⚡`},{label:`Gratis`,icon:`✅`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm font-medium`,children:[(0,s.jsx)(`span`,{children:e.icon}),(0,s.jsx)(`span`,{children:e.label})]},t))})]}),(0,s.jsx)(`div`,{className:`sd-wave`,children:(0,s.jsx)(`svg`,{viewBox:`0 0 1440 52`,xmlns:`http://www.w3.org/2000/svg`,preserveAspectRatio:`none`,style:{display:`block`,width:`100%`,height:`52px`},children:(0,s.jsx)(`path`,{d:`M0,26 C360,52 1080,0 1440,26 L1440,52 L0,52 Z`,fill:`white`})})})]}),(0,s.jsxs)(`div`,{className:`max-w-5xl mx-auto px-4 -mt-2 relative z-10`,children:[(0,s.jsxs)(`div`,{className:`flex justify-center gap-2 mb-8`,children:[(0,s.jsx)(`button`,{className:`sd-tab ${y===`form`?`active`:``}`,onClick:()=>b(`form`),children:`📝 Form Pemeriksaan`}),_&&(0,s.jsx)(`button`,{className:`sd-tab ${y===`result`?`active`:``}`,onClick:()=>b(`result`),children:`📊 Hasil Analisis`})]}),y===`form`&&(0,s.jsxs)(`div`,{className:`glass-card p-6 md:p-10`,children:[(0,s.jsxs)(`div`,{className:`flex items-center gap-3 mb-8`,children:[(0,s.jsx)(`div`,{className:`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl`,style:{background:`linear-gradient(135deg, ${c.primary}20, ${c.forest}20)`},children:`📋`}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h2`,{className:`text-xl font-bold text-gray-900`,style:{fontFamily:`Poppins`},children:`Data Pemeriksaan`}),(0,s.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Isi semua kolom dengan data yang akurat`})]})]}),(0,s.jsxs)(`form`,{onSubmit:E,noValidate:!0,children:[(0,s.jsxs)(`div`,{className:`input-grid`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`label`,{className:`block text-sm font-semibold text-gray-700 mb-1.5`,children:`Umur Anak (bulan)`}),(0,s.jsxs)(`div`,{className:`sd-input-wrap`,children:[(0,s.jsx)(`span`,{className:`sd-icon`,children:`🎂`}),(0,s.jsx)(`input`,{type:`number`,name:`umur_bulan`,value:l.umur_bulan,onChange:C,className:`sd-input ${d.umur_bulan?`err`:``}`,placeholder:`Contoh: 24`,min:`0`,max:`60`})]}),d.umur_bulan&&(0,s.jsxs)(`span`,{className:`err-text`,children:[`⚠️ `,d.umur_bulan]}),(0,s.jsx)(`span`,{className:`hint-text`,children:`Rentang: 0 – 60 bulan (5 tahun)`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`label`,{className:`block text-sm font-semibold text-gray-700 mb-1.5`,children:`Berat Badan (kg)`}),(0,s.jsxs)(`div`,{className:`sd-input-wrap`,children:[(0,s.jsx)(`span`,{className:`sd-icon`,children:`⚖️`}),(0,s.jsx)(`input`,{type:`number`,step:`0.1`,name:`berat_badan`,value:l.berat_badan,onChange:C,className:`sd-input ${d.berat_badan?`err`:``}`,placeholder:`Contoh: 12.5`})]}),d.berat_badan&&(0,s.jsxs)(`span`,{className:`err-text`,children:[`⚠️ `,d.berat_badan]})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`label`,{className:`block text-sm font-semibold text-gray-700 mb-1.5`,children:`Tinggi Badan (cm)`}),(0,s.jsxs)(`div`,{className:`sd-input-wrap`,children:[(0,s.jsx)(`span`,{className:`sd-icon`,children:`📏`}),(0,s.jsx)(`input`,{type:`number`,step:`0.1`,name:`tinggi_badan`,value:l.tinggi_badan,onChange:C,className:`sd-input ${d.tinggi_badan?`err`:``}`,placeholder:`Contoh: 85.0`})]}),d.tinggi_badan&&(0,s.jsxs)(`span`,{className:`err-text`,children:[`⚠️ `,d.tinggi_badan]})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`label`,{className:`block text-sm font-semibold text-gray-700 mb-1.5`,children:`Lingkar Lengan Atas / LiLA (cm)`}),(0,s.jsxs)(`div`,{className:`sd-input-wrap`,children:[(0,s.jsx)(`span`,{className:`sd-icon`,children:`💪`}),(0,s.jsx)(`input`,{type:`number`,step:`0.1`,name:`lingkar_lengan`,value:l.lingkar_lengan,onChange:C,className:`sd-input ${d.lingkar_lengan?`err`:``}`,placeholder:`Contoh: 13.5`})]}),d.lingkar_lengan&&(0,s.jsxs)(`span`,{className:`err-text`,children:[`⚠️ `,d.lingkar_lengan]}),(0,s.jsx)(`span`,{className:`hint-text`,children:`Normal >12.5 · Gizi Kurang 11.5–12.5 · Gizi Buruk <11.5 cm`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`label`,{className:`block text-sm font-semibold text-gray-700 mb-1.5`,children:`Kadar Hemoglobin (g/dL)`}),(0,s.jsxs)(`div`,{className:`sd-input-wrap`,children:[(0,s.jsx)(`span`,{className:`sd-icon`,children:`🩸`}),(0,s.jsx)(`input`,{type:`number`,step:`0.1`,name:`hemoglobin`,value:l.hemoglobin,onChange:C,className:`sd-input ${d.hemoglobin?`err`:``}`,placeholder:`Contoh: 12.5`})]}),d.hemoglobin&&(0,s.jsxs)(`span`,{className:`err-text`,children:[`⚠️ `,d.hemoglobin]})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`label`,{className:`block text-sm font-semibold text-gray-700 mb-1.5`,children:`Tanggal Pemeriksaan`}),(0,s.jsxs)(`div`,{className:`sd-input-wrap`,children:[(0,s.jsx)(`span`,{className:`sd-icon`,children:`📋`}),(0,s.jsx)(`input`,{type:`date`,name:`tanggal_pemeriksaan`,value:l.tanggal_pemeriksaan,onChange:C,className:`sd-input`})]})]})]}),S>0&&(0,s.jsxs)(`div`,{className:`live-preview mt-6`,children:[(0,s.jsxs)(`h4`,{className:`font-bold mb-3 flex items-center gap-2 text-sm`,style:{color:c.deep},children:[(0,s.jsx)(`span`,{children:`⚡`}),` Perhitungan Real-time`]}),(0,s.jsx)(`div`,{className:`grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm`,children:[{label:`IMT (BMI)`,value:`${S} kg/m²`},{label:`Umur`,value:l.umur_bulan?`${l.umur_bulan} bulan`:`-`},{label:`BB`,value:l.berat_badan?`${l.berat_badan} kg`:`-`},{label:`TB`,value:l.tinggi_badan?`${l.tinggi_badan} cm`:`-`}].map((e,t)=>(0,s.jsxs)(`div`,{className:`text-center bg-white/70 rounded-xl py-2 px-1`,children:[(0,s.jsx)(`div`,{className:`text-gray-500 text-xs mb-0.5`,children:e.label}),(0,s.jsx)(`div`,{className:`font-bold text-sm`,style:{color:c.deep},children:e.value})]},t))})]}),(0,s.jsxs)(`div`,{className:`mt-8 flex gap-3 flex-wrap`,children:[(0,s.jsx)(`button`,{type:`submit`,className:`sd-btn-primary`,disabled:p,style:{flex:`2 1 200px`},children:p?(0,s.jsxs)(`span`,{className:`flex items-center justify-center gap-2`,children:[(0,s.jsxs)(`svg`,{className:`animate-spin h-5 w-5`,viewBox:`0 0 24 24`,children:[(0,s.jsx)(`circle`,{className:`opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`,fill:`none`}),(0,s.jsx)(`path`,{className:`opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z`})]}),`Menganalisis...`]}):`🔍 Analisis Data`}),(0,s.jsx)(`button`,{type:`button`,onClick:D,className:`px-5 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors`,style:{flex:`1 1 100px`},children:`🔄 Reset`})]})]})]}),y===`result`&&h&&(0,s.jsxs)(`div`,{ref:x,className:`result-card glass-card overflow-hidden`,children:[(0,s.jsx)(`div`,{className:`p-8 text-white rounded-t-3xl`,style:{background:j?`linear-gradient(135deg, ${c.forest} 0%, #4CAF50 100%)`:h.severity===`severe`?`linear-gradient(135deg, #EF4444 0%, #DC2626 100%)`:`linear-gradient(135deg, ${c.orange} 0%, #EF4444 100%)`},children:(0,s.jsxs)(`div`,{className:`text-center`,children:[(0,s.jsx)(`div`,{className:`text-6xl mb-4 float`,children:j?`✅`:`⚠️`}),(0,s.jsx)(`h2`,{className:`text-2xl md:text-3xl font-bold mb-2`,style:{fontFamily:`Poppins`},children:j?`Hasil Pemeriksaan Normal`:`Perlu Perhatian Khusus`}),(0,s.jsx)(`p`,{className:`text-lg opacity-90`,children:h.summary}),(0,s.jsxs)(`div`,{className:`mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full font-bold`,children:[(0,s.jsx)(`span`,{children:j?`🟢`:h.severity===`severe`?`🔴`:`🟠`}),(0,s.jsx)(`span`,{children:j?`Gizi Baik`:h.severity===`severe`?`Gizi Buruk`:h.stuntingStatus===`stunting`?`Stunting Terdeteksi`:`Gizi Kurang`})]})]})}),(0,s.jsxs)(`div`,{className:`p-6 md:p-8 bg-gray-50/60`,children:[(0,s.jsxs)(`h3`,{className:`text-lg font-bold text-gray-900 mb-5 flex items-center gap-2`,children:[(0,s.jsx)(`span`,{children:`📊`}),` Metrik Pengukuran`]}),(0,s.jsx)(`div`,{className:`grid sm:grid-cols-2 lg:grid-cols-3 gap-4`,children:[{label:`IMT (BMI)`,icon:`⚖️`,value:h.bmi,unit:`kg/m²`,type:`wasting`,status:h.wastingStatus},{label:`Tinggi Badan`,icon:`📏`,value:`${l.tinggi_badan}`,unit:`cm · ${l.umur_bulan} bulan`,type:`stunting`,status:h.stuntingStatus},{label:`LiLA`,icon:`💪`,value:`${l.lingkar_lengan}`,unit:`cm`,type:`lila`,status:h.lilaStatus}].map((e,t)=>(0,s.jsxs)(`div`,{className:`metric-card`,children:[(0,s.jsxs)(`div`,{className:`flex items-center justify-between mb-3`,children:[(0,s.jsx)(`span`,{className:`text-sm font-semibold text-gray-600`,children:e.label}),(0,s.jsx)(`span`,{className:`text-2xl`,children:e.icon})]}),(0,s.jsx)(`div`,{className:`text-2xl font-bold text-gray-900 mb-0.5`,children:e.value}),(0,s.jsx)(`div`,{className:`text-xs text-gray-500 mb-3`,children:e.unit}),(0,s.jsx)(`span`,{className:`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${k(e.status)}`,children:A(e.type,e.status)})]},t))})]}),(0,s.jsxs)(`div`,{className:`p-6 md:p-8`,children:[(0,s.jsxs)(`h3`,{className:`text-lg font-bold text-gray-900 mb-5 flex items-center gap-2`,children:[(0,s.jsx)(`span`,{children:`💡`}),` Rekomendasi & Saran`]}),(0,s.jsx)(`div`,{className:`space-y-3`,children:h.recommendations.map((e,t)=>(0,s.jsx)(`div`,{className:`rec-card ${e.priority===`high`?`rec-high`:`rec-normal`}`,children:(0,s.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,s.jsx)(`span`,{className:`text-2xl flex-shrink-0`,children:e.icon}),(0,s.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,s.jsx)(`h4`,{className:`font-bold text-gray-900 mb-0.5`,children:e.title}),(0,s.jsx)(`p`,{className:`text-gray-600 text-sm leading-relaxed`,children:e.desc})]}),e.priority===`high`&&(0,s.jsx)(`span`,{className:`flex-shrink-0 px-2.5 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold`,children:`PRIORITAS`})]})},t))}),(0,s.jsxs)(`div`,{className:`mt-8 p-5 rounded-2xl border`,style:{backgroundColor:`${c.sky}`,borderColor:`${c.light}`},children:[(0,s.jsx)(`h4`,{className:`font-bold mb-3 flex items-center gap-2 text-sm`,style:{color:c.deep},children:`📚 Referensi Standar`}),(0,s.jsxs)(`ul`,{className:`space-y-1.5 text-sm`,style:{color:`#1E4D7B`},children:[(0,s.jsxs)(`li`,{children:[`• `,(0,s.jsx)(`strong`,{children:`WHO Child Growth Standards 2006`}),` — standar pertumbuhan anak global`]}),(0,s.jsxs)(`li`,{children:[`• `,(0,s.jsx)(`strong`,{children:`Permenkes RI No. 2 Tahun 2020`}),` — standar antropometri status gizi`]}),(0,s.jsxs)(`li`,{children:[`• `,(0,s.jsx)(`strong`,{children:`LiLA:`}),` <11.5 cm = Gizi Buruk · 11.5–12.5 cm = Gizi Kurang · >12.5 cm = Normal`]})]})]}),(0,s.jsxs)(`div`,{className:`mt-8 flex flex-col sm:flex-row gap-3`,children:[(0,s.jsx)(`button`,{onClick:O,className:`flex-1 px-5 py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:opacity-90`,style:{background:`linear-gradient(135deg, ${c.forest}, #4CAF50)`},children:`💾 Simpan ke Riwayat`}),(0,s.jsx)(`button`,{onClick:()=>window.print(),className:`flex-1 px-5 py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:opacity-90`,style:{background:`linear-gradient(135deg, ${c.primary}, ${c.deep})`},children:`🖨️ Cetak Hasil`}),(0,s.jsx)(`button`,{onClick:D,className:`flex-1 px-5 py-3.5 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2`,children:`🔄 Pemeriksaan Baru`})]}),(0,s.jsx)(`div`,{className:`mt-6 p-4 rounded-xl border`,style:{backgroundColor:`${c.cream}`,borderColor:`${c.peach}`},children:(0,s.jsxs)(`p`,{className:`text-sm text-center`,style:{color:`#92400E`},children:[(0,s.jsx)(`strong`,{children:`⚠️ Disclaimer:`}),` Hasil ini bersifat informatif berdasarkan perhitungan standar. Konsultasikan dengan tenaga medis profesional untuk diagnosis dan penanganan lanjutan.`]})})]})]})]})]})]})}export{c as default};