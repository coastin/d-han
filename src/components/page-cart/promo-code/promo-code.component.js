angular.module('kidztimeApp')
    .component('promoCode', {
        templateUrl: '/dist/components/page-cart/promo-code/promo-code.component.html',
        bindings: {
            cartOrder: '='
        },
        controller: [
            '$scope',
            function($scope) {

                $scope.promoCode = '';
                $scope.status = 'none';

                $scope.validatePromoCode = () => {
                    $scope.status = 'invalid';
                    if ($scope.promoCode === 'HAPPY123') {
                        $scope.$ctrl.cartOrder.promoCode = 20;
                        $scope.status = 'valid';
                    }
                };

                $scope.removeCode = () => {
                    $scope.promoCode = '';
                    $scope.status = 'none';
                    $scope.$ctrl.cartOrder.promoCode = 0;
                };
        }]
    });
