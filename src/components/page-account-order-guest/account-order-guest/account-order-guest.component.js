angular.module('kidztimeApp')
    .component('accountOrderGuest', {
        templateUrl: '/dist/components/page-account-order-guest/account-order-guest/account-order-guest.component.html',
        bindings: {},
        controller: [
            '$scope',
            function($scope) {

                $scope.historyList = [
                    {
                        cartOrder: {
                            shippingMethod: 'standard',
                            promoCode: 20,
                            shippingFee: 0,
                            subTotal: 188.9,
                            totalPrice: 168.9,
                            reference: '12345678901234',
                            date: '01-04-2020: 21-52',
                            status: 'Shipped',
                            summary: {
                                paymentDate: '01/04/2020',
                                processedDate: '01/04/2020',
                                shippedDate: '05/04/2020',
                                completedDate: '',
                                shipTo: {
                                    client: 'Jane Doe',
                                    address: 'Blk 999C, #04-673, Jurong West st 93',
                                    addressCode: '999999',
                                    phone: '+65 99999999'
                                },
                                billingAddress: {
                                    client: 'Jane Doe',
                                    address: 'Blk 999C, #04-673, Jurong West st 93',
                                    addressCode: '999999'
                                },
                            }
                        },
                        products: [
                            {
                                items: [
                                    {
                                        title: '3INI Melamine Cutlery Set Cutlery (Chopstics) Crime Fighter',
                                        image: '../../../../img/cart-product-item-poster.png',
                                        id: 'AB-AB1234-A',
                                        quantity: 1,
                                        price: 19.90,
                                        oldPrice: 39.90,
                                        orderStatus: 'active'
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
                                        price: 19.90,
                                        oldPrice: 39.90,
                                        orderStatus: 'processing'
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
                                        price: 19.90,
                                        oldPrice: 39.90,
                                        orderStatus: 'refunded'
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
                                            visibleItemsCount: 2,
                                            singleSelectMode: false,
                                            selectedItemsIndexes: [0, 1],
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
                                                }
                                            ]
                                        },
                                        price: 19.90,
                                        oldPrice: 39.90,
                                        orderStatus: 'active'
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
                                            selectedItemsIndexes: [0, 0, 1, 1, 1],
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
                                                }
                                            ]
                                        },
                                        gift: {
                                            visibleItemsCount: 1,
                                            singleSelectMode: true,
                                            maxItems: 1,
                                            selectedItemsIndexes: [0],
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
                                        oldPrice: 39.90,
                                        orderStatus: 'active'
                                    }
                                ]
                            }
                        ],
                        bundles: [
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
                                            visibleItemsCount: 1,
                                            singleSelectMode: false,
                                            selectedItemsIndexes: [0],
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
                                                }
                                            ]
                                        },
                                        price: 19.90,
                                        oldPrice: 39.90,
                                        orderStatus: 'active'
                                    },
                                    {
                                        bundleTitle: '1st Item 10% off',
                                        title: '3INI Melamine Cutlery Set Cutlery (Chopstics) Crime Fighter',
                                        image: '../../../../img/cart-product-item-poster.png',
                                        id: 'AB-AB1234-A',
                                        quantity: 1,
                                        price: 19.90,
                                        oldPrice: 39.90,
                                        orderStatus: 'processing'
                                    },
                                    {
                                        bundleTitle: '2st Item 10% off',
                                        title: '3INI Melamine Cutlery Set Cutlery (Chopstics) Crime Fighter',
                                        image: '../../../../img/cart-product-item-poster.png',
                                        id: 'AB-AB1234-A',
                                        quantity: 1,
                                        price: 19.90,
                                        oldPrice: 39.90,
                                        orderStatus: 'refunded'
                                    }
                                ],
                                isBundle: true
                            }
                        ]
                    }
                ];
            }]
    });
