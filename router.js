app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: './views/orders.view.html'
        })
        .when('/create',{
            templateUrl: './views/create-order.view.html'
        })
        .when('/view/:id',{
            templateUrl: './views/view-order.view.html'
        })
});


