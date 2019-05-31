app.controller('ordersController', async function ($scope) {
  
    $scope.test = 'works';
    $scope.draft = false;
    $scope.requested = false;
    $scope.finished = false;

    $scope.orders = [];

    $scope.draftOrders = await getOrdersByStatus('draft');
    $scope.requestedOrders = await  getOrdersByStatus('requested');
    $scope.finishedOrders = await  getOrdersByStatus('finished');

    $scope.showDraft = async function showDraft() {
        $scope.draft = true;
        $scope.requested = false;
        $scope.finished = false;
    }

    $scope.showRequested = async function showRequested() {
        $scope.draft = false;
        $scope.requested = true;
        $scope.finished = false;
    }

    $scope.showFinished = async function showFinished() {
        $scope.draft = false;
        $scope.requested = false;
        $scope.finished = true;

    }

    $scope.redirectTo = function redirectTo(url) {
        window.location.replace(url);
    }

    function redirectTo(url) {
        window.location.replace(url);
    }

    $scope.viewOrder = function viewOrder(id) {
        console.log(id);
        redirectTo('/#!/view/' + id);
    }

})