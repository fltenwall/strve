const e={_el:null,_data:null,_template:null,oldTree:null,isMounted:!1},t=new RegExp("{(.+?)}");function n(e,t){try{return t.split(".").reduce(((e,t)=>e[t]),e)}catch(e){return}}function r(n,o,l){const s=document.createElement(n.type);if(n.el=s,n.props){for(let e=0;e<Object.keys(n.props).length;e++){const t=Object.keys(n.props)[e].toString();t.startsWith("on")&&s.addEventListener(t.split("on")[1],n.props[t],!1)}for(const r in n.props){if("string"==typeof n.props[r]&&t.test(n.props[r])){const o=t.exec(n.props[r])[1];n.props[r]=n.props[r].replace(t,e._data[o])}s.setAttribute(r,n.props[r])}}n.children&&("string"==typeof n.children[0]?i(n.children[0],s):Array.isArray(n.children[0])?n.children[0].forEach((e=>{r(e,s)})):n.children.forEach((e=>{r(e,s)}))),l?o.insertBefore(s,l):o.appendChild(s)}function o({el:e,key:t,oldProps:n}){e.removeAttribute(t),t.startsWith("on")&&e.removeEventListener(t.split("on")[1],n[t],!1)}function l(s,p){if(s.type!==p.type){const e=s.el.parentNode,t=s.el.nextSibling;return e.removeChild(s.el),void r(p,e,t)}const c=p.el=s.el,a=s.props||{},h=p.props||{};for(let e=0;e<Object.keys(h).length;e++){const t=Object.keys(h)[e].toString();t.startsWith("on")&&c.addEventListener(t.split("on")[1],h[t],!1)}for(const r in h){let l=h[r],s=a[r];if(null!==l){if(l!==s){if(t.test(l)){const r=t.exec(l)[1];l=e._data.hasOwnProperty(r)?e._data[r]:n(e._data,r.toString())}c.setAttribute(r,l)}}else o({el:c,key:r,oldProps:a})}for(const e in a)e in h||o({el:c,key:e,oldProps:a});const f=s.children,u=p.children;if("string"==typeof u[0])i(u[0],c);else if("string"!==f[0])if(Array.isArray(f[0])&&Array.isArray(u[0])){for(let e=0;e<Math.min(f[0].length,u[0].length);e++)l(f[0][e],u[0][e]);u[0].length>f[0].length?u[0].slice(f[0].length).forEach((e=>r(e,c))):f[0].length>u[0].length&&f[0].slice(u[0].length).forEach((e=>{c.removeChild(e.el)}))}else{for(let e=0;e<Math.min(f.length,u.length);e++)l(f[e],u[e]);u.length>f.length?u.slice(f.length).forEach((e=>r(e,c))):f.length>u.length&&f.slice(u.length).forEach((e=>{c.removeChild(e.el)}))}else c.innerHTML="",u.forEach((e=>r(e,c)))}function s(e,n,r){e=e.replace(t,r),t.test(e)?i(e,n):n.textContent=e}function i(r,o){if(t.test(r)){const l=t.exec(r)[1];e._data.hasOwnProperty(l)?s(r,o,e._data[l]):s(r,o,n(e._data,l.toString()))}else o.textContent=r}function p(t,n){if(e.isMounted){const n=t;l(e.oldTree,n),e.oldTree=n}else r(e.oldTree=t,document.querySelector(n)),e.isMounted=!0}function c(t,n){if(e._data=n.data,e._template=n.template,e._el=t,!t)throw Error("[Strve warn]:Please set el property!");if(!e._template().type)throw Error("[Strve warn]:Multiple root nodes returned from render function. Render function should return a single root node.");p(e._template(),t)}async function a(t){"function"==typeof t&&(await t(),p(e._template(),e._el))}let h=function(e,t,n,r){let o;t[0]=0;for(let l=1;l<t.length;l++){let s=t[l++],i=t[l]?(t[0]|=s?1:2,n[t[l++]]):t[++l];3===s?r[0]=i:4===s?r[1]=Object.assign(r[1]||{},i):5===s?(r[1]=r[1]||{})[t[++l]]=i:6===s?r[1][t[++l]]+=i+"":s?(o=e.apply(i,h(e,i,n,["",null])),r.push(o),i[0]?t[0]|=2:(t[l-2]=0,t[l]=o)):r.push(i)}return r},f=new Map;const u=function(e){let t=f.get(this);return t||(t=new Map,f.set(this,t)),(t=h(this,t.get(e)||(t.set(e,t=function(e){let t,n,r,o=1,l="",s="",i=[0],p=0;for(r=function(e){1===o&&(e||(l=l.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,l):3===o&&(e||l)?(i.push(3,e,l),o=2):2===o&&"..."===l&&e?i.push(4,e,0):2===o&&l&&!e?i.push(5,0,!0,l):o>=5&&((l||!e&&5===o)&&(i.push(o,0,l,n),o=6),e&&(i.push(o,e,0,n),o=6)),l=""};p<e.length;p++){p&&(1===o&&r(),r(p));for(let c=0;c<e[p].length;c++)t=e[p][c],1===o?"<"===t?(r(),i=[i],o=3):l+=t:4===o?"--"===l&&">"===t?(o=1,l=""):l=t+l[0]:s?t===s?s="":l+=t:'"'===t||"'"===t?s=t:">"===t?(r(),o=1):o&&("="===t?(o=5,n=l,l=""):"/"===t&&(o<5||">"===e[p][c+1])?(r(),3===o&&(i=i[0]),o=i,(i=i[0]).push(2,0,o),o=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(r(),o=2):l+=t),3===o&&"!--"===l&&(o=4,i=i[0])}return r(),i}(e)),t),arguments,[])).length>1?t:t[0]}.bind((function(e,t,...n){return{type:e,props:t,children:n}}));export{c as Strve,u as render,a as updateView};
