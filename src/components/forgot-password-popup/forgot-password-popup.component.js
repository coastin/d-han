angular.module('kidztimeApp')
    .component('forgotPasswordPopup', {
        templateUrl: '/dist/components/forgot-password-popup/forgot-password-popup.component.html',
        bindings: {},
        controller: [
            '$scope',
            '$popup',
            function($scope, $popup) {

                $scope.popupName = 'forgotPasswordPopup';
                $scope.isSubmitted = false;
                $scope.form = {
                    eamil: '',
                };

                $scope.close = () => {
                    $popup.get($scope.popupName).close();
                };

                $scope.login = () => {
                    // Login submit logic...
                    $scope.form;
                    $scope.close();
                };

                $scope.passwordResetRequest = () => {
                    // Password Reset Request logic...
                    $scope.isSubmitted = true;
                    $scope.form;
                }

                $scope.createAccount = () => {
                    $scope.close();
                    $popup.get('createAccountPopup').open();
                };

                $scope.forgotPassword = () => {
                    $scope.close();
                    $popup.get('forgotPasswordPopup').open();
                }
        }]
    });
