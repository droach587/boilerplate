/**
 * Simple App JS Launcher
 * deps: jQuery
 * 
 */  
 
if (window.jQuery) {  
    $(document).ready(function(){
        mainJs.init({});	
    });
} else {
    console.log('jQuery Dependency is NOT Loaded, please check source');
}
