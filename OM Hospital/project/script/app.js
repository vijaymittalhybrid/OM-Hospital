(function(global){
    var app = global.app = global || {};
    
    apps = new kendo.mobile.Application(document.body,
                                                        {
                                                            layout:'om_hospital',
                                                            skin:'flat'
                                                        }
    );
})(window);