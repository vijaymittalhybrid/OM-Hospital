(function(global){
    var dashbordModel,
        app = global.app = global.app || {};
    
    dashbordModel = kendo.data.ObservableObject.extend({
        show:function(e){
        }
    });
    
    app.dashbordService = {
        viewModel:new dashbordModel()
    };
})(window);