// Intravenous JavaScript library v0.1.7-beta
// (c) Roy Jacobs
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(window,undefined){
function r(k){function t(p,q){for(var l=p.split("."),n=k,m=0;m<l.length-1;m++)n=n[l[m]];n[l[l.length-1]]=q}k="undefined"!==typeof k?k:{};k.version="0.1.7-beta";t("version",k.version);(function(){function p(a,b,d){var c=q(a,b);b=c.key;for(var c=c.data,e,f=a;f&&!(e=f.i[b]);)f=f.parent;if(c&&c.u){var g=c.u(a,b,e);if(g.h)return g.data}if(!f)throw Error("Unknown dependency: "+b);if(c&&c.resolve&&(g=c.resolve(a,b,e),g.h))return g.data;if(c=a.b[e.j].get(b))return c;var h;if(e.value instanceof Function){c=
e.value.$inject;h=[];if(c instanceof Array)for(f=0,g=c.length;f<g;f++)h.push(p(a,c[f],[]));c=function(){};c.prototype=e.value.prototype;c=new c;f=0;for(g=d.length;f<g;f++)h.push(d[f]);h=e.value.apply(c,h);if(h instanceof Function){c=new m(a,b);c.a.register(b,h);for(var k in h)h.hasOwnProperty(k)&&(c[k]=h[k]);h=void 0}}else c=e.value;a.b[e.j].set(new x(e,h||c));return h||c}function q(a,b){for(var d in a.v)for(var c=a.v[d],e=0,f=c.suffixes.length;e<f;e++){var g=c.suffixes[e];if(-1!==b.indexOf(g,b.length-
g.length))return{data:c,key:b.slice(0,b.length-g.length)}}return{data:null,key:b}}function l(a,b){this.i={};this.parent=b;this.b={perRequest:new u(this),singleton:new v(this,b?b.b.singleton:null),unique:new w(this)};this.children=[];this.options=a=a||{};this.register("container",this);this.dispose=this.f;this.get=this.get;this.register=this.register}function n(a,b){this.a=a;this.key=b;this.dispose=this.f;this.get=this.get;this.use=this.use}function m(a,b){this.a=a.create();this.key=b;this.dispose=
this.f;this.get=this.get;this.use=this.use}function w(a){this.a=a;this.cache=[]}function v(a,b){this.a=a;this.cache=[];this.c={};this.parent=b}function u(a){this.a=a;this.cache=[];this.c={};this.tag=0;this.m={};this.o=[]}function x(a,b){this.registration=a;this.g=b}function y(a,b,d,c){this.key=a;this.a=b;this.value=d;this.j=c}u.prototype={get:function(a){for(var b=0,d=this.cache.length;b<d;b++){var c=this.cache[b];if(c.registration.key===a&&c.tag===this.tag){if(!c.g)break;this.set(c);return c.g}}this.o.push(a);
if(this.m[a])throw Error("Circular reference: "+this.o.join(" --\x3e "));this.m[a]=!0;return null},set:function(a){this.cache.push(a);a.tag=this.tag;this.c[a.tag]=this.c[a.tag]||{};this.c[a.tag][a.registration.key]=this.c[a.tag][a.registration.key]+1||1},release:function(a){return!--this.c[a.tag][a.registration.key]},l:function(){this.tag++;this.m={};this.o=[]}};v.prototype={get:function(a){for(var b=0,d=this.cache.length;b<d;b++){var c=this.cache[b];if(c.registration.key===a){if(!c.g)break;this.set(c);
return c.g}}return this.parent?this.parent.get(a):null},set:function(a){this.cache.push(a);this.c[a.registration.key]=this.c[a.registration.key]+1||1},release:function(a){return!--this.c[a.registration.key]},l:function(){}};w.prototype={get:function(){return null},set:function(a){this.cache.push(a)},release:function(a){this.cache.splice(this.cache.indexOf(a),1);return!0},l:function(){}};m.prototype={get:function(){var a=Array.prototype.slice.call(arguments);a.unshift(this.key);a=this.a.get.apply(this.a,
a);a.s=this;return a},use:function(a,b,d){this.a.register(a,b,d);return this},f:function(){this.a.f()}};n.prototype={get:function(){var a=new m(this.a,this.key);return a.get.apply(a,arguments)},use:function(a,b,d){return(new m(this.a,this.key)).use(a,b,d)},f:function(a){a.s.f();delete a.s}};l.prototype={v:{B:{suffixes:["?"],u:function(a,b,d){return d?{h:!1}:{h:!0,data:null}}},A:{suffixes:["Factory","!"],resolve:function(a,b){return{h:!0,data:new n(a,b)}}}},register:function(a,b,d){if(q(this,a).data)throw Error("Cannot register dependency: "+
a);!d&&this.i[a]?this.i[a].value=b:this.i[a]=new y(a,this,b,d||"perRequest")},get:function(a){for(var b in this.b)this.b.hasOwnProperty(b)&&this.b[b].l(a);b=Array.prototype.slice.call(arguments).slice(1);for(var d=this,c;d&&null===(c=p(d,a,b));)d=d.parent;return c},f:function(){for(var a;a=this.children.pop();)a.f();for(var b=this.w();a=b.pop();)if(this.b[a.registration.j].release(a)&&this.options.onDispose)this.options.onDispose(a.g,a.registration.key);this.parent&&this.parent.children.splice(this.parent.children.indexOf(this),
1);return!0},create:function(a){a=a||{};a.onDispose=a.onDispose||this.options.onDispose;a=new l(a,this);this.children.push(a);return a},w:function(){var a=[],b;for(b in this.b)this.b.hasOwnProperty(b)&&(a=a.concat(this.b[b].cache));return a}};k.create=function(a){return new l(a)};t("create",k.create)})()}"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?r(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],r):r(window.intravenous={});!0;
})(typeof window !== "undefined" ? window : global);
