import{e as _,Y as m,Z as p,o as s,l as a,u as n,J as r,F as u,y as e,I as i}from"./entry.4530cb74.js";import{a as h,e as k,b as x}from"./useUpdatePreview.7b0de140.js";const b={key:0},f=e("h1",{class:"mb-2 text-center text-4xl font-bold dark:text-white"},[e("span",{class:"font-extrabold text-pink-500"},"Amelia"),i("'s Nickname Helper ")],-1),v=e("p",{class:"mb-4 text-lg dark:text-white"},"Your nickname is being loaded.",-1),g=[f,v],w={key:1},N=e("h1",{class:"mb-2 text-center text-4xl font-bold dark:text-white"},[e("span",{class:"font-extrabold text-pink-500"},"Amelia"),i("'s Nickname Helper ")],-1),y=e("p",{class:"mb-4 text-lg dark:text-white"},"Something went horribly wrong.",-1),V=[N,y],H=_({__name:"[id]",setup(B){const c=m(),l=h(),{data:o,error:t,pending:d}=k(`https://qc-nick-saver.nightlake.workers.dev/nick/${c.params.id}`,"$tWqZbpV5M2");return t.value&&console.error(t.value),o.value&&(l.value=o.value.nick,x(),p("/")),(F,q)=>(s(),a(u,null,[n(d)?(s(),a("div",b,g)):r("",!0),n(t)?(s(),a("div",w,V)):r("",!0)],64))}});export{H as default};