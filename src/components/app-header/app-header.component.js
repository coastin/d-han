angular.module('kidztimeApp')
    .component('appHeader', {
        templateUrl: '/dist/components/app-header/app-header.component.html',
        bindings: {},
        controller: [
            '$scope',
            function($scope) {

                $scope.mobileMenuOpened = false;

                $scope.openMobileMenu = () => {
                    $scope.mobileMenuOpened = true;
                    $('body').css({ overflow: 'hidden' })
                };

                $scope.closeMobileMenu = () => {
                    $scope.mobileMenuOpened = false;
                    $('body').css({ overflow: 'auto' })
                }
        }]
    });
