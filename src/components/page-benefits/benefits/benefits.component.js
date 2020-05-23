angular.module('kidztimeApp')
    .component('benefits', {
        templateUrl: '/dist/components/page-benefits/benefits/benefits.component.html',
        bindings: {},
        controller: [
            '$scope',
            function($scope) {

                $scope.voucherCode = 'XXXXXX';
                $scope.benefitForm = {
                    firstName: '',
                    email: '',
                    lastName: '',
                    phone: '',
                    remark: '',
                    address: '',
                    postalCode: '',
                    selectedBottleId: 1
                };

                $scope.bottleModels = [
                    {
                        id: 1,
                        img: '/img/cart-product-item-poster.png'
                    },
                    {
                        id: 2,
                        img: '/img/cart-product-item-poster.png'
                    },
                    {
                        id: 3,
                        img: '/img/cart-product-item-poster.png'
                    }
                ];

                $scope.submitBenefitForm = () => {
                    // submit benefit form
                    $scope.benefitForm;
                };

                $scope.executeRedeem = () => {
                    // redeem logic
                }
            }]
    });
