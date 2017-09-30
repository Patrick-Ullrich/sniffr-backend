(function () {

  'use strict';

  angular
    .module('app')
    .service('authService', authService);

  authService.$inject = ['$state', 'angularAuth0', '$timeout', '$firebaseArray'];

  function authService($state, angularAuth0, $timeout, $firebaseArray) {

    var userProfile;
    var userList;

    function login() {
      angularAuth0.authorize();
    }

    function syncUserList(sub, profileUrl, familyName, givenName) {
      //var ref = firebase.database().ref().child("users");
      // create a synchronized array
      //userList = $firebaseArray(ref);
      // add new items to the array
      // the message is automatically added to our Firebase database!
      // userList.$add({
      //   sub: sub,
      //   profile_url: profileUrl,
      //   family_name: familyName,
      //   given_name: givenName
      // });
    }

    function handleAuthentication() {
      angularAuth0.parseHash(function (err, authResult) {
        if (authResult && authResult.idToken) {
          setSession(authResult);
          var profile = authResult.idTokenPayload;
          syncUserList(profile.sub, profile.picture, profile.family_name, profile.given_name);
          $state.go('home');
        } else if (err) {
          $timeout(function () {
            $state.go('home');
          });
          console.log(err);
          alert('Error: ' + err.error + '. Check the console for further details.');
        }
      });
    }

    function getProfile(cb) {
      var accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('Access token must exist to fetch profile');
      }
      angularAuth0.client.userInfo(accessToken, function (err, profile) {
        if (profile) {
          setUserProfile(profile);
        }
        cb(err, profile);
      });
    }

    function setUserProfile(profile) {
      userProfile = profile;
    }

    function getCachedProfile() {
      return userProfile;
    }

    function setSession(authResult) {
      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
    }

    function logout() {
      // Remove tokens and expiry time from localStorage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      $state.go('home');
    }

    function isAuthenticated() {
      // Check whether the current time is past the 
      // access token's expiry time
      let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }

    return {
      login: login,
      getProfile: getProfile,
      getCachedProfile: getCachedProfile,
      handleAuthentication: handleAuthentication,
      logout: logout,
      isAuthenticated: isAuthenticated
    }
  }
})();