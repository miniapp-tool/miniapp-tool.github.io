import{f as i,h as e,T as m,m as d,g as u,n as p,p as f,q as c,r as s,s as v,t as y}from"./app.0516b7ae.js";import{S as g}from"./SkipLink.65618216.js";var b=i({name:"FadeSlideY",setup(r,{slots:a}){const o=d(),t=o.resolve,l=o.pending;return()=>e(m,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:t,onBeforeLeave:l},()=>{var n;return(n=a.default)==null?void 0:n.call(a)})}}),L=i({name:"Layout",setup(){const r=y(),a=u(),o=v(),t=p();return f(),c(()=>a.value.blog.sidebarDisplay||r.value.blog.sidebarDisplay||"mobile"),()=>[e(g),e(s("CommonWrapper"),{},{default:()=>t.value.home?e(s("HomePage")):e(b,()=>e(s("NormalPage"),{key:o.value.path}))})]}});export{L as default};
