
app.controller('createOrderController', init);

async function init($scope) {

    $scope.order = new Order('',[]);
    $scope.products = await getProducts();
    $scope.newProduct = {};
    $scope.errorMessage = "";
    
    $scope.addSelectedProduct = function addSelectedProduct() {
        $scope.newProduct.id = setProductId();
        if(isSelectedProductValid()){
            $scope.order.products.push($scope.newProduct);
            $scope.newProduct = {};
        }
    };    

    $scope.deleteSelectedProduct = function deleteSelectedProduct(id) {
        for(let i = 0; i < $scope.order.products.length; i++){
            if($scope.order.products[i].id == id) {
                let index = i;
                $scope.order.products.splice(index, 1);
            }
        }
    };    

    $scope.saveOrder = async function saveOrder(orderData) {
        if(isOrderValid()){
            postOrder(orderData);
            redirectTo('/');
        }
    }

    $scope.sendOrder = async function sendOrder(orderData) {
        orderData.status="requested";
        if(isOrderValid()){
            postOrder(orderData);
            redirectTo('/');
        }
    }

    $scope.redirectTo = function redirectTo(url) {
        window.location.replace(url);
    }

    function isSelectedProductValid(){
        if( $scope.newProduct.name === undefined  ||  $scope.order.customer === "") {
            $scope.errorMessage = "Cliente y producto son campos obligatorios";
            return false;
        }else {
            $scope.errorMessage = "";
            return true;
        }
    }

    function isOrderValid(){
        if( $scope.order.products.length === 0  ||  $scope.order.customer === "") {
            $scope.errorMessage = "Cliente y productos son campos obligatorios";
            return false;
        }else {
            $scope.errorMessage = "";
            return true;
        }
    }

    function redirectTo(url) {
        window.location.replace(url);
    }

    function setProductId() {
        return $scope.order.products.length + 1 ;
    }
}

