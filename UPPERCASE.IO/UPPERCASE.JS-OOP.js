global.METHOD=METHOD=function(n){"use strict";var t,i,r=function(n,t){return void 0!==i?i(n,t):void 0};return r.type=METHOD,t="function"==typeof n?n(r):n,void 0!==t&&(i=t.run),r},global.CLASS=CLASS=METHOD(function(n){"use strict";var t,i=0;return n.getInstanceId=t=function(){return i+=1,i-1},{run:function(n){var i,r,o,e,u,c=function(n,i){var r={},o={};return o.type=c,o.id=t(),u(r,o,n,i),o};return c.type=CLASS,c.innerInit=u=function(n,t,i,u){var v,f,d;void 0!==e&&(void 0===i?i=e(c):CHECK_IS_DATA(i)===!0?(f=e(c),void 0!==f&&(EXTEND_DATA({origin:f,extend:i}),i=f)):(d=i,i=e())),void 0!==r&&(v=r(i,u),void 0!==v&&(c.mom=v,v.type===CLASS?v.innerInit(n,t,i,u):v.type.innerInit(n,t,i,u))),void 0!==o&&o(n,t,void 0===d?i:d,u)},i="function"==typeof n?n(c):n,void 0!==i&&(r=i.preset,o=i.init,e=i.params),c}}}),global.OBJECT=OBJECT=METHOD(function(n){"use strict";var t,i=[],r=!1,o=function(n){r===!0?n():i.push(n)};return n.init=t=function(){EACH(i,function(n){n()}),r=!0},{run:function(n){var t=CLASS(n),i={};return i.type=t,o(function(){var n={};i.id=CLASS.getInstanceId(),t.innerInit(n,i)}),i}}});