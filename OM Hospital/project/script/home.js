(function(global){
    var homeModel,logoSource,
        app = global.app = global.app || {};
    
    homeModel = kendo.data.ObservableObject.extend({
        show:function(){
            console.log("hello");
            
            /*logo*/
            logoSource = new kendo.data.DataSource({
                transport:{
                    read:{
                        url:'project/data/logoData.json',
                        dataType:'json'
                    }
                }
            });
            
            var logoModel = kendo.observable({ logo_item:logoSource});
            kendo.bind($("#logo_list"), logoModel);
        },
       
    });
    
    app.homeService = {
        viewModel:new homeModel()
    };
})(window);