angular.module('kidztimeApp')
    .component('productAssurance', {
        templateUrl: '/dist/components/product-assurance/product-assurance.component.html',
        bindings: {},
        controller: [
            '$scope',
            "$rootScope",
            function($scope, $rootScope) {
              // views: sport, nozzle, sipper
              $scope.activeView = "sport";
        
              $rootScope.$on("bottleChangeView", (event, view) => {
                $scope.activeView = view;
              });
        }]
    });
