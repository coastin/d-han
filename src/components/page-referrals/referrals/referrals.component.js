angular.module('kidztimeApp')
    .component('referrals', {
        templateUrl: '/dist/components/page-referrals/referrals/referrals.component.html',
        bindings: {},
        controller: [
            '$scope',
            function($scope) {

                $scope.personalLink = 'xxxxxxx';
                $scope.inviteForm = {
                    email: '',
                    message: ''
                };

                $scope.copyInviteLink = () => {
                    navigator.clipboard.writeText($scope.personalLink)
                };
                $scope.sendInvite = () => {
                    // send invite logic
                    $scope.inviteForm;
                };
            }]
    });
