import{t as e}from"./ComponentPreview-BNlfFK1U.js";import{$ as t,G as n,J as r,K as i,M as a,N as o,St as s,U as c,X as l,Y as u,Z as d,ct as f,i as p,lt as m,pt as h,q as g,r as _,st as v,ut as y,vt as b,yt as x}from"./index-BUfAKUX6.js";var S=o(`terminal`,[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]),C=t({__name:`Alert`,props:{class:{type:[Boolean,null,String,Object,Array]},variant:{}},setup(e){let t=e;return(n,i)=>(v(),r(`div`,{"data-slot":`alert`,class:x(b(p)(b(E)({variant:e.variant}),t.class)),role:`alert`},[m(n.$slots,`default`)],2))}}),w=t({__name:`AlertDescription`,props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){let t=e;return(e,n)=>(v(),r(`div`,{"data-slot":`alert-description`,class:x(b(p)(`text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed`,t.class))},[m(e.$slots,`default`)],2))}}),T=t({__name:`AlertTitle`,props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){let t=e;return(e,n)=>(v(),r(`div`,{"data-slot":`alert-title`,class:x(b(p)(`col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight`,t.class))},[m(e.$slots,`default`)],2))}}),E=a(`relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current`,{variants:{variant:{default:`bg-card text-card-foreground`,destructive:`text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90`}},defaultVariants:{variant:`default`}}),D=[`aria-label`],O=t({__name:`FigmaIcon`,props:{class:{},title:{default:`Figma`}},setup(e){return(t,i)=>(v(),r(`svg`,{class:x(e.class),viewBox:`0 0 24 24`,role:`img`,"aria-label":e.title,xmlns:`http://www.w3.org/2000/svg`},[n(`title`,null,s(e.title),1),i[0]||=u(`<circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle>`,5)],10,D))}}),k=[{id:`heads-up`,title:`Heads up!`,description:`You can add components and view both the Vue source and rendered HTML.`,variant:`default`,icon:S},{id:`destructive`,title:`Something went wrong`,description:`This is a destructive alert style.`,variant:`destructive`}],A=`J6ymhjN1tnwdhpkkt67aUr`,j={alert:{light:`https://www.figma.com/design/${A}?node-id=5-14`,dark:`https://www.figma.com/design/${A}?node-id=6-14`}},M={class:`space-y-4`},N={class:`flex flex-wrap items-center gap-2`},P=t({__name:`AlertDemo`,setup(e){return(e,t)=>(v(),r(`div`,M,[n(`div`,N,[d(b(_),{as:`a`,href:b(j).alert.light,target:`_blank`,rel:`noreferrer`,variant:`outline`,size:`sm`},{default:h(()=>[d(O,{class:`size-4`}),t[0]||=l(` Edit in Figma (Light) `,-1)]),_:1},8,[`href`]),d(b(_),{as:`a`,href:b(j).alert.dark,target:`_blank`,rel:`noreferrer`,variant:`outline`,size:`sm`},{default:h(()=>[d(O,{class:`size-4`}),t[1]||=l(` Edit in Figma (Dark) `,-1)]),_:1},8,[`href`])]),(v(!0),r(c,null,f(b(k),e=>(v(),i(b(C),{key:e.id,variant:e.variant},{default:h(()=>[e.icon?(v(),i(y(e.icon),{key:0})):g(``,!0),d(b(T),null,{default:h(()=>[l(s(e.title),1)]),_:2},1024),d(b(w),null,{default:h(()=>[l(s(e.description),1)]),_:2},1024)]),_:2},1032,[`variant`]))),128))]))}}),F=`<script setup lang="ts">
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { alertDemoItems } from './alert-demo.data'
import { figmaLinks } from '@/figma-links'
<\/script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center gap-2">
      <Button as="a" :href="figmaLinks.alert.light" target="_blank" rel="noreferrer" variant="outline" size="sm">
        <FigmaIcon class="size-4" />
        Edit in Figma (Light)
      </Button>
      <Button as="a" :href="figmaLinks.alert.dark" target="_blank" rel="noreferrer" variant="outline" size="sm">
        <FigmaIcon class="size-4" />
        Edit in Figma (Dark)
      </Button>
    </div>
    <Alert
      v-for="item in alertDemoItems"
      :key="item.id"
      :variant="item.variant"
    >
      <component :is="item.icon" v-if="item.icon" />
      <AlertTitle>{{ item.title }}</AlertTitle>
      <AlertDescription>
        {{ item.description }}
      </AlertDescription>
    </Alert>
  </div>
</template>

`,I=t({__name:`AlertPage`,setup(t){return(t,n)=>(v(),i(e,{"alpine-extractor":`alert`,"vue-source":b(F)},{default:h(()=>[d(P)]),_:1},8,[`vue-source`]))}});export{I as default};