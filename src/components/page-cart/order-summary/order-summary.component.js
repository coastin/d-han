angular.module('kidztimeApp')
    .component('orderSummary', {
        templateUrl: '/dist/components/page-cart/order-summary/order-summary.component.html',
        bindings: {
            cartOrder: '=',
            submitOrder: '&',
            mobileResultOnly: '<',
            calculationOnly: '<'
        },
        controller: [
            '$scope',
            function($scope) {

                $scope.format = (value) => {
                    return value >= 0 ? `$${value.toFixed(2)}` : `-$${(-value).toFixed(2)}`;
                };

                $scope.getTotalOrder = () => {
                    const subTotalPrice = $scope.$ctrl.cartOrder.subTotal;
                    const shippingFee = $scope.getShippingFee();
                    const totalPrice = subTotalPrice - $scope.$ctrl.cartOrder.promoCode + shippingFee;
                    $scope.$ctrl.cartOrder.totalPrice = totalPrice;
                    $scope.$ctrl.cartOrder.shippingFee = shippingFee;
                    return totalPrice;
                };

                $scope.standardShippingTitle = () => {
                    return $scope.$ctrl.cartOrder.subTotal > 30 ? 'Free Shipping' : 'Standard Shipping';
                };

                $scope.getShippingFee = () => {
                    return $scope.$ctrl.cartOrder.shippingMethod === 'self' || $scope.$ctrl.cartOrder.subTotal > 30 ? 0 : 3.9;
                };

            }]
    });
