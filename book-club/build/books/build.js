/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
/**
 * @lib Ajax Асинхронные клиентские запросы
 * @ver 0.1.0
 * @arg {object} options {url:string, data:object, success:function, error:function, jsonp:boolean|string}
 */
function Ajax (options) {
    var qs = ''
    if (options.data) {
        for (var key in options.data) {
            qs += '&'+ key +'='+ encodeURIComponent(options.data[key])
        }
        qs = qs.substr(1)
    }

    if (options.jsonp) {
        var callbackName = typeof options.jsonp === 'string'
            ?  options.jsonp
            : 'jsonp_callback_' + Math.random().toString().substr(2)

        window[callbackName] = function (data) {
            delete window[callbackName]
            document.head.removeChild(script)
            options.success(data)
        }

        var script = document.createElement('script')
        script.src = options.url + '?' + qs + '&callback=' + callbackName
        script.onerror = options.error
        document.head.appendChild(script)
    } else {
        try {
            var xhr = new (XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0')
            xhr.open('GET', options.url + (qs !== '' ? '?' + qs : ''), 1)
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
            xhr.onreadystatechange = function () {
                if (xhr.readyState > 3) {
                    if (xhr.status === 200) {
                        options.success && options.success(xhr.responseText, xhr)
                    } else {
                        options.error && options.error(xhr.responseText, xhr)
                    }
                }
            }
            xhr.send()
        } catch (e) {
            window.console && console.log(e)
        }
    }
}

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});



/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(u){var f,d,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in window.document||9<=window.document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],w=Array.prototype.slice;if(u.event.fixHooks)for(var i=e.length;i;)u.event.fixHooks[e[--i]]=u.event.mouseHooks;var c=u.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],n,!1);else this.onmousewheel=n;u.data(this,"mousewheel-line-height",c.getLineHeight(this)),u.data(this,"mousewheel-page-height",c.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],n,!1);else this.onmousewheel=null;u.removeData(this,"mousewheel-line-height"),u.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=u(e),i=t["offsetParent"in u.fn?"offsetParent":"parent"]();return i.length||(i=u("body")),parseInt(i.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return u(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function n(e){var t,i=e||window.event,n=w.call(arguments,1),o=0,l=0,s=0;if((e=u.event.fix(i)).type="mousewheel","detail"in i&&(s=-1*i.detail),"wheelDelta"in i&&(s=i.wheelDelta),"wheelDeltaY"in i&&(s=i.wheelDeltaY),"wheelDeltaX"in i&&(l=-1*i.wheelDeltaX),"axis"in i&&i.axis===i.HORIZONTAL_AXIS&&(l=-1*s,s=0),o=0===s?l:s,"deltaY"in i&&(o=s=-1*i.deltaY),"deltaX"in i&&(l=i.deltaX,0===s&&(o=-1*l)),0!==s||0!==l){if(1===i.deltaMode){var a=u.data(this,"mousewheel-line-height");o*=a,s*=a,l*=a}else if(2===i.deltaMode){var h=u.data(this,"mousewheel-page-height");o*=h,s*=h,l*=h}if(t=Math.max(Math.abs(s),Math.abs(l)),(!d||t<d)&&g(i,d=t)&&(d/=40),g(i,t)&&(o/=40,l/=40,s/=40),o=Math[1<=o?"floor":"ceil"](o/d),l=Math[1<=l?"floor":"ceil"](l/d),s=Math[1<=s?"floor":"ceil"](s/d),c.settings.normalizeOffset&&this.getBoundingClientRect){var r=this.getBoundingClientRect();e.offsetX=e.clientX-r.left,e.offsetY=e.clientY-r.top}return e.deltaX=l,e.deltaY=s,e.deltaFactor=d,e.deltaMode=0,n.unshift(e,o,l,s),f&&window.clearTimeout(f),f=window.setTimeout(m,200),(u.event.dispatch||u.event.handle).apply(this,n)}}function m(){d=null}function g(e,t){return c.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}u.fn.extend({mousewheel:function(e){return e?this.on("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.off("mousewheel",e)}})});
/**
 * @lib ColorWiz Работа с цетом
 * @ver 0.1.1
 * @url github.yandex-team.ru/kovchiy/colorwiz
 */
'use strict';

var ColorWiz = {}

;(function () {

var MAX_DARK_BACKGROUND_BRIGHTNESS = .9
var MIN_BRIGHT_BACKGROUND_BRIGHTNESS = .6
var MAX_BRIGHT_BACKGROUND_BRIGHTNESS = .9
var MIN_CONTRAST = .7
var OPTIMAL_TITLE_CONTRAST = .85
var OPTIMAL_TEXT_CONTRAST = .75
var MIN_BRIGHTNESS_DIFF = .4
var DEFAULT_TEXT_OPACITY = .7
var BRIGHT_COLOR_LIMIT = .8
var QUALITY = 100
var SIMILAR_COLOR_DISTANCE = 100
var SHADE_COLOR_DISTANCE = 200

var options = {
    debug: false,
    backgroundPriority: 'dark', // dark, bright
}

function magic (url, callback, userOptions) {
    options = extend(userOptions, options)
    onImageLoad(
        url,
        function () {
            var canvas  = document.createElement('canvas')
            var context = canvas.getContext('2d')
            var width
            var height

            width = canvas.width = this.width
            height = canvas.height = this.height
            context.drawImage(this, 0, 0, width, height)

            var imageData = context.getImageData(0, 0, width, height).data
            var pixelCount = width * height
            var pixels = []
            var qxq = QUALITY * QUALITY
            var step = QUALITY < pixelCount ? Math.round(pixelCount / qxq) : 1

            for (var i = 0, offset; i < pixelCount; i += step) {
                offset = i * 4

                if (imageData[offset + 3] < 255) continue

                pixels.push([
                    imageData[offset],
                    imageData[offset + 1],
                    imageData[offset + 2]
                ])
            }

            var palette = pixelsPalette(pixels)
            var color = compatibleColors(options.debug ? palette.concat([]) : palette)

            if (options.debug) {
                callback(palette, color)
            } else {
                callback(color)
            }
        }
    )
}

function isFilled (url, callback) {
    onImageLoad(
        url,
        function () {
            var canvas  = document.createElement('canvas')
            var context = canvas.getContext('2d')
            var width
            var height

            width = canvas.width = this.width
            height = canvas.height = this.height
            context.drawImage(this, 0, 0, width, height)

            var leftTop = context.getImageData(0, 0, 1, 1).data
            var rightTop = context.getImageData(width-1, 0, 1, 1).data
            var leftBottom = context.getImageData(0, height-1, 1, 1).data
            var rightBottom = context.getImageData(width-1, height-1, 1, 1).data

            callback(
                !isWhiteOrTransparentPixel(leftTop) &&
                !isWhiteOrTransparentPixel(rightTop) &&
                !isWhiteOrTransparentPixel(leftBottom) &&
                !isWhiteOrTransparentPixel(rightBottom)
            )
        }
    )
}

function isWhiteOrTransparentPixel (px) {
    return px[0] > 250 && px[1] > 250 && px[2] > 250 || px[3] !== 255
}

function onImageLoad (url, callback) {
    var image = document.createElement('img')
    image.crossOrigin = 'Anonymous'
    image.src = url.replace(/^url\(/, '').replace(/\)$/, '')
    image.onload = callback
}

function pixelsPalette (pixels) {
    var similars = []

    for (var i = 0, ii = pixels.length, similarFound, pixel; i < ii; i++) {
        pixel = pixels[i]
        similarFound = false

        for (var j = 0, jj = similars.length; j < jj; j++) {
            if (distance(similars[j][0], pixel) <= SIMILAR_COLOR_DISTANCE) {
                similars[j][1]++
                similarFound = true
                break
            }
        }
        if (!similarFound) {
            similars.push([pixel, 1])
        }
    }

    similars.sort(function (a, b) {
        return b[1] - a[1]
    })

    var palette = []
    for (var i = 0, ii = similars.length; i < ii; i++) {
        palette.push(similars[i][0])
    }

    return palette
}

function compatibleColors (palette) {
    var backgroundColor
    var titleColor
    var textColor
    var buttonColor

    // Find background color in palette, that is not too close to white
    var i = 0
    var backgroundBrightness

    for (; i < palette.length; i++) {
        backgroundColor = palette[i]
        backgroundBrightness = brightness(palette[i])

        if (
            options.backgroundPriority === 'dark' &&
            backgroundBrightness <= MAX_DARK_BACKGROUND_BRIGHTNESS
        ) {
            break
        }

        if (
            options.backgroundPriority === 'bright' && (
                backgroundBrightness >= MIN_BRIGHT_BACKGROUND_BRIGHTNESS &&
                backgroundBrightness <= MAX_BRIGHT_BACKGROUND_BRIGHTNESS
            )
        ) {
            break
        }
    }

    palette.splice(i, 1)

    // Fallback text color depends on background brightness
    var backgroundIsBright = brightness(backgroundColor) > BRIGHT_COLOR_LIMIT
    var fallbackColor = backgroundIsBright ? [0,0,0] : [255,255,255]

    // Find palette colors with enough contrast width background color
    for (var i = 0, ii = palette.length, con, bri, color; i < ii; i++) {
        color = palette[i]
        con = contrast(backgroundColor, color)
        bri = brightnessDifference(backgroundColor, color)

        if (con < MIN_CONTRAST && bri < MIN_BRIGHTNESS_DIFF) {
            continue
        }
        if (!titleColor) {
            titleColor = color
            continue
        }
        if (!textColor) {
            textColor = color
        }
        if (titleColor && textColor) {
            break
        }
    }

    // If text is brighter then title, swap them
    var titleBrightness
    var textBrightness
    if (titleColor && textColor) {
        titleBrightness = brightness(titleColor)
        textBrightness = brightness(textColor)

        if ((backgroundIsBright && textBrightness < titleBrightness) || (!backgroundIsBright && textBrightness > titleBrightness)) {
            var tempColor = titleColor
            titleColor = textColor
            textColor = tempColor

            var tempColor = titleBrightness
            titleBrightness = textBrightness
            textBrightness = tempColor
        }
    }

    // Adjust text contrast for readability
    if (titleColor) titleColor = titleBrightness < BRIGHT_COLOR_LIMIT
        ? adjustDarknessFor(titleColor, backgroundColor, OPTIMAL_TITLE_CONTRAST)
        : adjustLightnessFor(titleColor, backgroundColor, OPTIMAL_TITLE_CONTRAST)

    if (textColor) textColor = textBrightness < BRIGHT_COLOR_LIMIT
        ? adjustDarknessFor(textColor, backgroundColor, OPTIMAL_TEXT_CONTRAST)
        : adjustLightnessFor(textColor, backgroundColor, OPTIMAL_TEXT_CONTRAST)

    // Fallback if colors not found
    if (!textColor) {
        if (!titleColor || contrast(titleColor, fallbackColor) < MIN_CONTRAST) {
            textColor = blend(fallbackColor, backgroundColor, DEFAULT_TEXT_OPACITY)
        } else {
            textColor = titleColor
            titleColor = fallbackColor
        }
    }
    if (!titleColor) {
        titleColor = fallbackColor
    }

    // Button color
    buttonColor = backgroundIsBright ? darken(backgroundColor, .15) : lighten(backgroundColor, .1)

    return {
        background: rgb2css(backgroundColor),
        title: rgb2css(titleColor),
        text: rgb2css(textColor),
        button: rgb2css(buttonColor)
    }
}

function isBright (rgb) {
    return brightness(rgb) > BRIGHT_COLOR_LIMIT
}

/**
 * Pythagorean Distance
 */
function distance (rgb1, rgb2) {
    var rd = rgb1[0] - rgb2[0]
    var gd = rgb1[1] - rgb2[1]
    var bd = rgb1[2] - rgb2[2]

    return Math.sqrt(rd*rd + gd*gd + bd*bd)
}

function blend (rgb1, rgb2, alpha) {
    return [
        Math.round(rgb1[0]*alpha + rgb2[0]*(1-alpha)),
        Math.round(rgb1[1]*alpha + rgb2[1]*(1-alpha)),
        Math.round(rgb1[2]*alpha + rgb2[2]*(1-alpha))
    ]
}

/**
 *
 */
function difference (rgb1, rgb2) {
    var diff = Math.max(rgb1[0], rgb2[0]) - Math.min(rgb1[0], rgb2[0]) +
               Math.max(rgb1[1], rgb2[1]) - Math.min(rgb1[1], rgb2[1]) +
               Math.max(rgb1[2], rgb2[2]) - Math.min(rgb1[2], rgb2[2])

    return diff / 765
}

function hueDifference (rgb1, rgb2) {
    var hsl1 = rgb2hsl(rgb1)
    var hsl2 = rgb2hsl(rgb2)

    return Math.abs(hsl1[0] - hsl2[0]) / 360
}

/**
 * return number 0..1
 */
function brightnessDifference (rgb1, rgb2) {
    return Math.abs(brightness(rgb1) - brightness(rgb2))
}

/**
 * return string #000000
 */
function rgb2css (rgb) {
    return '#' + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1).toUpperCase()
}

/**
 * return number 0..1
 */
function luminance (rgb) {
    return 0.2126 * Math.pow(rgb[0]/255, 2.2) +
           0.7152 * Math.pow(rgb[1]/255, 2.2) +
           0.0722 * Math.pow(rgb[2]/255, 2.2)
}

/**
 * return number 0..1
 */
function readability (rgb1, rgb2) {
    var l1 = luminance(rgb1)
    var l2 = luminance(rgb2)
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
};

/**
 * return number 0..1
 */
function contrast (rgb1, rgb2) {
    var l1 = luminance(rgb1)
    var l2 = luminance(rgb2)
    var contrast = l1 < l2
        ? 1 - (l1 + 0.05) / (l2 + 0.05)
        : 1 - (l2 + 0.05) / (l1 + 0.05)

    return contrast
}

function adjustLightnessFor (rgb1, rgb2, base) {
    return lighten(
        rgb1, base - contrast(rgb1, rgb2)
    )
}

function adjustDarknessFor (rgb1, rgb2, base) {
    return darken(
        rgb1, base - contrast(rgb1, rgb2)
    )
}

/**
 * return number 0..1
 */
function brightness (rgb) {
    return (299*rgb[0] + 587*rgb[1] + 114*rgb[2]) / 1000 / 255
}

function extend (actuals, defaults) {
    if (!actuals) return defaults

    var extended = {}

    for (key in defaults) {
        if (typeof actuals[key] !== 'undefined') {
            extended[key] = actuals[key]
        } else {
            extended[key] = defaults[key]
        }
    }

    return extended
}

function rgb2hsl (rgb) {
    var r = rgb[0] / 255
    var g = rgb[1] / 255
    var b = rgb[2] / 255

    var max = Math.max(r, g, b)
    var min = Math.min(r, g, b)
    var h
    var s
    var l = (max + min) / 2

    if (max === min) {
        h = s = 0
    } else {
        var d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

        if (max === r) {
            h = (g - b) / d + (g < b ? 6 : 0)
        } else if (max === g) {
            h = (b - r) / d + 2
        } else if (max === b) {
            h = (r - g) / d + 4
        }

        h /= 6
    }

    return [
        unbound01(h, 360),
        unbound01(s, 100),
        unbound01(l, 100)
    ]
}

function hue2rgb (p, q, t) {
    if(t < 0) t += 1;
    if(t > 1) t -= 1;
    if(t < 1/6) return p + (q - p) * 6 * t
    if(t < 1/2) return q
    if(t < 2/3) return p + (q - p) * (2/3 - t) * 6
    return p
}

function hsl2rgb (hsl) {
    var r
    var g
    var b

    var h = hsl[0] / 360
    var s = hsl[1] / 100
    var l = hsl[2] / 100

    if (s === 0) {
        r = g = b = l
    } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s
        var p = 2 * l - q
        r = hue2rgb(p, q, h + 1/3)
        g = hue2rgb(p, q, h)
        b = hue2rgb(p, q, h - 1/3)
    }

    return [
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255)
    ]
}

function lighten (rgb, amount) {
    var hsl = rgb2hsl(rgb)

    hsl[2] += amount * 100
    hsl[2] = clamp (hsl[2], 100)

    return hsl2rgb(hsl)
}

function darken (rgb, amount) {
    var hsl = rgb2hsl(rgb)

    hsl[2] -= amount * 100
    hsl[2]  = clamp (hsl[2], 100)

    return hsl2rgb(hsl)
}

function brighten (rgb, amount) {
    var r = rgb[0]
    var g = rgb[1]
    var b = rgb[2]

    r = Math.max(0, Math.min(255, r - Math.round(255 * - (amount / 100))))
    g = Math.max(0, Math.min(255, g - Math.round(255 * - (amount / 100))))
    b = Math.max(0, Math.min(255, b - Math.round(255 * - (amount / 100))))

    return [r, g, b]
}

function clamp (value, base) {
    if (typeof base === 'undefined') base = 1
    return Math.min(base, Math.max(0, value))
}

function bound01(value, base) {
    return value / base
}

function unbound01(value, base) {
    return Math.round(value * base)
}

var regExpRgbString = /rgba?\(|\)|\s/g
function rgbString2rgbArray(string) {
    return string.replace(regExpRgbString,'').split(',').map(function (str) {
        return parseInt(str)
    })
}

function css2rgb (css) {
    if (css.length === 4) {
        var r = css[1]
        var g = css[2]
        var b = css[3]
        css = '#' + r + r + g + g + b + b
    }

    return [
        parseInt(css.substr(1,2), 16),
        parseInt(css.substr(3,2), 16),
        parseInt(css.substr(5,2), 16),
    ]
}


/*
 * Interface
 */
ColorWiz.darken = darken
ColorWiz.rgb2css = rgb2css
ColorWiz.css2rgb = css2rgb
ColorWiz.magic = magic
ColorWiz.brightness = brightness
ColorWiz.isBright = isBright
ColorWiz.rgbString2rgbArray = rgbString2rgbArray
ColorWiz.compatibleColors = compatibleColors
ColorWiz.isFilled = isFilled


})()
/**
 * @lib MissEvent Расширение методов работы с DOM
 * @ver 0.8.0
 * @url github.yandex-team.ru/kovchiy/missevent
 */
;(function () {

var ua = navigator.userAgent

var opera = ua.toLowerCase().indexOf("op") > -1
var chrome = ua.indexOf('Chrome') > -1 && !opera
var explorer = ua.indexOf('MSIE') > -1
var firefox = ua.indexOf('Firefox') > -1
var safari = ua.indexOf("Safari") > -1 && !chrome

var mobile = ua.match(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i) !== null
var android = ua.match(/Android/i) !== null

var href = window.location.href
var qsIndex = href.indexOf('?')
var qs = {}

if (qsIndex !== -1) {
    href.substring(qsIndex + 1).split('&').forEach(function (pair) {
        pair = pair.split('=')
        qs[pair[0]] = pair[1] === undefined ? '' : decodeURIComponent(pair[1])
    })

}

window.MissEvent = {
    /**
     * If mobile platform
     */
    mobile: mobile,
    android: android,
    ios: !android,

    /**
     * Current browser
     */
    chrome: chrome,
    explorer: explorer,
    firefox: firefox,
    safari: safari,
    opera: opera,

    /**
     * query string
     */
    qs: function (key, value) {
        if (value === undefined && typeof key === 'string') {
            return qs[key]
        } else {

            if (typeof key === 'string') {
                qs[key] = value
            } else {
                for (var i in key) qs[i] = key[i]
            }

            qsString = ''
            for (var key in qs) {
                if (qs[key] !== undefined && qs[key] !== '') {
                    qsString +=  '&' + key + '=' + qs[key]
                }
            }
            history.pushState(qs, document.title, window.location.pathname + '?' + qsString.substr(1))
        }
    },

    /**
     * Finger tap
     * @event tap
     * @domNode target
     */
    tap: function (domNode) {
        if (domNode.missEventTap) {
            return
        } else {
            domNode.missEventTap = true
        }

        if (!MissEvent.mobile) {
            return domNode.addEventListener('click', function (e) {
                this.dispatchEvent(new Event('tap'))
            })
        }

        var didTouch = false
        var didMove = false

        domNode.addEventListener('touchstart', function () {
            didTouch = true
            didMove = false
        })
        domNode.addEventListener('touchmove', function () {
            didTouch = false
            didMove = true
        })
        domNode.addEventListener('touchend', function (e) {
            if (didTouch && !didMove) {
                this.dispatchEvent(new Event('tap'))
                e.preventDefault()
            }
        })
    },

    /**
     * Horizontal swipe
     * @event     swipe    {delta: number, elasticDelta: number}
     * @event     didswipe {delta: number, elasticDelta: number, isFast: boolean}
     *
     * @domNode   target
     * @direction string   'horizontal', 'vertical'
     */
    swipe: function (domNode, direction, conditionCallback, fastSwipeTimeout, fastSwipeOffset) {
        if (domNode.missEventSwipe) {
            return
        } else {
            domNode.missEventSwipe = true
        }

        if (fastSwipeTimeout === undefined) fastSwipeTimeout = 500
        if (fastSwipeOffset === undefined) fastSwipeOffset = 15

        var didTouch = false
        var didFastSwipe = false
        var touchMoveDirection = ''
        var swipeTimeout = false
        var holdTime
        var elasticFactor = .2
        var fromX, fromY, toX, toY, deltaX, deltaY, delta, elasticDelta
        var willSwipe = false

        var parentWidth = domNode.offsetWidth
        var parentHeight = domNode.offsetHeight
        var parentOffsetLeft = domNode.offsetLeft
        var parentOffsetTop = domNode.offsetTop
        var parent = domNode

        while (parent = parent.offsetParent) {
            parentOffsetLeft += parent.offsetLeft
            parentOffsetTop += parent.offsetTop
        }

        domNode.addEventListener(MissEvent.mobile ? 'touchstart' : 'mousedown', function (e) {
            if (conditionCallback && !conditionCallback()) {
                return
            }

            didTouch = true
            fromX = e.touches ? e.touches[0].clientX : e.clientX
            fromY = e.touches ? e.touches[0].clientY : e.clientY
            delta = 0
            touchMoveDirection = ''
            holdTime = new Date
        })

        function move (e) {
            if (!didTouch) return

            holdTime = new Date

            toX = e.touches ? e.touches[0].clientX : e.clientX
            toY = e.touches ? e.touches[0].clientY : e.clientY

            deltaX = toX - fromX
            deltaY = toY - fromY

            if (touchMoveDirection === '') {
                touchMoveDirection = Math.abs(deltaX) < Math.abs(deltaY) ? 'vertical' : 'horizontal'
            }

            if (touchMoveDirection === direction) {
                e.preventDefault()

                if (willSwipe === false) {
                    willSwipe = true
                    domNode.dispatchEvent(
                        new CustomEvent('willswipe')
                    )
                }

                if (!swipeTimeout) {
                    didFastSwipe = true
                    swipeTimeout = setTimeout(function () {didFastSwipe = false}, fastSwipeTimeout)
                }

                delta = direction === 'horizontal' ?  deltaX : deltaY

                domNode.dispatchEvent(
                    new CustomEvent(
                        'swipe', {
                            detail: {
                                x: toX - parentOffsetLeft,
                                y: toY - parentOffsetTop,
                                delta: delta,
                                width: parentWidth,
                                height: parentHeight,
                                elasticFactor: elasticFactor
                            }
                        }
                    )
                )
            }
        }

        if (MissEvent.mobile) {
            domNode.addEventListener('touchmove', move)
        } else {
            window.addEventListener('mousemove', move)
        }

        function end (e) {
            if (!didTouch) return

            if (didTouch && !touchMoveDirection) {
                domNode.dispatchEvent(
                    new CustomEvent(
                         'swipefail', {
                            detail: {
                                x: fromX - parentOffsetLeft,
                                y: fromY - parentOffsetTop,
                                width: parentWidth,
                                height: parentHeight,
                            }
                        }
                    )
                )
            } else if (didTouch && touchMoveDirection === direction) {
                domNode.dispatchEvent(
                    new CustomEvent(
                         'didswipe', {
                            detail: {
                                x: toX - parentOffsetLeft,
                                y: toY - parentOffsetTop,
                                width: parentWidth,
                                height: parentHeight,
                                delta: delta,
                                elasticFactor: elasticFactor,
                                holdTime: new Date - holdTime,
                                isFast: didFastSwipe && Math.abs(delta) >= fastSwipeOffset,
                            }
                        }
                    )
                )
            }

            if (swipeTimeout) clearTimeout(swipeTimeout)

            didTouch = false
            didFastSwipe = false
            touchMoveDirection = false
            swipeTimeout = false
            willSwipe = false
        }

        if (MissEvent.mobile) {
            domNode.addEventListener('touchend', end)
        } else {
            window.addEventListener('mouseup', end)
        }
    },

    horizontalSwipe: function (domNode, conditionCallback, fastSwipeTimeout, fastSwipeOffset) {
        this.swipe(domNode, 'horizontal', conditionCallback, fastSwipeTimeout, fastSwipeOffset)
    },
    verticalSwipe: function (domNode, conditionCallback, fastSwipeTimeout, fastSwipeOffset) {
        this.swipe(domNode, 'vertical', conditionCallback, fastSwipeTimeout, fastSwipeOffset)
    },

    /**
     * Horizontal scroll visibility
     * @events visible, invisible
     * @domNode target
     * @parent container to scroll (window is default)
     */
    visible: function (domNode, conditionCallback, parent) {
        if (parent === undefined) {
            parent = window
        }

        var offsetTop = MissEvent.offset(domNode).top
        var offsetBottom = offsetTop + domNode.offsetHeight
        var visible

        function checkVisibility () {
            if (conditionCallback && !conditionCallback()) {
                if (visible !== false) {
                    domNode.dispatchEvent(new Event('invisible'))
                    visible = false
                }
                return
            }

            var scrollTop = (parent === window ? document.body : parent).scrollTop
            var scrollBottom = scrollTop + parent.innerHeight

            if (scrollBottom > offsetTop && scrollTop < offsetBottom) {
                if (visible !== true) {
                    domNode.dispatchEvent(new Event('visible'))
                    visible = true
                }
            } else {
                if (visible !== false) {
                    domNode.dispatchEvent(new Event('invisible'))
                    visible = false
                }
            }
        }

        parent.addEventListener('scroll', checkVisibility)
        checkVisibility()
    },

    offset: function (domNode) {
        if (domNode.offsetParent === null) {
            return undefined
        }

        var offsetTop = 0
        var offsetLeft = 0

        while (domNode.offsetParent !== null) {
            offsetTop += domNode.offsetTop
            offsetLeft += domNode.offsetLeft
            domNode = domNode.offsetParent
        }

        return {
            top: offsetTop,
            left: offsetLeft
        }
    },
}

})();
/**
 * @lib Beast
 * @ver 0.39.4
 * @url github.yandex-team.ru/kovchiy/beast
 */

'use strict';

;(function () {

if (typeof window !== 'undefined') {

    // Polyfill for window.CustomEvent in IE
    if (typeof window.CustomEvent !== 'function') {
        window.CustomEvent = function (event, params) {
            params = params || {bubbles: false, cancelable: false, detail: undefined}
            var e = document.createEvent('CustomEvent')
            e.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
            return e
        }
        window.CustomEvent.prototype = window.Event.prototype
    }

    window.Beast = {}
    document.addEventListener('DOMContentLoaded', function () {
        Beast.init()
    })

} else {
    global.Beast = {}
    module.exports = Beast
}

/*
 * Common vars
 */
var Declaration = {}                 // Declarations from Bease.decl()
var DeclarationFinished = false      // Flag turns true after the first Beast.node() call
var HttpRequestQueue = []            // Queue of required bml-files with link tag
var CssLinksToLoad = 0               // Num of <link rel="stylesheet"> in the <head>
var BeastIsReady = false             // If all styles and scripts are loaded
var OnBeastReadyCallbacks = []       // Functions to call when sources are ready
var ReStartBML = /<[a-z][^>]*\/?>/i  // matches start of BML substring
var ReDoubleQuote = /"/g             // matches "-symbols
var ReBackslash = /\\/g              // matches \-symbols
var ReLessThen = /</g                // matches <-symbols
var ReMoreThen = />/g                // matches >-symbols
var ReNL = /\n/g                     // matches \n-symbols
var ReCamelCase = /([a-z])([A-Z])/g  // matches camelCase pairs
var ReStylePairSplit = /:\s?/        // matches :-separation in style DOM-attribute

// Declaration properties that can't belong to user
var ReservedDeclarationProperies = {
    inherits:1,
    implementWith:1,
    expand:1,
    mod:1,
    mix:1,
    param:1,
    domInit:1,
    domAttr:1,
    on:1,
    onWin:1,
    onMod:1,
    onAttach:1,
    onRemove:1,
    tag:1,
    noElems:1,
    final:1,

    // 2 means not to inherit this field
    abstract:2,
    finalMod:2,
    __userMethods:2,
    __commonExpand:2,
    __flattenInherits:2,
    __finalMod:2,
    __elems:2,
    __isBlock:2,
}

// CSS-properties measured in px commonly
var CssPxProperty = {
    height:1,
    width:1,
    left:1,
    right:1,
    bottom:1,
    top:1,
    'line-height':1,
    'font-size':1,
}

// Single HTML-tags
var SingleTag = {
    area:1,
    base:1,
    br:1,
    col:1,
    command:1,
    embed:1,
    hr:1,
    img:1,
    input:1,
    keygen:1,
    link:1,
    meta:1,
    param:1,
    source:1,
    wbr:1,
}

// Text output helpers
function escapeDoubleQuotes (string) {
    return string.replace(ReBackslash, '\\\\').replace(ReDoubleQuote, '\\"').replace(ReNL, '\\n')
}
function escapeHtmlTags (string) {
    return string.replace(ReLessThen, '&lt;').replace(ReMoreThen, '&gt;')
}
function camelCaseToDash (string) {
    return string.replace(ReCamelCase, '$1-$2').toLowerCase()
}
function stringifyObject (ctx) {
    if (Array.isArray(ctx)) {
        var string = '['
        for (var i = 0, ii = ctx.length; i < ii; i++) {
            string += stringifyObject(ctx[i]) + ','
        }
        string = string.slice(0,-1)
        string += ']'
        return string
    }
    else if (typeof ctx === 'object') {
        var string = '{'
        for (var key in ctx) {
            if (ctx[key] !== undefined) {
                string += '"' + key + '":' + stringifyObject(ctx[key]) + ','
            }
        }
        if (string.length !== 1) {
            string = string.slice(0, -1)
        }
        string += '}'
        return string
    }
    else if (typeof ctx === 'string') {
        return '"' + escapeDoubleQuotes(ctx) + '"'
    }
    else if (typeof ctx === 'function' && ctx.beastDeclPath !== undefined) {
        return ctx.beastDeclPath
    }
    else {
        return ctx.toString()
    }
}
function objectIsEmpty (object) {
    for (var key in object) return false
    return true
}
function cloneObject (ctx) {
    if (Array.isArray(ctx)) {
        var array = []
        for (var i = 0, ii = ctx.length; i < ii; i++) {
            array.push(
                cloneObject(ctx[i])
            )
        }
        return array
    }
    else if (typeof ctx === 'object' && ctx !== null) {
        var object = {}
        for (var key in ctx) {
            object[key] = cloneObject(ctx[key])
        }
        return object
    }
    else {
        return ctx
    }
}

/**
 * Public Beast properties
 */
Beast.declaration = Declaration

/**
 * Initialize Beast
 */
Beast.init = function () {
    var links = document.getElementsByTagName('link')
    var bmlLinks = []

    for (var i = 0, ii = links.length; i < ii; i++) {
        var link = links[i]
        if (link.type === 'bml' || link.rel === 'bml') {
            RequireModule(link.href)
            bmlLinks.push(link)
        }
        if (link.rel === 'stylesheet') {
            CssLinksToLoad++
            link.onload = link.onerror = function () {
                CheckIfBeastIsReady()
            }
        }
    }

    for (var i = 0, ii = bmlLinks.length; i < ii; i++) {
        bmlLinks[i].parentNode.removeChild(bmlLinks[i])
    }

    CheckIfBeastIsReady()
}

/**
 * Require declaration script
 *
 * @url string Path to script file
 */
function RequireModule (url) {
    var xhr = new (XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0')
    xhr.open('GET', url)
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            CheckIfBeastIsReady()
        }
    }
    HttpRequestQueue.push(xhr)
    xhr.send()
}

/**
 * Checks if all <link> are loaded
 */
function CheckIfBeastIsReady () {
    if (BeastIsReady) return

    var isReady = true

    for (var i = 0, ii = HttpRequestQueue.length; i < ii; i++) {
        var xhr = HttpRequestQueue[i]
        if (xhr.readyState !== 4 || xhr.status !== 200) {
            isReady = false
        }
    }
    if (document.styleSheets.length < CssLinksToLoad) {
        isReady = false
    }

    if (isReady) {
        for (var i = 0, ii = HttpRequestQueue.length; i < ii; i++) {
            EvalBml(
                HttpRequestQueue[i].responseText
            )
        }
        HttpRequestQueue = []
        ProcessBmlScripts()

        BeastIsReady = true
        for (var i = 0, ii = OnBeastReadyCallbacks.length; i < ii; i++) {
            OnBeastReadyCallbacks[i]()
        }
    }
}

/**
 * Converts <script type="bml"/> tag to Beast::evalBml() method
 */
function ProcessBmlScripts () {
    var scripts = document.getElementsByTagName('script')

    for (var i = 0, ii = scripts.length; i < ii; i++) {
        var script = scripts[i]

        if (script === undefined) {
            continue
        }

        var text = script.text

        if (script.type === 'bml' && text !== '') {
            EvalBml(text)
        }
    }
}

/**
 * Parses and attaches declaration to <head>-node.
 * If there's only XML inside, appends node to document.body.
 *
 * @text string Text to parse and attach
 */
function EvalBml (text) {
    var rootNode = eval(Beast.parseBML(text))
    if (/^[\s\n]*</.test(text)) {
        rootNode.render(document.body)
    }
}

/**
 * Initialize DOM: assign DOM-nodes to BemNodes
 * @domNode DOMElement Node to start with
 */
Beast.domInit = function (domNode, isInnerCall, parentBemNode, parentBlock) {
    // No more Beast.decl() after the first Beast.domInit() call
    if (!DeclarationFinished) {
        DeclarationFinished = true
        CompileDeclarations()
    }

    if (domNode === undefined) {
        return false
    }
    // ELEMENT_NODE
    else if (domNode.nodeType === 1) {
        var nodeName = domNode.getAttribute('data-node-name')
        if (nodeName !== null) {

            // BemNode
            var bemNode = isInnerCall ? Beast.node(nodeName, {__context: parentBlock}) : Beast.node(nodeName)
            var stringToEval = ''
            var implementedNodeName = ''

            // Assign attributes
            for (var i = 0, ii = domNode.attributes.length, name, value; i < ii; i++) {
                name = domNode.attributes[i].name
                value = domNode.attributes[i].value

                // Parse style to css object
                if (name === 'style') {
                    var stylePairs = value.split(';')
                    for (var j = 0, jj = stylePairs.length, stylePair; j < jj; j++) {
                        stylePair = stylePairs[j].split(ReStylePairSplit)
                        bemNode.css(stylePair[0], stylePair[1])
                    }
                }
                // Restore encoded objects
                else if (name === 'data-event-handlers') {
                    stringToEval += ';bemNode._domNodeEventHandlers = ' + decodeURIComponent(value)
                }
                else if (name === 'data-window-event-handlers') {
                    stringToEval += ';bemNode._windowEventHandlers = ' + decodeURIComponent(value)
                }
                else if (name === 'data-mod-handlers') {
                    stringToEval += ';bemNode._modHandlers = ' + decodeURIComponent(value)
                }
                else if (name === 'data-dom-init-handlers') {
                    stringToEval += ';bemNode._domInitHandlers = ' + decodeURIComponent(value)
                }
                else if (name === 'data-mod') {
                    stringToEval += ';bemNode._mod = ' + decodeURIComponent(value)
                }
                else if (name === 'data-param') {
                    stringToEval += ';bemNode._param = ' + decodeURIComponent(value)
                }
                else if (name === 'data-implemented-node-name') {
                    implementedNodeName = value
                }
                else if (name === 'data-no-elems') {
                    bemNode._noElems = true
                }
                // Else _domAttr
                else if (name !== 'class') {
                    bemNode.domAttr(name, value)
                }
            }

            if (stringToEval !== '') {
                eval(stringToEval)
            }

            for (var key in bemNode._param) {
                if (bemNode._param[key].__isStringifiedBemNode === true) {
                    bemNode._param[key] = eval(bemNode._param[key].string)
                }
            }

            if (isInnerCall !== undefined) {
                var parentDomNode = parentBemNode._domNode
                parentBemNode._domNode = undefined

                if (implementedNodeName !== '') {
                    Beast.node(implementedNodeName, {__context:parentBlock})
                        .appendTo(parentBemNode)
                        .implementWith(bemNode, true)
                } else {
                    parentBemNode.append(bemNode)
                    if (parentBemNode._noElems === true) {
                        bemNode.parentBlock(parentBlock)
                    }
                }

                parentBemNode._domNode = parentDomNode
            }

            // Assign children
            for (var i = 0, ii = domNode.childNodes.length, childNode; i < ii; i++) {
                Beast.domInit(
                    domNode.childNodes[i],
                    true,
                    bemNode,
                    bemNode._noElems === true
                        ? bemNode._parentBlock._parentNode._parentBlock
                        : bemNode._parentBlock
                )
            }

            // Assign flags
            bemNode._renderedOnce = true
            bemNode._isExpanded = true

            // Crosslink
            bemNode._domNode = domNode
            domNode.bemNode = bemNode

            // Add event handlers
            if (bemNode._domNodeEventHandlers !== undefined) {
                for (var eventName in bemNode._domNodeEventHandlers) {
                    for (var i = 0, ii = bemNode._domNodeEventHandlers[eventName].length; i < ii; i++) {
                        bemNode.on(eventName, bemNode._domNodeEventHandlers[eventName][i], true, false, true)
                    }
                }
            }
            if (bemNode._windowEventHandlers !== undefined) {
                for (var eventName in bemNode._windowEventHandlers) {
                    for (var i = 0, ii = bemNode._windowEventHandlers[eventName].length; i < ii; i++) {
                        bemNode.onWin(eventName, bemNode._windowEventHandlers[eventName][i], true, false, true)
                    }
                }
            }

            if (isInnerCall === undefined) {
                function finalWalk (bemNode) {
                    for (var i = 0, ii = bemNode._children.length; i < ii; i++) {
                        if (bemNode._children[i] instanceof BemNode) {
                            finalWalk(bemNode._children[i])
                        }
                    }
                    for (var name in bemNode._mod) {
                        bemNode._callModHandlers(name, bemNode._mod[name])
                    }
                    bemNode._domInit()
                    bemNode._onAttach(true)
                }
                finalWalk(bemNode)
            }

            domNode.removeAttribute('data-event-handlers')
            domNode.removeAttribute('data-window-event-handlers')
            domNode.removeAttribute('data-mod-handlers')
            domNode.removeAttribute('data-mod')
            domNode.removeAttribute('data-param')
            domNode.removeAttribute('data-after-dom-init-handlers')
            domNode.removeAttribute('data-node-name')
            domNode.removeAttribute('data-implemented-node-name')
            domNode.removeAttribute('data-no-elems')

            return bemNode
        }
    }
    // TEXT_NODE
    else if (domNode.nodeType === 3) {
        parentBemNode.append(domNode.nodeValue)
        return domNode.nodeValue
    }

    return false
}

/**
 * Declaration standart fields:
 * - inherits       string|array Inherited declarations by selector
 * - expand         function     Expand instructions
 * - mod            object       Default modifiers
 * - noElems        object       If block can have elements
 * - param          object       Default parameters
 * - domInit        function     DOM inititial instructions
 * - on             object       Event handlers
 * - onWin          object       Window event hadnlers
 * - onMod          object       Modifier change actions
 * - tag            string       DOM tag name
 *
 * @selector string 'block' or 'block__elem'
 * @decl     object
 */
Beast.decl = function (selector, decl) {
    if (typeof selector === 'object') {
        for (var key in selector) {
            Beast.decl(key, selector[key])
        }
        return this
    } else {
        selector = selector.toLowerCase()
    }

    if (typeof decl.final === 'string') {
        decl.final = [decl.final]
    }

    if (typeof decl.inherits === 'string') {
        decl.inherits = [decl.inherits]
    }

    if (typeof decl.mix === 'string') {
        decl.mix = [decl.mix]
    }

    if (decl.inherits !== undefined) {
        for (var i = 0, ii = decl.inherits.length; i < ii; i++) {
            decl.inherits[i] = decl.inherits[i].toLowerCase()
        }
    }

    if (Declaration[selector] !== undefined) {
        extendDecl(decl, Declaration[selector])
    }

    Declaration[selector] = decl

    // Store element declartion in block declaration (for inheritance needs)
    var blockName = ''
    var elemName = ''

    if (selector.indexOf('__') === -1) {
        decl.__isBlock = true
        blockName = selector
    } else {
        decl.__isBlock = false

        var selectorParts = selector.split('__')
        blockName = selectorParts[0]
        elemName = selectorParts[1]

        if (Declaration[blockName] === undefined) {
            Declaration[blockName] = {}
        }

        if (Declaration[blockName].__elems === undefined) {
            Declaration[blockName].__elems = []
        }

        Declaration[blockName].__elems.push(elemName)
    }

    return this
}

/**
 * Extends declaration with another
 * @decl    object extending decl
 * @extDecl object decl to extend with
 */
function extendDecl (decl, extDecl) {
    for (var key in extDecl) {
        if (decl[key] === undefined) {
            decl[key] = extDecl[key]
        }
        else if (
            typeof extDecl[key] === 'object' && !Array.isArray(extDecl[key])
        ) {
            extendDecl(decl[key], extDecl[key])
        }
    }
}

/**
 * Creates bemNode object
 *
 * @name    string         Node name
 * @attr    object         Node attributes
 * @content string|bemNode Last multiple argument
 * @return  BemNode
 */
Beast.node = function (name, attr) {
    // No more Beast.decl() after the first Beast.node() call
    if (!DeclarationFinished) {
        DeclarationFinished = true
        CompileDeclarations()
    }

    return new BemNode(
        name, attr, Array.prototype.splice.call(arguments, 2)
    )
}

/**
 * Compiles declaration fileds to methods, makes inheritances
 */
function CompileDeclarations () {
    function extend (obj, extObj) {
        for (var key in extObj) {
            if (
                ReservedDeclarationProperies[key] === 2 ||
                extObj.final !== undefined && extObj.final.indexOf(key) !== -1
            ) {
                continue
            }

            if (obj[key] === undefined) {
                obj[key] = typeof extObj[key] === 'object' && extObj[key].constructor === 'Object'
                    ? cloneObject(extObj[key])
                    : extObj[key]
            }
            else if (
                typeof extObj[key] === 'function' && obj[key]._inheritedDeclFunction === undefined
            ) {
                (function (fn, inheritedFn, inheritedDecl) {
                    fn._inheritedDeclFunction = function () {
                        // Imitate inherited decl context for inner inherited() calls
                        var temp = this._decl
                        this._decl = inheritedDecl
                        inheritedFn.apply(this, arguments)
                        this._decl = temp
                    }
                })(obj[key], extObj[key], extObj)
            }
            else if (
                typeof extObj[key] === 'object' && !Array.isArray(extObj[key])
            ) {
                extend(obj[key], extObj[key])
            }
        }
    }

    function inherit (declSelector, decl, inheritedDecls, final) {
        for (var i = inheritedDecls.length - 1; i >= 0; i--) {
            var selector = inheritedDecls[i]
            var inheritedDecl = Declaration[selector]
            var prevFinal

            decl.__flattenInherits.push(selector.toLowerCase())

            if (inheritedDecl !== undefined) {
                extend(decl, inheritedDecl)

                if (inheritedDecl.finalMod === true) {
                    prevFinal = final
                    final = {selector:{}, mod:{}}
                }

                if (final !== undefined) {
                    final.selector[selector] = true
                    if (inheritedDecl.mod !== undefined) {
                        for (var modName in inheritedDecl.mod) {
                            final.mod[modName.toLowerCase()] = true
                        }
                    }
                }

                if (inheritedDecl.inherits !== undefined) {
                    inherit(declSelector, decl, inheritedDecl.inherits, final)
                }

                setFinal(decl, final)

                if (inheritedDecl.finalMod === true) {
                    final = prevFinal
                }

                // Automatic element inheritence for block
                if (inheritedDecl.__elems && decl.__isBlock) {
                    for (var j = 0, jj = inheritedDecl.__elems.length; j < jj; j++) {
                        var elemName = inheritedDecl.__elems[j]
                        var elemSelector = declSelector + '__' + elemName
                        if (Declaration[elemSelector] === undefined) {
                            Beast.decl(
                                elemSelector, {
                                    inherits: selector + '__' + elemName
                                }
                            )
                            if (generatedDeclSelectors.indexOf(elemSelector) === -1) {
                                generatedDeclSelectors.push(elemSelector)
                            }
                        }
                    }
                }
            }
        }
    }

    function setFinal (decl, final) {
        if (final !== undefined) {
            if (decl.__finalMod === undefined) {
                decl.__finalMod = {}
            }
            if (decl.__finalMod._selector === undefined) {
                decl.__finalMod._selector = {}
            }
            for (var modName in final.mod) {
                if (decl.__finalMod[modName] === undefined) {
                    decl.__finalMod[modName] = {}
                    for (var selector in final.selector) {
                        decl.__finalMod[modName][selector] = true
                        decl.__finalMod._selector[selector] = true
                    }
                }
            }
        }
    }

    var generatedDeclSelectors = []
    var forEachSelector = function (decl, selector) {

        var final
        if (decl.finalMod === true) {
            final = {selector:{}, mod:{}}
            final.selector[selector] = true
            if (decl.mod !== undefined) {
                for (var modName in decl.mod) {
                    final.mod[modName.toLowerCase()] = true
                }
            }
        }

        // Extend decl with inherited rules
        if (decl.inherits !== undefined) {
            decl.__flattenInherits = []
            inherit(selector, decl, decl.inherits, final)
        }

        setFinal(decl, final)

        // Compile expand rules to methods array
        var expandHandlers = []
        if (decl.implementWith !== undefined) {
            expandHandlers.unshift(function () {
                this.implementWith(
                    Beast.node(decl.implementWith, undefined, this.get())
                )
            })
        }
        if (decl.expand !== undefined) {
            expandHandlers.unshift(decl.expand)
        }
        if (decl.mix !== undefined) {
            expandHandlers.unshift(function () {
                this.mix.apply(this, decl.mix)
            })
        }
        if (decl.tag !== undefined) {
            expandHandlers.unshift(function () {
                this.tag(decl.tag)
            })
        }
        if (decl.noElems === true) {
            expandHandlers.unshift(function () {
                this.noElems()
            })
        }
        if (decl.domAttr !== undefined) {
            expandHandlers.unshift(function () {
                this.domAttr(decl.domAttr)
            })
        }
        if (decl.onMod !== undefined) {
            expandHandlers.unshift(function () {
                for (var modName in decl.onMod) {
                    for (var modValue in decl.onMod[modName]) {
                        this.onMod(modName, modValue, decl.onMod[modName][modValue], true)
                    }
                }
            })
        }
        if (decl.on !== undefined) {
            expandHandlers.unshift(function () {
                for (var events in decl.on) {
                    if (events === 'preventable') {
                        for (var preventableEvents in decl.on.preventable) {
                            this.on(preventableEvents, decl.on.preventable[preventableEvents], false, decl, true)
                        }
                    } else {
                        this.on(events, decl.on[events], false, decl)
                    }
                }
            })
        }
        if (decl.onWin !== undefined) {
            expandHandlers.unshift(function () {
                for (var events in decl.onWin) {
                    if (events === 'preventable') {
                        for (var preventableEvents in decl.onWin.preventable) {
                            this.onWin(preventableEvents, decl.onWin.preventable[preventableEvents], false, decl, true)
                        }
                    } else {
                        this.onWin(events, decl.onWin[events], false, decl)
                    }
                }
            })
        }

        // Compile expand handlers
        if (expandHandlers.length > 0) {
            decl.__commonExpand = function () {
                for (var i = 0, ii = expandHandlers.length; i < ii; i++) {
                    expandHandlers[i].call(this)
                }
            }
        }

        // Extract user methods
        decl.__userMethods = {}
        for (var key in decl) {
            if (ReservedDeclarationProperies[key] !== 1) {
                decl.__userMethods[key] = decl[key]
            }
        }

    }

    for (var selector in Declaration) {
        forEachSelector(Declaration[selector], selector)
    }

    if (generatedDeclSelectors.length !== 0) {
        for (var i = 0, ii = generatedDeclSelectors.length; i < ii; i++) {
            forEachSelector(
                Declaration[generatedDeclSelectors[i]],
                generatedDeclSelectors[i]
            )
        }
    }
}

/**
 * Set callback when Beast is ready
 *
 * @callback function Function to call
 */
Beast.onReady = function (callback) {
    if (BeastIsReady) {
        callback()
    } else {
        OnBeastReadyCallbacks.push(callback)
    }
}

;(function () {

Beast.parseBML = function (string) {
    js = ''
    buffer = ''
    char = ''
    prevChar = ''
    nextChar = ''
    lastPush = ''
    nodeAttrValueQuote = ''

    openNodesNum = 0
    openBracesNum = 0

    embedStack = []

    inBml = false
    inBmlComment = false
    inNode = false
    inClosingNode = false
    inNodeName = false
    inNodeAttrName = false
    inNodeAttrValue = false
    inNodeTextContent = false
    inSingleQuoteString = false
    inDoubleQuoteString = false
    inSingleLineComment = false
    inMultiLineComment = false
    inEmbed = false

    for (var i = 0, ii = string.length; i < ii; i++) {
        prevChar = i > 0 ? string[i - 1] : ''
        nextChar = i < ii - 1 ? string[i + 1] : ''
        char = string[i]

        // Reset escape char
        if (prevChar === '\\' && char === '\\') {
            prevChar = ''
        }

        /*
         * BML context
         */
        if (inBml) {
            // Node attr value
            if (inNodeAttrValue) {
                if (char === nodeAttrValueQuote && prevChar !== '\\') {
                    pushNodeAttrValue()
                }
                else if (char === '{' && prevChar !== '\\') {
                    pushNodeAttrValue(true)
                    pushEmbed()
                }
                else {
                    if ((char === '"' || char === "'") && prevChar !== '\\') {
                        buffer += '\\'
                    }
                    buffer += char
                }
            }
            // Comment
            else if (inBmlComment) {
                if (prevChar === '-' && char === '>') {
                    inBmlComment = false
                }
            }
            // Comment start
            else if (char === '<' && nextChar === '!') {
                inBmlComment = true
            }
            // Node text content
            else if (inNodeTextContent) {
                if (char === '<' && (nextChar === '/' || isLetter(nextChar))) {
                    pushNodeTextContent()
                }
                else if (char === '{' && prevChar !== '\\') {
                    pushNodeTextContent(true)
                    pushEmbed()
                }
                else {
                    if (char === '"') {
                        buffer += '\\' + char
                    }
                    else if (char === '\n') {
                        buffer += '\\n'
                    }
                    else {
                        buffer += char
                    }
                }
            }
            // Break char: space, new line or tab
            else if (isBreak(char)) {
                if (inNodeName) {
                    pushNodeName()
                    inNodeAttrName = true
                }
                else if (inNodeAttrName) {
                    pushNodeAttrName()
                }

                if (inNode && !inNodeName && isLetter(nextChar)) {
                    inNodeAttrName = true
                }
            }
            else if ((inNodeName || inNodeAttrName) && isLetterOrDigitOrDash(char)) {
                buffer += char

                // Node attr name start
                if (!inNodeName && !inNodeAttrName) {
                    inNodeAttrName = true
                }
            }
            // Node attr name end
            else if (inNodeAttrName && prevChar === '=' && (char === '"' || char === "'")) {
                pushNodeAttrName()
                inNodeAttrValue = true
                nodeAttrValueQuote = char
            }
            // Node opening start
            else if (!inNode && prevChar === '<' && isLetter(char)) {
                buffer += char
                inNode = true
                inNodeName = true
                pushNodeOpen()
            }
            // Node closing start
            else if (!inClosingNode && prevChar === '<' && char === '/' && isLetter(nextChar)) {
                inClosingNode = true
                inNodeName = true
            }
            // Single node closed
            else if (inNode && prevChar === '/' && char === '>') {
                if (inNodeName) {
                    pushNodeName()
                }
                if (inNodeAttrName) {
                    pushNodeAttrName()
                }

                pushClosingNode()
            }
            // Node opening end
            else if (inNode && char === '>') {
                if (inNodeName) {
                    pushNodeName()
                }
                if (inNodeAttrName) {
                    pushNodeAttrName()
                }

                pushOpeningNodeClose()
                inNodeTextContent = true
            }
            // Node closing end
            else if (char === '>' && inClosingNode) {
                pushClosingNode()
            }
            // Skip char for future
            else if (
                !(inNode && !inNodeAttrValue && char === '/' && nextChar === '>') &&
                !(inNodeAttrName && char === '=' && nextChar !== '=')
            ) {
                // Unexpected char
                throw (
                    'BML syntax error: Unexpected token "' + char + '": \n' +
                    string.substring(0, i+1).split('\n').slice(-5).join('\n') + '\n' +
                    js.slice(-100)
                )
            }
        }

        /*
         * JS context
         */
        else {
            // New line
            if (char === '\n') {
                if (inSingleLineComment) {
                    inSingleLineComment = false
                }
            }
            // Single line comment
            else if (prevChar === '/' && char === '/' && !inSingleQuoteString && !inDoubleQuoteString) {
                if (!inSingleLineComment) {
                    inSingleLineComment = true
                }
            }
            // Multi line comment
            else if (prevChar === '/' && char === '*' && !inSingleQuoteString && !inDoubleQuoteString) {
                if (!inMultiLineComment) {
                    inMultiLineComment = true
                }
            }
            else if (prevChar === '*' && char === '/' && !inSingleQuoteString && !inDoubleQuoteString) {
                if (inMultiLineComment) {
                    inMultiLineComment = false
                }
            }
            // If not inside comment
            else if (!inSingleLineComment && !inMultiLineComment) {
                // Single quote string
                if (!inDoubleQuoteString && char === "'" && prevChar !== '\\') {
                    inSingleQuoteString = !inSingleQuoteString
                }
                // Double quote string
                else if (!inSingleQuoteString && char === '"' && prevChar !== '\\') {
                    inDoubleQuoteString = !inDoubleQuoteString
                }
                // If not inside string
                else if (!inSingleQuoteString && !inDoubleQuoteString) {
                    // Embedded JS
                    if (inEmbed) {
                        if (char === '{') {
                            openBracesNum++
                        }
                        else if (char === '}') {
                            openBracesNum--
                        }

                        if (openBracesNum === 0) {
                            popEmbed()
                        }
                    }

                    // BML
                    if (!inBml && char === '<' && isLetter(nextChar)) {
                        inBml = true

                        if (inEmbed) {
                            embedStack.push([openNodesNum, openBracesNum, inNode, inNodeTextContent, inNodeAttrValue, nodeAttrValueQuote])
                            openNodesNum = 0
                            openBracesNum = 0
                            inNode = false
                            inNodeTextContent = false
                            inNodeAttrValue = false
                            nodeAttrValueQuote = ''
                        }
                    }
                }
            }
        }

        if (!inBml && char !== '') {
            js += char
        }
    }

    return js
}

var js = ''
var buffer = ''
var char = ''
var prevChar = ''
var nextChar = ''
var lastPush = ''
var nodeAttrValueQuote = ''

var openNodesNum = 0
var openBracesNum = 0

var embedStack = []

var inBml = false
var inBmlComment = false
var inNode = false
var inClosingNode = false
var inNodeName = false
var inNodeAttrName = false
var inNodeAttrValue = false
var inNodeTextContent = false
var inSingleQuoteString = false
var inDoubleQuoteString = false
var inSingleLineComment = false
var inMultiLineComment = false
var inEmbed = false

function pushNodeOpen () {

    if (!inEmbed || openNodesNum > 0) {
        if (lastPush === 'closingNode') {
            js += ','
        }
        else if (lastPush === 'nodeTextContent') {
            js += ','
        }
        else if (lastPush === 'embed') {
            js += ','
        }
        else if (lastPush === 'openingNodeClose') {
            js += ','
        }
        else if (lastPush === 'nodeName') {
            js += ',undefined,'
        }
        else if (lastPush === 'nodeAttrName') {
            js += 'true},'
        }
        else if (lastPush === 'nodeAttrValue') {
            js += '},'
        }
    }

    openNodesNum++
    js += 'Beast.node('
    lastPush = 'nodeOpen'
}

function pushClosingNode () {
    if (lastPush === 'nodeAttrName') {
        js += 'true}'
    }
    else if (lastPush === 'nodeAttrValue') {
        js += '}'
    }

    openNodesNum--
    js += ')'
    buffer = ''
    inNode = false
    inClosingNode = false
    inNodeTextContent = true
    inNodeName = false
    lastPush = 'closingNode'

    if (openNodesNum === 0) {
        if (inEmbed) {
            var parserState = embedStack.pop()
            openNodesNum = parserState[0]
            openBracesNum = parserState[1]
            inNode = parserState[2]
            inNodeTextContent = parserState[3]
            inNodeAttrValue = parserState[4]
            nodeAttrValueQuote = parserState[5]
        } else {
            inNodeTextContent = false
        }

        inBml = false
        char = ''
        prevChar = ''
        nextChar = ''
        lastPush = ''
    }
}

function pushNodeName () {
    js += '"' + buffer + '"'
    buffer = ''
    inNodeName = false
    lastPush = 'nodeName'

    if (openNodesNum === 1 && !inEmbed) {
        js += ',{__context:this'
        lastPush = 'nodeAttrValue'
    }
}

function pushNodeAttrName () {
    if (lastPush === 'nodeName') {
        js += ',{'
    }
    else if (lastPush === 'nodeAttrName') {
        js += 'true,'
    }
    else if (lastPush === 'nodeAttrValue') {
        js += ','
    }

    js += '"' + buffer + '":'
    buffer = ''
    inNodeAttrName = false
    lastPush = 'nodeAttrName'
}

function pushNodeAttrValue (beforePushEmbed) {
    if (lastPush === 'embed') {
        if (buffer !== '') {
            js += '+'
        }
    }
    else if (lastPush === 'nodeAttrName' && buffer === '' && beforePushEmbed === undefined) {
        js += 'false'
    }

    if (buffer !== '') {
        if (beforePushEmbed === undefined) {
            js += isNaN(buffer) || lastPush === 'embed' ? '"' + buffer + '"' : buffer
            buffer = ''
        } else {
            js += '"' + buffer + '"'
        }
    }

    if (beforePushEmbed === undefined) {
        nodeAttrValueQuote = ''
        inNodeAttrValue = false
    }

    lastPush = 'nodeAttrValue'
}

function pushOpeningNodeClose () {
    if (lastPush === 'nodeName') {
        if (nextChar !== '<') {
            js += ',undefined'
        }
    }
    else if (lastPush === 'nodeAttrName') {
        js += 'true}'
    }
    else if (lastPush === 'nodeAttrValue') {
        js += '}'
    }

    inNode = false
    lastPush = 'openingNodeClose'
}

function pushNodeTextContent (beforePushEmbed) {
    if (buffer !== '') {
        if (lastPush === 'closingNode') {
            js += ','
        }
        else if (lastPush === 'embed') {
            js += ','
        }
        else if (lastPush === 'openingNodeClose') {
            js += ','
        }

        js += '"' + buffer + '"'
        buffer = ''
        lastPush = 'nodeTextContent'
    }

    if (beforePushEmbed === undefined) {
        inNodeTextContent = false
    }
}

function pushEmbed () {
    if (inNodeTextContent) {
        if (lastPush === 'closingNode') {
            js += ','
        }
        else if (lastPush === 'nodeTextContent') {
            js += ','
        }
        else if (lastPush === 'openingNodeClose') {
            js += ','
        }
    }
    else if (inNodeAttrValue) {
        if (buffer !== '') {
            js += '+'
            buffer = ''
        }
    }

    openBracesNum++
    inBml = false
    inEmbed = true
    char = ''
    lastPush = 'embed'
}


function popEmbed () {
    if (inNodeAttrValue) {
        if (buffer !== '') {
            js += buffer
            buffer = ''
        }
    }

    inBml = true

    if (embedStack.length === 0) {
        inEmbed = false
    }

    lastPush = 'embed'
}

function isLetter (char) {
    return char >= 'A' && char <= 'z'
}

function isLetterOrDigitOrDash (char) {
    return char >= 'A' && char <= 'z' || char >= '0' && char <= '9' || char === '-'
}

function isBreak (char) {
    return char === ' ' || char === '\n' || char === '\t'
}

})();

/**
 * Parses and evaluates BML-string
 */
Beast.evalBML = function (string) {
    return eval(Beast.parseBML(string))
}

/**
 * Extracts keys from object in @arguments
 * @return Array Array of keys
 */
function keysFromObjects () {
    var keys = []
    for (var i = 0, ii = arguments.length; i < ii; i++) {
        if (arguments[i] === undefined) {
            continue
        }
        for (var key in arguments[i]) {
            if (keys.indexOf(key) === -1) {
                keys.push(key)
            }
        }
    }
    return keys
}

/**
 * BEM node class
 *
 * @nodeName string Starts with capital for block else for elem
 * @attr     object List of attributes
 * @children array  Child nodes
 */
var BemNode = function (nodeName, attr, children) {
    this._selector = ''                     // BEM-name: 'block' or 'block__elem'
    this._nodeName = nodeName               // BML-node name
    this._attr = attr || {}                 // BML-node attributes
    this._isBlock = false                   // flag if node is block
    this._isElem = false                    // flag if node is elem
    this._mod = {}                          // modifiers list
    this._param = {}                        // parameters list
    this._domNode = undefined               // DOM-node reference
    this._domAttr = {}                      // DOM-attributes
    this._domNodeEventHandlers = undefined  // DOM event handlers
    this._windowEventHandlers = undefined   // window event handlers
    this._modHandlers = undefined           // handlers on modifiers change
    this._domInitHandlers = []              // Handlers called after DOM-node inited
    this._domInited = false                 // Flag if DOM-node inited
    this._parentBlock = undefined           // parent block bemNode reference
    this._parentNode = undefined            // parent bemNode reference
    this._prevParentNode = undefined        // previous parent node value when parent node redefined
    this._children = []                     // list of children
    this._expandedChildren = undefined      // list of expanded children (for expand method purposes)
    this._isExpanded = false                // if Bem-node was expanded
    this._isExpandContext = false           // when flag is true append modifies expandedChildren
    this._isReplaceContext = false          // when flag is true append don't renders children's DOM
    this._isDomInitContext = false          // when flag is true inside domInit functions
    this._mix = []                          // list of additional CSS classes
    this._tag = 'div'                       // DOM-node name
    this._noElems = false                   // Flag if block can have children
    this._implementedNode = undefined       // Node wich this node implements
    this._css = {}                          // CSS properties
    this._cssClasses = undefined            // cached string of CSS classes
    this._decl = undefined                  // declaration for component
    this._flattenInherits = undefined       // array of flattened inherited declarations
    this._flattenInheritsForDom = undefined // array of inherited declarations to add as DOM-classes
    this._renderedOnce = false              // flag if component was rendered at least once
    this._elems = []                        // array of elements (for block only)

    // Define if block or elem
    var firstLetter = nodeName.substr(0,1)
    this._isBlock = firstLetter === firstLetter.toUpperCase()
    this._isElem = !this._isBlock

    // Define mods, params and special params
    for (var key in this._attr) {
        var firstLetter = key.substr(0,1)

        if (key === '__context') {
            if (this._parentBlock === undefined) {
                this.parentBlock(this._attr.__context)
            }
        } else if (firstLetter === firstLetter.toUpperCase()) {
            this._mod[key.toLowerCase()] = this._attr[key]
        } else {
            this._param[key.toLowerCase()] = this._attr[key]
        }
    }

    // Initial operations for block
    if (this._isBlock) {
        this._parentBlock = this
        this._defineDeclarationBySelector(nodeName.toLowerCase())
    }

    // Append children
    this.append.apply(this, children)
}

BemNode.prototype = {

    /**
     * Defines declaraion
     */
    _defineDeclarationBySelector: function (selector) {

        // Rerset old mods, params and state when declaration redefined
        if (this._decl !== undefined) {
            if (this._decl.mod !== undefined) {
                var nameLC
                for (var name in this._decl.mod) {
                    nameLC = name.toLowerCase()
                    if (this._mod[nameLC] === this._decl.mod[name]) {
                        this._mod[nameLC] = undefined
                    }
                }
            }
            if (this._decl.param !== undefined) {
                var nameLC
                for (var name in this._decl.param) {
                    nameLC = name.toLowerCase()
                    if (this._param[nameLC] === this._decl.param[name]) {
                        this._param[nameLC] = undefined
                    }
                }
            }
        }

        this._selector = selector
        this._decl = Declaration[this._selector]
        this._flattenInherits = this._decl && this._decl.__flattenInherits // in case of temporary _decl change
        this._flattenInheritsForDom = undefined

        if (this._decl !== undefined) {

            if (this._decl.mod !== undefined) {
                this.defineMod(this._decl.mod)
            }
            if (this._decl.param !== undefined) {
                this.defineParam(this._decl.param)
            }
        }

        if (this._flattenInherits !== undefined) {
            for (var i = 0, ii = this._flattenInherits.length, decl; i < ii; i++) {
                decl = Declaration[this._flattenInherits[i]]
                if (decl === undefined || decl.abstract === undefined) {
                    if (this._flattenInheritsForDom === undefined) {
                        this._flattenInheritsForDom = []
                    }
                    this._flattenInheritsForDom.push(this._flattenInherits[i])
                }
                else if (decl !== undefined) {
                    if (decl.mod !== undefined) {
                        this.defineMod(decl.mod)
                    }
                    if (decl.param !== undefined) {
                        this.defineParam(decl.param)
                    }
                }
            }
        }

        this._defineUserMethods()
    },

    /**
     * Defines user's methods
     */
    _defineUserMethods: function (selector) {
        var decl = selector !== undefined ? Declaration[selector] : this._decl
        if (decl) {
            for (var methodName in decl.__userMethods) {
                this[methodName] = decl.__userMethods[methodName]
            }
        }
    },

    /**
     * Clears user's methods
     */
    _clearUserMethods: function () {
        if (this._selector === '' || !Declaration[this._selector]) return
        var userMethods = Declaration[this._selector].__userMethods
        for (var methodName in userMethods) {
            this[methodName] = undefined
        }
    },

    /**
     * Runs overwritten method's code
     *
     * @caller function ECMA6 claims caller function link
     */
    inherited: function (caller) {
        if (caller && caller._inheritedDeclFunction !== undefined) {
            caller._inheritedDeclFunction.apply(
                this,
                Array.prototype.splice.call(arguments, 1)
            )
        }

        return this
    },

    /**
     * Checks if component is @selctor was inherited from @selector
     *
     * @selector string
     * @return boolean
     */
    isKindOf: function (selector) {
        selector = selector.toLowerCase()
        var isKindOfSelector = this._selector === selector

        if (!isKindOfSelector && this._flattenInherits !== undefined) {
            isKindOfSelector = this._flattenInherits.indexOf(selector) > -1
        }

        return isKindOfSelector
    },

    /**
     * If node is block
     *
     * @return boolean
     */
    isBlock: function () {
        return this._isBlock
    },

    /**
     * If node is element
     *
     * @return boolean
     */
    isElem: function () {
        return this._isElem
    },

    /**
     * Gets block or element name: 'block' or 'block__element'
     *
     * @return string
     */
    selector: function () {
        return this._selector
    },

    /**
     * Gets or sets node's tag name
     *
     * @return string
     */
    tag: function (tag) {
        if (tag === undefined) {
            return this._tag
        } else {
            if (!this._domNode) {
                this._tag = tag
            }
            return this
        }
    },

    /**
     * Sets css
     *
     * @name  string        css-property name
     * @value string|number css-property value
     */
    css: function (name, value) {
        if (typeof name === 'object') {
            for (var key in name) this.css(key, name[key])
        } else if (value === undefined) {
            if (this._domNode !== undefined && this._css[name] === undefined) {
                return window.getComputedStyle(this._domNode).getPropertyValue(name)
            } else {
                return this._css[name]
            }
        } else {
            if (typeof value === 'number' && CssPxProperty[name]) {
                value += 'px'
            }

            this._css[name] = value

            if (this._domNode) {
                this._setDomNodeCSS(name)
            }
        }

        return this
    },

    /**
     * Sets _noElems flag true
     */
    noElems: function () {
        this._noElems = true

        var parentOfParentBlock = this._parentBlock._parentNode
        while (parentOfParentBlock._noElems === true) {
            parentOfParentBlock = parentOfParentBlock._parentBlock._parentNode
        }
        this._setParentBlockForChildren(this, parentOfParentBlock)

        return this
    },

    /**
     * Only for elements. Gets or sets parent block bemNode reference.
     * Also sets bemNode name adding 'blockName__' before element name.
     * [@bemNode, [@dontAffectChildren]]
     *
     * @bemNode            object  Parent block node
     * @dontAffectChildren boolean If true, children won't get this parent block reference
     */
    parentBlock: function (bemNode, dontAffectChildren) {
        if (bemNode !== undefined) {
            if (this._isElem
                && bemNode instanceof BemNode
                && bemNode !== this._parentBlock) {

                if (bemNode._parentBlock !== undefined && bemNode._parentBlock._noElems) {
                    return this.parentBlock(bemNode._parentNode, dontAffectChildren)
                }

                this._clearUserMethods()
                this._removeFromParentBlockElems()
                this._parentBlock = bemNode._parentBlock
                this._addToParentBlockElems()
                this._defineDeclarationBySelector(
                    this._parentBlock._selector + '__' + this._nodeName.toLowerCase()
                )

                if (!dontAffectChildren) {
                    this._setParentBlockForChildren(this, bemNode)
                }

            }
            return this
        } else {
            return this._implementedNode !== undefined
                ? this._implementedNode._parentBlock
                : this._parentBlock
        }
    },

    /**
     * Recursive parent block setting
     *
     * @bemNode     object current node with children
     * @parentBlock object paren block reference
     */
    _setParentBlockForChildren: function (bemNode, parentBlock) {
        for (var i = 0, ii = bemNode._children.length; i < ii; i++) {
            var child = bemNode._children[i]
            if (child instanceof BemNode) {
                if (child._isElem) {
                    child.parentBlock(parentBlock)
                } else if (child._implementedNode !== undefined && child._implementedNode._isElem) {
                    child._implementedNode.parentBlock(parentBlock, true)
                }
            }
        }
    },

    /**
     * Gets or sets parent bemNode reference
     * [@bemNode]
     *
     * @bemNode object parent node
     */
    parentNode: function (bemNode) {
        if (bemNode !== undefined) {
            if (this._renderedOnce) {
                this.detach()
            }
            if (bemNode !== this._parentNode) {
                this._prevParentNode = this._parentNode
                this._parentNode = bemNode
            }
            return this
        } else {
            return this._parentNode
        }
    },

    /**
     * Gets DOM-node reference
     */
    domNode: function () {
        return this._domNode
    },

    /**
     * Set or get dom attr
     * @name, [@value]
     *
     * @name  string Attribute name
     * @value string Attribute value
     */
    domAttr: function (name, value, domOnly) {
        if (typeof name === 'object') {
            for (var key in name) this.domAttr(key, name[key])
        } else if (value === undefined) {
            return this._domNode === undefined ? this._domAttr[name] : this._domNode[name]
        } else {
            if (!domOnly) {
                this._domAttr[name] = value
            }
            if (this._domNode) {
                if (value === false || value === '') {
                    this._domNode.removeAttribute(name)
                } else {
                    this._domNode.setAttribute(name, value)
                }
            }
        }

        return this
    },

    /**
     * Define modifiers and its default values
     */
    defineMod: function (defaults) {
        if (this._implementedNode) {
            this._implementedNode._extendProperty('_mod', defaults)
        }
        return this._extendProperty('_mod', defaults)
    },

    /**
     * Extends object property with default object
     *
     * @propertyName string
     * @defaults     object
     */
    _extendProperty: function (propertyName, defaults, force)
    {
        var actuals = this[propertyName]
        var keyLC

        for (var key in defaults) {
            keyLC = key.toLowerCase()
            if ((force === true && defaults[key] !== undefined) || actuals[keyLC] === undefined || actuals[keyLC] === '') {
                actuals[keyLC] = defaults[key]
            }
        }

        return this
    },

    /**
     * Define parameters and its default values
     */
    defineParam: function (defaults) {
        return this._extendProperty('_param', defaults)
    },

    /**
     * Sets or gets mod
     * @name, [@value, [@data]]
     *
     * @name  string         Modifier name
     * @value string|boolean Modifier value
     * @data  anything       Additional data
     */
    mod: function (name, value, data) {
        if (name === undefined) {
            return this._mod
        } else if (typeof name === 'string') {
            name = name.toLowerCase()
        } else {
            for (var key in name) this.mod(key, name[key])
            return this
        }

        if (value === undefined) {
            return this._mod[name]
        } else if (this._mod[name] !== value) {
            this._cssClasses = undefined
            this._mod[name] = value
            if (this._implementedNode !== undefined) {
                this._implementedNode._cssClasses = undefined
                this._implementedNode._mod[name] = value
            }
            if (this._domNode !== undefined) {
                this._setDomNodeClasses()
                this._callModHandlers(name, value, data)
            }
        }

        return this
    },

    /**
     * Adds additional CSS-classes
     */
    mix: function () {
        for (var i = 0, ii = arguments.length; i < ii; i++) {
            this._mix.push(arguments[i])
        }

        if (this._domNode !== undefined) {
            this._setDomNodeClasses()
        }

        return this
    },

    /**
     * Toggles mods.
     *
     * @name   string         Modifier name
     * @value1 string|boolean Modifier value 1
     * @value2 string|boolean Modifier value 2
     */
    toggleMod: function (name, value1, value2, flag) {
        if (!this.mod(name)) {
            this.mod(name, value1, flag)
        } else if (this.mod(name) === value2) {
            this.mod(name, value1, flag)
        } else {
            this.mod(name, value2, flag)
        }

        return this
    },

    /**
     * Sets or gets parameter.
     * @name, [@value]
     *
     * @name  string
     * @value anything
     */
    param: function (name, value) {
        if (name === undefined) {
            return this._param
        } else if (typeof name === 'string') {
            name = name.toLowerCase()
        } else {
            for (var key in name) this.param(key, name[key])
            return this
        }

        if (value === undefined) {
            return this._param[name]
        } else {
            this._param[name] = value
        }

        return this
    },

    /**
     * Sets events handler
     *
     * @events  string   Space splitted event list: 'click' or 'click keypress'
     * @handler function
     */
    on: function (event, handler, isSingleEvent, fromDecl, dontCache, preventable) {
        if (typeof handler !== 'function') {
            return this
        }

        if (preventable === undefined) {
            preventable = false
        }

        if (handler.isBoundToNode === undefined) {
            var handlerOrigin = handler
            var handlerWrap = function (e) {
                handlerOrigin.call(this, e, e.detail)
            }
            handler = handlerWrap.bind(this)
            handler.isBoundToNode = true
            handler.unbindedHandler = handlerWrap
        }

        // Used in toHtml() method to restore function links
        if (fromDecl && handler.beastDeclPath === undefined) {
            handler.beastDeclPath = 'Beast.declaration["' + this._selector + '"].on["' + event + '"]'
        }

        if (!isSingleEvent && event.indexOf(' ') > -1) {
            var events = event.split(' ')
            for (var i = 0, ii = events.length; i < ii; i++) {
                this.on(events[i], handler, true, fromDecl)
            }
        } else {
            if (this._domNode !== undefined) {
                this._domNode.addEventListener(event, handler, {passive: !preventable})
            }

            if (dontCache === undefined) {
                if (this._domNodeEventHandlers === undefined) {
                    this._domNodeEventHandlers = {}
                }
                if (this._domNodeEventHandlers[event] === undefined) {
                    this._domNodeEventHandlers[event] = []
                }
                this._domNodeEventHandlers[event].push(handler)
            }

            if (this._isExpandContext && fromDecl === undefined) {
                handler.isExpandContext = true
                this._hasExpandContextEventHandlers = true
            }

            if (this._isDomInitContext) {
                handler.isDomInitContext = true
                this._hasDomInitContextEventHandlers = true
            }
        }

        return this
    },

    /**
     * Sets modifier change handler
     *
     * @modName  string
     * @modValue string|boolean
     * @handler  function
     */
    onWin: function (event, handler, isSingleEvent, fromDecl, dontCache, preventable) {
        if (typeof handler !== 'function') {
            return this
        }

        if (preventable === undefined) {
            preventable = false
        }

        if (handler.isBoundToNode === undefined) {
            var handlerOrigin = handler
            handler = function (e) {
                handlerOrigin.call(this, e, e.detail)
            }.bind(this)
            handler.isBoundToNode = true
        }

        // Used in toHtml() method to restore function links
        if (fromDecl && handler.beastDeclPath === undefined) {
            handler.beastDeclPath = 'Beast.declaration["' + this._selector + '"].onWin["' + event + '"]'
        }

        if (!isSingleEvent && event.indexOf(' ') > -1) {
            var events = event.split(' ')
            for (var i = 0, ii = events.length; i < ii; i++) {
                this.onWin(events[i], handler, true, fromDecl)
            }
        } else {
            if (this._domNode !== undefined) {
                window.addEventListener(event, handler, {passive: !preventable})
            }

            if (!dontCache) {
                if (this._windowEventHandlers === undefined) {
                    this._windowEventHandlers = {}
                }
                if (this._windowEventHandlers[event] === undefined) {
                    this._windowEventHandlers[event] = []
                }
                this._windowEventHandlers[event].push(handler)
            }

            if (this._isExpandContext && !fromDecl) {
                handler.isExpandContext = true
                this._hasExpandContextWindowEventHandlers = true
            }
            if (this._isDomInitContext) {
                handler.isDomInitContext = true
                this._hasDomInitContextWindowEventHandlers = true
            }
        }

        return this
    },

    /**
     * Sets modifier change handler
     *
     * @modName  string
     * @modValue string|boolean
     * @handler  function
     * @fromDecl boolean Private param for cache
     */
    onMod: function (modName, modValue, handler, fromDecl) {

        if (this._isExpandContext && !fromDecl) {
            handler.isExpandContext = true
            this._hasExpandContextModHandlers = true
        }

        // Used in toHtml() method to restore function links
        if (fromDecl) {
            handler.beastDeclPath = 'Beast.declaration["' + this._selector + '"].onMod["' + modName + '"]["' + modValue + '"]'
        }

        modName = modName.toLowerCase()

        if (this._modHandlers === undefined) {
            this._modHandlers = {}
        }
        if (this._modHandlers[modName] === undefined) {
            this._modHandlers[modName] = {}
        }
        if (this._modHandlers[modName][modValue] === undefined) {
            this._modHandlers[modName][modValue] = []
        }
        this._modHandlers[modName][modValue].push(handler)

        return this
    },

    /**
     * Triggers event
     *
     * @eventName string
     * @data      anything Additional data
     */
    trigger: function (eventName, data) {
        if (this._domNode !== undefined) {
            this._domNode.dispatchEvent(
                data !== undefined
                    ? new CustomEvent(eventName, {detail:data})
                    : new Event(eventName)
            )
        }

        return this
    },

    /**
     * Triggers window event
     *
     * @eventName string
     * @data      anything Additional data
     */
    triggerWin: function (eventName, data) {
        if (this._domNode !== undefined) {
            eventName = this.parentBlock()._nodeName + ':' + eventName
            window.dispatchEvent(
                data !== undefined
                    ? new CustomEvent(eventName, {detail:data})
                    : new Event(eventName)
            )
        }

        return this
    },

    /**
     * Gets current node index among siblings
     *
     * @return number
     */
    index: function (allowStrings) {
        var siblings = this._parentNode._children
        var dec = 0
        for (var i = 0, ii = siblings.length; i < ii; i++) {
            if (typeof siblings[i] === 'string') dec++
            if (siblings[i] === this) return allowStrings ? i : i - dec
        }
    },

    /**
     * Empties children
     */
    empty: function () {
        var children

        if (this._isExpandContext) {
            children = this._expandedChildren
            this._expandedChildren = []
        } else {
            children = this._children
            this._children = []
        }

        if (children) {
            for (var i = 0, ii = children.length; i < ii; i++) {
                if (children[i] instanceof BemNode) {
                    children[i].remove()
                }
            }
        }

        if (this._domNode) {
            // Child text nodes could be left
            while (this._domNode.firstChild) {
                this._domNode.removeChild(this._domNode.firstChild)
            }
        }

        return this
    },

    /**
     * Removes itself from parent block elems array
     */
    _removeFromParentBlockElems: function () {
        var parentBlock

        if (this._isElem) {
            parentBlock = this._parentBlock
        } else if (this._isBlock && this._implementedNode !== undefined) {
            parentBlock = this._implementedNode._parentBlock
        }

        if (parentBlock !== undefined) {
            for (var i = 0, ii = parentBlock._elems.length; i < ii; i++) {
                if (parentBlock._elems[i] === this) {
                    parentBlock._elems.splice(i, 1)
                    break
                }
            }
        }
    },

    /**
     * Adds itself to parent block elems array
     */
    _addToParentBlockElems: function () {
        var parentBlock

        if (this._isElem) {
            parentBlock = this._parentBlock
        } else if (this._isBlock && this._implementedNode !== undefined) {
            parentBlock = this._implementedNode._parentBlock
        }

        if (parentBlock !== undefined) {
            parentBlock._elems.push(this)
        }
    },

    /**
     * Removes itself
     */
    remove: function () {
        this._onRemove()

        // Proper remove children
        for (var i = 0, ii = this._children.length; i < ii; i++) {
            if (this._children[i] instanceof BemNode) {
                this._children[i].remove()
                i--
            }
        }

        // Remove window handlers
        if (this._windowEventHandlers !== undefined) {
            for (var eventName in this._windowEventHandlers) {
                for (var i = 0, ii = this._windowEventHandlers[eventName].length; i < ii; i++) {
                    window.removeEventListener(
                        eventName, this._windowEventHandlers[eventName][i]
                    )
                }
            }
        }

        this.detach()
    },

    /**
     * Instructions before removing node
     */
    _onRemove: function () {
        if (this._decl !== undefined && this._decl.onRemove !== undefined) {
            this._decl.onRemove.call(this)
        }
    },

    /**
     * Detaches itself
     */
    detach: function () {

        // Remove DOM node
        if (this._domNode && this._domNode.parentNode) {
            this._domNode.parentNode.removeChild(this._domNode)
        }

        // Remove from parentNode's children
        if (this._parentNode) {
            this._parentNode._children.splice(
                this._parentNode._children.indexOf(this), 1
            )
            this._parentNode = undefined
        }

        this._removeFromParentBlockElems()

        return this
    },

    /**
     * Inserts new children by index. If there's no DOM yet,
     * appends to expandedChildren else appends to children
     * and renders its DOM.
     *
     * @children string|object Children to insert
     * @index    number        Index to insert
     */
    insertChild: function (children, index) {
        for (var i = 0, ii = children.length; i < ii; i++) {
            var child = children[i]

            if (child === false || child === null || child === undefined) {
                continue
            } else if (Array.isArray(child)) {
                this.insertChild(child, index)
                continue
            } else if (child instanceof BemNode) {
                child.parentNode(this)
                if (child._isElem) {
                    if (this._isBlock) {
                        child.parentBlock(this)
                    } else if (this._parentBlock !== undefined) {
                        child.parentBlock(this._parentBlock)
                    }
                }
            } else if (typeof child === 'number') {
                child = child.toString()
            }

            var childrenToChange = this._children

            if (this._isExpandContext) {
                if (this._expandedChildren === undefined) {
                    this._expandedChildren = []
                }
                childrenToChange = this._expandedChildren
            }

            if (index === 0) {
                childrenToChange.unshift(child)
            } else if (index === -1) {
                childrenToChange.push(child)
            } else {
                childrenToChange.splice(index, 0, child)
            }

            if (this._domNode && !this._isReplaceContext) {
                this._renderChildWithIndex(
                    index === -1 ? childrenToChange.length - 1 : index
                )
            }
        }

        return this
    },

    /**
     * Appends new children. If there's no DOM yet,
     * appends to expandedChildren else appends to children
     * and renders its DOM.
     *
     * @children string|object Multiple argument
     */
    append: function () {
        return this.insertChild(arguments, -1)
    },

    /**
     * Prepends new children. If there's no DOM yet,
     * appends to expandedChildren else appends to children
     * and renders its DOM.
     *
     * @children string|object Multiple argument
     */
    prepend: function () {
        return this.insertChild(arguments, 0)
    },

    /**
     * Appends node to the target. If current node belongs to another parent,
     * method removes it from the old context.
     *
     * @bemNode object Target
     */
    appendTo: function (bemNode) {
        bemNode.append(this)
        return this
    },

    /**
     * Prepends node to the target. If current node belongs to another parent,
     * method removes it from the old context.
     *
     * @bemNode object Target
     */
    prependTo: function (bemNode) {
        bemNode.prepend(this)
        return this
    },

    /**
     * Replaces current bemNode with the new
     * @bemNode   BemNode Node that replaces
     * @ignoreDom boolean Private flag - do not change DOM; used in toHtml() method
     */
    replaceWith: function (bemNode, ignoreDom) {
        this._completeExpand()

        var parentNode = this._parentNode
        var siblingsAfter

        if (parentNode !== undefined) {
            if (parentNode === bemNode) {
                parentNode = this._prevParentNode
            } else {
                siblingsAfter = parentNode._children.splice(this.index(true))
                siblingsAfter.shift()
            }
            parentNode._isReplaceContext = true
            parentNode.append(bemNode)
            parentNode._isReplaceContext = false
        }

        if (siblingsAfter !== undefined) {
            parentNode._children = parentNode._children.concat(siblingsAfter)
        }

        this._parentNode = undefined

        if (bemNode instanceof BemNode) {
            if (bemNode._isBlock) {
                bemNode._resetParentBlockForChildren()
            }

            if (ignoreDom === undefined) {
                bemNode.render()
            }
        }
    },

    /**
     * Recursive setting parentBlock as this for child elements
     */
    _resetParentBlockForChildren: function () {
        for (var i = 0, ii = this._children.length; i < ii; i++) {
            var child = this._children[i]
            if (child instanceof BemNode && child._isElem) {
                child.parentBlock(this._parentBlock)
                child._resetParentBlockForChildren(this._parentBlock)
            }
        }
    },

    /**
     * Replaces current bemNode with the new wich implemets its declaration
     * @bemNode   BemNode Node that implements
     * @ignoreDom boolean Private flag - do not change DOM; used in toHtml() method
     */
    implementWith: function (bemNode, ignoreDom) {
        this._cssClasses = undefined

        if (this._domNodeEventHandlers !== undefined) {
            bemNode._domNodeEventHandlers = this._domNodeEventHandlers

            for (var key in bemNode._domNodeEventHandlers) {
                for (var i = 0, ii = bemNode._domNodeEventHandlers[key].length, beastDeclPath; i < ii; i++) {
                    beastDeclPath = bemNode._domNodeEventHandlers[key][i].beastDeclPath
                    bemNode._domNodeEventHandlers[key][i] = bemNode._domNodeEventHandlers[key][i].unbindedHandler.bind(bemNode)
                    bemNode._domNodeEventHandlers[key][i].beastDeclPath = beastDeclPath
                }
            }
        }

        if (this._windowEventHandlers !== undefined) {
            bemNode._windowEventHandlers = this._windowEventHandlers
        }

        if (this._modHandlers !== undefined) {
            bemNode._modHandlers = this._modHandlers
        }

        bemNode._implementedNode = this
        this._implementedWith = bemNode

        bemNode._extendProperty('_mod', this._mod, true)
        bemNode._extendProperty('_param', this._param, true)
        this._extendProperty('_mod', bemNode._mod)

        bemNode._defineUserMethods(this._selector)

        if (this._parentBlock !== undefined && this._parentBlock._elems !== undefined) {
            for (var i = 0, ii = this._parentBlock._elems.length; i < ii; i++) {
                if (this._parentBlock._elems[i] === this) {
                    this._parentBlock._elems[i] = bemNode
                    break
                }
            }
        }

        this.replaceWith(bemNode, ignoreDom)
    },

    /**
     * Filters text in children
     *
     * @return string
     */
    text: function () {
        var text = ''
        for (var i = 0, ii = this._children.length; i < ii; i++) {
            if (typeof this._children[i] === 'string') {
                text += this._children[i]
            }
        }

        return text
    },

    /**
     * Gets elements by name
     */
    elem: function () {
        if (this._isElem) {
            return this.elem.apply(this._parentBlock, arguments)
        }

        if (arguments.length === 0) {
            return this._elems
        }

        var elems = []
        for (var i = 0, ii = this._elems.length, elem; i < ii; i++) {
            elem = this._elems[i]
            for (var j = 0, jj = arguments.length, elemName; j < jj; j++) {
                elemName = arguments[j]
                if (elem._nodeName === elemName ||
                    elem._implementedNode !== undefined && elem._implementedNode._nodeName === elemName
                ) {
                    elems.push(elem)
                }
            }
        }

        return elems
    },

    /**
     * Finds bemNodes by names:
     * @nodeName string Multiple argument: path to node or attribute
     * @return   array  bemNodes collection
     */
    get: function () {
        if (arguments.length === 0) {
            return this._children
        }

        var collections = []
        for (var i = 0, ii = arguments.length, collection; i < ii; i++) {
            if (arguments[i] === '/') {
                collection = this._filterChildNodes()
            } else if (arguments[i].indexOf('/') === -1) {
                collection = this._filterChildNodes(arguments[i])
            } else {
                var pathItems = arguments[i].split('/')

                for (var j = 0, jj = pathItems.length; j < jj; j++) {
                    var pathItem = pathItems[j]

                    if (j === 0) {
                        collection = this._filterChildNodes(pathItem)
                    } else {
                        var prevCollection = collection
                        collection = []
                        for (var k = 0, kk = prevCollection.length; k < kk; k++) {
                            collection = collection.concat(
                                this._filterChildNodes.call(prevCollection[k], pathItem)
                            )
                        }
                    }

                    if (collection.length === 0) {
                        break
                    }
                }
            }

            collections = ii === 1 ? collection : collections.concat(collection)
        }
        return collections
    },

    /**
     * Collects children by node name
     *
     * @name   string Child node name
     * @return array  Filtered children
     */
    _filterChildNodes: function (name) {
        var collection = [], child, childName, implementedChildName
        for (var i = 0, ii = this._children.length; i < ii; i++) {
            child = this._children[i]
            childName = child._nodeName
            implementedChildName = child._implementedNode !== undefined ? child._implementedNode._nodeName : ''

            if (
                child instanceof BemNode && (
                    name === undefined
                    || name === childName
                    || name === implementedChildName
                    || Array.isArray(name) && (
                        name.indexOf(childName) !== -1 || name.indexOf(implementedChildName) !== -1
                    )
                )
            ) {
                collection.push(child)
            }
        }

        return collection
    },

    /**
     * Checks if there are any children
     *
     * @path string Multiple argument: path to node or attribute
     */
    has: function () {
        return this.get.apply(this, arguments).length > 0
    },

    /**
     * Set handler to call afted DOM-node inited
     *
     * @callback function Handler to call
     */
    onDomInit: function (handler) {
        if (!this._domInited) {
            this._domInitHandlers.push(handler)
        } else {
            handler.call(this)
        }

        return this
    },

    /**
     * Clones itself
     */
    clone: function (parentNodeOfClone) {
        var clone = {}
        clone.__proto__ = this.__proto__

        for (var key in this) {
            if (key === '_children') {
                var cloneChildren = []
                for (var i = 0, ii = this._children.length; i < ii; i++) {
                    cloneChildren.push(
                        this._children[i] instanceof BemNode
                            ? this._children[i].clone(clone)
                            : this._children[i]
                    )
                }
                clone._children = cloneChildren
            } else {
                clone[key] = this[key]
            }
        }

        if (parentNodeOfClone !== undefined) {
            clone._parentNode = parentNodeOfClone
        }

        return clone
    },

    /**
     * Expands bemNode. Creates DOM-node and appends to the parent bemNode's DOM.
     * Also renders its children. Inits DOM declarations at the end.
     *
     * @parentDOMNode object Parent for the root node attaching
     */
    render: function (parentDOMNode) {

        // Call expand handler
        if (!this._isExpanded && this._decl !== undefined && this._decl.__commonExpand !== undefined) {
            this._isExpandContext = true
            this._decl.__commonExpand.call(this)
            this._completeExpand()
            this._isExpandContext = false
        }

        // Continue only if parent node is defined and document is defiend too
        if (parentDOMNode === undefined && this._parentNode === undefined || typeof document === 'undefined') {
            return this
        }

        // Create DOM element if there isn't
        if (this._domNode === undefined) {
            this._domNode = document.createElement(this._tag)
            this._domNode.bemNode = this

            this._setDomNodeClasses()
            this._setDomNodeCSS()

            for (var key in this._domAttr) {
                this.domAttr(key, this._domAttr[key], true)
            }
        }

        // Append to DOM tree
        if (parentDOMNode !== undefined) {
            parentDOMNode.appendChild(this._domNode)
        } else {
            this._parentNode._domNode.insertBefore(
                this._domNode,
                this._parentNode._domNode.childNodes[
                    this.index(true)
                ] || null
            )
        }

        var renderedOnce = this._renderedOnce

        // When first time render
        if (!this._renderedOnce) {

            // Render children
            for (var i = 0, ii = this._children.length; i < ii; i++) {
                this._renderChildWithIndex(i)
            }

            // For HTML-body remove previous body tag
            if (this._tag === 'body') {
                document.documentElement.replaceChild(this._domNode, document.body)
            }

            // Add event handlers
            if (this._domNodeEventHandlers !== undefined) {
                for (var eventName in this._domNodeEventHandlers) {
                    for (var i = 0, ii = this._domNodeEventHandlers[eventName].length; i < ii; i++) {
                        this.on(eventName, this._domNodeEventHandlers[eventName][i], true, false, true)
                    }
                }
            }
            if (this._windowEventHandlers !== undefined) {
                for (var eventName in this._windowEventHandlers) {
                    for (var i = 0, ii = this._windowEventHandlers[eventName].length; i < ii; i++) {
                        this.onWin(eventName, this._windowEventHandlers[eventName][i], true, false, true)
                    }
                }
            }

            // Call mod handlers
            for (var modName in this._mod) {
                this._callModHandlers(modName, this._mod[modName])
            }

            // Call DOM init handlers
            this._domInit()

            // Compontent rendered at least once
            this._renderedOnce = true
        }

        this._onAttach(!renderedOnce)

        return this
    },

    /**
     * Creates DOM-node for child with @index and appends to DOM tree
     *
     * @index number Child index
     */
    _renderChildWithIndex: function (index) {
        var child = this._children[index]

        if (child instanceof BemNode) {
            child.render()
        } else {
            this._domNode.insertBefore(
                document.createTextNode(child),
                this._domNode.childNodes[index] || null
            )
        }
    },

    /**
     * Change children array to expanded children array
     * after node expanding
     */
    _completeExpand: function () {
        if (this._isExpandContext && this._expandedChildren) {
            this._children = this._expandedChildren
            this._expandedChildren = undefined
        }
        this._isExpanded = true
    },

    /**
     * Initial instructions for the DOM-element
     */
    _domInit: function () {
        this._isDomInitContext = true

        var decl = this._decl

        if (decl !== undefined) {
            decl.domInit && decl.domInit.call(this)
        }

        if (this._implementedNode && (decl = this._implementedNode._decl)) {
            decl.domInit && decl.domInit.call(this)
        }

        this._isDomInitContext = false
        this._domInited = true

        if (this._domInitHandlers.length !== 0) {
            for (var i = 0, ii = this._domInitHandlers.length; i < ii; i++) {
                this._domInitHandlers[i].call(this)
            }
        }
    },

    /**
     * Instructions for the DOM-element after render in tree
     */
    _onAttach: function (firstTime) {
        if (this._decl !== undefined && this._decl.onAttach !== undefined) {
            this._decl.onAttach.call(this, firstTime)
        }
    },

    /**
     * Call modifier change handlers
     *
     * @modName  string
     * @modValue string
     * @data     object Additional data for handler
     */
    _callModHandlers: function (modName, modValue, data) {
        var handlers

        if (this._modHandlers !== undefined && this._modHandlers[modName] !== undefined) {
            if (this._modHandlers[modName][modValue] !== undefined) {
                handlers = this._modHandlers[modName][modValue]
            } else if (modValue === false && this._modHandlers[modName][''] !== undefined) {
                handlers = this._modHandlers[modName]['']
            } else if (modValue === '' && this._modHandlers[modName][false] !== undefined) {
                handlers = this._modHandlers[modName][false]
            }
            if (this._modHandlers[modName]['*'] !== undefined) {
                if (handlers !== undefined) {
                    handlers = handlers.concat(this._modHandlers[modName]['*'])
                } else {
                    handlers = this._modHandlers[modName]['*']
                }
            }
        }

        if (handlers !== undefined) {
            for (var i = 0, ii = handlers.length; i < ii; i++) {
                handlers[i].call(this, data)
            }
        }
    },

    /**
     * Sets DOM classes
     */
    _setDomNodeClasses: function (returnClassNameOnly, finalMod) {
        if (this._cssClasses === undefined) {
            var className = this._selector
            var value
            var tail

            if (finalMod === undefined && this._decl !== undefined) {
                finalMod = this._decl.__finalMod
            }

            if (this._flattenInheritsForDom !== undefined) {
                for (var i = 0, ii = this._flattenInheritsForDom.length; i < ii; i++) {
                    className += ' ' + this._flattenInheritsForDom[i]
                }
            }

            if (this._mix.length !== 0) {
                for (var i = 0, ii = this._mix.length; i < ii; i++) {
                    className += ' ' + this._mix[i]
                }
            }

            for (var key in this._mod) {
                value = this._mod[key]

                if (value === '' || value === false || value === undefined) {
                    continue
                }

                tail = value === true
                    ? '_' + key
                    : '_' + key + '_' + value

                if (
                    finalMod === undefined ||
                    finalMod[key] === undefined && finalMod._selector[this._selector] === undefined ||
                    finalMod[key] !== undefined && finalMod[key][this._selector] === true
                ) {
                    className += ' ' + this._selector + tail
                }

                if (this._flattenInheritsForDom) {
                    for (var i = 0, ii = this._flattenInheritsForDom.length, selector; i < ii; i++) {
                        selector = this._flattenInheritsForDom[i]
                        if (
                            finalMod === undefined ||
                            finalMod[key] === undefined && finalMod._selector[selector] === undefined ||
                            finalMod[key] !== undefined && finalMod[key][selector] === true
                        ) {
                            className += ' ' + selector + tail
                        }
                    }
                }
            }

            if (this._implementedNode !== undefined) {
                className += ' ' + this._implementedNode._setDomNodeClasses(true, finalMod)
            }

            this._cssClasses = className
        }

        if (returnClassNameOnly) {
            return this._cssClasses
        } else {
            if (this._domNode) {
                this._assignDomClasses.call(this)
            }
        }
    },

    _assignDomClasses: function () {
        this._domNode.className = this._cssClasses
    },

    /**
     * Sets DOM CSS
     */
    _setDomNodeCSS: function (propertyToChange, isAnimationFrame) {
        if (isAnimationFrame) {
            for (var name in this._css) {
                if (propertyToChange !== undefined && propertyToChange !== name) {
                    continue
                }
                if (this._css[name] || this._css[name] === 0 || this._css[name] === '') {
                    this._domNode.style[name] = this._css[name]
                }
            }
        } else {
            this._setDomNodeCSS.call(this, propertyToChange, true)
        }
    },

    /**
     * Converts BemNode with its children to string of Beast.node() functions
     * @return string
     */
    toStringOfFunctions: function () {
        var attr = '{'
        for (var key in this._mod) {
            attr += '"' + (key.substr(0,1).toUpperCase() + key.slice(1)) + '":'

            if (typeof this._mod[key] === 'string') {
                attr += '"' + this._mod[key] + '",'
            } else {
                attr += this._mod[key] + ','
            }
        }
        for (var key in this._param) {
            if (typeof this._param[key] === 'string' || typeof this._param[key] === 'number') {
                attr += '"'+ key +'":"'+ this._param[key] +'",'
            }
        }
        attr += '}'

        var children = ''
        for (var i = 0, ii = this._children.length; i < ii; i++) {
            if (this._children[i] instanceof BemNode) {
                children += this._children[i].toStringOfFunctions()
            } else {
                children += '"'+ escapeDoubleQuotes(this._children[i].toString()) +'"'
            }

            if (i < ii - 1) {
                children += ','
            }
        }

        return 'Beast.node(' +
            '"'+ this._nodeName + '",' +
            (attr === '{}' ? 'undefined' : attr) +
            (children ? ',' + children + ')' : ')')
    },

    /**
     * Converts BemNode to HTML
     * @return string HTML
     */
    toHtml: function () {
        var node = this

        // Call expand handler
        if (!node._isExpanded && node._decl !== undefined && node._decl.__commonExpand !== undefined) {
            node._isExpandContext = true
            node._decl.__commonExpand.call(node)
            node._completeExpand()
            node._isExpandContext = false

            for (var key in this._param) {
                if (this._param[key] instanceof BemNode) {
                    this._param[key] = {
                        string: this._param[key].toStringOfFunctions(),
                        __isStringifiedBemNode: true
                    }
                }
            }
        }

        if (node._implementedWith !== undefined) {
            node = node._implementedWith
        }

        // HTML attrs
        var attrs = ' data-node-name="' + node._nodeName + '"'

        for (var key in node._domAttr)  {
            attrs += ' ' + key + '="' + escapeDoubleQuotes(node._domAttr[key].toString()) + '"'
        }

        // Class attr
        attrs += ' class="' + node._setDomNodeClasses(true) + '"'

        // Style attr
        var style = ''
        for (var key in node._css) {
            if (node._css[key] || node._css[key] === 0) {
                style += camelCaseToDash(key) + ':' + escapeDoubleQuotes(node._css[key]) + ';'
            }
        }

        if (style !== '') {
            attrs += ' style="' + style + '"'
        }

        // Stringify _domNodeEventHandlers
        if (node._domNodeEventHandlers !== undefined) {
            attrs += ' data-event-handlers="' + encodeURIComponent(stringifyObject(node._domNodeEventHandlers)) + '"'
        }

        // Stringify _windowEventHandlers
        if (node._windowEventHandlers !== undefined) {
            attrs += ' data-window-event-handlers="' + encodeURIComponent(stringifyObject(node._windowEventHandlers)) + '"'
        }

        // Stringify _modHandlers
        if (node._modHandlers !== undefined) {
            attrs += ' data-mod-handlers="' + encodeURIComponent(stringifyObject(node._modHandlers)) + '"'
        }

        // Stringify properties
        if (!objectIsEmpty(node._mod)) {
            attrs += ' data-mod="' + encodeURIComponent(stringifyObject(node._mod)) + '"'
        }
        if (!objectIsEmpty(node._param)) {
            attrs += ' data-param="' + encodeURIComponent(stringifyObject(node._param)) + '"'
        }
        if (node._domInitHandlers.length !== 0) {
            attrs += ' data-dom-init-handlers="' + encodeURIComponent(stringifyObject(node._domInitHandlers)) + '"'
        }
        if (node._implementedNode !== undefined) {
            attrs += ' data-implemented-node-name="' + node._implementedNode._nodeName + '"'
        }
        if (node._noElems) {
            attrs += ' data-no-elems="1"'
        }

        // HTML tag
        if (SingleTag[node._tag] === 1) {
            return '<' + node._tag + attrs + '/>'
        } else {
            var content = ''
            for (var i = 0, ii = node._children.length; i < ii; i++) {
                if (node._children[i] instanceof BemNode) {
                    content += node._children[i].toHtml()
                } else {
                    content += escapeHtmlTags(node._children[i].toString())
                }
            }
            return '<' + node._tag + attrs + '>' + content + '</' + node._tag + '>'
        }
    },

    /**
     * Calls expand declaration in runtime
     */
    expand: function () {
        // Replace old children
        this.empty()

        // When call for unexpanded node
        if (this._isExpanded === false) {
            this.append.apply(this, arguments)
            return this
        }

        // Append new children without DOM-node creating (_isReplaceContext flag)
        this._isReplaceContext = true
        this.append.apply(this, arguments)

        // Call expand function
        if (this._decl && this._decl.expand !== undefined) {
            this._isExpandContext = true
            this._decl.expand.call(this)
            this._completeExpand()
            this._isExpandContext = false
        }

        this._isReplaceContext = false

        // Render children
        for (var i = 0, ii = this._children.length; i < ii; i++) {
            this._renderChildWithIndex(i)
        }

        // Call domInit function
        if (this._decl && this._decl.domInit !== undefined) {
            this._decl.domInit.call(this)
        }

        // Call implemented domInit function
        if (this._implementedNode !== undefined &&
            this._implementedNode._decl !== undefined &&
            this._implementedNode._decl.domInit !== undefined) {
            this._implementedNode._decl.domInit.call(this)
        }

        return this
    },
}

})();
/**
 * @block Grid Динамическая сетка
 * @tag base
 */
Beast.decl({
    Grid: {
        // finalMod: true,
        mod: {
            Col: '',                // @mod Col {number} Ширина в колонках
            Wrap: false,            // @mod Wrap {boolean} Основной контейнер сетки
            Margin: false,          // @mod Margin {boolean} Поля
            MarginX: false,         // @mod MarginX {boolean} Горизонтальные поля
            MarginY: false,         // @mod MarginY {boolean} Вертикальные поля
            Unmargin: false,        // @mod Unmargin {boolean} Отрицательные поля
            UnmarginX: false,       // @mod UnmarginX {boolean} Отрицательные горизоантальные поля
            UnmarginY: false,       // @mod UnmarginY {boolean} Отрацательные вертикальные поля
            MarginRightGap: false,  // @mod MarginRightGap {boolean} Правый отступ равен — горизоантальное поле
            MarginLeftGap: false,   // @mod MarginLeftGap {boolean} Левый отступ равен — горизоантальное поле
            Cell: false,            // @mod Cell {boolean} Горизонтальный отступ между соседями — межколонник
            Row: false,             // @mod Row {boolean} Вертикальынй отступ между соседями — межколонник
            Rows: false,            // @mod Rows {boolean} Дочерние компоненты отступают на горизонтальное поле
            Tile: false,            // @mod Tile {boolean} Модификатор дочернего компонента (для модификатора Tiles)
            Tiles: false,           // @mod Tiles {boolean} Дочерние компоненты плиткой с отступами в поле
            Center: false,          // @mod Center {boolean} Выравнивание по центру
            Hidden: false,          // @mod Hidden {boolean} Спрятать компонент
            ColCheck: false,        // @mod ColCheck {boolean} Считать ширину в колонках
            Ratio: '',              // @mod Ratio {1x1 1x2 3x4 ...} Пропорция
        },
        param: {
            isMaxCol: false,
        },
        onMod: {
            Col: {
                '*': function (fromParentGrid) {
                    if (fromParentGrid === undefined) {
                        this.param('isMaxCol', this.mod('col') === 'max')
                    }
                }
            }
        },
        onCol: undefined,
        domInit: function () {
            this.param('isMaxCol', this.mod('col') === 'max')

            if (this.mod('ColCheck')) {
                this.onWin('resize', this.checkColWidth)
                requestAnimationFrame(function () {
                    this.checkColWidth()
                }.bind(this))
            }
        },
        onAttach: function (firstTime) {
            this.setParentGrid(!firstTime)
        },
        checkColWidth: function () {
            var prop = this.css('content').slice(1,-1).split(' ')
            var col = parseInt(prop[0])
            var gap = parseInt(prop[1])
            var maxCol = parseInt(prop[2])
            var marginX = parseInt(prop[3])
            var marginY = parseFloat(prop[4])

            if (isNaN(col)) {
                return
            }

            var width = this.domNode().offsetWidth
            var colNum = Math.floor((width + gap) / (col + gap))

            if (colNum > maxCol) {
                colNum = maxCol
            }

            this.trigger('Col', {
                num: colNum,
                edge: window.innerWidth === (colNum * col + (colNum-1) * gap + marginX * 2),
                col: col,
                gap: gap,
                marginX: marginX,
                marginY: marginY,
            })
        },
        setParentGrid: function (recursive, parentGrid) {
            if (this.onCol !== undefined || this.onEdge !== undefined || this.param('isMaxCol')) {
                var that = this

                if (parentGrid === undefined) {
                    parentGrid = this._parentNode
                    while (parentGrid !== undefined && !(parentGrid.isKindOf('Grid') && parentGrid.mod('ColCheck'))) {
                        parentGrid = parentGrid._parentNode
                    }
                }

                if (parentGrid !== undefined) {
                    if (this.onCol || this.param('isMaxCol')) {
                        parentGrid.on('Col', function (e, data) {
                            that.onCol && that.onCol(data.num, data.edge, data)
                            that.param('isMaxCol') && that.mod('Col', data.num, true)
                        })
                    }
                }
            }

            if (recursive !== undefined) {
                var children = this.get('/')
                for (var i = 0, ii = children.length; i < ii; i++) {
                    if (children[i].isKindOf('grid') && !children[i].mod('ColCheck')) {
                        children[i].setParentGrid(recursive, parentGrid)
                    }
                }
            }
        }
    }
})

function grid (num, col, gap, margin) {
    var gridWidth = col * num + gap * (num - 1) + margin * 2
    return gridWidth
}
/**
 * @block Typo Типографика
 * @tag base
 */

Beast.decl({
    Typo: {
        // finalMod: true,
        mod: {
            text: '',       // @mod Text    {S M L XL XXL}  Text size
            line: '',       // @mod Line    {S M L XL XXL}     Line height
            caps: false,    // @mod Caps    {boolean}   Uppercase
            light: false,   // @mod Light   {boolean}   Light
            medium: false,  // @mod Medium  {boolean}   Medium
            bold: false,    // @mod Bold    {boolean}   Bold
            bolder: false,  // @mod Bolder  {boolean}   Bolder
        }
    }
})

Beast.decl({
    App: {
        inherits: ['Grid', 'UIStackNavigation'],
        tag:'body',
        mod: {
            platform: '',
            device: '',
            ColCheck:true,
        },
        expand: function fn () {
            

            this.inherited(fn)

            // this.append(
            //     <DocInspector/>
            // )

            if (MissEvent.mobile) {
                this.mix('mobile')
            }

            if (MissEvent.android) {
                this.mix('android')
            }

            if (MissEvent.ios) {
                this.mix('ios')
            }

            if (MissEvent.qs('exp')) {
                MissEvent.qs('exp').split(',').forEach(function (expName) {
                    this.mix('exp_' + expName)
                }.bind(this))
            }
        },
        domInit: function fn () {
            this.inherited(fn)
            history.pushState({}, '', '')


        }
    },
})




Beast.decl({
    Book: {
        
        mod: {
            ColorWiz: 'true'
        },
        expand: function () {

            
            
            if (this.param('view') === 'shelf') {
                var pages = this.param('pages');
                var pagesNum = Number(pages)
                var pagesToWidth = pagesNum/3+10;
                var textSize = pagesToWidth/5+5;
                this.css('width', pagesToWidth)
                this.mod('View', 'shelf')
            }

            if (this.param('view') === 'list') {
                this.mod('View', 'list')
            }

            if (this.mod('Mode') === 'Solo') {
                this.append(
                    Beast.node("Progress",{__context:this}),
                    Beast.node("inner",{__context:this}),
                    Beast.node("Path",{__context:this,"Long":true},"\n                        ",Beast.node("item",{"Root":true},Beast.node("Link",{"href":"http://antiggo.ru/read"},"All books")),"\n                        ",Beast.node("item",undefined,this.get('path-item')),"\n                    "),
                    Beast.node("content",{__context:this,"textSize":textSize,"size":pagesToWidth},"\n                        ",this.get('cover', 'title', 'author', 'intro', 'descr', 'text'),"\n                    ")
                    
                    
                )            
            } else {
                this.append(
                    Beast.node("Progress",{__context:this}),
                    Beast.node("inner",{__context:this}),
                    Beast.node("Path",{__context:this},"\n                        ",Beast.node("item",undefined,this.get('path-item')),"\n                    "),
                    Beast.node("content",{__context:this,"textSize":textSize,"size":pagesToWidth},"\n                        ",this.get('cover', 'title', 'author', 'intro', 'descr', 'text'),"\n                    ")
                    
                    
                )
            }

            var mode = this.mod('Mode');

            if (this.mod('Mode') === 'Solo') {
                var item = this

                item.get('cover')[0].on('ColorWizMagic', function (e, color) {

                    requestAnimationFrame(function () {
                        
                        item.css({
                            'color': color.title,
                            'background-color': color.background
                        })
                    })
                })
            }

            if (this.mod('Page')) {

            } else {
                var item = this

                item.get('cover')[0].on('ColorWizMagic', function (e, color) {

                    requestAnimationFrame(function () {
                        
                        item.css({
                            'color': color.title,
                            'background-color': color.background
                        })
                    })
                })

                var colorMain = this.css('background-color');
                var colorText = this.css('color');
                

                let bookPage = (
                    Beast.node("BookPage",{__context:this,"colorMain":colorMain,"colorText":colorText,"bookPath":this.param('href')})
                )

                if (this.param('href') === 'zero') {
                    this.mod('nolink', true)
                } else {
                    this.on('click', function () {   

                        if (history.pushState) {
                            history.pushState(null, null, this.param('href'));
                        }

                        var colorMain = this.css('background-color');
                        var colorText = this.css('color');

                        Beast.node("Overlay",{__context:this,"scrollContent":"true","colorMain":colorMain,"colorText":colorText,"Type":"sideBottom"},"\n                            ",bookPage,"\n                        ")
                            .param({
                                topBar: true,
                                scrollContent: true
                            })
                            .pushToStackNavigation({
                                context: this,
                                onDidPop: function () {
                                    bookPage.detach()
                                }
                            })
                    })    
                }

                
            }

            
            
        },

        domInit: function () {

            // var $children = $(".books__wrap").children("div");
            // var classNames = $children.map(function() {
            //     return this.className;
            // });
            // classNames = $.unique(classNames.get());
            // $.each(classNames, function(i, className) {
            //     $children.filter(function() {
            //         return $(this).hasClass(className);
            //     }).wrapAll("<div class='column' />");
            // });

            var classes = {};
            $(".books__wrap > div").each(function() {
                classes[$(this).attr("class")] = true;
            });
            for (singleClass in classes) {
                $("." + singleClass).wrapAll('<div class="column" />');
            }
            
            
            var liText = '';
            let bookYear = $('.books__year');
            var listForRemove = [];

            $(bookYear).each(function () {

                var text = $(this).text();

                if (liText.indexOf('|'+ text + '|') == -1) {
                    liText += '|'+ text + '|';
                } else {
                    listForRemove.push($(this));
                }

            });

            $(listForRemove).each(function () { 
                $(this).remove(); 
            });




            //var yearNew = $('.books__year');
            //yearNew.insertBefore($(this).parent());

            //$('.Book:nth-child(odd)').addClass('alternate');
            
            //$('.Book:nth-child(even)').addClass('evens');
            if (MissEvent.mobile) {

            } else {
                $('.Book_view_shelf').css('margin', '0');

                $('.Book_view_shelf:nth-child(7').addClass('book_tilt');
                $('.Book_view_shelf:nth-child(7').css('transform', 'rotate(5deg)');
                $('.Book_view_shelf:nth-child(7)').css('margin-right', '38px');
                $('.Book_view_shelf:nth-child(7)').css('margin-left', '38px');

                // $('.Book_view_shelf:nth-child(11').addClass('book_tilt2');
                // $('.Book_view_shelf:nth-child(11').css('transform', 'rotate(-2deg)');
                // $('.Book_view_shelf:nth-child(11)').css('margin-right', '15px');
                // $('.Book_view_shelf:nth-child(11)').css('margin-left', '15px');

                $('.Book_view_shelf').each(function() {
                    var offsets = ["50px","30px","100px", "10px", "25px", "40px"];    
                    var rand = Math.floor(Math.random()*offsets.length);
                    $(this).css("top", offsets[rand]);
                });
                    
            }

            
        }

    },

    Book__content: {
        // tag: 'a',
        expand: function () {
            //var href = this.parentBlock().param('href')
            //this.domAttr('href', href)
            this.css('line-height', this.param('size'))
            this.css('font-size', this.param('textSize'))
        }
    },

    Book__cover: {
        expand: function () {
            this.implementWith(
                Beast.node("Thumb",{__context:this,"Ratio":"3x4","ColorWiz":"true","Col":2},this.text())
            )
        },

        domInit: function () {

            // var classes = {};
            // $(".books__wrap div").each(function() {
            //     classes[$(this).attr("id")] = true;
            // });
            // for (singleClass in classes) {
            //     $("." + singleClass).wrapAll('<div class="column" />');
            // }

            // console.log(classes)
        }
    },

})

$( document ).ready(function() {

});
Beast.decl({
    BookPage: {
        requestApiV2: function (path, data) {
            var self = this;

            var hashPar = window.location.href.split('?')[1] || '';

            var getUrlParameter = function getUrlParameter(sParam) {
                var sPageURL = window.location.search.substring(1),
                    sURLVariables = sPageURL.split('&'),
                    sParameterName,
                    i;

                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split('=');

                    if (sParameterName[0] === sParam) {
                        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                    }
                }
            };

            var hash = getUrlParameter('name');

            var url = window.location.href;
            function parseUrl(url) {
              var a = document.createElement("a");
              a.href = url;
              return a;
            }

            var color = this.param('colorText')

            var parser = parseUrl(url);
            var last_segment = parser.pathname.split('/').pop();
            var searchParams = parser.search.substring(1).split("&");
            var hash = parser.hash;

            if (this.mod('Solo')) {
                //var lastParamValue = searchParams[searchParams.length-1].split("=")[1];
                var lastParamValue = last_segment;
                var mod = 'Solo';
            } else {
                var lastParamValue = this.param('bookPath')
                var mod = 'Empty';
            }

            console.log(lastParamValue)

            var jsonUrl = 
            'https://injs47s6.apicdn.sanity.io/v1/data/query/production?query=*[slug.current%20==%27' 
            + lastParamValue + 
            '%27]{%20title,%20slug,%20author,%20"cover":%20cover.asset->url,%20"descr":%20descr[]%20{%20"text":%20children[].text%20},%20"highlightsText":%20highlightsText[]%20{%20"text":%20children[].text%20},%20"highlights":%20highlights[]%20{%20"text":%20passage[]%20{%20"text":%20children[].text%20}%20}%20}';

            Ajax({
                url: jsonUrl,
                data: data,

                success: function (data) {
                    var json = JSON.parse(data);

                    self.empty().append(
                        json.result.map(function(item, index) {

                            var descr = [];
                            var highlightsList = [];
                            var highlightsListText = [];

                            if (item.highlights) {
                                {item.highlights.forEach((obj)=>
                                    {highlightsList.push(obj.text);}
                                )}
                            }

                            if (item.highlightsText) {
                                {item.highlightsText.forEach((obj)=>
                                    {highlightsListText.push(obj.text);}
                                )}
                            }

                            if (item.descr) {
                                {item.descr.forEach((obj)=>
                                    {descr.push(obj.text);}
                                )}
                            }

                            var image = item.cover;

                            //var meta=document.createElement('meta');
                            //meta.name='og:image';
                            //meta.setAttribute('content', image);
                            //document.getElementsByTagName('head')[0].appendChild(meta);

                            //$('head').append('<meta property="og:image" content="image"/>');
                            document.title += item.title;

                            return (

                                Beast.node("Book",{__context:this,"Page":true,"Mode":mod},"\n\n\n\n                                    ",Beast.node("path-item",undefined,item.title),"\n\n                                    ",Beast.node("cover",undefined,item.cover),"\n                                    ",Beast.node("title",undefined,item.title),"\n                                    ",Beast.node("author",undefined,item.author),"\n\n\n\n                                    ",descr.map(function(item, index) {

                                        if (item !== undefined) {
                                        return (    
                                            Beast.node("intro",undefined,"\n                                                ",item.map(function(item, index) {
                                                    var text = item.text;
                                                    return Beast.node("p",undefined,item)
                                                }),"\n                                            ")
                                            )
                                        }

                                    }),"\n\n                                    ",highlightsList.map(function(item, index) {

                                        if (item !== undefined) {
                                        return (    
                                            Beast.node("descr",undefined,"\n                                            ",item.map(function(item, index) {
                                                var text = item.text;
                                                return Beast.node("p",undefined,text)
                                            }),"\n                                            ")
                                            )
                                        }

                                    }),"\n\n                                    ",highlightsListText.map(function(item, index) {

                                        if (item !== undefined) {
                                        return (    
                                            Beast.node("text",undefined,"\n                                                ",item.map(function(item, index) {
                                                    var text = item.replace(/\s+(\W)/g, "$1");
                                                    if (item === '* * *') {
                                                        return Beast.node("p",{"Stars":true},text)
                                                    } else {
                                                        return Beast.node("p",undefined,text)
                                                    }
                                                    
                                                }),"\n                                            ")
                                            )
                                        }

                                    }),"\n                                ") 
                            )
                        })
                    )
                }
            })
        },

        domInit: function () {
            this.requestApiV2()
        },
    },    
})
Beast.decl({
    Books: {
        requestApiV2: function (path, data) {
            var self = this;

            //var jsonUrl = 'https://injs47s6.apicdn.sanity.io/v1/data/query/production?query=*[_type%20==%20%27book%27]%20|%20order%20(date%20desc){%20pages,%20date,%20title,%20slug,%20author,%20%22cover%22:%20cover.asset-%3Eurl,%20%22highlightsText%22:%20highlightsText[]%20{%20%22text%22:%20children[].text%20},%20%22highlights%22:%20highlights[]%20{%20%22text%22:%20passage[]%20{%20%22text%22:%20children[].text%20}%20}%20}';
            var jsonUrl = 'https://5jnrq8s6.apicdn.sanity.io/v1/data/query/production?query=*[_type%20==%20%27book%27]%20|%20order%20(date%20desc){%20pages,%20date,%20title,%20slug,%20author,%20%22cover%22:%20cover.asset-%3Eurl,%20%22highlightsText%22:%20highlightsText[]%20{%20%22text%22:%20children[].text%20},%20%22highlights%22:%20highlights[]%20{%20%22text%22:%20passage[]%20{%20%22text%22:%20children[].text%20}%20}%20}';

            var view = this.parentBlock().mod('View')
            var yearList = [];

            Ajax({
                url: jsonUrl,
                data: data,

                success: function (data) {
                    var json = JSON.parse(data);

                    

                    self.empty().append(

                        Beast.node("wrap",{__context:this},"\n                        \n                        ",
                            json.result.map(function(item, index) {

                                var today = new Date();
                                var dateRead = new Date(item.date);
                                var dateReadYear = dateRead.getFullYear();
                                yearList.push(dateReadYear);

                                let href = 'zero';

                                if (item.slug) {
                                    let href = item.slug.current;
                                }

                        
                            if (view === 'list' ) {

                                return (
                                    Beast.node("item",{"year":dateReadYear},"\n                                        \n                                        ",Beast.node("year",undefined,dateReadYear),"\n                                        \n                                        ",Beast.node("Book",{"view":view,"pages":item.pages,"href":href},"\n                                            ",Beast.node("cover",undefined,item.cover),"\n                                            ",Beast.node("title",undefined,item.title),"\n                                            ",Beast.node("author",undefined,item.author),"\n                                        "),"\n                                    ") 
                                    
                                )       
                            } else {
                                return (
                                    Beast.node("Book",{"view":view,"pages":item.pages,"href":href},"\n                                        ",Beast.node("cover",undefined,item.cover),"\n                                        ",Beast.node("title",undefined,item.title),"\n                                        ",Beast.node("author",undefined,item.author),"\n                                    ") 
                                )
                            }
                        

                            })

                        ,"\n\n                        ")
                    )
                }
            })


        },

        expand: function () {
            

        },

        domInit: function () {
            this.requestApiV2()



            $(function() {
                $('.app_horizontal').css('overflow', 'hidden')
                $('.app_horizontal').mousewheel(function(event, delta) {
                    this.scrollLeft -= (delta * 1);
                    event.preventDefault();
               });

                
            });

        },


    },  

    Books__item: {
        expand: function () {
            this.domAttr('class', this.param('year'))
            this.append()
        },
        domInit: function () {
            $('.book').unwrap();
        }
    },  

    Books__year: {
        expand: function () {
            this.append(
                Beast.node("wrapp",{__context:this},this.text())
            )
        },
    },  
})
Beast.decl({
    Director: {
        requestApiV2: function (path, data) {

            // Get movie title from Movie component
            var movie = this.param('movie');

            // Add movie title to API request
            var jsonUrl = 'http://www.omdbapi.com/?t=' + movie + '&apikey=3ec4bb18';

            var self = this;

            Ajax({
                url: jsonUrl,
                data: data,
                dataType: 'jsonp',

                success: function (data) {

                    var json = JSON.parse(data);
                    var director = json.Director;

                    if (director == 'N/A') {
                        // Do nothing
                    } else {
                        // Add movie director's name
                        self.empty().append(director)    
                    }
                }
            })
        },

        domInit: function () {
            this.requestApiV2()
        },
    },    
})
Beast
.decl('link', {
    tag:'a',
    mod: {
        type:'blue'
    },
    noElems:true,
    expand: function () {
        this.domAttr('href', this.param('href'))
        if (this.mod('New')) {
            this.domAttr('target', '_blank')
        }
    }
})





Beast.decl({
    MovieData: {
        requestApiV2: function (path, data) {

            // Get movie title from Movie component
            var movie = this.param('movie');

            // Add movie title to API request
            var jsonUrl = 'http://www.omdbapi.com/?t=' + movie + '&apikey=3ec4bb18';

            var self = this;

            Ajax({
                url: jsonUrl,
                data: data,
                dataType: 'jsonp',

                success: function (data) {

                    var json = JSON.parse(data);
                    var director = json.Director;
                    var year = json.Year;

                    if (director == 'N/A') {
                        self.empty().append(
                            Beast.node("year",{__context:this},year)
                        )
                    } else {
                        // Add movie director's name
                        self.empty().append(
                            Beast.node("director",{__context:this},director),
                            Beast.node("year",{__context:this},year)
                        )    
                    }
                }
            })
        },

        domInit: function () {
            this.requestApiV2()
        },
    },    
})
Beast.decl({
    Director: {
        requestApiV2: function (path, data) {

            // Get movie title from Movie component
            var movie = this.param('movie');

            // Add movie title to API request
            var jsonUrl = 'http://www.omdbapi.com/?t=' + movie + '&apikey=3ec4bb18';

            var self = this;

            Ajax({
                url: jsonUrl,
                data: data,
                dataType: 'jsonp',

                success: function (data) {

                    var json = JSON.parse(data);
                    var director = json.Director;

                    if (director == 'N/A') {
                        // Do nothing
                    } else {
                        // Add movie director's name
                        self.empty().append(director)    
                    }
                }
            })
        },

        domInit: function () {
            this.requestApiV2()
        },
    },    
})
Beast.decl({
    Movies: {
        requestApiV2: function (path, data) {

            var self = this;

            var jsonUrl = 'https://injs47s6.apicdn.sanity.io/v1/data/query/production?query=[%20{%20%27movie%27:%20*[_type%20==%20%27movie%27]%20|%20order(date%20desc)%20{%20title,%20slug,%20director,%20stills,%20%22stills%22:%20stills[]%20{%20%22still%22:%20still.asset-%3Eurl,%20},%20%22poster%22:poster.asset-%3Eurl,%20}%20},%20]';

            Ajax({
                url: jsonUrl,
                data: data,

                success: function (data) {

                    var json = JSON.parse(data);

                    self.empty().append(
                        
                        json.result.map(function(item, index) {
                            return (
                                item.movie.map(function(item, index) {
                                    return (
                                        Beast.node("movie",{__context:this},"\n                                            ",Beast.node("Movie",undefined,"\n                                                ",Beast.node("poster",undefined,item.poster),"\n                                                ",Beast.node("title",undefined,item.title),"\n                                                ",Beast.node("MovieData",{"movie":item.title}),"\n                                                \n                                            ")," \n                                        ")            
                                    )                            
                                })
                            )
                        })
                    )
                }
            })
        },

        domInit: function () {
            this.requestApiV2()
        },
    },

  
})
/**
 * @block Overlay Интерфейс модальных окон
 * @dep UINavigation grid Typo Control
 * @tag base
 * @ext UINavigation grid
 */
Beast.decl({
    Overlay: {
        inherits: ['UINavigation'],
        mod: {
            Type: 'side', // modal, partsideleft, bottom, top, expand, custom
        },
        onMod: {
            State: {
                active: function (callback) {
                    if (this.mod('Type') === 'expand') {
                        this.moveContextInside()
                    }

                    this.param('activeCallback', callback)
                },
                release: function (callback) {
                    if (this.mod('Type') === 'expand') {
                        this.moveContextOutside()
                    }

                    this.param('releaseCallback', callback)
                },
            }
        },
        param: {
            activeCallback: function () {},
            releaseCallback: function () {},
            title: '',
            subtitle: '',
            topBar: true,
            background: true,
        },
        expand: function () {
            if (this.param('topBar')) {
                this.append(Beast.node("topBar",{__context:this}))
                    .mod('HasTopBar', true)
            }

            if (this.param('bottomBar')) {
                var price = this.parentBlock().param('price')
                this.append(
                    Beast.node("bottomBar",{__context:this})   
                )
                    .mod('HasTopBar', true)
            }

            if (this.param('background')) {
                this.append(Beast.node("background",{__context:this}))
            }

            if (this.mod('Type') === 'partsideleft') {
                this.mod('Col', '1LeftMargins')
            }

            this.css('color', this.param('colorText'))
            this.css('background-color', this.param('colorMain'))

            this.append(
                Beast.node("content",{__context:this},this.get())
            )
        },
        on: {
            animationstart: function () {
                if (this.mod('Type') === 'modal') {
                    var overlayHeight = this.domNode().offsetHeight
                    var parentHeight = this.parentNode().domNode().offsetHeight
                    var marginTop = overlayHeight < (parentHeight - 200)
                        ? this.domNode().offsetHeight / -2
                        : undefined

                    this.css({
                        marginLeft: this.domNode().offsetWidth / -2,
                        marginTop: marginTop,
                        marginBottom: 0,
                        top: '0%',
                    })

                    if (marginTop !== undefined) {
                        this.css({
                            marginTop: marginTop,
                            marginBottom: 0,
                            top: '50%',
                        })
                    }
                }
            },
            animationend: function () {
                // if (this.mod('Type') === 'expand' && this.param('scrollContent')) {
                //     requestAnimationFrame(function () {
                //         if (this.elem('content')[0].domNode().scrollTop === 0) {
                //             this.param('options').context.css('transform', 'translate3d(0px,0px,0px)')
                //             this.elem('content')[0].domNode().scrollTop = -this.param('scrollContent')
                //             this.param('scrollContent', false)
                //         }
                //     }.bind(this))
                // }

                

                if (this.mod('State') === 'release') {
                    this.param('releaseCallback')()
                } else {
                    this.param('activeCallback')()
                }
            }
        },
        moveContextInside: function () {
            var context = this.param('options').context

            // Calculate Global Offset
            var offsetParent = context.domNode()
            var offsetTop = offsetParent.offsetTop
            while (offsetParent = offsetParent.offsetParent) {
                offsetTop += offsetParent.offsetTop
            }

            // Placeholder
            var placeholder = Beast.node("OverlayPlaceholder",{__context:this})
            this.param('placeholder', placeholder)
            context.parentNode().insertChild([placeholder], context.index(true))
            placeholder
                .css('height', context.domNode().offsetHeight)
                .domNode().className = context.domNode().className

            context.appendTo(
                this.elem('content')[0]
            )

            offsetTop -= 44
            context.css({
                transform: 'translate3d(0px,' + offsetTop + 'px, 0px)'
            })

            // Context is under of the screen top
            if (offsetTop > 0) {
                requestAnimationFrame(function () {
                    context.css({
                        transition: 'transform 300ms',
                        transform: 'translate3d(0px,0px,0px)',
                    })
                })
            }
            // Context is above of the screen top
            else {
                this.param({
                    scrollContent: offsetTop
                })
            }
        },
        moveContextOutside: function () {
            this.param('placeholder').parentNode().insertChild(
                [this.param('options').context], this.param('placeholder').index(true)
            )
            this.param('placeholder').remove()

            this.param('options').context.css({
                transition: ''
            })
        },
    },
    Overlay__topBar: {
        expand: function () {
            var layerIndex = this.parentBlock().parentNode().index()

            // this.append(
            //     <topBarActionBack/>,
            //     layerIndex > 1 && <topBarActionClose/>
            // )

            this.append(
                // <topBarActionNav/>,
                Beast.node("topBarActionClose",{__context:this})
            )

            var title = this.parentBlock().param('title')
            var subtitle = this.parentBlock().param('subtitle')

            if (title) {
                var titles = Beast.node("topBarTitles",{__context:this}).append(
                    Beast.node("topBarTitle",{__context:this},title)
                )

                if (subtitle) {
                    titles.append(
                        Beast.node("topBarSubtitle",{__context:this},subtitle)
                    )
                }

                this.append(titles)
            }
        }
    },

    Overlay__bottomBar: {
        expand: function () {

            var layerIndex = this.parentBlock().parentNode().index()
            var price = this.parentBlock().param('price')

            this.append(
                Beast.node("Reserve",{__context:this},"\n                    ",Beast.node("price",undefined,price),"   \n                ")
            )

            
        }
    },

    Overlay__topBarTitle: {
        inherits: 'Typo',
        mod: {
            Text: 'M',
            Line: 'M',
        },
    },
    Overlay__topBarSubtitle: {
        inherits: 'Typo',
        mod: {
            Text: 'S',
        },
    },
    Overlay__topBarAction: {
        inherits: ['Control', 'Typo'],
        mod: {
            Text: 'M',
            Medium: true,
        },
    },
    Overlay__topBarActionBack: {
        inherits: 'Overlay__topBarAction',
        expand: function fn () {
            this.inherited(fn)

            this.append(
                Beast.node("Icon",{__context:this,"Name":"CornerArrowLeft"}),
                Beast.node("topBarActionLabel",{__context:this},"Back")
            )
        },
        on: {
            Release: function () {
                this.parentBlock().popFromStackNavigation()
            }
        }
    },
    Overlay__topBarActionNav: {
        inherits: 'Overlay__topBarAction',
        expand: function fn () {
            this.inherited(fn)

            this.append(
                Beast.node("topBarActionLabel",{__context:this},"Index"),
                Beast.node("Work",{__context:this},Beast.node("title",undefined,"Test"))
            )
        },
        on: {
            Release: function () {
                //this.parentBlock().popFromStackNavigation()
            }
        }
    },
    Overlay__topBarActionClose: {
        inherits: 'Overlay__topBarAction',
        expand: function fn () {
            //this.css('background', this.parentBlock().param('colorText'))
            this.inherited(fn)
                .append(
                    Beast.node("topBarActionLabel",{__context:this},"Close")
                )
        },
        on: {
            click: function () {
                window.history.back();
                this.parentBlock().popAllFromStackNavigation()
            }
        }
    },

    
})


Beast.decl({
    Switch: {
        expand: function () {
        },

        domInit: function () {

            
        }
    },

    Switch__item: {
        tag: 'a',
        expand: function () {
            this.domAttr('href', this.param('href'))
            
        },

        domInit: function () {

            
        }
    },
})



Beast.decl({
    Years: {
        expand: function () {
        
        },

        domInit: function () {

            
        }
    },

    Switch__item: {
        tag: 'a',
        expand: function () {
            this.domAttr('href', this.param('href'))
            
        },

        domInit: function () {

            
        }
    },
})
/**
 * @block Thumb Тумбнеил
 * @dep grid link
 * @tag thumb video oo snippet
 * @ext link grid
 */
Beast.decl({
    Thumb: {
        inherits: ['Grid', 'Link'],
        mod: {
            Ratio:'',               // @mod Ratio {1x1 1x2 2x1 2x3 3x2 3x4 4x3 16x10} Пропорция
            Fit:'cover',            // @mod Fit {cover! contain} Растягивание картинки по контейнеру
            Theme:'',               // @mod Theme {app userpic video} Предустановки для разного типа картинок
            Shade: false,           // @mod Shade {boolean} Затенить (для белых границ)
            Grid: false,            // @mod Grid {boolean} Покрыть мелкой сеткой (для картинок плохого качества)
            Parallax: false,        // @mod Parallax {boolean} Параллакс при скролле
            Visibility: 'visible',
            ColorWiz: false,        // @mod ColorWiz {boolean} Отправлять гамму картинки с событием ColorWizMagic
            Shadow: false,          // @mod Shadow {boolean} Тень
            Rounded: false,         // @mod Rounded {boolean} Скругленные углы
        },
        param: {
            src:'',     // @param src {string} Адрес изображения
            width:'',   // @param width {number} Ширина в px
            height:'',  // @param height {number} Высота в px
            title: '',  // @param title {string} Надпись поверх картинки
            ColorWiz: {
                background: '',
                title: '',
                text: '',
                button: '',
            },
        },
        expand: function () {
            var width = this.param('width')
            var height = this.param('height')
            var images = this.elem('image')

            if (this.text()) {
                this.param('src', this.text())
            }

            this.empty()

            if (this.mod('theme') === 'app') {
                this.mod({
                    Ratio:'1x1',
                    Fit:'cover',
                })
            }

            if (this.mod('theme') === 'userpic') {
                this.mod({
                    Ratio:'1x1',
                    Fit:'cover',
                })
            }

            if (this.mod('theme') === 'video') {
                this.mod({
                    Ratio:'16x10',
                    Fit:'cover',
                })
            }

            if (this.mod('Ratio') || (this.param('width') && this.param('height')) || this.mod('Parallax') || this.has('image')) {
                if (this.has('image')) {
                    this.append(
                        Beast.node("images",{__context:this},this.get('image'))
                    )
                } else {
                    if (this.mod('Parallax')) {
                        this.append(
                            Beast.node("image",{__context:this},this.param('src'))
                        )
                    } else {
                        this.css({
                            backgroundImage: 'url('+ this.param('src') +')',
                            width: this.param('width'),
                            height: this.param('height'),
                        })
                    }
                }

                if (this.param('title')) {
                    this.append(
                        Beast.node("title",{__context:this},this.param('title'))
                    )
                }
            } else {
                this.tag('img')
                    .domAttr('src', this.param('src'))

                if (this.param('width')) {
                    this.css('width', width)
                }
                if (this.param('height')) {
                    this.css('height', height)
                }
            }
        },
        domInit: function fn () {
            this.inherited(fn)

            var that = this

            // var width = this.domNode().offsetWidth
            // var height = this.domNode().offsetHeight
            // var img = document.createElement('img')

            // img.setAttribute('src', this.param('src'))
            // img.onload = function () {
            //     if (width && width * window.devicePixelRatio > this.width  ||
            //         height && height * window.devicePixelRatio > this.height ) {
            //         that.mod('Grid', true)
            //     }
            //     img = null
            // }

            if (this.mod('Parallax') || this.mod('Slideshow')) {
                this.checkVisibility()

                if (this.mod('Parallax')) {
                    this.param(
                        'image', this.elem('images')[0] || this.elem('image')[0]
                    )
                }

                var calcOffsetOnScroll = false

                this.onWin('scroll', function () {
                    this.checkVisibility()

                    // Browser gets wrong offset values before window scroll
                    if (!calcOffsetOnScroll) {
                        this.calcOffset(true)
                        calcOffsetOnScroll = true
                    }

                    if (this.mod('Parallax')) {
                        requestAnimationFrame(this.parallaxTranslate.bind(this))
                    }
                }.bind(this))
            }

            if (this.mod('ColorWiz')) {
                requestAnimationFrame(function () {
                    ColorWiz.magic(this.param('src'), function (color) {
                        this.trigger('ColorWizMagic', color)
                    }.bind(this))
                }.bind(this))
            }

            if (this.mod('Theme') === 'app') {
                ColorWiz.isFilled(this.param('src'), function (isFilled) {
                    if (!isFilled) {
                        this.mod('Border', true)
                    }
                }.bind(this))
            }
        },
        calcOffset: function (force) {
            // domNode.offsetParent is null when domNode is not displayed in DOM
            if (this.domNode().offsetParent === null) {
                this.param('display', false)
            }
            else if (!this.param('display') || force) {
                var offset = MissEvent.offset(this.domNode())
                var windowHeight = window.innerHeight
                var offsetHeight = this.domNode().offsetHeight
                var halfOffsetHeight = Math.round(offsetHeight / 2)

                this.param({
                    display: true,
                    offsetleft: offset.left,
                    offsetTop: offset.top,
                    offsetHeight: offsetHeight,
                    halfOffsetHeight: halfOffsetHeight,
                    offsetTopMiddle: offset.top + halfOffsetHeight,
                    offsetBottom: offset.top + offsetHeight,
                    windowHeight: windowHeight,
                    windowHalfHeight: Math.round(windowHeight / 2),
                })
            }
        },
        checkVisibility: function () {
            this.calcOffset()

            if (!this.param('display')) {
                this.mod('Visibility', 'hidden')
                return
            }

            var scrollTop = document.body.scrollTop
            var scrollBottom = scrollTop + this.param('windowHeight')

            if (scrollBottom > this.param('offsetTop') && scrollTop < this.param('offsetBottom')) {
                this.mod('Visibility', 'visible')
            } else {
                this.mod('Visibility', 'hidden')
            }
        },
        parallaxTranslate: function () {
            var middleHeightPoint = window.pageYOffset + this.param('windowHalfHeight')
            var diff = (
                (middleHeightPoint - this.param('offsetTopMiddle')) /
                (this.param('windowHalfHeight') + this.param('halfOffsetHeight')) *
                10
            )

            if (diff > 10) diff = 10
            if (diff < -10) diff = -10

            if (this.param('prevDiff') !== diff) {
                this.param('image').css('transform', 'translateY('+ diff +'px)')
                this.param('prevDiff', diff)
            }
        }
    },

    Thumb__image: {
        mod: {
            State: 'release'
        },
        expand: function () {
            this.empty()
                .css({
                    backgroundImage: 'url('+ this.text() +')',
                    width: this.parentBlock().param('width'),
                    height: this.parentBlock().param('height'),
                })
        }
    },

    Thumb__images: {
        param: {
            timeoutTimer: undefined,
            intervalTimer: undefined,
            timeout: 5000,
        },
        expand: function () {
            this.get('image')[0].mod('State', 'active')
        },
        domInit: function () {
            if (this.parentBlock().mod('Slideshow')) {
                this.parentBlock().onMod('Visibility', 'visible', this.startAnimation.bind(this))
                this.parentBlock().onMod('Visibility', 'hidden', this.stopAnimation.bind(this))
            }
        },
        startAnimation: function () {
            var images = this.get('image')
            var activeIndex
            var activeImage

            this.param(
                'timeoutTimer',
                setTimeout(function () {
                    this.param(
                        'intervalTimer',
                        setInterval(
                            function () {
                                for (var i = 0, ii = images.length; i < ii; i++) {
                                    if (images[i].mod('State') === 'active') {
                                        activeImage = images[i]
                                        activeIndex = i
                                        break
                                    }
                                }

                                if (activeIndex === images.length - 1) {
                                    activeIndex = 0
                                } else {
                                    activeIndex++
                                }

                                activeImage.mod('State', 'release')
                                images[activeIndex].mod('State', 'active')
                            }.bind(this),
                            this.param('timeout')
                        )
                    )
                }.bind(this), 1000 * Math.random())
            )
        },
        stopAnimation: function () {
            if (this.param('timeoutTimer')) {
                clearTimeout(this.param('timeoutTimer'))
            }
            if (this.param('intervalTimer')) {
                clearTimeout(this.param('intervalTimer'))
            }
        },
    },

    Thumb__title: {
        inherits: 'Typo',
        mod: {
            Text: 'S',
            Medium: true,
        }
    },
})

// @example <Thumb Ratio="1x1" Col="3" src="https://jing.yandex-team.ru/files/kovchiy/2017-03-23_02-14-26.png"/>
// @example <Thumb Ratio="1x1" Col="3" Shadow src="https://jing.yandex-team.ru/files/kovchiy/2017-03-23_02-14-26.png"/>
// @example <Thumb Ratio="1x1" Col="3" Grid src="https://jing.yandex-team.ru/files/kovchiy/2017-03-23_02-14-26.png"/>
// @example <Thumb Ratio="1x1" Col="3" Rounded src="https://jing.yandex-team.ru/files/kovchiy/2017-03-23_02-14-26.png"/>
Beast.decl({

    /**
     * @block UINavigation Компонент паттерна навигации
     * @tag base
     */
    UINavigation: {
        mod: {
            State: '', // active, release
        },
        onMod: {
            State: {
                active: function (callback) {
                    callback && callback()
                },
                release: function (callback) {
                    callback && callback()
                }
            }
        },
        activate: function(callback) {
            this.mod('state', 'active', callback)
        },
        release: function(callback) {
            this.mod('state', 'release', callback)
        },

        /**
         * Pushes itself to StackNavigation
         * @options {context:BemNode, onDidPush:function, onDidPop:function, onWillPush:function, onWillPop:function, fog:boolean}
         */
        pushToStackNavigation: function(options) {
            if (options.fog === undefined) {
                options.fog = true
            }

            this.param('options', options)
            this._parentContextOfKind('UIStackNavigation', options.context).push(this)
            return this
        },

        /**
         * Pops itself from StackNavigation
         */
        popFromStackNavigation: function() {
            this._parentContextOfKind('UIStackNavigation', this).pop()
            return this
        },

        /**
         * Pops all NavigationItems from StackNavigation
         */
        popAllFromStackNavigation: function() {
            this._parentContextOfKind('UIStackNavigation', this).popAll()
            return this
        },

        /**
         * Gets parent node for @context of @kind
         */
        _parentContextOfKind: function(kind, context) {
            var node = context._parentNode
            while (!node.isKindOf(kind)) node = node._parentNode
            return node
        },
    },

    /**
     * @block UIStackNavigation Паттерн стэковой навигации
     * @tag base
     */
    UIStackNavigation: {
        inherits: 'UINavigation',
        param: {
            storedScrollPosition: 0,
        },
        expand: function fn () {
            this.inherited(fn)
            this.append(Beast.node("layer",{__context:this},this.get('/')))
            this.topLayer().mod('Root', true)
        },
        onMod: {
            Pushing: {
                true: function () {
                    this.mod('HasFog', this.topNavigationItem().param('options').fog)
                }
            },
            Popping: {
                false: function () {
                    var topItemOptions = this.topNavigationItem().param('options')
                    if (topItemOptions) {
                        this.mod('HasFog', topItemOptions.fog)
                    }
                }
            }
        },
        onWin: {
            popstate: function (e) {
                var item = this.topNavigationItem()
                item && item.popFromStackNavigation && item.popFromStackNavigation()
            }
        },

        /**
         * Pushes @navigationItem to stack
         */
        push: function(navigationItem) {
            this.storeRootScrollPosition()

            this.append(Beast.node("layer",{__context:this},navigationItem))

            this.mod('Pushed', !this.topLayer().mod('Root'))
                .mod('Pushing', true)

            var onDidPush = this.topNavigationItem().param('options').onDidPush
            var onWillPush = this.topNavigationItem().param('options').onWillPush

            this.topNavigationItem().activate(function() {
                this.mod('Pushing', false)
                onDidPush && onDidPush()
            }.bind(this))

            // history.pushState({UIStackNavigation: true}, '', '#')
            this.updateFogSize(navigationItem)

            onWillPush && onWillPush()
        },

        /**
         * Pops @navigationItem from stack
         */
        pop: function(index) {
            this.mod('Popping', true)

            var navigationItem = index === undefined
                ? this.topNavigationItem()
                : this.navigationItemByIndex(index)

            var onWillPop = navigationItem.param('options').onWillPop
            var onDidPop = navigationItem.param('options').onDidPop

            var onRelease = function() {
                onDidPop && onDidPop()
                this.topLayer().remove()
                this.mod('Pushed', !this.topLayer().mod('Root'))
                this.restoreRootScrollPosition()
                this.mod('Popping', false)
            }.bind(this)

            navigationItem.release(onRelease)

            onWillPop && onWillPop()
        },

        /**
         * Pops all @navigationItem's from stack
         */
        popAll: function () {
            this.elem('layer').forEach(function(layer, index) {
                if (index !== 0) {
                    layer.parentBlock().pop(index)
                }
            })
        },

        /**
         * Gets top layer from stack
         */
        topLayer: function() {
            return this.elem('layer').pop()
        },

        /**
         * Gets NavigationItem of top layer
         */
        topNavigationItem: function() {
            return this.topLayer().get('/')[0]
        },

        /**
         * Gets NavigationItem by layer index
         */
        navigationItemByIndex: function (index) {
            return this.elem('layer')[index].get('/')[0]
        },

        /**
         * Stores scroll position
         */
        storeRootScrollPosition: function() {
            if (this.topLayer().mod('Root')) {
                this.param('scrollPosition', window.pageYOffset || document.documentElement.scrollTop)
                this.topLayer().css('margin-top', -this.param('scrollPosition'))
            }
        },

        /**
         * Resores scroll position
         */
        restoreRootScrollPosition: function() {
            if (this.topLayer().mod('Root')) {
                this.topLayer().css('margin-top', '')
                window.scrollTo(0, this.param('scrollPosition'))
            }
        },

        /**
         * Set fog size by navigationItem size
         */
        updateFogSize: function (navigationItem) {
            var itemHeight = navigationItem.domNode().offsetHeight + 200
            var parentHeight = this.domNode().offsetHeight

            if (itemHeight > parentHeight) {
                this.topLayer().get('fog')[0].css('height', itemHeight)
            }
        },
    },

    UIStackNavigation__layer: {
        expand: function () {
            this.append(
                this.get('/'), Beast.node("fog",{__context:this,"Active":true})
            )

            if (!this.mod('root')) {
                this.on('mousedown', function (e) {
                    var PointedDom = document.elementFromPoint(e.clientX, e.clientY)
                    if (PointedDom === this.domNode()) {
                        this.parentBlock().popAll()
                    }
                })
            }
        }
    },

    UIStackNavigation__fog: {
        inherits: 'Control',
        mod: {
            Active: false,
        },
        on: {
            Release: function () {
                if (!this.parentBlock().mod('Pushing')) {
                    this.parentBlock().popAll()
                }
            }
        }
    },

    /**
     * @block UISwitchNavigation Паттерн табовой навигации
     * @tag base
     */
    UISwitchNavigation: {
        inherits: 'UINavigation',
        expand: function() {
            this.append(
                this.get('/').map(function(item, index) {
                    return Beast.node("layer",{__context:this},item)
                })
            )
        },

        /**
         * Switches to item element with @index
         */
        switchToIndex: function (index) {
            if (this.elem('layer').length !== 0) {
                this.elem('layer').forEach(function(layer, layerIndex) {
                    var navigationItem = layer.get('/')[0]
                    if (layerIndex === index) {
                        layer.activate()
                    } else {
                        layer.release()
                    }
                })
            } else {
                this.param('switchToIndex', index)
            }
        }
    },
    UISwitchNavigation__layer: {
        inherits: 'UINavigation',
        noElems: true,
        mod: {
            State: 'release'
        },
        expand: function () {
            if (this.parentBlock().param('switchToIndex') === this.index()) {
                this.activate()
            }

            this.append(this.get('/'))
        }
    }
})
