// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var o=e,u=r,m=t.isPrimitive,d=n,l=s,a=i;var f=function e(){var r,t,n,s,i,f;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(r=[],t=[],f=0;f<n;f++)if(r.push(arguments[f]),d(arguments[f]))t.push(1);else{if(!m(arguments[f]))throw new TypeError(a("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",f,arguments[f]));t.push(0)}if(o(s={},"next",p),o(s,"return",h),l){for(f=0;f<n;f++)if(t[f]&&!u(r[f][l])){i=!0;break}i||o(s,l,j)}return i=!1,f=0,s;function p(){var e,s,o;if(i)return{done:!0};for(e=0,o=0;o<n;o++)if(t[o]){if((s=r[o].next()).done)return i=!0,s;"number"==typeof s.value?e+=s.value:e=NaN}else e+=r[o];return{value:e,done:!1}}function h(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function j(){var s,i;for(s=[],i=0;i<n;i++)t[i]?s.push(r[i][l]()):s.push(r[i]);return e.apply(null,s)}},p=f;export{p as default};
//# sourceMappingURL=index.mjs.map
