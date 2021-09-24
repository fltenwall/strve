const state={_nHtml:[],_oHtml:[],_el:null,_data:null,_template:null,oldTree:null,isMounted:!1},reg=new RegExp("{(.+?)}");function mount(e,t,n){const r=document.createElement(e.type);if(e.el=r,e.props)for(const t in e.props){if("string"==typeof e.props[t]&&reg.test(e.props[t])){const n=reg.exec(e.props[t])[1];e.props[t]=e.props[t].replace(reg,state._data[n])}r.setAttribute(t,e.props[t])}e.children&&("string"==typeof e.children[0]?toValue(e.children[0],r):e.children.forEach((e=>{mount(e,r)}))),n?t.insertBefore(r,n):t.appendChild(r)}function patch(n1,n2){if(n1.type!==n2.type){const e=n1.el.parentNode,t=n1.el.nextSibling;return e.removeChild(n1.el),void mount(n2,e,t)}const el=n2.el=n1.el,oldProps=n1.props||{},newProps=n2.props||{};for(const key in newProps){let newValue=newProps[key],oldValue=oldProps[key];if(null!=newValue){if(newValue!==oldValue){if(reg.test(newValue)){const key=reg.exec(newValue)[1];newValue=state._data.hasOwnProperty(key)?state._data[key]:eval(`state._data.${key}`)}el.setAttribute(key,newValue)}}else el.removeAttribute(key)}for(const e in oldProps)e in newProps||el.removeAttribute(e);const oc=n1.children,nc=n2.children;if("string"==typeof nc[0])toValue(nc[0],el);else if(Array.isArray(nc)&&"string"!==nc[0])if(Array.isArray(oc)&&"string"!==oc[0]){const e=Math.min(oc.length,nc.length);for(let t=0;t<e;t++)patch(oc[t],nc[t]);nc.length>oc.length?nc.slice(oc.length).forEach((e=>mount(e,el))):oc.length>nc.length&&oc.slice(nc.length).forEach((e=>{el.removeChild(e.el)}))}else el.innerHTML="",nc.forEach((e=>mount(e,el)))}function testVal(e,t,n){e=e.replace(reg,n),reg.test(e)?toValue(e,t):t.textContent=e}function toValue(val,el){if(reg.test(val)){const key=reg.exec(val)[1];state._data.hasOwnProperty(key)?testVal(val,el,state._data[key]):testVal(val,el,eval(`state._data.${key}`))}else el.textContent=val}function mountNode(e,t){if(state.isMounted){const t=e;patch(state.oldTree,t),state.oldTree=t}else mount(state.oldTree=e,document.querySelector(t)),state.isMounted=!0}var n=function(e,t,r,l){var o;t[0]=0;for(var a=1;a<t.length;a++){var s=t[a++],c=t[a]?(t[0]|=s?1:2,r[t[a++]]):t[++a];3===s?l[0]=c:4===s?l[1]=Object.assign(l[1]||{},c):5===s?(l[1]=l[1]||{})[t[++a]]=c:6===s?l[1][t[++a]]+=c+"":s?(o=e.apply(c,n(e,c,r,["",null])),l.push(o),c[0]?t[0]|=2:(t[a-2]=0,t[a]=o)):l.push(c)}return l},t=new Map;function h(e,t,...n){return{type:e,props:t,children:n}}function vnode(e){var r=t.get(this);return r||(r=new Map,t.set(this,r)),(r=n(this,r.get(e)||(r.set(e,r=function(e){for(var t,n,r=1,l="",o="",a=[0],s=function(e){1===r&&(e||(l=l.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,e,l):3===r&&(e||l)?(a.push(3,e,l),r=2):2===r&&"..."===l&&e?a.push(4,e,0):2===r&&l&&!e?a.push(5,0,!0,l):r>=5&&((l||!e&&5===r)&&(a.push(r,0,l,n),r=6),e&&(a.push(r,e,0,n),r=6)),l=""},c=0;c<e.length;c++){c&&(1===r&&s(),s(c));for(var i=0;i<e[c].length;i++)t=e[c][i],1===r?"<"===t?(s(),a=[a],r=3):l+=t:4===r?"--"===l&&">"===t?(r=1,l=""):l=t+l[0]:o?t===o?o="":l+=t:'"'===t||"'"===t?o=t:">"===t?(s(),r=1):r&&("="===t?(r=5,n=l,l=""):"/"===t&&(r<5||">"===e[c][i+1])?(s(),3===r&&(a=a[0]),r=a,(a=a[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(s(),r=2):l+=t),3===r&&"!--"===l&&(r=4,a=a[0])}return s(),a}(e)),r),arguments,[])).length>1?r:r[0]}const html=vnode.bind(h);function eventListener(e,t,n){document.querySelector(e).addEventListener(t,n)}function ref(){return new Proxy(state._data,{get:(e,t)=>e[t],set:(e,t,n)=>(console.log(n),e[t]=n,mountNode(state._template,state._el),!0)})}const reactiveHandlers={get:(e,t)=>"object"==typeof e[t]&&null!==e[t]?new Proxy(e[t],reactiveHandlers):Reflect.get(e,t),set:(e,t,n)=>(Reflect.set(e,t,n),mountNode(state._template,state._el),!0)};function reactive(){return new Proxy(state._data,reactiveHandlers)}function createView(e){state._data=e.data,state._template=e.template,state._el=e.el,e.el?mountNode(e.template,e.el):console.error("Error: Please set el property!")}export{createView,eventListener,html,reactive,ref};
