angular.module('kidztimeApp')
    .component('accountSettings', {
        templateUrl: '/dist/components/page-account-order-member/account-settings/account-settings.component.html',
        bindings: {
        },
        controller: [
            '$scope',
            function($scope) {
                $scope.accountForm = {
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    address: '',
                    postalCode: '',
                    password: '',
                    passwordConfirm: '',
                    emailPreference: false
                };

                $scope.submitAccountForm = () => {
                    // submit logic
                    $scope.accountForm;
                    debugger;
                }
            }]
    });
