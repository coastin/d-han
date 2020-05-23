angular.module('kidztimeApp')
    .component('posterCarousel', {
        templateUrl: '/dist/components/poster-carousel/poster-carousel.component.html',
        bindings: {},
        controller: [
            '$scope',
            function($scope) {

                $scope.test = 'lala';

                $scope.slides = [
                    {
                        title: 'Bamboo Fibre',
                        description: 'How tough? Bamboo tough. And Naturally Sterile too.',
                        src: 'img/poster-slide1.png',
                        srcMobile: 'img/poster-slide1-mobile.png'
                    },
                    {
                        title: '100% Melamine',
                        description: 'Tough against any drop, falls or any mishandling.',
                        src: 'img/poster-slide2.png',
                        srcMobile: 'img/poster-slide2-mobile.png'
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
                };
        }]
    });
