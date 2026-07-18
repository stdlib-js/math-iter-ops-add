"use strict";var h=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}}};var p=h(function(k,m){"use strict";var v=require("@stdlib/utils-define-nonenumerable-read-only-property"),q=require("@stdlib/assert-is-function"),y=require("@stdlib/assert-is-number").isPrimitive,b=require("@stdlib/assert-is-iterator-like"),f=require("@stdlib/symbol-iterator"),w=require("@stdlib/string-format");function l(){var i,e,n,s,a,r;if(n=arguments.length,n<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(i=[],e=[],r=0;r<n;r++)if(i.push(arguments[r]),b(arguments[r]))e.push(1);else if(y(arguments[r]))e.push(0);else throw new TypeError(w("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",r,arguments[r]));if(s={},v(s,"next",c),v(s,"return",d),f){for(r=0;r<n;r++)if(e[r]&&!q(i[r][f])){a=!0;break}a||v(s,f,g)}return a=!1,r=0,s;function c(){var t,u,o;if(a)return{done:!0};for(t=0,o=0;o<n;o++)if(e[o]){if(u=i[o].next(),u.done)return a=!0,u;typeof u.value=="number"?t+=u.value:t=NaN}else t+=i[o];return{value:t,done:!1}}function d(t){return a=!0,arguments.length?{value:t,done:!0}:{done:!0}}function g(){var t,u;for(t=[],u=0;u<n;u++)e[u]?t.push(i[u][f]()):t.push(i[u]);return l.apply(null,t)}}m.exports=l});var x=p();module.exports=x;
/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
