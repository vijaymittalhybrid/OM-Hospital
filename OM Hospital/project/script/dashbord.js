(function(global){
    var dashbordModel,drawerSource,logoSource,
        app = global.app = global.app || {};
    
    dashbordModel = kendo.data.ObservableObject.extend({
        show:function(){
            
            /*Drawer*/
             drawerSource = new kendo.data.DataSource({
                transport:{
                    read:{
                        url:'project/data/drawerListData.json',
                        dataType:'json'
                    }
                }
            });
            
            var viewModel = kendo.observable({ drawer_items:drawerSource});
            kendo.bind($("ul"), viewModel);
            
            /*logo*/
            /*logoSource = new kendo.data.DataSource({
                transport:{
                    read:{
                        url:'project/data/logoData.json',
                        dataType:'json'
                    }
                }
            });
            
            var logoModel = kendo.observable({ logo_item:logoSource});
            kendo.bind($("#logo"), logoModel);*/
        },
        
        navigation:function(e){
            console.log(e);
        }
    });
    
    app.dashbordService = {
        viewModel:new dashbordModel()
    };
})(window);