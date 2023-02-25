(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"body {\r\n  background-color: bisque;\r\n  padding: 0%;\r\n  margin: 0%;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n\r\n.header {\r\n  background-color: rgb(117, 7, 7);\r\n  margin-top: -2%;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  list-style: none;\r\n  padding: 1% 4%;\r\n  font-size: 2rem;\r\n}\r\n\r\n.nav-list > * {\r\n  color: white;\r\n}\r\n\r\n#logo {\r\n  height: 60px;\r\n}\r\n\r\n.designers {\r\n  display: flex;\r\n  background-color: black;\r\n  gap: 0.5rem;\r\n  font-size: 16px;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.alert {\r\n  display: block;\r\n}\r\n\r\n.name {\r\n  font-size: 16px;\r\n  padding: 0;\r\n  margin-bottom: 12px;\r\n  text-align: center;\r\n  color: #f5f5f5;\r\n}\r\n\r\n.main-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n  gap: 1%;\r\n  padding: 2%;\r\n}\r\n\r\n.movie-box {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.movie-box > * {\r\n  margin-bottom: 3%;\r\n}\r\n\r\n.title {\r\n  width: 70%;\r\n  font-size: 1.2rem;\r\n  margin-right: 5%;\r\n}\r\n\r\n.like-line {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.like-img {\r\n  height: 50%;\r\n  margin-left: 3%;\r\n}\r\n\r\n.comment {\r\n  padding: 2%;\r\n}\r\n\r\n/* styling for pop up window */\r\n\r\n.popup {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  top: 0;\r\n  position: fixed;\r\n  backdrop-filter: blur(10px);\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.popImage {\r\n  width: 30%;\r\n  height: 75%;\r\n  padding-top: 30px;\r\n}\r\n\r\n.content {\r\n  background-color: #f5f5f5;\r\n  overflow-y: auto;\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  height: 80%;\r\n  padding-top: 100px;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.part {\r\n  height: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.cancel {\r\n  margin-top: 40%;\r\n  padding-left: 90%;\r\n  padding-top: 124px;\r\n  font-size: 3rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.namepop {\r\n  font-size: 60px;\r\n}\r\n\r\nform {\r\n  padding-top: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 15px;\r\n  width: 40%;\r\n}\r\n\r\nform h2 {\r\n  margin-left: 35%;\r\n}\r\n\r\ninput {\r\n  border-radius: 5px;\r\n  height: 20%;\r\n  border: 1px solid rgb(0, 77, 153);\r\n  padding: 15px;\r\n}\r\n\r\ntextarea {\r\n  border-radius: 5px;\r\n  padding: 15px;\r\n  border: 1px solid rgb(0, 77, 153);\r\n}\r\n\r\nbutton[type=submit] {\r\n  padding: 10px;\r\n  background-color: rgb(0, 77, 153);\r\n  color: white;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#heart {\r\n  cursor: pointer;\r\n}\r\n\r\ntable {\r\n  height: 10vh;\r\n  width: 120%;\r\n  padding: 1rem;\r\n  margin: 2% -10%;\r\n}\r\n\r\ntable,\r\ntr {\r\n  border: 1px solid black;\r\n  overflow-y: scroll;\r\n}\r\n\r\ntr:hover {\r\n  background-color: #66f;\r\n}\r\n\r\nth {\r\n  padding: 10px;\r\n}\r\n\r\ntd {\r\n  padding-right: 5px;\r\n  text-align: center;\r\n  width: 140px;\r\n}\r\n\r\n.commentBtn {\r\n  padding: 7px;\r\n  border-radius: 5px;\r\n  margin-bottom: 8px;\r\n  background-color: rgb(0, 77, 153);\r\n  color: white;\r\n}\r\n\r\n.commentspan {\r\n  color: black;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  padding-left: 7rem;\r\n}\r\n\r\n.comment-btn {\r\n  width: 100%;\r\n  padding: 2%;\r\n  color: white;\r\n  background-color: rgb(126, 4, 4);\r\n  border-radius: 2%;\r\n}\r\n\r\n.dynLike {\r\n  margin-right: 2%;\r\n}\r\n",""]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=e(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(m);else{var f=o(m,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var s=t(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),c=e(565),s=e.n(c),d=e(216),l=e.n(d),p=e(589),u=e.n(p),m=e(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),r()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=e.p+"b9c14c72766523acfd19.png",h=e.p+"92a5f5c321b623ff5852.png",v="1FVG3z1ZGOPObI1xBCiY",y=async n=>{const r=document.querySelector(".table"),e=document.querySelector(".commentspan"),t=await(async n=>{const r=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${v}/comments?item_id=item${n}`,e=await fetch(r);return await e.json()})(n);t.length&&(t.forEach((({username:n,comment:e,creationDate:t})=>{const o=document.createElement("tr");o.innerHTML=`<td class="username">${n}</td>\n      <td class="comment">${e}</td>\n      <td class="creation_date">${t}</td> `,r.appendChild(o)})),((n,r)=>{const e=document.querySelector(".table").querySelectorAll("tr"),t=e.length-1;r.innerText=e.length-1+" comments for this Show"})(0,e))},b=n=>{const r=document.querySelector(".alert");r.innerHTML+=`\n    <div class="popup">\n      <div class="content">\n        <div class="part">\n          <i class="fa-solid fa-x close fa-2x cancel" aria-hidden="true">x</i>\n          <img class="popImage" src="${n.image.medium}"/>\n          <p class="namepop">${n.name}</p>\n          <div id="${n.id}">\n            <span class="commentspan"></span>\n            <table class="table">\n              <tr>\n                <td>username</td>\n                <td>comment</td>\n                <td>creation_date</td>\n              </tr>\n            </table>\n          </div>\n          <form id="form">\n            <h2>Add Comment</h2><br>\n            <input type="text" id="username" placeholder="Your name" required/>\n            <textarea rows="5" id="usercomment" placeholder="Your comment" required></textarea>\n            <button class="btnSubmit" id="item${n.id}" type="submit">Comment</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  `;const e=document.querySelector("#form");e.addEventListener("submit",(async r=>{r.preventDefault();const t=document.querySelector(".table"),o=document.querySelector("#username"),a=document.querySelector("#usercomment"),i=o.value,c=a.value;await((n,r,e)=>{if(r&&e){const t=(async(n,r,e)=>(await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${v}/comments/`,{method:"POST",body:JSON.stringify({item_id:n,username:r,comment:e}),headers:{"Content-type":"application/json; charset=UTF-8"}})).text())(`item${n}`,r,e);return t}return n})(parseInt(n.id,10),i,c),t.innerHTML="",y(parseInt(n.id,10)),e.reset()})),y(parseInt(n.id,10)),(n=>{document.querySelector(".cancel").addEventListener("click",(()=>{n.innerHTML=""}))})(r)},x=async()=>{const n=(await(async()=>{const n=await fetch("https://api.tvmaze.com/shows");return await n.json()})()).splice(150,20);document.querySelectorAll(".comment").forEach((r=>{r.addEventListener("click",(r=>{const e=r.target.getAttribute("data-index"),t=n.find((n=>parseInt(n.id,10)===parseInt(e,10)));b(t)}))}))},w=async()=>{let n="";const r=document.querySelector(".main-wrapper");(await(async()=>{const n=await fetch("https://api.tvmaze.com/shows");return await n.json()})()).splice(150,20).forEach((e=>{n=`\n    <div class="movie-box">\n      <img src=${e.image.medium} alt="movie-img" class="movie-img">\n      <div class="like-line">\n      <span class="title">${e.name}</span>\n      <span class="dynLike"></span>\n      <span class="">Likes</span>\n      <img src=${h} alt="like -img" class="like-img">\n      </div>\n      <div id="btn-ctn">\n      <button id="${e.name}" data-index="${e.id}" class="comment comment-btn">comment </button>\n      </div>\n    </div>\n      `,r.innerHTML+=n}));const e=document.querySelectorAll(".movie-box"),t=document.querySelector(".count");(async n=>{n.forEach(((n,r)=>{(async()=>(await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7rRrAwWX4QCKCE1UcfQn/likes")).json())().then((e=>{e.forEach((e=>{r===e.item_id&&(n.querySelector(".dynLike").innerText=e.likes)}))}))}))})(e),((n,r)=>{const e=Array.from(n.children);r.innerText=`TV SHOWS (${e.length})`})(r,t),x()};document.getElementById("logo").src=g,(async()=>{await w(),(async()=>{document.querySelectorAll(".like-img").forEach(((n,r)=>{n.addEventListener("click",(async()=>{const n=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7rRrAwWX4QCKCE1UcfQn/likes",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({item_id:r})}).then((()=>!0)).catch((()=>!1)),e=document.querySelectorAll(".dynLike");return e[r].innerHTML=parseInt(e[r].innerHTML,10)+1,n}))}))})()})()})()})();