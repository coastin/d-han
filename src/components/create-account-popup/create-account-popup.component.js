angular.module('kidztimeApp')
    .component('createAccountPopup', {
        templateUrl: '/dist/components/create-account-popup/create-account-popup.component.html',
        bindings: {},
        controller: [
            '$scope',
            '$popup',
            function($scope, $popup) {

                $scope.popupName = 'createAccountPopup';
                $scope.accountForm = {
                    firstName: '',
                    email: '',
                    lastName: '',
                    address: '',
                    phone: '',
                    postalCode: '',
                    password: '',
                    passwordConfirm: '',
                    isEmailPreferenceChecked: false
                };

                $scope.close = () => {
                    $popup.get($scope.popupName).close();
                };

                $scope.createAccount = () => {
                    // Create account submit logic...
                    $scope.accountForm;
                    $scope.close();
                };
        }]
    });
