angular.module('kidztimeApp')
    .component('kidsSettings', {
        templateUrl: '/dist/components/page-account-order-member/kids-settings/kids-settings.component.html',
        bindings: {
        },
        controller: [
            '$scope',
            function($scope) {
                const getKidImage = (gender) => {
                    return gender === 'boy' ? '/img/kids-image1.png' : '/img/kids-image2.png';
                };
                const defaultKidItem = {
                    fullName: 'Jane Doe',
                    age: '10',
                    gender: 'girl',
                    kidImage: getKidImage('girl'),
                    favouriteTv1: 'Paw Patrol',
                    favouriteTv2: 'Paw Patrol'
                };

                $scope.kidForm = {
                    fullName: '',
                    gender: 'boy'
                };

                $scope.kidsList = [
                    defaultKidItem
                ];

                $scope.submitAccountForm = () => {
                    const isDefaultKidToReplace = $scope.kidsList[0] === defaultKidItem;

                    if (isDefaultKidToReplace) {
                        $scope.kidsList = [];
                    }

                    $scope.kidsList.push({
                        fullName: $scope.kidForm.fullName,
                        gender: $scope.kidForm.gender,
                        age: $scope.kidForm.age,
                        kidImage: getKidImage($scope.kidForm.gender),
                        favouriteTv1: $scope.kidForm.favouriteTv1,
                        favouriteTv2: $scope.kidForm.favouriteTv2
                    });

                    $scope.kidForm.fullName = '';
                    $scope.kidForm.age = '';
                    $scope.kidForm.favouriteTv1 = '';
                    $scope.kidForm.favouriteTv2 = '';

                    // submit logic...
                }
            }]
    });
