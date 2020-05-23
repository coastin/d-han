angular.module('kidztimeApp')
    .component('cartManager', {
        templateUrl: '/dist/components/page-cart/cart-manager/cart-manager.component.html',
        bindings: {},
        controller: [
            '$scope',
            function($scope) {

                $scope.cartOrder = {
                    shippingMethod: 'standard',
                    promoCode: 0,
                    shippingFee: 0,
                    subTotal: 0,
                    totalPrice: 0
                };

                $scope.products = [
                    {
                        items: [
                            {
                                title: '3INI Melamine Cutlery Set Cutlery (Chopstics) Crime Fighter',
                                image: '../../../../img/cart-product-item-poster.png',
                                id: 'AB-AB1234-A',
                                quantity: 1,
                                price: 19.90,
                                oldPrice: 39.90
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                title: '3INI Melamine Cutlery Set Cutlery (Chopstics) Crime Fighter',
                                image: '../../../../img/cart-product-item-poster.png',
                                id: 'AB-AB1234-A',
                                quantity: 1,
                                accessory: {
                                    maxItems: 'none',
                                    visibleItemsCount: 4,
                                    singleSelectMode: false,
                                    selectedItemsIndexes: [],
                                    availableItems: [
                                        {
                                            title: '3INI Melamine Cutlery Set (Chopstics) Crime Fighter',
                                            image: '../../../../img/cart-product-item-poster.png',
                                            quantity: 0,
                                            price: 9.90,
                                            oldPrice: 19.90
                                        },
                                        {
                                            title: '3INI Melamine Cutlery Set (Chopstics) Crime Fighter',
                                            image: '../../../../img/cart-product-item-poster.png',
                                            quantity: 0,
                                            price: 9.90,
                                            oldPrice: 19.90
                                        },
                                        {
                                            title: '3INI Melamine Cutlery Set (Chopstics) Crime Fighter',
                                            image: '../../../../img/cart-product-item-poster.png',
                                            quantity: 0,
                                            price: 9.90,
                                            oldPrice: 19.90
                                        },
                                        {
                                            title: '3INI Melamine Cutlery Set (Chopstics) Crime Fighter',
                                            image: '../../../../img/cart-product-item-poster.png',
                                            quantity: 0,
                                            price: 9.90,
                                            oldPrice: 19.90
                                        },
                                        {
                                            title: '3INI Melamine Cutlery Set (Chopstics) Crime Fighter',
                                            image: '../../../../img/cart-product-item-poster.png',
                                            quantity: 0,
                                            price: 9.90,
                                            oldPrice: 19.90
                                        }
                                    ]
                                },
                                gift: {
                                    visibleItemsCount: 1,
                                    singleSelectMode: true,
                                    maxItems: 1,
                                    selectedItemsIndexes: [],
                                    availableItems: [
                                        {
                                            title: '3INI Melamine Cutlery Set (Chopstics) Crime Fighter',
                                            image: '../../../../img/cart-product-item-poster.png',
                                            quantity: 0,
                                            price: 9.90,
                                            oldPrice: 19.90
                                        },
                                        {
                                            title: '3INI Melamine Cutlery Set (Chopstics) Crime Fighter',
                                            image: '../../../../img/cart-product-item-poster.png',
                                            quantity: 0,
                                            price: 9.90,
                                            oldPrice: 19.90
                                        },
                                        {
                                            title: '3INI Melamine Cutlery Set (Chopstics) Crime Fighter',
                                            image: '../../../../img/cart-product-item-poster.png',
                                            quantity: 0,
                                            price: 9.90,
                                            oldPrice: 19.90
                                        },
                                        {
                                            title: '3INI Melamine Cutlery Set (Chopstics) Crime Fighter',
                                            image: '../../../../img/cart-product-item-poster.png',
                                            quantity: 0,
                                            price: 9.90,
                                            oldPrice: 19.90
                                        },
                                        {
                                            title: '3INI Melamine Cutlery Set (Chopstics) Crime Fighter',
                                            image: '../../../../img/cart-product-item-poster.png',
                                            quantity: 0,
                                            price: 9.90,
                                            oldPrice: 19.90
                                        }
                                    ]
                                },
                                price: 19.90,
                                oldPrice: 39.90
                            }
                        ]
                    }
                ];

                $scope.bundles = [
                    {
                        items: [
                            {
                                bundleTitle: 'Main item',
                                title: '3INI Melamine Cutlery Set Cutlery (Chopstics) Crime Fighter',
                                image: '../../../../img/cart-product-item-poster.png',
                                id: 'AB-AB1234-A',
                                quantity: 1,
                                accessory: {
                                    maxItems: 'none',
                                    visibleItemsCount: 4,
                                    singleSelectMode: false,
                                    selectedItemsIndexes: [],
                                    availableItems: [
                                        {
                                            title: '3INI Melamine Cutlery Set (Chopstics) Crime Fighter',
                                            image: '../../../../img/cart-product-item-poster.png',
                                            quantity: 0,
                                            price: 9.90,
                                            oldPrice: 19.90
                                        },
                                        {
                                            title: '3INI Melamine Cutlery Set (Chopstics) Crime Fighter',
                                            image: '../../../../img/cart-product-item-poster.png',
                                            quantity: 0,
                                            price: 9.90,
                                            oldPrice: 19.90
                                        },
                                        {
                                            title: '3INI Melamine Cutlery Set (Chopstics) Crime Fighter',
                                            image: '../../../../img/cart-product-item-poster.png',
                                            quantity: 0,
                                            price: 9.90,
                                            oldPrice: 19.90
                                        },
                                        {
                                            title: '3INI Melamine Cutlery Set (Chopstics) Crime Fighter',
                                            image: '../../../../img/cart-product-item-poster.png',
                                            quantity: 0,
                                            price: 9.90,
                                            oldPrice: 19.90
                                        },
                                        {
                                            title: '3INI Melamine Cutlery Set (Chopstics) Crime Fighter',
                                            image: '../../../../img/cart-product-item-poster.png',
                                            quantity: 0,
                                            price: 9.90,
                                            oldPrice: 19.90
                                        }
                                    ]
                                },
                                price: 19.90,
                                oldPrice: 39.90
                            },
                            {
                                bundleTitle: '1st Item 10% off',
                                title: '3INI Melamine Cutlery Set Cutlery (Chopstics) Crime Fighter',
                                image: '../../../../img/cart-product-item-poster.png',
                                id: 'AB-AB1234-A',
                                quantity: 1,
                                price: 19.90,
                                oldPrice: 39.90
                            },
                            {
                                bundleTitle: '2st Item 10% off',
                                title: '3INI Melamine Cutlery Set Cutlery (Chopstics) Crime Fighter',
                                image: '../../../../img/cart-product-item-poster.png',
                                id: 'AB-AB1234-A',
                                quantity: 1,
                                price: 19.90,
                                oldPrice: 39.90
                            }
                        ],
                        isBundle: true
                    }
                ];

                $scope.deleteExecutor = (items, item) => {
                    const index = items.indexOf(item);
                    items.splice(index, 1);
                };

                $scope.getTotalPrice = () => {
                    let total = 0;

                    $scope.products.forEach((product) => {
                        if (product.getTotalPrice) {
                            total += product.getTotalPrice();
                        }
                    });
                    $scope.bundles.forEach((bundle) => {
                        if (bundle.getTotalPrice) {
                            total += bundle.getTotalPrice();
                        }
                    });

                    return total;
                };

                $scope.$watch(() => $scope.getTotalPrice(), (total) => {
                    $scope.cartOrder.subTotal = total;
                });

                $scope.submitOrder = () => {
                    // submit logic
                    location.href = '/checkout.html'
                }
            }]
    });
