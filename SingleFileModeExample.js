// run: nodemon SingleFileModeExample.js

require('./UPPERCASE_ONE/BOOT.js');

BOOT({
	CONFIG : {
		isDevMode : true
	},
	SERVER_CONFIG : {
		isNotUsingDB : true,

		MAIN : function(ONE) {

			ONE.ROOM('test', function(room) {

				room.on('on', function(data) {
					console.log(data);
				});
			});
		}
	},
	BROWSER_CONFIG : {
		MAIN : function(ONE) {

			ONE.MATCH_VIEW({
				uris : ['', 'View'],
				target : CLASS({

					preset : function() {'use strict';
						return VIEW;
					},

					init : function(cls, inner, self) {'use strict';

						var
						// room
						room = ONE.ROOM('test'),

						// div
						div,

						// close.
						close;

						room.send({
							methodName : 'on',
							data : {
								msg : 'MESSAGE!'
							}
						});

						div = DIV({
							style : {
								fontSize : 50
							},
							children : [SPAN({
								children : ['Hello UPPERCASE!']
							})]
						}).appendTo(BODY);

						//OVERRIDE: self.close
						self.close = close = function(params) {
							div.remove();
						};
					}
				})
			});
		}
	}
});
