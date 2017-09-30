(function () {

    'use strict';

    angular
        .module('app')
        .controller('ProfileController', profileController)
        .filter('acronym', function () {
            return function (input) {
                var reg = (true) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
                return (!!input) ? input.replace(reg, function (txt) {
                    return txt.charAt(0).toUpperCase();
                }) : '';
            }
        });

    profileController.$inject = ['$scope', 'authService', '$firebaseArray', 'moment'];

    function profileController($scope, authService, $firebaseArray, moment) {
        var vm = this;
        vm.auth = authService;
        vm.profile;
        //vm.messages = [];
        vm.messages = [{
                txt: 'It looks beautiful',
                date: '2016-09-10T16:45:12.914Z',
                from: 'John Doe',
                direction: 1
            },
            {
                txt: 'It looks like the iPhone message box',
                date: '2016-09-10T16:45:14.934Z',
                from: 'Mary Doe',
                direction: 1
            },
            {
                txt: 'Yep, is this design responsive?',
                date: '2016-09-10T16:46:11.934Z4',
                direction: 0
            },
            {
                txt: 'Yeah it is responsive!',
                date: '2016-09-10T16:48:10.000Z',
                from: 'John Doe',
                direction: 1
            },
            {
                txt: 'How is your cat doing??',
                date: '2016-09-10T16:53:14.934Z',
                from: 'Jane Doe',
                direction: 1
            },
            {
                txt: 'Good.. sleeping as usual!',
                date: '2016-09-10T16:55:14.934Z',
                direction: 0
            },
        ];

        if (authService.getCachedProfile()) {
            vm.profile = authService.getCachedProfile();
        } else {
            authService.getProfile(function (err, profile) {
                vm.profile = profile;
                $scope.$apply();
            });
        }

        // var ref = firebase.database().ref().child("messages");
        // // create a synchronized array
        // $scope.messages = $firebaseArray(ref);
        // // add new items to the array
        // // the message is automatically added to our Firebase database!
        // $scope.addMessage = function () {
        //     $scope.messages.$add({
        //         sender: "patrickullrich93",
        //         receiver: "landon",
        //         profile_url: "https://scontent.xx.fbcdn.net/v/t1.0-1/c3.0.50.50/p50x50/10806286_10203674500917191_8365538221667469352_n.jpg?oh=c0ff1f61883c32349e0f98bb9d406cb9&oe=5A4F4424",
        //         text: $scope.newMessageText,
        //         timestamp: moment().format()
        //     });
        // };

    }

})();