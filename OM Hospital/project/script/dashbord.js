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
            
            var viewModel = kendo.observable({ 
                drawer_items:drawerSource,
                
                navigation:function(e){
                    app.dashbordService.viewModel.navigateToView(e);
                }
            });
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
        
        oninit:function(){
            console.log("hi");
        },
        
        navigateToView:function(data){
            console.log(data['data']['sourceUrl']);
            
            if(data['data']['sourceUrl'] === 'clinicInfo')
            {
                apps.navigate('#clinicInfo');
            }
            
            if(data['data']['sourceUrl'] === 'clinicNews')
            {
                apps.navigate('#clinicNews');
            }
            
            if(data['data']['sourceUrl'] === 'setAppoint')
            {
                apps.navigate('#setAppoint');
            }
            
            if(data['data']['sourceUrl'] === 'socialNet')
            {
                apps.navigate('#socialNet');
            }
            
            if(data['data']['sourceUrl'] === 'healthTip')
            {
                apps.navigate('#healthTip');
            }
            
            if(data['data']['sourceUrl'] === 'website')
            {
                apps.navigate('#website');
            }
        }
    });
    
    app.dashbordService = {
        viewModel:new dashbordModel()
    };
})(window);