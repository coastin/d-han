angular.module("kidztimeApp").component("changeTypeBottle", {
  templateUrl:
    "/dist/components/change-type-bottle/change-type-bottle.component.html",
  bindings: {},
  controller: [
    "$scope",
    '$rootScope',
    function($scope, $rootScope) {
      // views: sport, nozzle, sipper
      $scope.activeView = "sport";

      $scope.changeView = function(view) {
        $scope.activeView = view;
        $rootScope.$emit('bottleChangeView', view);
      };
    }
  ]
});
