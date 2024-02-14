// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterAdd=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):p.call(i)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var i=r-e.length;return i<0?e:e=t?e+x(i):x(i)+e}var k=String.fromCharCode,S=isNaN,j=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,a,o,l,p,u,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(s(i=e[u]))l+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,S(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=E(i.arg,i.width,i.padRight)),l+=i.arg||"",p+=1}return l}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,i,n;for(t=[],n=0,i=$.exec(e);i;)(r=e.slice(n,$.lastIndex-i[0].length)).length&&t.push(r),t.push(_(i)),n=$.lastIndex,i=$.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function F(e){return"string"==typeof e}function I(e){var r,t;if(!F(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var C,R=Object.prototype,O=R.toString,Z=R.__defineGetter__,L=R.__defineSetter__,W=R.__lookupGetter__,N=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(W.call(e,r)||N.call(e,r)?(i=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,t.get),o&&L&&L.call(e,r,t.set),e};var P=C;function G(e,r,t){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function M(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&q.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"";var K=X()?function(e){var r,t,i;if(null==e)return z.call(e);t=e[J],r=D(e,J);try{e[J]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[J]=t:delete e[J],i}:function(e){return z.call(e)},Q=Boolean,Y=Boolean.prototype.toString;var ee=X();function re(e){return"object"==typeof e&&(e instanceof Q||(ee?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function te(e){return M(e)||re(e)}function ie(e){return"number"==typeof e}function ne(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ae(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ne(n):ne(n)+e,i&&(e="-"+e)),e}G(te,"isPrimitive",M),G(te,"isObject",re);var oe=String.prototype.toLowerCase,ce=String.prototype.toUpperCase;function se(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ie(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ae(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ae(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ce.call(e.specifier)?ce.call(t):oe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function le(e){return"string"==typeof e}var pe=Math.abs,ue=String.prototype.toLowerCase,fe=String.prototype.toUpperCase,ge=String.prototype.replace,de=/e\+(\d)$/,he=/e-(\d)$/,we=/^(\d+)$/,be=/^(\d+)e/,ve=/\.0$/,ye=/\.0*e/,me=/(\..*[^0])0*e/;function xe(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ie(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":pe(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ge.call(t,me,"$1e"),t=ge.call(t,ye,"e"),t=ge.call(t,ve,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ge.call(t,de,"e+0$1"),t=ge.call(t,he,"e-0$1"),e.alternate&&(t=ge.call(t,we,"$1."),t=ge.call(t,be,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===fe.call(e.specifier)?fe.call(t):ue.call(t)}function Ee(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ke(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ee(i):Ee(i)+e}var Se=String.fromCharCode,je=isNaN,Ve=Array.isArray;function Te(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $e(e){var r,t,i,n,a,o,c,s,l;if(!Ve(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(le(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Te(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,je(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,je(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=se(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!je(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=je(a)?String(i.arg):Se(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=xe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ae(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ke(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var _e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ae(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Fe(e){var r,t,i,n;for(t=[],n=0,i=_e.exec(e);i;)(r=e.slice(n,_e.lastIndex-i[0].length)).length&&t.push(r),t.push(Ae(i)),n=_e.lastIndex,i=_e.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ie(e){return"string"==typeof e}function Ce(e){var r,t;if(!Ie(e))throw new TypeError(Ce("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Fe(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return $e.apply(null,r)}function Re(){return new Function("return this;")()}var Oe="object"==typeof self?self:null,Ze="object"==typeof window?window:null,Le="object"==typeof global?global:null,We="object"==typeof globalThis?globalThis:null;var Ne=function(e){if(arguments.length){if(!M(e))throw new TypeError(Ce("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Re()}if(We)return We;if(Oe)return Oe;if(Ze)return Ze;if(Le)return Le;throw new Error("unexpected error. Unable to resolve global object.")}(),Pe=Ne.document&&Ne.document.childNodes,Ge=Int8Array;function Be(){return/^\s*function\s*([^(]*)/i}var Me=/^\s*function\s*([^(]*)/i;G(Be,"REGEXP",Me);var Ue=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};function Xe(e){return null!==e&&"object"==typeof e}function ze(e){var r,t,i,n;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=Me.exec(i.toString()))return r[1]}return Xe(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}G(Xe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Ce("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!Ue(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Xe));var qe="function"==typeof B||"object"==typeof Ge||"function"==typeof Pe?function(e){return ze(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ze(e).toLowerCase():r};function De(e){return"function"===qe(e)}function He(e){return"number"==typeof e}var Je=Object.prototype.toString;var Ke="function"==typeof Symbol?Symbol:void 0,Qe="function"==typeof Ke?Ke.toStringTag:"";var Ye=X()?function(e){var r,t,i;if(null==e)return Je.call(e);t=e[Qe],r=D(e,Qe);try{e[Qe]=void 0}catch(r){return Je.call(e)}return i=Je.call(e),r?e[Qe]=t:delete e[Qe],i}:function(e){return Je.call(e)},er=Number,rr=er.prototype.toString;var tr=X();function ir(e){return"object"==typeof e&&(e instanceof er||(tr?function(e){try{return rr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Ye(e)))}function nr(e){return He(e)||ir(e)}function ar(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&De(e.next)}G(nr,"isPrimitive",He),G(nr,"isObject",ir);var or="function"==typeof Symbol?Symbol:void 0;var cr="function"==typeof or&&"symbol"==typeof or("foo")&&D(or,"iterator")&&"symbol"==typeof or.iterator?Symbol.iterator:null;function sr(e){return"number"==typeof e}function lr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function pr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+lr(n):lr(n)+e,i&&(e="-"+e)),e}var ur=String.prototype.toLowerCase,fr=String.prototype.toUpperCase;function gr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!sr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=pr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=pr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===fr.call(e.specifier)?fr.call(t):ur.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function dr(e){return"string"==typeof e}var hr=Math.abs,wr=String.prototype.toLowerCase,br=String.prototype.toUpperCase,vr=String.prototype.replace,yr=/e\+(\d)$/,mr=/e-(\d)$/,xr=/^(\d+)$/,Er=/^(\d+)e/,kr=/\.0$/,Sr=/\.0*e/,jr=/(\..*[^0])0*e/;function Vr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!sr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":hr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=vr.call(t,jr,"$1e"),t=vr.call(t,Sr,"e"),t=vr.call(t,kr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=vr.call(t,yr,"e+0$1"),t=vr.call(t,mr,"e-0$1"),e.alternate&&(t=vr.call(t,xr,"$1."),t=vr.call(t,Er,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===br.call(e.specifier)?br.call(t):wr.call(t)}function Tr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function $r(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Tr(i):Tr(i)+e}var _r=String.fromCharCode,Ar=isNaN,Fr=Array.isArray;function Ir(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Cr(e){var r,t,i,n,a,o,c,s,l;if(!Fr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(dr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ir(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ar(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ar(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=gr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ar(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ar(a)?String(i.arg):_r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Vr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=pr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=$r(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Rr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Or(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Zr(e){var r,t,i,n;for(t=[],n=0,i=Rr.exec(e);i;)(r=e.slice(n,Rr.lastIndex-i[0].length)).length&&t.push(r),t.push(Or(i)),n=Rr.lastIndex,i=Rr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Lr(e){return"string"==typeof e}function Wr(e){var r,t,i;if(!Lr(e))throw new TypeError(Wr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Zr(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Cr.apply(null,t)}return function e(){var r,t,i,n,a,o;if((i=arguments.length)<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(r=[],t=[],o=0;o<i;o++)if(r.push(arguments[o]),ar(arguments[o]))t.push(1);else{if(!He(arguments[o]))throw new TypeError(Wr("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",o,arguments[o]));t.push(0)}if(G(n={},"next",c),G(n,"return",s),cr){for(o=0;o<i;o++)if(t[o]&&!De(r[o][cr])){a=!0;break}a||G(n,cr,l)}return a=!1,o=0,n;function c(){var e,n,o;if(a)return{done:!0};for(e=0,o=0;o<i;o++)if(t[o]){if((n=r[o].next()).done)return a=!0,n;"number"==typeof n.value?e+=n.value:e=NaN}else e+=r[o];return{value:e,done:!1}}function s(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){var n,a;for(n=[],a=0;a<i;a++)t[a]?n.push(r[a][cr]()):n.push(r[a]);return e.apply(null,n)}}}));
//# sourceMappingURL=index.js.map