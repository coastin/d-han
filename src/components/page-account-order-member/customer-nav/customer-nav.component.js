angular.module('kidztimeApp')
    .component('customerNav', {
        templateUrl: '/dist/components/page-account-order-member/customer-nav/customer-nav.component.html',
        bindings: {
            selectedLink: '<'
        },
        controller: [
            '$scope',
            function($scope) {

            }]
    });
