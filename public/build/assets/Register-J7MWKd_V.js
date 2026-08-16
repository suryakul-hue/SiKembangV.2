import{i as e,n as t,o as n,r,s as i,t as a}from"./app-DXNhC50J.js";import{t as o}from"./GuestLayout-BR_mOGPH.js";import"./InputLabel-BuTx1VJP.js";var s=i(n(),1),c=a();function l({appName:n=`SiKembang`}){let{data:i,setData:a,post:l,processing:u,errors:d,reset:f}=e({name:``,age:``,phone:``,email:``,password:``,password_confirmation:``}),[p,m]=(0,s.useState)(!1),[h,g]=(0,s.useState)(!1),[_,v]=(0,s.useState)(0),[y,b]=(0,s.useState)(!1),[x,S]=(0,s.useState)(!1),[C,w]=(0,s.useState)(!1);(0,s.useEffect)(()=>{b(!0)},[]);let T=e=>{e.preventDefault(),l(route(`register`),{onFinish:()=>f(`password`,`password_confirmation`)})},E=()=>{S(!0),window.location.href=route(`auth.google`)},D=()=>{w(!0),window.location.href=route(`auth.facebook`)};(0,s.useEffect)(()=>{let e=0;i.password.length>6&&e++,i.password.length>10&&e++,/[A-Z]/.test(i.password)&&e++,/[0-9]/.test(i.password)&&e++,/[^A-Za-z0-9]/.test(i.password)&&e++,v(e)},[i.password]);let O=()=>_<=2?`bg-red-500`:_<=3?`bg-yellow-500`:`bg-emerald-500`;return(0,c.jsxs)(o,{children:[(0,c.jsx)(t,{title:`Daftar - ${n}`}),(0,c.jsx)(`style`,{children:`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Sora:wght@400;600;700&display=swap');
                
                :root {
                    --health-primary: #10B981;
                    --health-light: #D1FAE5;
                    --health-lighter: #F0FDF4;
                    --health-dark: #047857;
                    --health-accent: #0EA5E9;
                    --health-accent-dark: #0369A1;
                    --gray-50: #F9FAFB;
                    --gray-100: #F3F4F6;
                    --gray-200: #E5E7EB;
                    --gray-400: #9CA3AF;
                    --gray-600: #4B5563;
                    --gray-900: #111827;
                }

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    background: linear-gradient(135deg, #F0FDF4 0%, #E0F2FE 100%);
                    min-height: 100vh;
                    overflow-x: hidden;
                }

                /* Animated background elements */
                .bg-decoration {
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: 0;
                    pointer-events: none;
                }

                .blob-1 {
                    position: absolute;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
                    border-radius: 50%;
                    top: -100px;
                    right: -50px;
                    animation: float 25s infinite ease-in-out;
                }

                .blob-2 {
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%);
                    border-radius: 50%;
                    bottom: -50px;
                    left: -100px;
                    animation: float 30s infinite ease-in-out reverse;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(30px); }
                }

                /* Main container */
                .login-wrapper {
                    position: relative;
                    z-index: 1;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 40px 20px;
                    animation: fadeIn 0.8s ease-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .login-card {
                    width: 100%;
                    max-width: 480px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-radius: 24px;
                    border: 1px solid rgba(16, 185, 129, 0.2);
                    padding: 48px 40px;
                    box-shadow: 
                        0 20px 25px -5px rgba(0, 0, 0, 0.06),
                        0 0 50px rgba(16, 185, 129, 0.08);
                    animation: slideUp 0.6s ease-out ${y?`0.1s`:`0s`} both;
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Header section */
                .login-header {
                    margin-bottom: 32px;
                    text-align: center;
                    animation: slideUp 0.6s ease-out ${y?`0.2s`:`0s`} both;
                }

                .logo-container {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 64px;
                    height: 64px;
                    background: linear-gradient(135deg, var(--health-primary) 0%, var(--health-accent) 100%);
                    border-radius: 16px;
                    margin-bottom: 20px;
                    box-shadow: 0 8px 16px rgba(16, 185, 129, 0.25);
                }

                .logo-icon {
                    width: 36px;
                    height: 36px;
                    fill: white;
                }

                .login-header h1 {
                    font-size: 32px;
                    font-weight: 700;
                    color: var(--gray-900);
                    margin-bottom: 8px;
                    font-family: 'Poppins', sans-serif;
                    letter-spacing: -0.5px;
                }

                .login-header p {
                    font-size: 15px;
                    color: var(--gray-600);
                    font-weight: 400;
                }

                /* Social buttons */
                .social-buttons {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin-bottom: 24px;
                }

                .google-button, .facebook-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    width: 100%;
                    padding: 14px 16px;
                    background: white;
                    border: 2px solid var(--gray-200);
                    border-radius: 16px;
                    font-size: 15px;
                    font-weight: 600;
                    color: var(--gray-900);
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    font-family: 'Sora', sans-serif;
                }

                .google-button:hover:not(:disabled), .facebook-button:hover:not(:disabled) {
                    border-color: var(--health-primary);
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(14, 165, 233, 0.05) 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 12px 24px rgba(16, 185, 129, 0.12);
                }

                .google-button:disabled, .facebook-button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .facebook-button {
                    color: #1877F2;
                    border-color: rgba(24, 119, 242, 0.25);
                }

                .facebook-icon, .google-icon {
                    width: 20px;
                    height: 20px;
                    flex-shrink: 0;
                }

                .divider-container {
                    position: relative;
                    margin: 8px 0 24px;
                }

                .divider-line {
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--gray-200), transparent);
                }

                .divider-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(255, 255, 255, 0.95);
                    padding: 0 16px;
                    font-size: 13px;
                    color: var(--gray-400);
                    font-weight: 500;
                }

                /* Form section */
                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    animation: slideUp 0.6s ease-out ${y?`0.3s`:`0s`} both;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .form-label {
                    font-size: 14px;
                    font-weight: 600;
                    color: var(--gray-900);
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .form-label-icon {
                    width: 16px;
                    height: 16px;
                    color: var(--health-primary);
                }

                .input-wrapper {
                    position: relative;
                }

                .input-icon {
                    position: absolute;
                    left: 14px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 20px;
                    height: 20px;
                    color: var(--health-primary);
                    pointer-events: none;
                    opacity: 0.7;
                }

                .form-input {
                    padding: 12px 14px 12px 44px;
                    border: 2px solid var(--gray-200);
                    border-radius: 12px;
                    font-size: 14px;
                    font-family: 'Sora', sans-serif;
                    color: var(--gray-900);
                    background: white;
                    transition: all 0.3s ease;
                }

                .form-input:focus {
                    outline: none;
                    border-color: var(--health-primary);
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.02) 0%, rgba(14, 165, 233, 0.02) 100%);
                    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
                }

                .form-input::placeholder {
                    color: var(--gray-400);
                }

                .password-toggle {
                    position: absolute;
                    right: 14px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 4px;
                    color: var(--gray-400);
                    transition: all 0.3s ease;
                }

                .password-toggle:hover {
                    color: var(--health-primary);
                }

                .error-message {
                    font-size: 13px;
                    color: #EF4444;
                    margin-top: 6px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                /* Submit button */
                .submit-button {
                    padding: 14px 20px;
                    background: linear-gradient(135deg, var(--health-primary) 0%, var(--health-accent) 100%);
                    border: none;
                    border-radius: 12px;
                    font-size: 15px;
                    font-weight: 700;
                    color: white;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 8px 16px rgba(16, 185, 129, 0.25);
                    font-family: 'Sora', sans-serif;
                    letter-spacing: 0.3px;
                }

                .submit-button:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 24px rgba(16, 185, 129, 0.35);
                }

                .submit-button:active:not(:disabled) {
                    transform: translateY(0);
                }

                .submit-button:disabled {
                    opacity: 0.8;
                    cursor: not-allowed;
                }

                .button-content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                }

                /* Sign up section */
                .signup-section {
                    margin-top: 32px;
                    padding-top: 24px;
                    border-top: 1px solid var(--gray-200);
                    text-align: center;
                    animation: slideUp 0.6s ease-out ${y?`0.4s`:`0s`} both;
                }

                .signup-text {
                    font-size: 14px;
                    color: var(--gray-600);
                }

                .signup-link {
                    font-weight: 700;
                    color: var(--health-primary);
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .signup-link:hover {
                    color: var(--health-dark);
                }

                /* Spin animation */
                .spin {
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @media (max-width: 480px) {
                    .login-card {
                        padding: 40px 24px;
                    }

                    .login-header h1 {
                        font-size: 28px;
                    }
                }
            `}),(0,c.jsxs)(`div`,{className:`bg-decoration`,children:[(0,c.jsx)(`div`,{className:`blob-1`}),(0,c.jsx)(`div`,{className:`blob-2`})]}),(0,c.jsx)(`div`,{className:`login-wrapper`,children:(0,c.jsxs)(`div`,{className:`login-card`,children:[(0,c.jsxs)(`div`,{className:`login-header`,children:[(0,c.jsx)(`div`,{className:`logo-container`,children:(0,c.jsx)(`svg`,{className:`logo-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,c.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z`,fill:`currentColor`})})}),(0,c.jsx)(`h1`,{children:`Daftar Akun`}),(0,c.jsx)(`p`,{children:`Buat akun baru untuk mulai memantau tumbuh kembang anak`})]}),(0,c.jsxs)(`div`,{className:`social-buttons`,children:[(0,c.jsx)(`button`,{type:`button`,onClick:E,disabled:x||C||u,className:`google-button`,children:x?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`svg`,{className:`google-icon spin`,fill:`none`,viewBox:`0 0 24 24`,children:[(0,c.jsx)(`circle`,{className:`opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`}),(0,c.jsx)(`path`,{className:`opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z`})]}),(0,c.jsx)(`span`,{children:`Memproses...`})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`svg`,{className:`google-icon`,viewBox:`0 0 24 24`,children:[(0,c.jsx)(`path`,{d:`M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`,fill:`#4285F4`}),(0,c.jsx)(`path`,{d:`M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`,fill:`#34A853`}),(0,c.jsx)(`path`,{d:`M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z`,fill:`#FBBC05`}),(0,c.jsx)(`path`,{d:`M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z`,fill:`#EA4335`})]}),(0,c.jsx)(`span`,{children:`Daftar dengan Google`})]})}),(0,c.jsx)(`button`,{type:`button`,onClick:D,disabled:x||C||u,className:`facebook-button`,children:C?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`svg`,{className:`facebook-icon spin`,fill:`none`,viewBox:`0 0 24 24`,children:[(0,c.jsx)(`circle`,{className:`opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`}),(0,c.jsx)(`path`,{className:`opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z`})]}),(0,c.jsx)(`span`,{children:`Memproses...`})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`svg`,{className:`facebook-icon`,viewBox:`0 0 24 24`,fill:`#1877F2`,children:(0,c.jsx)(`path`,{d:`M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54V12h2.54V9.79c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z`})}),(0,c.jsx)(`span`,{children:`Daftar dengan Facebook`})]})})]}),(0,c.jsxs)(`div`,{className:`divider-container`,children:[(0,c.jsx)(`div`,{className:`divider-line`}),(0,c.jsx)(`div`,{className:`divider-text`,children:`Atau daftar dengan email`})]}),(0,c.jsxs)(`form`,{onSubmit:T,className:`login-form`,children:[(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsxs)(`label`,{className:`form-label`,children:[(0,c.jsx)(`svg`,{className:`form-label-icon`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,c.jsx)(`path`,{fillRule:`evenodd`,d:`M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z`,clipRule:`evenodd`})}),`Nama Lengkap`]}),(0,c.jsxs)(`div`,{className:`input-wrapper`,children:[(0,c.jsx)(`svg`,{className:`input-icon`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z`})}),(0,c.jsx)(`input`,{id:`name`,type:`text`,name:`name`,value:i.name,className:`form-input`,autoComplete:`name`,placeholder:`Masukkan nama lengkap Anda`,onChange:e=>a(`name`,e.target.value),style:{width:`100%`},required:!0})]}),d.name&&(0,c.jsx)(`div`,{className:`error-message`,children:(0,c.jsxs)(`span`,{className:`text-xs`,children:[`⚠️ `,d.name]})})]}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsxs)(`label`,{className:`form-label`,children:[(0,c.jsx)(`svg`,{className:`form-label-icon`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,c.jsx)(`path`,{fillRule:`evenodd`,d:`M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z`,clipRule:`evenodd`})}),`Umur`]}),(0,c.jsxs)(`div`,{className:`input-wrapper`,children:[(0,c.jsx)(`svg`,{className:`input-icon`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z`})}),(0,c.jsx)(`input`,{id:`age`,type:`number`,name:`age`,min:`10`,max:`120`,value:i.age,className:`form-input`,placeholder:`Contoh: 28`,onChange:e=>a(`age`,e.target.value),style:{width:`100%`},required:!0})]}),d.age&&(0,c.jsx)(`div`,{className:`error-message`,children:(0,c.jsxs)(`span`,{className:`text-xs`,children:[`⚠️ `,d.age]})})]}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsxs)(`label`,{className:`form-label`,children:[(0,c.jsx)(`svg`,{className:`form-label-icon`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,c.jsx)(`path`,{d:`M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z`})}),`Nomor Telepon`]}),(0,c.jsxs)(`div`,{className:`input-wrapper`,children:[(0,c.jsx)(`svg`,{className:`input-icon`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z`})}),(0,c.jsx)(`input`,{id:`phone`,type:`tel`,name:`phone`,value:i.phone,className:`form-input`,autoComplete:`tel`,placeholder:`08xxxxxxxxxx`,onChange:e=>a(`phone`,e.target.value),style:{width:`100%`},required:!0})]}),d.phone&&(0,c.jsx)(`div`,{className:`error-message`,children:(0,c.jsxs)(`span`,{className:`text-xs`,children:[`⚠️ `,d.phone]})})]}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsxs)(`label`,{className:`form-label`,children:[(0,c.jsxs)(`svg`,{className:`form-label-icon`,fill:`currentColor`,viewBox:`0 0 20 20`,children:[(0,c.jsx)(`path`,{d:`M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z`}),(0,c.jsx)(`path`,{d:`M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z`})]}),`Alamat Email`]}),(0,c.jsxs)(`div`,{className:`input-wrapper`,children:[(0,c.jsx)(`svg`,{className:`input-icon`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`})}),(0,c.jsx)(`input`,{id:`email`,type:`email`,name:`email`,value:i.email,className:`form-input`,autoComplete:`username`,placeholder:`nama@email.com`,onChange:e=>a(`email`,e.target.value),style:{width:`100%`},required:!0})]}),d.email&&(0,c.jsx)(`div`,{className:`error-message`,children:(0,c.jsxs)(`span`,{className:`text-xs`,children:[`⚠️ `,d.email]})})]}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsxs)(`label`,{className:`form-label`,children:[(0,c.jsx)(`svg`,{className:`form-label-icon`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,c.jsx)(`path`,{fillRule:`evenodd`,d:`M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z`,clipRule:`evenodd`})}),`Kata Sandi`]}),(0,c.jsxs)(`div`,{className:`input-wrapper`,children:[(0,c.jsx)(`svg`,{className:`input-icon`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z`})}),(0,c.jsx)(`input`,{id:`password`,type:p?`text`:`password`,name:`password`,value:i.password,className:`form-input`,autoComplete:`new-password`,placeholder:`••••••••`,onChange:e=>a(`password`,e.target.value),style:{width:`100%`,paddingRight:`44px`},required:!0}),(0,c.jsx)(`button`,{type:`button`,onClick:()=>m(!p),className:`password-toggle`,children:p?(0,c.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21`})}):(0,c.jsxs)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:[(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M15 12a3 3 0 11-6 0 3 3 0 016 0z`}),(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z`})]})})]}),i.password&&(0,c.jsxs)(`div`,{className:`mt-2 p-3 bg-slate-50 border border-gray-100 rounded-xl`,children:[(0,c.jsxs)(`div`,{className:`flex justify-between items-center mb-1.5`,children:[(0,c.jsx)(`span`,{className:`text-xs font-semibold text-gray-500`,children:`Kekuatan Sandi:`}),(0,c.jsx)(`span`,{className:`text-xs font-bold ${_<=2?`text-red-500`:_<=3?`text-yellow-600`:`text-emerald-600`}`,children:_<=2?`Lemah`:_<=3?`Sedang`:`Kuat`})]}),(0,c.jsx)(`div`,{className:`flex gap-1.5 h-1.5`,children:[1,2,3,4,5].map(e=>(0,c.jsx)(`div`,{className:`flex-1 rounded-full transition-all duration-300 ${e<=_?O():`bg-gray-200`}`},e))})]}),d.password&&(0,c.jsx)(`div`,{className:`error-message`,children:(0,c.jsxs)(`span`,{className:`text-xs`,children:[`⚠️ `,d.password]})})]}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsxs)(`label`,{className:`form-label`,children:[(0,c.jsx)(`svg`,{className:`form-label-icon`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,c.jsx)(`path`,{fillRule:`evenodd`,d:`M2.166 4.999A11.954 11.954 0 0010 1.944a11.954 11.954 0 007.834 3.056 11.954 11.954 0 01-3.342 8.687 11.954 11.954 0 01-4.492 2.313 11.954 11.954 0 01-4.492-2.313 11.954 11.954 0 01-3.342-8.687zM10 12a2 2 0 100-4 2 2 0 000 4z`,clipRule:`evenodd`})}),`Konfirmasi Kata Sandi`]}),(0,c.jsxs)(`div`,{className:`input-wrapper`,children:[(0,c.jsx)(`svg`,{className:`input-icon`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z`})}),(0,c.jsx)(`input`,{id:`password_confirmation`,type:h?`text`:`password`,name:`password_confirmation`,value:i.password_confirmation,className:`form-input`,autoComplete:`new-password`,placeholder:`••••••••`,onChange:e=>a(`password_confirmation`,e.target.value),style:{width:`100%`,paddingRight:`44px`},required:!0}),(0,c.jsx)(`button`,{type:`button`,onClick:()=>g(!h),className:`password-toggle`,children:h?(0,c.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21`})}):(0,c.jsxs)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:[(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M15 12a3 3 0 11-6 0 3 3 0 016 0z`}),(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z`})]})})]}),i.password_confirmation&&i.password!==i.password_confirmation&&(0,c.jsx)(`div`,{className:`error-message`,children:(0,c.jsx)(`span`,{className:`text-xs`,children:`⚠️ Konfirmasi sandi belum cocok`})})]}),(0,c.jsx)(`button`,{type:`submit`,disabled:u,className:`submit-button`,style:{marginTop:`12px`},children:(0,c.jsx)(`div`,{className:`button-content`,children:u?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`svg`,{className:`w-5 h-5 spin`,fill:`none`,viewBox:`0 0 24 24`,children:[(0,c.jsx)(`circle`,{className:`opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`}),(0,c.jsx)(`path`,{className:`opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z`})]}),(0,c.jsx)(`span`,{children:`Mendaftarkan...`})]}):(0,c.jsx)(`span`,{children:`Daftar Akun`})})})]}),(0,c.jsx)(`div`,{className:`signup-section`,children:(0,c.jsxs)(`p`,{className:`signup-text`,children:[`Sudah memiliki akun?`,` `,(0,c.jsx)(r,{href:route(`login`),className:`signup-link`,children:`Masuk di sini`})]})})]})})]})}export{l as default};