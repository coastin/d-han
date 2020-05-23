angular.module("kidztimeApp").component("posterBottle", {
  templateUrl: "/dist/components/poster-bottle/poster-bottle.component.html",
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
