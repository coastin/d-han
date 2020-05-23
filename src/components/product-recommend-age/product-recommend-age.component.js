angular.module("kidztimeApp").component("productRecommendAge", {
  templateUrl:
    "/dist/components/product-recommend-age/product-recommend-age.component.html",
  bindings: {},
  controller: [
    "$scope",
    "$rootScope",
    function($scope, $rootScope) {
      // views: melamine, bambooFibre
      $scope.activeView = "sport";

      $rootScope.$on("bottleChangeView", (event, view) => {
        $scope.activeView = view;
      });
    }
  ]
});
