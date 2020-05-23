angular.module('kidztimeApp')
    .component('posterCarouselBagToSchool', {
        templateUrl: '/dist/components/poster-carousel-bag-to-school/poster-carousel-bag-to-school.component.html',
        bindings: {},
        controller: [
            '$scope',
            function($scope) {

                $scope.test = 'lala';

                $scope.slides = [
                    {
                        title: 'Kidztime SCHOOL',
                        description: 'Dazzle UP Junior’s backpack with KIDZTIME bag personalisation service.',
                        src: 'img/poster-slide1-bag.png',
                        srcMobile: 'img/poster-slide1-mobile-bag.png'
                    },
                    {
                        title: 'Kidztime AIR',
                        description: 'Light-as-Air school bags. More compartment for junior. Less weight to carry!',
                        src: 'img/poster-slide2-bag.png',
                        srcMobile: 'img/poster-slide2-mobile-bag.png'
                    }
                ];

                $scope.carouselIndex = 1;
                $scope.nextSlide = () => {
                    if ($scope.carouselIndex + 1 === $scope.slides.length) {
                        $scope.carouselIndex = 0;
                    } else {
                        $scope.carouselIndex += 1;
                    }
                };

                $scope.prevSlide = () => {
                    if ($scope.carouselIndex === 0) {
                        $scope.carouselIndex = $scope.slides.length - 1;
                    } else {
                        $scope.carouselIndex -= 1;
                    }
                }
        }]
    });
