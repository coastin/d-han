angular.module('kidztimeApp')
    .component('loginPopup', {
        templateUrl: '/dist/components/login-popup/login-popup.component.html',
        bindings: {},
        controller: [
            '$scope',
            '$popup',
            function($scope, $popup) {

                $scope.popupName = 'loginPopup';
                $scope.form = {
                    username: '',
                    password: '',
                    isRememberChecked: false
                };

                $scope.close = () => {
                    $popup.get($scope.popupName).close();
                };

                $scope.login = () => {
                    // Login submit logic...
                    $scope.form;
                    $scope.close();
                };

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
