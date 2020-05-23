angular.module('kidztimeApp')
    .component('infoBlockMaterial', {
        templateUrl: '/dist/components/info-block-material/info-block-material.component.html',
        bindings: {},
        controller: [
            '$scope',
            function($scope) {

                $scope.info = {
                    title: 'Material matters',
                    description: 'Kids feeding is a messy affair, who needs more trouble with smashed bowls and broken crockery. From 100% Melamine to Bamboo Fibre Compound. We use material that are strong to the core, smashed and shatter resistant.'
                };

        }]
    });
