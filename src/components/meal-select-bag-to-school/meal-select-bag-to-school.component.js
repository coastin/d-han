angular.module('kidztimeApp')
    .component('mealSelectBagToSchool', {
        templateUrl: '/dist/components/meal-select-bag-to-school/meal-select-bag-to-school.component.html',
        bindings: {},
        controller: [
            '$scope',
            '$timeout',
            function($scope, $timeout) {

            $scope.meals = [
                {
                    name: 'Kidztime AIR',
                    title: 'Kidztime AIR',
                    description: 'STAY TUNED! WE ARE COMING SOON :)',
                    descriptionMobile: 'Light-as-Air school bag. More compartment for junior, less weight to carry',
                    src: 'img/bag-school.png',
                    mobile: 'img/bag-school-mobile.png'
                },
                {
                    name: 'Kidztime SCHOOL',
                    title: 'Kidztime SCHOOL',
                    description: 'Dazzle UP Junior’s backpack with KIDZTIME bag personalisation service.',
                    descriptionMobile: 'Light-as-Air school bag. More compartment for junior, less weight to carry',
                    src: 'img/air-school.png',
                    mobile: 'img/air-school-mobile.png'
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
