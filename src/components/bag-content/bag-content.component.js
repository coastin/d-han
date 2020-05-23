angular.module('kidztimeApp')
    .component('bagContent', {
        templateUrl: '/dist/components/bag-content/bag-content.component.html',
        bindings: {},
        controller: [
            '$scope',
            '$timeout',
            function($scope, $timeout) {

                $scope.info = {
                    title: 'Kidztime Powers-UPs',
                    description: 'Organization skills are best taugh young. Fully customize your child’s backup with KIDZTIME Power - Ups. Select from our range of  Power - up pouches and dividers to the most suitable modules for your child’s grade and skills.'
                };

                $scope.selectedView = 'main';

                $scope.mainContentList = [
                    {
                        icon: '/img/bag-main-component-icon1.png',
                        image: '/img/bag-main-component1.png'
                    },
                    {
                        icon: '/img/bag-main-component-icon2.png',
                        image: '/img/bag-main-component2.png'
                    },
                    {
                        icon: '/img/bag-main-component-icon3.png',
                        image: '/img/bag-main-component3.png'
                    },
                    {
                        icon: '/img/bag-main-component-icon4.png',
                        image: '/img/bag-main-component4.png'
                    },
                    {
                        icon: '/img/bag-main-component-icon5.png',
                        image: '/img/bag-main-component5.png'
                    },
                    {
                        icon: '/img/bag-main-component-icon6.png',
                        image: '/img/bag-main-component6.png'
                    },
                ];

                $scope.frontContentList = [
                    {
                        icon: '/img/bag-front-cover-icon1.png',
                        image: '/img/bag-front-cover1.png'
                    },
                    {
                        icon: '/img/bag-front-cover-icon2.png',
                        image: '/img/bag-front-cover2.png'
                    }
                ];

                $scope.selectedBagImage = $scope.mainContentList[0].image;

                this.$onInit = function() {
                    $timeout(() => {
                        $('.bag-slider-item').hover(
                            function() {
                                const image = $(this).attr('data-slide-image');
                                $scope.$apply(() => {
                                    $scope.selectedBagImage = image;
                                    debugger;
                                });
                            },
                            function() {
                                // $scope.$apply(() => $scope.selectedMealIndex = 0);
                            })
                    }, 300);
                };

                $scope.selectView = function(viewName) {
                    $scope.selectedView = viewName;
                    if (viewName === 'main') {
                        $scope.selectedBagImage = $scope.mainContentList[0].image;
                    } else if (viewName === 'front') {
                        $scope.selectedBagImage = $scope.frontContentList[0].image;
                    }
                }
        }]
    });
