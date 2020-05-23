angular.module('kidztimeApp')
    .component('purchasePopup', {
        templateUrl: '/dist/components/page-account-order-member/purchase-popup/purchase-popup.component.html',
        bindings: {
            product: '='
        },
        controller: [
            '$scope',
            function($scope) {

                $scope.opened = true;

                $scope.initOverlay = () => {
                    $('.purchase-popup').click((event) => {
                        const isOverlay = event.target.classList.contains('purchase-popup');
                        if (isOverlay) {
                            $scope.$apply(() => {
                                $scope.opened = false;
                            })
                        }
                    });
                };

                $scope.learnMore = () => {
                    // do something
                    $scope.opened = false;
                };


            }]
    });
