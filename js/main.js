var mainJs = (function () {
 		
 		/**
 		 * Avoid Console Errors
 		 *
 		 * 
 		 */
		(function() {
		    var method;
		    var noop = function () {};
		    var methods = [
		        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		        'timeStamp', 'trace', 'warn'
		    ];
		    var length = methods.length;
		    var console = (window.console = window.console || {});
		
		    while (length--) {
		        method = methods[length];
		
		        // Only stub undefined methods.
		        if (!console[method]) {
		            console[method] = noop;
		        }
		    }
		}());
 		
 		
 		/**
 		 * Simple Init Function
 		 *
 		 * 
 		 */
        function init() {
            console.log('init pass on bp');
        }
 
 
        /**
         * Reveal All Methods here
         *
         * 
         */
        return {
            init 	:	init
        };
})();