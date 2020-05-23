angular.module('kidztimeApp')
    .component('infoBlockFood', {
        templateUrl: '/dist/components/info-block-food/info-block-food.component.html',
        bindings: {},
        controller: [
            '$scope',
            function($scope) {

                $scope.info = {
                    title: 'FDA food grade print',
                    description: 'Mealtimes are more fun Sith our dazzlingly designed cutlery and tablewares. Printed with the highest grade FDA approved prints. We are on the side of caution to ensure our product are compliant with the strictest European standards. All for our parents’ peace of mind.'
                };

        }]
    });
