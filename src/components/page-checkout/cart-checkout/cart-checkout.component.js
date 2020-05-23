angular.module('kidztimeApp')
    .component('cartCheckout', {
        templateUrl: '/dist/components/page-checkout/cart-checkout/cart-checkout.component.html',
        bindings: {},
        controller: [
            '$scope',
            '$timeout',
            function($scope, $timeout) {

                $scope.showCard = false;

                $scope.cartOrder = {
                    shippingMethod: 'standard',
                    promoCode: 20,
                    shippingFee: 0,
                    subTotal: 129,
                    totalPrice: 0
                };

                $scope.shippingForm = {
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    address: '',
                    postalCode: '',
                    notes: ''
                };

                $scope.paymentForm = {
                    name: '',
                    cardNumber: '',
                    cardExpiry: '',
                    cvc: '',
                    billingAddress: ''
                };

                this.$onInit = () => {
                    $timeout(() => $scope.showCard = true, 200);
                };

                $scope.getCardData = () => {
                    return {
                        name: $scope.paymentForm.name || 'Lusy Air',
                        cardNumber: $scope.paymentForm.cardNumber || '**** **** **** 9101',
                        cardExpiry: $scope.paymentForm.cardExpiry || '01/21'
                    }
                };

                $scope.submitOrder = () => {
                    // submit logic
                    // all data here:
                    $scope.cartOrder;
                    $scope.shippingForm;
                    $scope.paymentForm;

                    location.href = '/account-order-guest.html';
                }
            }]
    });
