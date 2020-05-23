angular.module('kidztimeApp')
    .component('cartInput', {
        templateUrl: '/dist/components/page-checkout/cart-input/cart-input.component.html',
        bindings: {
            required: '<',
            title: '<',
            model: '=',
            type: '<',
            mode: '<'
        },
        controller: [
            '$scope',
            function($scope) {
                this.$onInit = () => {
                    $scope.$ctrl.mode = $scope.$ctrl.mode || 'input';
                };

                $scope.value = '';
            }]
    });
