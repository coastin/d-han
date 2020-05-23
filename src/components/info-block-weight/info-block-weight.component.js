angular.module('kidztimeApp')
    .component('infoBlockWeight', {
        templateUrl: '/dist/components/info-block-weight/info-block-weight.component.html',
        bindings: {},
        controller: [
            '$scope',
            function($scope) {

                $scope.info = {
                    title: 'Did you know??',
                    descriptionTop: 'Children should not carry more than 10% -15% of their bodyweight?',
                    description: 'Heavy backpack strains muscle, joints and create bad posture that could lead to pains and injuries lasting till adulthood. All KIDZTIME Backpacks are engineered using hybrid polymer fabric to yield a backpack that is waterproofed, ultra lightweight, yet tough and durable.'
                };

        }]
    });
