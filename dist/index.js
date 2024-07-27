"use strict";var h=function(i,u){return function(){return u||i((u={exports:{}}).exports,u),u.exports}};var p=h(function(k,m){"use strict";var v=require("@stdlib/utils-define-nonenumerable-read-only-property"),q=require("@stdlib/assert-is-function"),y=require("@stdlib/assert-is-number").isPrimitive,b=require("@stdlib/assert-is-iterator-like"),f=require("@stdlib/symbol-iterator"),w=require("@stdlib/string-format");function l(){var i,u,n,s,a,r;if(n=arguments.length,n<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(i=[],u=[],r=0;r<n;r++)if(i.push(arguments[r]),b(arguments[r]))u.push(1);else if(y(arguments[r]))u.push(0);else throw new TypeError(w("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",r,arguments[r]));if(s={},v(s,"next",c),v(s,"return",d),f){for(r=0;r<n;r++)if(u[r]&&!q(i[r][f])){a=!0;break}a||v(s,f,g)}return a=!1,r=0,s;function c(){var e,t,o;if(a)return{done:!0};for(e=0,o=0;o<n;o++)if(u[o]){if(t=i[o].next(),t.done)return a=!0,t;typeof t.value=="number"?e+=t.value:e=NaN}else e+=i[o];return{value:e,done:!1}}function d(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function g(){var e,t;for(e=[],t=0;t<n;t++)u[t]?e.push(i[t][f]()):e.push(i[t]);return l.apply(null,e)}}m.exports=l});var x=p();module.exports=x;
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
