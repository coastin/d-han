angular.module('kidztimeApp')
    .component('appFooter', {
        templateUrl: '/dist/components/app-footer/app-footer.component.html',
        bindings: {},
        controller: [
            '$scope',
            function($scope) {

                $scope.searchOrder = '';
                $scope.searchProduct = '';

                $scope.searchOrderHandler = () => {
                    // Search order logic here:
                    $scope.searchOrder;
                };

                $scope.searchProductHandler = () => {
                    // Search product logic here:
                    $scope.searchProduct;
                };
        }]
    });
