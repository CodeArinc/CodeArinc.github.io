import{a as I,b as y,e as h}from"./chunk-7BNVELGD.js";import{b as v,d as x,e,f as r}from"./chunk-2YHTWJFD.js";r();var n=v(x());r();var w=async({limit:t=10,keyword:s="panda",page:i=0}={})=>{let f=`${y}/gifs/search?api_key=${I}&q=${s}&limit=${t}&offset=${i*t}&rating=g&lang=es`,a=await(await fetch(f)).json(),{data:c}=a;return c.map(l=>{let{id:d,title:m,images:p}=l,{url:C,height:L,width:O}=p.fixed_width;return{id:d,title:m,url:C,height:L,width:O}})};r();var G=v(x()),S=(0,G.createContext)({}),j=({children:t})=>{let[s,i]=(0,G.useState)([]);return e.createElement(S.Provider,{value:{gifs:s,setGifs:i}},t)},N=S;var P=0,M=({keyword:t}={keyword:null})=>{let[s,i]=(0,n.useState)(!1),[f,o]=(0,n.useState)(!1),[a,c]=(0,n.useState)(P),{gifs:g,setGifs:l}=(0,n.useContext)(N),d=t||localStorage.getItem("lastKeyword")||"random";return(0,n.useEffect)(async()=>{i(!0);let m=await w({keyword:d});l(m),i(!1),localStorage.setItem("lastKeyword",t)},[t,d,l]),(0,n.useEffect)(async()=>{if(a===P)return;o(!0);let m=await w({keyword:d,page:a});l(p=>p.concat(m)),o(!1)},[d,a]),{loading:s,loadingNextPage:f,gifs:g,setPage:c}};r();r();var b=v(x());var $=({title:t,url:s,id:i,height:f,width:o})=>e.createElement("div",{className:"gifs borderR"},e.createElement(h,{to:`/gif/${i}`,className:"gifLink"},e.createElement("span",{className:"gifSpan"},t),e.createElement("img",{loading:"lazy",className:"borderR imgGif",src:s,alt:t}))),k=(0,b.memo)($,(t,s)=>t.id===s.id);var A=({gifs:t})=>e.createElement("div",{className:"listOfGifs"},t.map(({id:s,title:i,url:f,...o})=>e.createElement(k,{key:s,title:i,url:f,id:s,extraInfo:o}))),Z=A;r();var _=()=>e.createElement("div",{class:"lds-roller"},e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null)),re=_;r();var u=v(x()),E=({distance:t="80px",externalRef:s,once:i=!0}={})=>{let[f,o]=(0,u.useState)(!1),a=(0,u.useRef)();return(0,u.useEffect)(()=>{let c,g=s?s.current:a.current,l=(d,m)=>{d[0].isIntersecting?(o(!0),i&&m.disconnect()):!i&&o(!1)};return(()=>{typeof IntersectionObserver!="undefined"||import("./intersection-observer-GQM2G5WF.js"),c=new IntersectionObserver(l,{rootMargin:t}),g&&c.observe(g)})(),()=>c&&c.disconnect()}),{isNearScreen:f,fromRef:a}},oe=E;export{j as a,N as b,M as c,re as d,k as e,Z as f,oe as g};
