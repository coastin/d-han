angular.module("kidztimeApp").component("backpackCustomize", {
    templateUrl: "/dist/components/push-toys/backpack-customize/backpack-customize.component.html",
    bindings: {},
    controller: [
      "$scope",
      "$rootScope",
      function($scope, $rootScope) {
        // views: sport, nozzle, sipper
        $scope.activeView = "sport";
  
        $rootScope.$on("bottleChangeView", (event, view) => {
          $scope.activeView = view;
        });
      }
    ]
  });
  