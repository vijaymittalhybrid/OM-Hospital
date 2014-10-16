(function(global){
    var drawerModel,drawerSource,logoSource,
        app = global.app = global.app || {};
    
    drawerModel = kendo.data.ObservableObject.extend({
        show:function(){
            console.log("jlkjkl");
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
                    app.drawerService.viewModel.navigateToView(e);
                }
            });
            kendo.bind($("#my-drawer ul"), viewModel);
            
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
    
    app.drawerService = {
        viewModel:new drawerModel()
    };
})(window);