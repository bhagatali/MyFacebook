'use strict';

angular.module('myApp.facebook', ['ngRoute','ngFacebook'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/facebook', {
    templateUrl: 'facebook/facebook.html',
    controller: 'FacebookCtrl'
  });
}])

.config( function( $facebookProvider ) {
  $facebookProvider.setAppId('968053186604029');
  $facebookProvider.setPermissions("email", "public_profile", "user_posts", "publish_actions", "use_photos");
})

.run(function($rootScope){
    (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));    
})

.controller('FacebookCtrl', ['$scope','$facebook',function($scope,$facebook) {
    $scope.isLoggedIn = false;
    $scope.login = function(){
        $facebook.login().then(function(){
           console.log('LOGGED IN'); 
        });
    }

}]);