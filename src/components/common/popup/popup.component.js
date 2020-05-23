angular.module('kidztimeApp')
    .component('popup', {
        templateUrl: '/dist/components/common/popup/popup.component.html',
        transclude: true,
        bindings: {
            name: '<'
        },
        controller: [
            '$scope',
            '$popup',
            function($scope, $popup) {

                $scope.popupModel = new $popup.PopupModel(this.name);

                this.$onInit = () => {
                    $popup.register(this.name, $scope.popupModel);
                };

                this.$onDestroy = () => {
                    $popup.unregister(this.name);
                };
        }]
    });
