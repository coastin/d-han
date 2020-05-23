angular.module('kidztimeApp')
    .component('changeTypeDinnerwares', {
        templateUrl: '/dist/components/change-type-dinnerwares/change-type-dinnerwares.component.html',
        bindings: {},
        controller: [
            '$scope',
            '$rootScope',
            function($scope, $rootScope) {
                // views: melamine, bambooFibre
                $scope.activeView = 'melamine';

                $scope.changeView = function(view) {
                    $scope.activeView = view;
                    $rootScope.$emit('dinnerwaresChangeView', view);
                }
        }]
    });
