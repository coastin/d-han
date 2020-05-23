angular.module('kidztimeApp')
    .component('cartProduct', {
        templateUrl: '/dist/components/page-cart/cart-product/cart-product.component.html',
        bindings: {
            product: '=',
            deleteExecutor: '&',
            editable: '<'
        },
        controller: [
            '$scope',
            function($scope) {
                $scope.isEditMode = false;
                $scope.productBeforeEdit = null;

                this.$onInit = () => {
                    $scope.$ctrl.product.getTotalPrice = $scope.getTotalPrice;
                };

                $scope.edit = () => {
                    $scope.isEditMode = true;
                    $scope.productBeforeEdit = angular.copy($scope.$ctrl.product);
                };

                $scope.delete = () => {
                    $scope.$ctrl.deleteExecutor();
                };

                $scope.update = () => {
                    $scope.isEditMode = false;
                    $scope.productBeforeEdit = null;
                };

                $scope.cancel = () => {
                    $scope.isEditMode = false;
                    $scope.$ctrl.product.items = $scope.productBeforeEdit.items;
                };

                $scope.incQuantity = (item) => {
                    item.quantity += 1;
                };

                $scope.decQuantity = (item, minValue) => {
                    if (item.quantity > minValue) {
                        item.quantity -= 1;
                    }
                };

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

                $scope.getTotalOldPrice = () => {
                    return $scope.$ctrl.product.items
                        .reduce((sum, item) => {
                            const price = item.oldPrice ? item.oldPrice : item.price;
                            sum += price * item.quantity;

                            if (item.accessory) {
                                sum += $scope.getAccessoryTotalOldPrice(item.accessory.availableItems);
                            }

                            return sum;
                        }, 0);
                };

                $scope.getAccessoryTotalOldPrice = (accessoryItems) => {
                    return accessoryItems
                        .reduce((sum, item) => {
                            const price = item.oldPrice ? item.oldPrice : item.price;
                            return sum + price * item.quantity;
                        }, 0);
                };

            }]
    });
