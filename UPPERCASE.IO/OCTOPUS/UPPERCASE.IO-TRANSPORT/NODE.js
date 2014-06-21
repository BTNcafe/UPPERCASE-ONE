global.CONNECT_TO_MAIL_SERVER=CONNECT_TO_MAIL_SERVER=METHOD({run:function(o,e,r){"use strict";var n=require("nodemailer"),E=e.host,t=e.port,i=e.isSecure,c=e.username,s=e.password,R=n.createTransport("SMTP",{host:E,port:t,secureConnection:i,auth:{user:c,pass:s}});r(function(o){var e=o.senderName,r=o.senderAddress,n=o.receiverAddress,E=o.receiverAddresses,t=o.title,i=o.content;R.sendMail({from:e+" <"+r+">",to:void 0===E?n:RUN(function(){var o="";return EACH(E,function(e,r){o+=e+(r<E.length-1?", ":"")}),o}),subject:t,text:i},function(o){o!==TO_DELETE&&console.log("[UPPERCASE.IO-CONNECT_TO_MAIL_SERVER] SEND MAIL ERROR:",o)})})}}),global.CONNECT_TO_WEB_SOCKET_SERVER=CONNECT_TO_WEB_SOCKET_SERVER=METHOD({run:function(o,e,r){"use strict";var n,E,t,i,c,s=require("ws"),R=void 0===e.host?"localhost":R,S=e.port,u={};CHECK_IS_DATA(r)!==!0?n=r:(n=r.success,E=r.error),c=function(o,e){var r=u[o];void 0!==r&&EACH(r,function(o){o(e,function(){REMOVE({data:r,value:o})})})},t=new s("ws://"+R+":"+S),t.on("open",function(){i=!0,n(function(o,e){var r=u[o];void 0===r&&(r=u[o]=[]),r.push(e)},function(o){t.send(STRINGIFY(o))})}),t.on("message",function(o){var e=PARSE_STR(o);void 0!==e&&c(e.methodName,e.data)}),t.on("close",function(){c("__DISCONNECTED")}),t.on("error",function(o){i!==!0?(console.log("[UPPERCASE.IO-CONNECT_TO_WEB_SOCKET_SERVER] CONNECT TO WEB SOCKET SERVER FAILED:",o),void 0!==E&&E(o)):c("__ERROR",o)})}}),global.MULTI_PROTOCOL_SOCKET_SERVER=MULTI_PROTOCOL_SOCKET_SERVER=METHOD({run:function(o,e,r){"use strict";var n=e.socketServerPort,E=e.webSocketServerPort,t=e.webSocketFixServerPort,i=e.flashPolicyServerPort;SOCKET_SERVER(n,r),WEB_SOCKET_SERVER({port:E,fixServerPort:t,flashPolicyServerPort:i},r)}}),global.WEB_SOCKET_FIX_SERVER=WEB_SOCKET_FIX_SERVER=METHOD({run:function(o,e,r){"use strict";var n,E=require("cluster"),t=require("socket.io"),i=e.port,c=e.flashPolicyServerPort;(E.isMaster||1===E.worker.id)&&(n=t.listen(i,{log:!1,"flash policy port":c,transports:["flashsocket","xhr-polling","jsonp-polling"],secure:!1,reconnect:!1,"connect timeout":5e3}),n.on("connection",function(o){var e={},n=function(o,r){var n=e[o];void 0!==n&&EACH(n,function(o){o(r,function(){REMOVE({data:n,value:o})})})};o.on("message",function(o){var e=PARSE_STR(o);void 0!==e&&n(e.methodName,e.data)}),o.on("disconnect",function(){n("__DISCONNECTED")}),o.on("error",function(o){n("__ERROR",o)}),r({ip:o.remoteAddress,port:o.remotePort},function(o,r){var n=e[o];void 0===n&&(n=e[o]=[]),n.push(r)},function(e){o.send(STRINGIFY(e))})}),console.log("[UPPERCASE.IO-WEB_SOCKET_FIX_SERVER] RUNNING WEB SOCKET FIX SERVER... (PORT:"+i+", FLASH POLICY SERVER PORT:"+c+")"))}}),global.WEB_SOCKET_SERVER=WEB_SOCKET_SERVER=METHOD({run:function(o,e,r){"use strict";var n,E,t,i,c=require("ws").Server;CHECK_IS_DATA(e)===!0?(n=e.port,E=e.fixServerPort,t=e.flashPolicyServerPort):n=e,i=new c({port:n}),i.on("connection",function(o){var e={},n=function(o,r){var n=e[o];void 0!==n&&EACH(n,function(o){o(r,function(){REMOVE({data:n,value:o})})})};o.on("message",function(o){var e=PARSE_STR(o);void 0!==e&&n(e.methodName,e.data)}),o.on("close",function(){n("__DISCONNECTED")}),o.on("error",function(o){n("__ERROR",o)}),r({ip:o.remoteAddress,port:o.remotePort},function(o,r){var n=e[o];void 0===n&&(n=e[o]=[]),n.push(r)},function(e){o.send(STRINGIFY(e))})}),console.log("[UPPERCASE.IO-WEB_SOCKET_SERVER] RUNNING WEB SOCKET SERVER... (PORT:"+n+")"),void 0!==E&&WEB_SOCKET_FIX_SERVER({port:8126,flashPolicyServerPort:8127},r)}});