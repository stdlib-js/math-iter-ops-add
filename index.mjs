// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function o(){var d,f,l,m,u,p;if((l=arguments.length)<2)throw new Error(i("0Zf0I"));for(d=[],f=[],p=0;p<l;p++)if(d.push(arguments[p]),s(arguments[p]))f.push(1);else{if(!t(arguments[p]))throw new TypeError(i("0Zf4P",p,arguments[p]));f.push(0)}if(e(m={},"next",(function(){var e,r,t;if(u)return{done:!0};for(e=0,t=0;t<l;t++)if(f[t]){if((r=d[t].next()).done)return u=!0,r;"number"==typeof r.value?e+=r.value:e=NaN}else e+=d[t];return{value:e,done:!1}})),e(m,"return",(function(e){if(u=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),n){for(p=0;p<l;p++)if(f[p]&&!r(d[p][n])){u=!0;break}u||e(m,n,(function(){var e,r;for(e=[],r=0;r<l;r++)f[r]?e.push(d[r][n]()):e.push(d[r]);return o.apply(null,e)}))}return u=!1,p=0,m}export{o as default};
//# sourceMappingURL=index.mjs.map
