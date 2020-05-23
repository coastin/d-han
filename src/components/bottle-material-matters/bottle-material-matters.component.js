angular.module("kidztimeApp").component("bottleMaterialMatters", {
  templateUrl:
    "/dist/components/bottle-material-matters/bottle-material-matters.component.html",
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
