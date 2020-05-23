angular.module('kidztimeApp')
    .component('orderHistory', {
        templateUrl: '/dist/components/page-account-order-member/order-history/order-history.component.html',
        bindings: {
            historyList: '<',
            showPagination: '<',
            loadMore: '&',
            totalCount: '<'
        },
        controller: [
            '$scope',
            function($scope) {
                $scope.formatPrice = (value) => {
                    return `$ ${value.toFixed(2)}`;
                };
            }]
    });
