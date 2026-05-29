function e(e){if(!e.trim())return``;let t=e.replace(/>\s*</g,`>
<`).split(`
`),n=0;return t.map(e=>{let t=e.trim();if(!t)return``;t.startsWith(`</`)&&(n=Math.max(0,n-1));let r=`${`  `.repeat(n)}${t}`;return t.startsWith(`<`)&&!t.startsWith(`</`)&&!t.endsWith(`/>`)&&!t.includes(`</`)&&!t.startsWith(`<!`)&&(n+=1),r}).filter(Boolean).join(`
`)}export{e as formatHtml};