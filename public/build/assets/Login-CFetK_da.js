import{a as e,i as t,n,o as r,r as i,s as a,t as o}from"./app-DXNhC50J.js";import{t as s}from"./GuestLayout-BR_mOGPH.js";import"./InputLabel-BuTx1VJP.js";var c=o(),l=a(r(),1);function u({status:r,canResetPassword:a,googleClientId:o}){let{data:u,setData:d,post:f,processing:p,errors:m,reset:h}=t({email:``,password:``,remember:!1}),[g,_]=(0,l.useState)(!1),[v,y]=(0,l.useState)(!1),[b,x]=(0,l.useState)(!1),[S,C]=(0,l.useState)(!1);(0,l.useEffect)(()=>{C(!0)},[]);let w=e=>{e.preventDefault(),f(route(`login`),{onFinish:()=>h(`password`)})},T=()=>{y(!0),window.location.href=route(`auth.google`)},E=()=>{x(!0),window.location.href=route(`auth.facebook`)};(0,l.useEffect)(()=>{o&&window.google&&(window.google.accounts.id.initialize({client_id:o,callback:D,auto_select:!1,cancel_on_tap_outside:!0}),window.google.accounts.id.prompt(e=>{e.isNotDisplayed()||e.isSkippedMoment()}))},[o]);let D=t=>{e.post(route(`auth.google.callback`),{credential:t.credential},{onFinish:()=>y(!1),onError:()=>y(!1)})};return(0,c.jsxs)(s,{children:[(0,c.jsx)(n,{title:`Masuk - Platform Kesehatan`}),(0,c.jsx)(`style`,{children:`
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
                    padding: 20px;
                    animation: fadeIn 0.8s ease-out;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
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
                    animation: slideUp 0.6s ease-out ${S?`0.1s`:`0s`} both;
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

                /* Status message */
                .status-message {
                    margin-bottom: 24px;
                    padding: 16px;
                    background: linear-gradient(135deg, #F0FDF4 0%, #DBEAFE 100%);
                    border-radius: 16px;
                    border-left: 4px solid var(--health-primary);
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--health-dark);
                    animation: slideDown 0.5s ease-out;
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
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
                    animation: slideUp 0.6s ease-out ${S?`0.2s`:`0s`} both;
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

                /* Google button */
                .google-button {
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
                    animation: slideUp 0.6s ease-out ${S?`0.3s`:`0s`} both;
                }

                .google-button:hover:not(:disabled) {
                    border-color: var(--health-primary);
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(14, 165, 233, 0.05) 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 12px 24px rgba(16, 185, 129, 0.12);
                }

                .google-button:active:not(:disabled) {
                    transform: translateY(0);
                }

                .google-button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .google-icon, .facebook-icon {
                    width: 20px;
                    height: 20px;
                    flex-shrink: 0;
                }

                .facebook-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    width: 100%;
                    padding: 14px 16px;
                    background: white;
                    border: 2px solid rgba(24, 119, 242, 0.25);
                    border-radius: 16px;
                    font-size: 15px;
                    font-weight: 600;
                    color: #1877F2;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    margin-top: 12px;
                }

                .facebook-button:hover:not(:disabled) {
                    border-color: var(--health-primary);
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(14, 165, 233, 0.05) 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 12px 24px rgba(16, 185, 129, 0.12);
                }

                .facebook-button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .spin {
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                /* Divider */
                .divider-container {
                    position: relative;
                    margin: 24px 0;
                    animation: slideUp 0.6s ease-out ${S?`0.4s`:`0s`} both;
                }

                .divider-line {
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--gray-300), transparent);
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
                    animation: slideUp 0.6s ease-out ${S?`0.5s`:`0s`} both;
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

                /* Remember & forgot password */
                .form-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 8px;
                }

                .remember-label {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                    color: var(--gray-600);
                    cursor: pointer;
                    user-select: none;
                }

                .forgot-link {
                    font-size: 14px;
                    font-weight: 600;
                    color: var(--health-accent);
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .forgot-link:hover {
                    color: var(--health-accent-dark);
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
                    animation: slideUp 0.6s ease-out ${S?`0.6s`:`0s`} both;
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

                /* Security info */
                .security-info {
                    margin-top: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    font-size: 12px;
                    color: var(--gray-400);
                    animation: slideUp 0.6s ease-out ${S?`0.7s`:`0s`} both;
                }

                .security-icon {
                    width: 16px;
                    height: 16px;
                    color: var(--health-primary);
                }

                /* Responsive */
                @media (max-width: 480px) {
                    .login-card {
                        padding: 40px 24px;
                    }

                    .login-header h1 {
                        font-size: 28px;
                    }

                    .blob-1, .blob-2 {
                        opacity: 0.5;
                    }
                }
            `}),(0,c.jsxs)(`div`,{className:`bg-decoration`,children:[(0,c.jsx)(`div`,{className:`blob-1`}),(0,c.jsx)(`div`,{className:`blob-2`})]}),(0,c.jsx)(`div`,{className:`login-wrapper`,children:(0,c.jsxs)(`div`,{className:`login-card`,children:[r&&(0,c.jsxs)(`div`,{className:`status-message`,children:[(0,c.jsx)(`svg`,{className:`w-5 h-5`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,c.jsx)(`path`,{fillRule:`evenodd`,d:`M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z`,clipRule:`evenodd`})}),r]}),(0,c.jsxs)(`div`,{className:`login-header`,children:[(0,c.jsx)(`div`,{className:`logo-container`,children:(0,c.jsx)(`svg`,{className:`logo-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,c.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z`,fill:`currentColor`})})}),(0,c.jsx)(`h1`,{children:`Selamat Datang`}),(0,c.jsx)(`p`,{children:`Masuk ke akun kesehatan Anda untuk melanjutkan`})]}),(0,c.jsx)(`button`,{type:`button`,onClick:T,disabled:v||p,className:`google-button`,children:v?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`svg`,{className:`google-icon spin`,fill:`none`,viewBox:`0 0 24 24`,children:[(0,c.jsx)(`circle`,{className:`opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`}),(0,c.jsx)(`path`,{className:`opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z`})]}),(0,c.jsx)(`span`,{children:`Memproses...`})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`svg`,{className:`google-icon`,viewBox:`0 0 24 24`,children:[(0,c.jsx)(`path`,{d:`M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`,fill:`#4285F4`}),(0,c.jsx)(`path`,{d:`M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`,fill:`#34A853`}),(0,c.jsx)(`path`,{d:`M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z`,fill:`#FBBC05`}),(0,c.jsx)(`path`,{d:`M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z`,fill:`#EA4335`})]}),(0,c.jsx)(`span`,{children:`Lanjutkan dengan Google`})]})}),(0,c.jsx)(`button`,{type:`button`,onClick:E,disabled:v||b||p,className:`facebook-button`,children:b?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`svg`,{className:`facebook-icon spin`,fill:`none`,viewBox:`0 0 24 24`,children:[(0,c.jsx)(`circle`,{className:`opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`}),(0,c.jsx)(`path`,{className:`opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z`})]}),(0,c.jsx)(`span`,{children:`Memproses...`})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`svg`,{className:`facebook-icon`,viewBox:`0 0 24 24`,fill:`#1877F2`,children:(0,c.jsx)(`path`,{d:`M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54V12h2.54V9.79c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z`})}),(0,c.jsx)(`span`,{children:`Lanjutkan dengan Facebook`})]})}),(0,c.jsxs)(`div`,{className:`divider-container`,children:[(0,c.jsx)(`div`,{className:`divider-line`}),(0,c.jsx)(`div`,{className:`divider-text`,children:`Atau masuk dengan email`})]}),(0,c.jsxs)(`form`,{onSubmit:w,className:`login-form`,children:[(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsxs)(`label`,{className:`form-label`,children:[(0,c.jsxs)(`svg`,{className:`form-label-icon`,fill:`currentColor`,viewBox:`0 0 20 20`,children:[(0,c.jsx)(`path`,{d:`M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z`}),(0,c.jsx)(`path`,{d:`M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z`})]}),`Alamat Email`]}),(0,c.jsxs)(`div`,{className:`input-wrapper`,children:[(0,c.jsx)(`svg`,{className:`input-icon`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`})}),(0,c.jsx)(`input`,{id:`email`,type:`email`,name:`email`,value:u.email,className:`form-input`,autoComplete:`username`,placeholder:`nama@email.com`,onChange:e=>d(`email`,e.target.value),style:{width:`100%`}})]}),m.email&&(0,c.jsxs)(`div`,{className:`error-message`,children:[(0,c.jsx)(`svg`,{className:`w-4 h-4`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,c.jsx)(`path`,{fillRule:`evenodd`,d:`M18.101 12.93a1 1 0 00-1.414-1.414L10 14.586 5.313 9.899a1 1 0 00-1.414 1.414l5.5 5.5a1 1 0 001.414 0l8.5-8.5z`,clipRule:`evenodd`})}),m.email]})]}),(0,c.jsxs)(`div`,{className:`form-group`,children:[(0,c.jsxs)(`label`,{className:`form-label`,children:[(0,c.jsx)(`svg`,{className:`form-label-icon`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,c.jsx)(`path`,{fillRule:`evenodd`,d:`M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z`,clipRule:`evenodd`})}),`Kata Sandi`]}),(0,c.jsxs)(`div`,{className:`input-wrapper`,children:[(0,c.jsx)(`svg`,{className:`input-icon`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z`})}),(0,c.jsx)(`input`,{id:`password`,type:g?`text`:`password`,name:`password`,value:u.password,className:`form-input`,autoComplete:`current-password`,placeholder:`••••••••`,onChange:e=>d(`password`,e.target.value),style:{width:`100%`,paddingRight:`44px`}}),(0,c.jsx)(`button`,{type:`button`,onClick:()=>_(!g),className:`password-toggle`,children:g?(0,c.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21`})}):(0,c.jsxs)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:[(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M15 12a3 3 0 11-6 0 3 3 0 016 0z`}),(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z`})]})})]}),m.password&&(0,c.jsxs)(`div`,{className:`error-message`,children:[(0,c.jsx)(`svg`,{className:`w-4 h-4`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,c.jsx)(`path`,{fillRule:`evenodd`,d:`M18.101 12.93a1 1 0 00-1.414-1.414L10 14.586 5.313 9.899a1 1 0 00-1.414 1.414l5.5 5.5a1 1 0 001.414 0l8.5-8.5z`,clipRule:`evenodd`})}),m.password]})]}),(0,c.jsxs)(`div`,{className:`form-footer`,children:[(0,c.jsxs)(`label`,{className:`remember-label`,children:[(0,c.jsx)(`input`,{type:`checkbox`,name:`remember`,checked:u.remember,onChange:e=>d(`remember`,e.target.checked),style:{width:`18px`,height:`18px`,cursor:`pointer`,accentColor:`var(--health-primary)`}}),(0,c.jsx)(`span`,{children:`Ingat saya`})]}),a&&(0,c.jsx)(i,{href:route(`password.request`),className:`forgot-link`,children:`Lupa password?`})]}),(0,c.jsx)(`button`,{type:`submit`,disabled:p,className:`submit-button`,children:(0,c.jsx)(`div`,{className:`button-content`,children:p?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`svg`,{className:`w-5 h-5 spin`,fill:`none`,viewBox:`0 0 24 24`,children:[(0,c.jsx)(`circle`,{className:`opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`}),(0,c.jsx)(`path`,{className:`opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z`})]}),(0,c.jsx)(`span`,{children:`Memproses...`})]}):(0,c.jsx)(`span`,{children:`Masuk`})})})]}),(0,c.jsx)(`div`,{className:`signup-section`,children:(0,c.jsxs)(`p`,{className:`signup-text`,children:[`Belum punya akun?`,` `,(0,c.jsx)(i,{href:route(`register`),className:`signup-link`,children:`Daftar sekarang`})]})}),(0,c.jsxs)(`div`,{className:`security-info`,children:[(0,c.jsx)(`svg`,{className:`security-icon`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,c.jsx)(`path`,{fillRule:`evenodd`,d:`M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z`,clipRule:`evenodd`})}),(0,c.jsx)(`span`,{children:`Login aman dengan enkripsi SSL 256-bit`})]})]})})]})}export{u as default};