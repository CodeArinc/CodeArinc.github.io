import{a as k,b as j}from"./chunk-P26TQZTP.js";import{a as N}from"./chunk-7TDYZUDD.js";import{b as P}from"./chunk-UZGYXLJ4.js";import{b,d as w,e as a,f as c}from"./chunk-2YHTWJFD.js";c();var f=b(w());c();var v=async({limit:r=20,keyword:t="panda",page:e=0}={})=>{let n=`${j}/gifs/search?api_key=${k}&q=${t}&limit=${r}&offset=${e*r}&rating=g&lang=es`,s=await(await fetch(n)).json(),{data:i}=s;return i.map(m=>{let{id:l,title:p,images:g}=m,{url:D,height:S,width:G}=g.downsized_medium;return{id:l,title:p,url:D,height:S,width:G}})};var x=0,K=({keyword:r}={keyword:null})=>{let[t,e]=(0,f.useState)(!1),[n,o]=(0,f.useState)(!1),[s,i]=(0,f.useState)(x),{gifs:u,setGifs:m}=(0,f.useContext)(P),l=r||localStorage.getItem("lastKeyword")||"random";return(0,f.useEffect)(async()=>{e(!0);let p=await v({keyword:l});m(p),e(!1),localStorage.setItem("lastKeyword",r)},[r,l,m]),(0,f.useEffect)(async()=>{if(s===x)return;o(!0);let p=await v({keyword:l,page:s});m(g=>g.concat(p)),o(!1)},[l,s]),{loading:t,loadingNextPage:n,gifs:u,setPage:i}};c();c();var C=b(w());function E(r,t){if(r==null)return{};var e=L(r,t),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(o=0;o<s.length;o++)n=s[o],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,n)||(e[n]=r[n]))}return e}function L(r,t){if(r==null)return{};var e={},n=Object.keys(r),o,s;for(s=0;s<n.length;s++)o=n[s],!(t.indexOf(o)>=0)&&(e[o]=r[o]);return e}function y(){return y=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},y.apply(this,arguments)}function A(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),e.push.apply(e,n)}return e}function h(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?A(Object(e),!0).forEach(function(n){F(r,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):A(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}function F(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var M={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},O=2,I=class extends C.default.Component{constructor(t){super(t);this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this);let e;this.props.breakpointCols&&this.props.breakpointCols.default?e=this.props.breakpointCols.default:e=parseInt(this.props.breakpointCols)||O,this.state={columnCount:e}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){let t=window&&window.innerWidth||1/0,e=this.props.breakpointCols;typeof e!="object"&&(e={default:parseInt(e)||O});let n=1/0,o=e.default||O;for(let s in e){let i=parseInt(s);i>0&&t<=i&&i<n&&(n=i,o=e[s])}o=Math.max(1,parseInt(o)||1),this.state.columnCount!==o&&this.setState({columnCount:o})}itemsInColumns(){let t=this.state.columnCount,e=new Array(t),n=C.default.Children.toArray(this.props.children);for(let o=0;o<n.length;o++){let s=o%t;e[s]||(e[s]=[]),e[s].push(n[o])}return e}renderColumns(){let{column:t,columnAttrs:e={},columnClassName:n}=this.props,o=this.itemsInColumns(),s=`${100/o.length}%`,i=n;i&&typeof i!="string"&&(this.logDeprecated('The property "columnClassName" requires a string'),typeof i=="undefined"&&(i="my-masonry-grid_column"));let u=h(h(h({},t),e),{},{style:h(h({},e.style),{},{width:s}),className:i});return o.map((m,l)=>C.default.createElement("div",y({},u,{key:l}),m))}logDeprecated(t){console.error("[Masonry]",t)}render(){let t=this.props,{children:e,breakpointCols:n,columnClassName:o,columnAttrs:s,column:i,className:u}=t,m=E(t,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),l=u;return typeof u!="string"&&(this.logDeprecated('The property "className" requires a string'),typeof u=="undefined"&&(l="my-masonry-grid")),C.default.createElement("div",y({},m,{className:l}),this.renderColumns())}};I.defaultProps=M;var _=I;var $=({gifs:r})=>a.createElement(_,{breakpointCols:{default:5,1100:4,730:3,580:2,400:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},r.map(({id:e,title:n,url:o,...s})=>a.createElement(N,{key:e,title:n,url:o,id:e,extraInfo:s}))),R=$;c();var d=b(w()),W=({distance:r="280px",externalRef:t,once:e=!0}={})=>{let[n,o]=(0,d.useState)(!1),s=(0,d.useRef)();return(0,d.useEffect)(()=>{let i,u=t?t.current:s.current,m=(l,p)=>{l[0].isIntersecting?(o(!0),e&&p.disconnect()):!e&&o(!1)};return(()=>{typeof IntersectionObserver!="undefined"||import("./intersection-observer-GQM2G5WF.js"),i=new IntersectionObserver(m,{rootMargin:r}),u&&i.observe(u)})(),()=>i&&i.disconnect()}),{isNearScreen:n,fromRef:s}},te=W;c();var q=()=>a.createElement("div",{class:"lds-roller"},a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null)),ie=q;export{K as a,R as b,te as c,ie as d};
