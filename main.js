(()=>{"use strict";var e={523:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(601),o=r.n(n),a=r(314),i=r.n(a)()(o());i.push([e.id,"#content\n{\n    background-color: #d5e547;\n}\n\nh1{\n    color:green;\n}\n\n/* #Menu, #Home\n{\nfont-size:20px;\n} */\n\np\n{\n    font-size: 2rem;\n}",""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);n&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=n.base?c[0]+n.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var h=r(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var f=o(p,n);n.byIndex=s,t.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),u=0;u<a.length;u++){var d=r(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.nc=void 0,(()=>{var e=r(72),t=r.n(e),n=r(825),o=r.n(n),a=r(659),i=r.n(a),s=r(56),c=r.n(s),u=r(540),d=r.n(u),l=r(113),h=r.n(l),p=r(523),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(p.A,f),p.A&&p.A.locals&&p.A.locals;const m=r.p+"2574e6f78078a08cdc00.jpg";function v(){let e;e=document.createElement("div"),e.setAttribute("id","homeDiv"),content.appendChild(e);const t=document.createElement("h1");t.textContent="About Star Trek Restaurant",e.appendChild(t);const r=document.createElement("p");r.textContent="Established in the year 2024 in the vibrant city of Melbourne, the StarTrek restaurant has quickly become a beloved destination for fans of the iconic Star Trek: The Next Generation TV series. Situated in the heart of the city, this restaurant is a homage to the futuristic adventures of the USS Enterprise and its crew.From the moment patrons step through the doors of the StarTrek restaurant, they are transported into the world of Captain Jean-Luc Picard, Commander William Riker, and the rest of the Enterprise-D crew. The interior of the restaurant is adorned with memorabilia and decor inspired by the show, creating an immersive experience for restaurants.The menu at StarTrek restaurant is a culinary journey through the beloved series, with each dish carefully crafted to pay homage to the characters and themes of Star Trek: The Next Generation. From classic favorites to creative interpretations, there's something for every fan to enjoy. Guests can start their meal with Captain Picard's Earl Grey Tea, a comforting blend of tea that pays tribute to the captain's signature beverage. For appetizers, they might indulge in Riker's Ribs, tender and succulent ribs slow-cooked to perfection and served with a tangy barbecue sauce.For the main course, options abound. Worf's Klingon Gagh offers a playful twist on the traditional Klingon delicacy, while Data's Circuit Fries provide a crunchy and satisfying snack inspired by the android's mechanical nature. And of course, no trip to StarTrek restaurant would be complete without trying The Borg Burger, a futuristic take on the classic burger featuring unique toppings and flavors. To round off the meal, guests can satisfy their sweet tooth with Beverly's Blue Jello, a nostalgic treat that harks back to scenes from the Enterprise's mess hall. Whether it's a casual meal with friends or a themed gathering for die-hard Trekkies, StarTrek restaurant offers a dining experience like no other. With its delicious food, immersive atmosphere, and unwavering dedication to all things Star Trek, it's no wonder that fans keep coming back to boldly dine where no one has dined before.",e.appendChild(r);const n=document.createElement("h1");n.textContent="Opening Times",e.appendChild(n),["Sunday: 8am - 8pm","Monday: 6am - 6pm","Tuesday: 6am - 6pm","Wednesday: 6am - 6pm","Thursday: 6am - 10pm","Friday: 6am - 10pm","Saturday: 8am - 10pm"].forEach((t=>{const r=document.createElement("p");r.textContent=t,e.appendChild(r)}));const o=document.createElement("h1");o.textContent="Location: 10 Bourke Street, Melbourne",e.appendChild(o)}console.log("This Works A+++");const g=document.querySelector("#content"),y=document.createElement("h1");y.textContent="Welcome To StarTrek restaurant, Melbourne",g.appendChild(y);const b=document.createElement("img");b.src=m,b.alt="Star Trek Banner",g.appendChild(b),v(),document.querySelector("#Home").addEventListener("click",(function(){v()})),document.querySelector("#Menu").addEventListener("click",(function(){!function(){let e;content.removeChild(homeDiv),e=document.createElement("div"),e.setAttribute("id","menuDiv"),content.appendChild(e);const t=document.createElement("h1");t.textContent="Menu",e.appendChild(t);const r=document.createElement("ol");["Captain Picard's Earl Grey Tea: A comforting blend of Earl Grey tea, just like Captain Picard enjoys on the bridge of the USS Enterprise. Served hot. - $2.50","Riker's Ribs: Tender and juicy ribs slow-cooked to perfection, just like Commander Riker would enjoy on shore leave. Served with your choice of barbecue sauce. - $15.99","Worf's Klingon Gagh: While we can't promise real worms, our version of Klingon Gagh features hearty noodles in a savory sauce, guaranteed to satisfy your warrior's appetite. Served with a side of spicy sauce. - $12.99","Geordi's Visor Vision Salad: A colorful and refreshing salad featuring a mix of fresh vegetables, paying homage to Geordi La Forge's iconic visor. Served with your choice of dressing. - $8.99","Data's Circuit Fries: Crispy french fries served with a side of dipping sauce, reminiscent of the circuits that power Lieutenant Commander Data's positronic brain. - $6.99","Deanna's Empathic Soup: A comforting soup featuring a blend of flavors that are sure to warm the heart, inspired by Counselor Troi's empathic abilities. Served with a slice of fresh bread. - $9.99","Beverly's Blue Jello: A sweet and nostalgic treat reminiscent of the blue-colored dessert often seen on the USS Enterprise. Served chilled. - $4.99","The Borg Burger: Resistance is futile against our Borg Burger! A futuristic take on the classic burger, featuring a juicy patty topped with unique ingredients and a special sauce. Served with your choice of side. - $13.99","Holodeck Special Pizza: Step into the culinary adventures of the Holodeck with our customizable pizza. Choose from a variety of toppings to create your own delicious masterpiece. - $11.99 (additional toppings $1.00 each)","Q's Quantum Quiche: An enigmatic quiche featuring a mix of flavors that are sure to surprise and delight, inspired by the mischievous Q. Served with a side salad. - $10.99"].forEach((t=>{const n=document.createElement("li");n.textContent=t,r.appendChild(n),e.appendChild(r)}))}()}))})()})();