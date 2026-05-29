const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodePanel-Dvjq6CdK.js","assets/_plugin-vue_export-helper-BDNMzG2s.js","assets/index-BUfAKUX6.js","assets/index-f3gtzE1i.css","assets/chevron-down-BCH_kZkr.js","assets/CodePanel-BzKFsEdH.css"])))=>i.map(i=>d[i]);
import{$ as e,B as t,F as n,G as r,I as i,J as a,K as o,L as s,N as c,P as ee,Q as te,R as l,St as u,U as d,W as f,X as p,Z as m,at as ne,ft as h,ht as g,i as _,it as v,lt as re,mt as y,pt as b,q as x,rt as S,st as C,t as w,vt as T,yt as E,z as D}from"./index-BUfAKUX6.js";import{t as O}from"./_plugin-vue_export-helper-BDNMzG2s.js";var k=c(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),A=c(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),ie=c(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),ae=c(`monitor`,[[`rect`,{width:`20`,height:`14`,x:`2`,y:`3`,rx:`2`,key:`48i651`}],[`line`,{x1:`8`,x2:`16`,y1:`21`,y2:`21`,key:`1svkeh`}],[`line`,{x1:`12`,x2:`12`,y1:`17`,y2:`21`,key:`vw1qmm`}]]),oe=c(`rotate-cw`,[[`path`,{d:`M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8`,key:`1p45f6`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}]]),se=e({__name:`AlpineHtmlPreview`,props:{html:{}},setup(e){let t=e,n=g(null),r=g(``);async function i(e){let t=n.value;if(!t)return;let i=e.trim();if(!i){r.value&&=(s(t),t.innerHTML=``,``);return}i!==r.value&&(s(t),t.innerHTML=i,await S(),l(),D(t),r.value=i)}function o(e){n.value=e&&typeof e==`object`?e:null,n.value&&t.html.trim()&&i(t.html)}return h(()=>t.html,e=>{i(e)}),v(()=>{let e=n.value;e&&(s(e),e.innerHTML=``,r.value=``)}),(e,t)=>(C(),a(`div`,{ref:o,class:`alpine-html-preview w-full min-w-0`}))}}),j={key:0,class:`mt-10 flex items-center justify-between gap-4`,"aria-label":`Component pagination`},M={key:1,"aria-hidden":`true`},ce=e({__name:`ComponentPagination`,setup(e){let t=i(),r=f(()=>w(t.path)),s=_(`bg-muted text-foreground hover:bg-muted/80 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors`);return(e,t)=>r.value.prev||r.value.next?(C(),a(`nav`,j,[r.value.prev?(C(),o(T(n),{key:0,to:r.value.prev.path,class:E(T(s))},{default:b(()=>[m(T(k),{class:`size-4 shrink-0`,"aria-hidden":`true`}),p(` `+u(r.value.prev.label),1)]),_:1},8,[`to`,`class`])):(C(),a(`div`,M)),r.value.next?(C(),o(T(n),{key:2,to:r.value.next.path,class:E(T(s))},{default:b(()=>[p(u(r.value.next.label)+` `,1),m(T(A),{class:`size-4 shrink-0`,"aria-hidden":`true`})]),_:1},8,[`to`,`class`])):x(``,!0)])):x(``,!0)}}),le=`<!--
  Alpine.js setup required — import and run the module from the "Alpine JS" tab
  before this markup (e.g. in your entry file: main.ts).
-->

`,N=`import collapse from '@alpinejs/collapse'
import Alpine from 'alpinejs'

Alpine.data('accordionDemo', () => ({
  open: 'item-1',

  init() {
    const defaultOpen = this.$root?.dataset?.defaultOpen
    if (defaultOpen) {
      this.open = defaultOpen
    }
  },

  toggle(id) {
    this.open = this.open === id ? null : id
  },

  expanded(id) {
    return this.open === id
  },
}))

Alpine.plugin(collapse)
Alpine.start()
`,P=`import Alpine from 'alpinejs'

Alpine.data('alertDialogDemo', () => ({
  open: false,

  openDialog() {
    this.open = true
  },

  close() {
    this.open = false
  },
}))

Alpine.start()
`;function F(e){switch(e){case`accordion`:return N;case`alert-dialog`:return P;case`alert`:return null;default:return null}}function ue(e){return F(e)!=null}var I=[{value:`item-1`,title:`Product Information`,paragraphs:[`Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.`,`Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.`]},{value:`item-2`,title:`Shipping Details`,paragraphs:[`We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.`,`All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.`]},{value:`item-3`,title:`Return Policy`,paragraphs:[`We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.`,`Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.`]}],L=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" :class="expanded('{{id}}') ? 'rotate-180' : ''"><path d="m6 9 6 6 6-6"></path></svg>`,R=`focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50`;function z(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function B(e){return e.paragraphs.map((e,t)=>`        <p${t>0?` class="mt-2"`:``}>${z(e)}</p>`).join(`
`)}function V(e){return e.map(e=>({id:e.value,title:e.title,content:B(e)}))}function H(e){let t=L.replaceAll(`{{id}}`,e.id);return`  <div data-slot="accordion-item" class="border-b last:border-b-0">
    <h3 class="flex">
      <button
        type="button"
        data-slot="accordion-trigger"
        class="${R}"
        @click="toggle('${e.id}')"
        :aria-expanded="expanded('${e.id}')"
      >
        ${z(e.title)}
        ${t}
      </button>
    </h3>
    <div
      x-show="expanded('${e.id}')"
      x-collapse.duration.200ms
      :data-state="expanded('${e.id}') ? 'open' : 'closed'"
      data-slot="accordion-content"
      class="alpine-accordion-content overflow-hidden text-sm"
    >
      <div class="pt-0 pb-4">
${e.content}
      </div>
    </div>
  </div>`}function U(e,t={}){return`<div
  x-data="accordionDemo"
  data-default-open="${t.defaultOpen??e[0]?.id??``}"
  data-slot="accordion"
  class="${t.className??`w-full`}"
>
${e.map(e=>H(e)).join(`
`)}
</div>`}function W(e){return e.matches(`[data-slot="accordion"]`)?e:e.querySelector(`[data-slot="accordion"]`)}function de(e=`w-full`){return U(V(I),{defaultOpen:`item-1`,className:e})}function fe(e){return de(W(e)?.className.replace(/\s+/g,` `).trim()||`w-full`)}var G={triggerLabel:`Show Dialog`,title:`Are you absolutely sure?`,description:`This action cannot be undone. This will permanently delete your account and remove your data from our servers.`,cancelLabel:`Cancel`,actionLabel:`Continue`},K=`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-9 px-4 py-2`,pe=`${K} bg-primary text-primary-foreground hover:bg-primary/90`,q=`${K} border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50`,me=`data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80`,he=`bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg`;function J(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function ge(){let e=G;return`<div class="flex w-full justify-center">
<div
  x-data="alertDialogDemo"
  data-slot="alert-dialog"
  @keydown.escape.window="close()"
>
  <button
    type="button"
    data-slot="alert-dialog-trigger"
    class="${q}"
    @click="openDialog()"
  >
    ${J(e.triggerLabel)}
  </button>

  <div
    x-show="open"
    x-cloak
    data-slot="alert-dialog-overlay"
    class="${me}"
    :data-state="open ? 'open' : 'closed'"
    @click="close()"
    aria-hidden="true"
  ></div>

  <div
    x-show="open"
    x-cloak
    role="alertdialog"
    aria-modal="true"
    data-slot="alert-dialog-content"
    class="${he}"
    :data-state="open ? 'open' : 'closed'"
    @click.stop
  >
    <div data-slot="alert-dialog-header" class="flex flex-col gap-2 text-center sm:text-left">
      <h2 data-slot="alert-dialog-title" class="text-lg font-semibold">
        ${J(e.title)}
      </h2>
      <p data-slot="alert-dialog-description" class="text-muted-foreground text-sm">
        ${J(e.description)}
      </p>
    </div>
    <div
      data-slot="alert-dialog-footer"
      class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"
    >
      <button
        type="button"
        data-slot="alert-dialog-cancel"
        class="${q} mt-2 sm:mt-0"
        @click="close()"
      >
        ${J(e.cancelLabel)}
      </button>
      <button
        type="button"
        data-slot="alert-dialog-action"
        class="${pe}"
        @click="close()"
      >
        ${J(e.actionLabel)}
      </button>
    </div>
  </div>
</div>
</div>`}function _e(e){return ge()}function ve(e,t){switch(t){case`accordion`:return fe(e);case`alert`:return e.innerHTML.trim();case`alert-dialog`:return _e(e);default:return``}}var ye={class:`space-y-6`},be={class:`space-y-2`},xe={class:`text-muted-foreground text-sm font-medium tracking-wide uppercase`},Se={class:`text-3xl font-bold tracking-tight`},Ce={key:0,class:`text-muted-foreground max-w-2xl text-base leading-relaxed`},we={class:`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`},Te={class:`space-y-4`},Ee={class:`bg-card text-card-foreground relative min-h-[280px] overflow-hidden rounded-xl border shadow-sm`},De=[`aria-hidden`],Oe={key:1,class:`text-muted-foreground text-sm`},ke={key:2,class:`text-muted-foreground text-sm`},Ae=[`innerHTML`],je={key:1,class:`text-muted-foreground text-sm`},Me={key:2,class:`text-muted-foreground text-sm`},Ne={class:`min-w-0`},Y=`inline-flex h-[calc(100%-1px)] items-center justify-center gap-1.5 rounded-md border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0`,X=`bg-background text-foreground border-border shadow-sm`,Z=`text-muted-foreground hover:text-foreground`,Q=`bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]`,Pe=`flex min-h-[280px] w-full flex-col p-8`,$=`w-full min-w-0`,Fe=O(e({__name:`ComponentPreview`,props:{title:{},description:{},vueSource:{},alpineExtractor:{}},setup(e){let n=te(()=>ee(()=>import(`./CodePanel-Dvjq6CdK.js`),__vite__mapDeps([0,1,2,3,4,5]))),s=e,c=i(),l=f(()=>s.title??c.meta.title??`Component`),v=f(()=>s.description??c.meta.description),b=f(()=>c.meta.eyebrow??`Components`),w=g(`preview`),D=g(`vue`),O=g(null),k=g(``),A=g(!1),j=g(0),M=g(`vue`),N=f(()=>ue(s.alpineExtractor)),P=f(()=>N.value),I=f(()=>F(s.alpineExtractor)??``),L=f(()=>k.value?N.value?`${le}${k.value}`:k.value:``),R=f(()=>{let e=[{id:`vue`,label:`Vue`,language:`vue`,code:s.vueSource},{id:`html`,label:`HTML`,language:`html`,code:L.value,emptyLabel:`Extracting HTML…`}];return N.value&&e.push({id:`alpine`,label:`Alpine JS`,language:`javascript`,code:I.value,emptyLabel:`Loading Alpine JS…`}),e}),z=f(()=>w.value===`preview`&&D.value===`vue`);async function B(){A.value=!1,await S(),await new Promise(e=>requestAnimationFrame(()=>e()));let e=O.value;if(!e){k.value=``,A.value=!0;return}k.value=ve(e,s.alpineExtractor)??``,A.value=!0}function V(){M.value=D.value===`vue`?`vue`:`html`}async function H(){j.value+=1,await B()}function U(e){D.value=e,w.value===`code`&&V()}function W(e){w.value=e,e===`code`&&V()}return ne(()=>{B()}),h(D,()=>{w.value===`code`&&V()}),h(w,e=>{e===`preview`&&!A.value&&B(),e===`code`&&V()}),(e,i)=>(C(),a(`section`,ye,[r(`header`,be,[r(`p`,xe,u(b.value),1),r(`h1`,Se,u(l.value),1),v.value?(C(),a(`p`,Ce,u(v.value),1)):x(``,!0)]),r(`div`,we,[r(`div`,{class:E(Q)},[r(`button`,{type:`button`,class:E(T(_)(Y,D.value===`vue`?X:Z)),onClick:i[0]||=e=>U(`vue`)},` Vue `,2),r(`button`,{type:`button`,class:E(T(_)(Y,D.value===`html`?X:Z)),onClick:i[1]||=e=>U(`html`)},` HTML (Alpine.js) `,2)]),r(`div`,{class:E(T(_)(Q,`grid grid-cols-2`))},[r(`button`,{type:`button`,class:E(T(_)(Y,w.value===`preview`?X:Z)),onClick:i[2]||=e=>W(`preview`)},[m(T(ae)),i[5]||=p(` Preview `,-1)],2),r(`button`,{type:`button`,class:E(T(_)(Y,w.value===`code`?X:Z)),onClick:i[3]||=e=>W(`code`)},[m(T(ie)),i[6]||=p(` Code `,-1)],2)],2)]),y(r(`div`,Te,[r(`div`,Ee,[r(`div`,{class:E(T(_)(Pe,!z.value&&`pointer-events-none invisible absolute inset-0 z-0`)),"aria-hidden":!z.value},[r(`div`,{ref_key:`previewRef`,ref:O,class:E($)},[re(e.$slots,`default`,{},void 0,!0)],512)],10,De),z.value?x(``,!0):(C(),a(`div`,{key:0,class:E(T(_)(Pe,`relative z-10`))},[r(`div`,{class:E($)},[P.value?(C(),a(d,{key:0},[A.value&&k.value?(C(),o(se,{key:j.value,html:k.value},null,8,[`html`])):A.value&&!k.value?(C(),a(`p`,Oe,` No HTML extracted. `)):(C(),a(`p`,ke,` Extracting HTML… `))],64)):(C(),a(d,{key:1},[A.value&&k.value?(C(),a(`div`,{key:0,class:`component-preview-html`,innerHTML:k.value},null,8,Ae)):A.value&&!k.value?(C(),a(`p`,je,` No HTML extracted. `)):(C(),a(`p`,Me,` Extracting HTML… `))],64))])],2)),r(`button`,{type:`button`,class:`text-muted-foreground hover:text-foreground hover:bg-muted absolute right-3 bottom-3 inline-flex size-8 items-center justify-center rounded-md transition-colors`,title:`Refresh preview`,onClick:H},[m(T(oe),{class:`size-4`}),i[7]||=r(`span`,{class:`sr-only`},`Refresh preview`,-1)])])],512),[[t,w.value===`preview`]]),y(r(`div`,Ne,[m(T(n),{"active-tab-id":M.value,"onUpdate:activeTabId":i[4]||=e=>M.value=e,tabs:R.value},null,8,[`active-tab-id`,`tabs`])],512),[[t,w.value===`code`]]),m(ce)]))}}),[[`__scopeId`,`data-v-7f296644`]]);export{G as n,I as r,Fe as t};