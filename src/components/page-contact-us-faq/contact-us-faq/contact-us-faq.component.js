angular.module('kidztimeApp')
    .component('contactUsFaq', {
        templateUrl: '/dist/components/page-contact-us-faq/contact-us-faq/contact-us-faq.component.html',
        bindings: {},
        controller: [
            '$scope',
            function($scope) {

                $scope.contactForm = {
                    firstName: '',
                    email: '',
                    lastName: '',
                    phone: '',
                    remark: '',
                };

                $scope.submitContactForm = () => {
                    // submit contact form
                    $scope.contactForm;
                };
            }]
    });
