global.CONNECT_TO_WEB_SOCKET_SERVER=CONNECT_TO_WEB_SOCKET_SERVER=METHOD({run:function(E){"use strict";var r,e=E.fixServerPort,n=RAR(function(){POST({port:e,uri:"",data:{senderKey:r}},function(E){var e=PARSE_STR(E);void 0===r&&(r=e.senderKey),n()})})}});