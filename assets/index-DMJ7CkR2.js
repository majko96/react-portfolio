import{j as e,B as c,s as T,D as H,u as z,r as b,a as m,b as B,L as P,I as F,M as A,c as M,d as R,l as $,f as O,e as Q,g as E,h as K,F as j,i as w,_ as G,G as k,R as J,k as p,N as _,m as C,n as V,H as q,o as U,p as W}from"./vendor-CqVBU5TP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();function X(){return e.jsx("svg",{height:"32px",id:"Layer_1",version:"1.1",viewBox:"0 0 32 32",width:"32px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve",children:e.jsx("path",{d:"M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"})})}function D({darkMode:n,handleClick:t}){return e.jsx(c,{sx:{cursor:"pointer"},children:n?e.jsx("span",{children:e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:!n,readOnly:!0}),e.jsx("span",{onClick:t,className:"slider round"})]})}):e.jsx("span",{children:e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:!n,readOnly:!0}),e.jsx("span",{onClick:t,className:"slider round"})]})})})}const Y=T(({darkMode:n,...t})=>e.jsx(H,{...t}))(({theme:n,darkMode:t})=>({"& .MuiDrawer-paper":{borderRadius:"30px 30px 0 0",background:t?"#1f1f1f":"white",color:t?"white":"black",borderTop:t?"5px solid #424242":"5px solid #cecece"}}));function Z({darkMode:n,handleClick:t}){const i=z(),[s,a]=b.useState(i.pathname==="/"?"home":i.pathname.slice(1,i.pathname.length)),[o,d]=b.useState(!1),[h,y]=b.useState(null),{t:l,i18n:u}=m(),S=[{name:l("Home"),to:"/",active:"home"},{name:l("About me"),to:"/about",active:"about"},{name:l("Portfolio"),to:"/portfolio",active:"portfolio"},{name:l("Experience"),to:"/experience",active:"experience"},{name:"CV",to:"/cv",active:"cv"},{name:l("Contact"),to:"/contact",active:"contact"}],g=()=>r=>{r.type==="keydown"&&(r.key==="Tab"||r.key==="Shift")||d(!o)},I=r=>{y(r.currentTarget)},L=()=>{y(null)},f=r=>{localStorage.setItem("language",r),u.changeLanguage(r),L()},N=()=>e.jsx("div",{role:"presentation",onClick:g(),onKeyDown:g(),children:e.jsxs(c,{textAlign:"center",p:"1rem",textTransform:"lowercase",children:[e.jsxs("ul",{style:{listStyleType:"none",padding:0},children:[S.map((r,v)=>e.jsx("li",{className:r.active===s?"active":"",style:{display:"flex",justifyContent:"center"},children:e.jsx(P,{to:r.to,onClick:()=>a(r.active),children:r.name&&e.jsx("p",{style:{paddingBottom:"1rem",fontSize:"1.5rem",color:n?"white":"#1f1f1f"},children:r.name})})},v)),e.jsx("li",{style:{display:"flex",justifyContent:"center"},children:u.language!=="en"&&e.jsx("p",{style:{paddingBottom:"1rem",fontSize:"1.5rem",color:n?"white":"#1f1f1f"},children:e.jsx("span",{onClick:()=>f("en"),style:{cursor:"pointer"},children:l("language.en")})})}),e.jsx("li",{style:{display:"flex",justifyContent:"center"},children:u.language!=="sk"&&e.jsx("p",{style:{paddingBottom:"1rem",fontSize:"1.5rem",color:n?"white":"#1f1f1f"},children:e.jsx("span",{onClick:()=>f("sk"),style:{cursor:"pointer"},children:l("language.sk")})})})]}),e.jsx(R,{style:{display:"flex",justifyContent:"center"},children:e.jsx(D,{darkMode:n,handleClick:t})})]})});return e.jsxs(c,{component:"nav",width:"100%",children:[e.jsxs(c,{className:n?"menuIconColorDark":"menuIconColorLight",display:{xs:"block",lg:"none"},textAlign:"right",children:[e.jsx(B,{name:"menu",onClick:g(),children:e.jsx(X,{})}),e.jsx(Y,{anchor:"bottom",open:o,onClose:g(),darkMode:n,children:N()})]}),e.jsxs(c,{component:"ul",display:{xs:"none",lg:"flex"},justifyContent:"center",alignItems:"center",gap:{xs:"2rem",lg:"5rem",xl:"6rem"},textTransform:"lowercase",fontSize:"1rem",children:[S.map((r,v)=>e.jsx("li",{className:r.active===s?"active":"",children:e.jsx(P,{"aria-label":"home page",to:r.to,onClick:()=>a(r.active),children:r.name&&e.jsx("p",{style:{paddingBottom:"0.5rem"},children:r.name})})},v)),e.jsx(c,{children:e.jsxs("li",{children:[e.jsx(F,{onClick:I,style:{color:n?"#FFF":"#1f1f1f",fontSize:"1.3rem"},children:l(`language.${u.language}`)}),e.jsxs(A,{anchorEl:h,open:!!h,onClose:L,children:[u.language!=="en"&&e.jsx(M,{onClick:()=>f("en"),children:l("language.en")}),u.language!=="sk"&&e.jsx(M,{onClick:()=>f("sk"),children:l("language.sk")})]})]})}),e.jsx("li",{children:e.jsx(D,{darkMode:n,handleClick:t})})]})]})}function ee(n){const{link:t,icon:i,label:s}=n;return e.jsx("a",{target:"_blank","aria-label":s,rel:"noopener noreferrer",href:t,children:i})}$.add(O,Q,E,K);const te=[{link:"https://github.com/majko96",icon:e.jsx(j,{icon:["fab","github"]}),label:"Github"},{link:"https://sk.linkedin.com/in/mario-babinec-618221212",icon:e.jsx(j,{icon:["fab","linkedin"]}),label:"LinkedIn"},{link:"https://www.facebook.com/mario.babinec.9/",icon:e.jsx(j,{icon:["fab","facebook"]}),label:"Facebook"}];function ne(){const{t:n,i18n:t}=m();return e.jsx(c,{component:"main",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"center",minHeight:"calc(100vh - 185px)",children:e.jsxs(c,{children:[e.jsxs("h1",{children:[n("home.first")," ",e.jsx("span",{className:"firstName",children:n("home.mario")}),e.jsx("span",{className:"hand",children:"🤚"})]}),e.jsx("h2",{children:n("home.last")}),e.jsx(c,{display:"flex",gap:"3rem",justifyContent:"center",fontSize:{xs:"2rem",md:"2.5rem"},mt:"2rem",children:te.map((i,s)=>e.jsx(ee,{link:i.link,icon:i.icon,label:i.label},s))})]})})}function x(n){const t=`terminal ${n.isDarkMode?"dark":"light"}`;return e.jsxs(c,{component:"section",className:t,width:{xs:"95%",md:"50%"},borderRadius:"0.5rem",mb:"4rem",children:[e.jsxs(c,{sx:{backgroundColor:"#8c8c8c"},p:"0.5rem",borderRadius:"0.5rem 0.5rem 0 0",fontSize:"1rem",children:[e.jsx(j,{icon:w,className:"red"}),e.jsx(j,{icon:w,className:"amber"}),e.jsx(j,{icon:w,className:"green"})]}),e.jsxs(c,{py:{xs:"1rem",md:"2rem"},px:{xs:"2rem",md:"3rem"},borderRadius:"0 0 0.5rem 0.5rem",className:n.isDarkMode?"dark":"light",fontSize:"1.5rem",fontFamily:"Courier New, Courier, monospace",children:[e.jsxs("p",{children:[e.jsx("span",{className:"green",children:"mario@pc:~$"})," ",n.pcText]}),n.text]})]})}function ae(n){const{t,i18n:i}=m();function s(){return e.jsx(e.Fragment,{children:e.jsx("p",{children:t("about.about-me")})})}function a(){return e.jsx(e.Fragment,{children:e.jsxs("ul",{className:"skills",children:[e.jsx("li",{children:"HTML5"}),e.jsx("li",{children:"CSS3"}),e.jsx("li",{children:"SCSS"}),e.jsx("li",{children:"PHP"}),e.jsx("li",{children:"Symfony"}),e.jsx("li",{children:"JavaScript"}),e.jsx("li",{children:"TypeScript"}),e.jsx("li",{children:"jQuery"}),e.jsx("li",{children:"React"}),e.jsx("li",{children:"Bootstrap"}),e.jsx("li",{children:"Material UI"}),e.jsx("li",{children:"Git"}),e.jsx("li",{children:"npm"}),e.jsx("li",{children:"composer"})]})})}function o(){return e.jsx(e.Fragment,{children:e.jsxs("ul",{className:"terminal-text",children:[e.jsxs("li",{children:["💻 ",t("programming")]}),e.jsxs("li",{children:["🏔️ ",t("hiking")]}),e.jsxs("li",{children:["🚴‍♂️ ",t("cycling")]})]})})}function d(){return e.jsx(e.Fragment,{children:e.jsx("ul",{className:"terminal-text",children:e.jsx("li",{children:e.jsx("div",{className:"github-calendar-container",children:e.jsx(G,{username:"majko96",colorScheme:n.isDarkMode?"dark":"light"})})})})})}return e.jsxs(c,{display:"flex",flexDirection:"column",alignItems:"center",mt:"3rem",children:[e.jsx(x,{text:s(),isDarkMode:n.isDarkMode,pcText:t("cat about-me")}),e.jsx(x,{text:a(),isDarkMode:n.isDarkMode,pcText:t("cd skills/tools && ls")}),e.jsx(x,{text:o(),isDarkMode:n.isDarkMode,pcText:t("cd hobbies && ls")}),e.jsx(x,{text:d(),isDarkMode:n.isDarkMode,pcText:t("github-activity --show")})]})}function se(n){const{name:t,url:i,desc:s,tech:a,source:o,isDarkMode:d}=n,{t:h,i18n:y}=m(),l=()=>n.source==="personal"?e.jsxs(e.Fragment,{children:[h("source"),": contact me"]}):e.jsx(e.Fragment,{children:o&&e.jsxs("a",{href:o,target:"_blank",rel:"noreferrer",children:[h("source"),": 🔗 GitHub"]})}),u=()=>e.jsx(e.Fragment,{children:e.jsxs("ul",{className:"terminal-text",children:[e.jsx("li",{children:e.jsxs("a",{href:i,target:"_blank",rel:"noreferrer",children:["url: 🔗 ",t]})}),e.jsxs("li",{children:[h("desc"),": 📝 ",s]}),e.jsxs("li",{children:["tech: 🖥️ ",a]}),e.jsx("li",{children:l()}),e.jsx("li",{children:n.login&&e.jsxs(e.Fragment,{children:[h("login"),": ",n.login]})}),e.jsx("li",{children:n.password&&e.jsxs(e.Fragment,{children:[h("password"),": ",n.password]})})]})});return e.jsx(x,{text:u(),isDarkMode:d,pcText:"cat "+t})}function oe(n){const{t,i18n:i}=m(),s=[{name:"interstol",url:"https://interstol.sk",desc:t("Carpentry website"),tech:"Symfony, React, Bootstrap",source:"https://github.com/majko96/interstol.sk"},{name:"whack-it!",url:"https://whackit.eu",desc:t("Personal Laravel project"),tech:"Laravel, Tailwind, jQuery, MySQL",source:"https://github.com/majko96/chirper",login:"demo@gmail.com",password:"12345678"},{name:"radiation-map",url:"https://radiation-map.netlify.app",desc:t("Simple React app which show actual radiation data"),tech:"React, Bootstrap, Vite, Recoil",source:"https://github.com/majko96/shmu-vite"},{name:"poslouchej-radia-admin-panel",url:"https://radia.moj-dennik.eu",desc:t("Admin panel for management radio stations list for my KODI app"),tech:"Symfony, jQuery, Bootstrap, MySQL",source:"https://github.com/majko96/radia-admin"},{name:"poslouchej-radia-lms-app",url:"https://github.com/majko96/LMS-Poslouchej-radia",desc:t("Learn Perl basics"),tech:"Perl, API requests",source:"https://github.com/majko96/LMS-Poslouchej-radia"},{name:"poslouchej-radia-kodi-app",url:"https://github.com/majko96/LMS-Poslouchej-radia",desc:t("Learn Python basics"),tech:"Python, XbmcSwift2",source:"https://github.com/Mebox/plugin.audio.poslouchej.radia"},{name:"jarell.sk",url:"https://jarell.sk",desc:t("Landing page"),tech:"PHP, javaScript, Bootstrap, jQuery",source:null},{name:"moj-dennik.eu",url:"https://moj-dennik.eu",desc:t("Learn PHP and MySQL"),tech:"PHP, javaScript, Bootstrap, jQuery, MySQL",source:null},{name:"Covid-19-SK-android-app",url:"https://github.com/majko96/covid-19-sk/releases/download/6.0/app-debug.apk",desc:t("Learn Android development basics"),tech:"Java",source:"https://github.com/majko96/covid-19-sk"}];return e.jsx(c,{display:"flex",flexDirection:"column",alignItems:"center",mt:"3rem",mb:"0",children:s.map((a,o)=>e.jsx(se,{name:a.name,url:a.url,desc:a.desc,tech:a.tech,source:a.source,isDarkMode:n.isDarkMode,login:a.login,password:a.password},o))})}function ie(n){const{t,i18n:i}=m();function s(){return e.jsx(e.Fragment,{children:e.jsxs("ul",{className:"terminal-text",children:[e.jsxs("li",{children:["👦🏻 ",t("contact.name")]}),e.jsxs("li",{children:["🏠 ",t("contact.city")]}),e.jsxs("li",{children:["🇸🇰 ",t("contact.country")]}),e.jsx("li",{children:e.jsx("a",{href:"mailto:mr.babinec@gmail.com",children:"📮 mr.babinec@gmail.com"})})]})})}return e.jsx(c,{component:"main",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"center",minHeight:"calc(100vh - 185px)",children:e.jsx(x,{text:s(),isDarkMode:n.isDarkMode,pcText:t("cat contact")})})}function re(n){const{t,i18n:i}=m();function s(){return e.jsx(e.Fragment,{children:e.jsx("ul",{className:"terminal-text",children:e.jsx("li",{children:e.jsx("a",{href:"https://majko96.github.io/babinec-cv.pdf",children:"💾 mario-babinec-cv.pdf"})})})})}return e.jsx(c,{component:"main",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"center",minHeight:"calc(100vh - 185px)",children:e.jsx(x,{text:s(),isDarkMode:n.isDarkMode,pcText:t("download mario-cv")})})}function ce(n){const{t,i18n:i}=m();function s(){return e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"terminal-text",children:[e.jsx("li",{children:"04.2021 - 11.2023"}),e.jsx("li",{children:"United Classifieds s.r.o."}),e.jsx("li",{children:"Full-stack developer"}),e.jsx("li",{children:"PHP, Symfony, TypeScript, React, Redux, Bootstrap, MySQL"})]}),e.jsxs("ul",{className:"terminal-text",children:[e.jsxs("li",{children:["05.2024 - ",t("present")]}),e.jsx("li",{children:"ui42 spol. s.r.o."}),e.jsx("li",{children:"Full-stack developer"}),e.jsx("li",{children:"PHP, Laravel, Bootstrap, jQuery"})]})]})}return e.jsx(c,{component:"main",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"center",minHeight:"calc(100vh - 185px)",children:e.jsx(x,{text:s(),isDarkMode:n.isDarkMode,pcText:t("cat experience")})})}function le(n){let[t,i]=b.useState(n.appMode);const s=new Date().getFullYear(),{t:a,i18n:o}=m();function d(){i(!t),localStorage.setItem("darkMode",JSON.stringify(!t))}return e.jsx(c,{className:t?"dark":"light",children:e.jsxs(k,{container:!0,display:"block",p:"20px",flexDirection:"column",minHeight:"100vh",justifyContent:"space-between",children:[e.jsx(k,{item:!0,children:e.jsx(Z,{darkMode:t,handleClick:d})}),e.jsx(k,{item:!0,flexGrow:1,children:e.jsxs(J,{children:[e.jsx(p,{exact:!0,path:"/",element:e.jsx(ne,{})}),e.jsx(p,{exact:!0,path:"/about",element:e.jsx(ae,{isDarkMode:t})}),e.jsx(p,{exact:!0,path:"/portfolio",element:e.jsx(oe,{isDarkMode:t})}),e.jsx(p,{exact:!0,path:"/experience",element:e.jsx(ce,{isDarkMode:t})}),e.jsx(p,{exact:!0,path:"/cv",element:e.jsx(re,{isDarkMode:t})}),e.jsx(p,{exact:!0,path:"/contact",element:e.jsx(ie,{isDarkMode:t})}),e.jsx(p,{path:"*",element:e.jsx(_,{to:"/"})})]})}),e.jsx(k,{item:!0,children:e.jsxs(c,{component:"footer",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",py:"1.5rem",sx:{opacity:.7},width:"100%",children:[e.jsx("p",{children:a("footer.text")}),e.jsx("a",{href:"https://github.com/majko96/majko96.github.io",target:"_blank",children:a("source code")}),e.jsxs("p",{children:["©MBa 2020 - ",s]})]})})]})})}const de="Home",me={en:"en",sk:"sk"},he={text:"When I wrote this code, only God and I understood what I did. Now nobody knows."},ue={first:"Hi, I'm",mario:"Mario",last:"I'm a fullstack web developer."},xe={"about-me":"Hello! I'm Mario a fullstack web developer. There is so much you can know about me but what you need to know is that building web applications with React and PHP is where my passion lies."},pe={name:"Mario Babinec",city:"Povazska Bystrica",country:"Slovakia"},je="programming",ge="cycling",fe="hiking",ke="source",be="desc",ye="login",ve="password",we="present",Se={Home:de,language:me,footer:he,home:ue,about:xe,contact:pe,"cat about-me":"cat about-me","cat contact":"cat contact","cat experience":"cat experience","cd skills/tools && ls":"cd skills/tools && ls","cd hobbies && ls":"cd hobbies && ls","github-activity --show":"github-activity --show","download mario-cv":"download mario-cv",programming:je,cycling:ge,hiking:fe,source:ke,desc:be,login:ye,password:ve,present:we,"source code":"source code","Carpentry website":"Carpentry website","Personal Laravel project":"Personal Laravel project","Simple React app which show actual radiation data":"Simple React app which show actual radiation data","Admin panel for management radio stations list for my KODI app":"Admin panel for management radio stations list for my KODI app","Learn Perl basics":"Learn Perl basics","Learn Python basics":"Learn Python basics","Landing page":"Landing page","Learn PHP and MySQL":"Learn PHP and MySQL","Learn Android development basics":"Learn Android development basics"},Le="Domov",Pe="Portfólio",Me="Skúsenosti",De="Kontakt",Ce={en:"en",sk:"sk"},Ie={text:"Keď som písal tento kód, iba Boh a ja sme mu rozumeli. Teraz mu už nerozumie nikto."},Ne={first:"Ahoj, som",mario:"Mário",last:"Fullstack web developer."},Te={"about-me":"Ahoj! Ja som Mário a som fullstack web developer. Je veľa vecí, ktoré by ste sa o mne mohli dozvedieť, ale to dôležité je, že rád tvorím webové aplikácie pomocou technológii React a PHP."},He={name:"Mário Babinec",city:"Považská Bystrica",country:"Slovensko"},ze="programovanie",Be="bicyklovanie",Fe="turistika",Ae="zdroj",Re="popis",$e="meno",Oe="heslo",Qe="súčasnosť",Ee={Home:Le,"About me":"O mne",Portfolio:Pe,Experience:Me,Contact:De,language:Ce,footer:Ie,home:Ne,about:Te,contact:He,"cat about-me":"cat o-mne","cat contact":"cat kontaktne-informacie","cat experience":"cat skusenosti","download mario-cv":"stiahnut mario-cv","cd skills/tools && ls":"cd zrucnosti/nastroje && ls","cd hobbies && ls":"cd zaluby && ls","github-activity --show":"github-aktivita --zobraz",programming:ze,cycling:Be,hiking:Fe,source:Ae,desc:Re,login:$e,password:Oe,present:Qe,"source code":"zdrojový kód","Carpentry website":"Webová stránka pre stolárstvo","Personal Laravel project":"Osobný Laravel projekt","Simple React app which show actual radiation data":"Jednoduchá aplikácia v React-e, ktorá zobrazuje aktuálne údaje o žiarení na SLovensku","Admin panel for management radio stations list for my KODI app":"Admin panel na správu rádiových staníc pre KODI aplikáciu","Learn Perl basics":"Projekt slúžiaci na naučenie základov programovacieho jazyka Perl","Learn Python basics":"Projekt slúžiaci na naučenie základov programovacieho jazyka Python","Landing page":"Landing page pre elektrikársku firmu","Learn PHP and MySQL":"Projekt slúžiaci na naučenie základov programovacie jazyka PHP a MySQL","Learn Android development basics":"Projekt slúžiaci na naučenie základov programovacie jazyka Java"},Ke=localStorage.getItem("language")||"en";C.init({interpolation:{escapeValue:!1},lng:Ke,resources:{en:{translation:Se},sk:{translation:Ee}}});function Ge(){return e.jsx(V,{i18n:C,children:e.jsx(q,{children:e.jsx(le,{appMode:JSON.parse(localStorage.getItem("darkMode"))??!0})})})}U.createRoot(document.getElementById("root")).render(e.jsx(W.StrictMode,{children:e.jsx(Ge,{})}));
