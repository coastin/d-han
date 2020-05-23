angular.module('kidztimeApp')
    .component('mealSelect', {
        templateUrl: '/dist/components/meal-select/meal-select.component.html',
        bindings: {},
        controller: [
            '$scope',
            '$timeout',
            function($scope, $timeout) {

            $scope.meals = [
                {
                    name: 'Bowl',
                    title: 'Kidztime Tots Bowl (7.5”, 6.5”, 5.5”)',
                    description: 'Perfect everyday sue for rice, noodle, soups or cereal for the little tots',
                    src: 'img/bowl.png'
                },
                {
                    name: 'Divided Plates',
                    title: 'Kidztime divided plates',
                    description: 'For the picky eaters, serve a variety of food in bite-sized fun!',
                    src: 'img/plates.png'
                },
                {
                    name: 'Cups',
                    title: 'Kidztime Cup',
                    description: 'Start your growing toddlers on cups with our tough & brightly printed cups',
                    src: 'img/cups.png'
                },
                {
                    name: 'Cutlery',
                    title: 'Kidztime cutlery',
                    description: 'Tiny cutlery sets for tiny fingers. The perfect starter set for toddlers.',
                    src: 'img/cutlery.png'
                }
            ];

            $scope.openMeal = (mealIndex) => {
                $scope.meals.forEach((meal, index) => {
                    if (mealIndex === index) {
                        meal.open = !meal.open;
                    } else {
                        meal.open = false
                    }
                });
            };

            $scope.selectedMealIndex = 0;

            this.$onInit = function() {
                $timeout(() => {
                    $('.mealtime-item').hover(
                        function() {
                            const index = parseInt($(this).attr('data-meal-index'));
                            $scope.$apply(() => $scope.selectedMealIndex = index);
                        },
                        function() {
                            $scope.$apply(() => $scope.selectedMealIndex = 0);
                        })
                }, 300);
            };

        }]
    });
