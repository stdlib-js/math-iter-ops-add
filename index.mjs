// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function o(){var d,m,l,u,f,p;if((l=arguments.length)<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(d=[],m=[],p=0;p<l;p++)if(d.push(arguments[p]),s(arguments[p]))m.push(1);else{if(!t(arguments[p]))throw new TypeError(i("0Hk4c",p,arguments[p]));m.push(0)}if(e(u={},"next",a),e(u,"return",h),n){for(p=0;p<l;p++)if(m[p]&&!r(d[p][n])){f=!0;break}f||e(u,n,j)}return f=!1,p=0,u;function a(){var e,r,t;if(f)return{done:!0};for(e=0,t=0;t<l;t++)if(m[t]){if((r=d[t].next()).done)return f=!0,r;"number"==typeof r.value?e+=r.value:e=NaN}else e+=d[t];return{value:e,done:!1}}function h(e){return f=!0,arguments.length?{value:e,done:!0}:{done:!0}}function j(){var e,r;for(e=[],r=0;r<l;r++)m[r]?e.push(d[r][n]()):e.push(d[r]);return o.apply(null,e)}}export{o as default};
//# sourceMappingURL=index.mjs.map
