import{e,u as a,f as t,r as o,o as n,a as l,b as s,t as u,w as r,d as m}from"./app.6baa4f4e.js";var h=e({name:"404",setup(){var e,o,n;const l=a(),s=t(),u=null!=(e=s.value.notFound)?e:["Not Found"];return{getMsg:()=>u[Math.floor(Math.random()*u.length)],homeLink:null!=(o=s.value.home)?o:l.value,homeText:null!=(n=s.value.backToHome)?n:"Back to home"}}});const c={class:"theme-container"},d={class:"theme-default-content"},f=s("h1",null,"404",-1);h.render=function(e,a,t,h,i,v){const k=o("RouterLink");return n(),l("div",c,[s("div",d,[f,s("blockquote",null,u(e.getMsg()),1),s(k,{to:e.homeLink},{default:r((()=>[m(u(e.homeText),1)])),_:1},8,["to"])])])};export default h;
