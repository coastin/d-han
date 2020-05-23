angular.module('kidztimeApp')
    .component('productsList', {
        templateUrl: '/dist/components/products-list/products-list.component.html',
        bindings: {},
        controller: [
            '$scope',
            function($scope) {

                $scope.products = [
                    {
                        title: 'Sling Bag / Backpack 1',
                        price: 'SGD 10.50',
                        img: 'img/slingBag1.png',
                        brandImg: 'img/brand.png'
                    },
                    {
                        title: 'Sling Bag / Backpack 2',
                        price: 'SGD 10.50',
                        img: 'img/slingBag1.png',
                        brandImg: 'img/brand.png'
                    },
                    {
                        title: 'Sling Bag / Backpack 3',
                        price: 'SGD 10.50',
                        img: 'img/slingBag1.png',
                        brandImg: 'img/brand.png'
                    },
                    {
                        title: 'Sling Bag / Backpack 4',
                        price: 'SGD 10.50',
                        img: 'img/slingBag1.png',
                        brandImg: 'img/brand.png'
                    },
                    {
                        title: 'Sling Bag / Backpack 5',
                        price: 'SGD 10.50',
                        img: 'img/slingBag1.png',
                        brandImg: 'img/brand.png'
                    },
                    {
                        title: 'Sling Bag / Backpack 6',
                        price: 'SGD 10.50',
                        img: 'img/slingBag1.png',
                        brandImg: 'img/brand.png'
                    },
                    {
                        title: 'Sling Bag / Backpack 7',
                        price: 'SGD 10.50',
                        img: 'img/slingBag1.png',
                        brandImg: 'img/brand.png'
                    },
                    {
                        title: 'Sling Bag / Backpack 8',
                        price: 'SGD 10.50',
                        img: 'img/slingBag1.png',
                        brandImg: 'img/brand.png'
                    }
                ];

                $scope.loadMore = () => {
                    const pack = [
                        {
                            title: 'Sling Bag / Backpack X',
                            price: 'SGD 10.50',
                            img: 'img/slingBag1.png',
                            brandImg: 'img/brand.png'
                        },
                        {
                            title: 'Sling Bag / Backpack X',
                            price: 'SGD 10.50',
                            img: 'img/slingBag1.png',
                            brandImg: 'img/brand.png'
                        },
                        {
                            title: 'Sling Bag / Backpack X',
                            price: 'SGD 10.50',
                            img: 'img/slingBag1.png',
                            brandImg: 'img/brand.png'
                        },
                        {
                            title: 'Sling Bag / Backpack X',
                            price: 'SGD 10.50',
                            img: 'img/slingBag1.png',
                            brandImg: 'img/brand.png'
                        }
                    ];

                    $scope.products.push(...pack);
                }

        }]
    });
