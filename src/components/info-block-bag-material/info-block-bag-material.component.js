angular.module('kidztimeApp')
    .component('infoBlockBagMaterial', {
        templateUrl: '/dist/components/info-block-bag-material/info-block-bag-material.component.html',
        bindings: {},
        controller: [
            '$scope',
            function($scope) {

                $scope.info = {
                    title: 'Material Matters',
                    description: 'KIDZTIME AIR Backpacks are tailored using high quality, water proof fabric compliant with REACH European fabric standards'
                };

        }]
    });
