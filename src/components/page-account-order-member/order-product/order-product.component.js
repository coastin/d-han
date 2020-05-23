angular.module('kidztimeApp')
    .component('orderProduct', {
        templateUrl: '/dist/components/page-account-order-member/order-product/order-product.component.html',
        bindings: {
            product: '='
        },
        controller: [
            '$scope',
            function($scope) {

                $scope.isProductActive = (item) => item.orderStatus === 'active';
                $scope.isProductProcessing = (item) => item.orderStatus === 'processing';
                $scope.isProductRefunded = (item) => item.orderStatus === 'refunded';

                $scope.formatPrice = (value) => {
                    return `$ ${value.toFixed(2)}`;
                };

                $scope.getAccessoryTotalPrice = (accessoryItems) => {
                    return accessoryItems
                        .reduce((sum, item) => sum + item.price * item.quantity, 0);
                };

                $scope.getTotalPrice = () => {
                    return $scope.$ctrl.product.items
                        .reduce((sum, item) => {
                            sum += item.price * item.quantity;

                            if (item.accessory) {
                                sum += $scope.getAccessoryTotalPrice(item.accessory.availableItems);
                            }

                            return sum;
                        }, 0);
                };

                $scope.submitRequest = (item) => {
                    item.orderStatus = 'processing';
                    // Submit logic
                };
            }]
    });
