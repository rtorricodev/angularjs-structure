app.controller('viewOrderController', async function($scope,$location) {
    const url = getPath();
    const id = url.replace('/view/', '' );

    $scope.isActaulized = false;
    $scope.order = await getOrderByKey(id);
    
    $scope.redirectTo = function redirectTo(url) {
        window.location.replace(url);
    }

    $scope.refresh = function refresh() {
        $scope.isActaulized = true;
    }

   function getPath() {
      return $location.url();
   }
});


