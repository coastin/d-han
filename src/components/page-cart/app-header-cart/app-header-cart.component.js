angular.module('kidztimeApp')
    .component('appHeaderCart', {
        templateUrl: '/dist/components/page-cart/app-header-cart/app-header-cart.component.html',
        bindings: {},
        controller: [
            '$scope',
            '$popup',
            function($scope, $popup) {

                const getPopup = () => {
                    return $popup.get('loginPopup');
                };

                $scope.openSignIn = () => {
                    getPopup().open();
                }
        }]
    });
