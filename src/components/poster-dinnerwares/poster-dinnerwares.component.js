angular.module('kidztimeApp')
    .component('posterDinnerwares', {
        templateUrl: '/dist/components/poster-dinnerwares/poster-dinnerwares.component.html',
        bindings: {},
        controller: [
            '$scope',
            '$rootScope',
            function($scope, $rootScope) {
                // views: melamine, bambooFibre
                $scope.activeView = 'melamine';

                $rootScope.$on('dinnerwaresChangeView', (event, view) => {
                    $scope.activeView = view;
                });
        }]
    });
