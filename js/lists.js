angular.module('lists', [])

.controller('ProductList', function($scope) {
    $scope.searchBox="";
    $scope.products = [
        {title: "tomato", price: 3},
        {title: "potato", price: 1}
    ];
    $scope.addProduct = function() {
        $scope.products.push({title:$scope.productTitle, price:$scope.productPrice, deleteIco: "ico/delete_ico.png"});
        $scope.productTitle = "";
        $scope.productPrice = "";
    };
    $scope.deleteProduct = function(index) {
       $scope.products.splice(index, 1);
    }
    $scope.show = false;
    $scope.toogleView = function () {
       $scope.show = !$scope.show;
    };
  })

.controller('UsersList', function($scope) {
    $scope.searchBox="";
    $scope.users = [
        {name: "cartman", age: 13, city: "South Park", avatarURL:"images/cartman_avatar.png"},
        {name: "kenny", age: 10, city: "Zhytomyr", avatarURL:"images/kenny_avatar.png"}
    ];
    $scope.addUser = function() {
        $scope.users.push({name:$scope.userName, age:$scope.userAge, city:$scope.userCity, avatarURL:$scope.userAvatar});
        $scope.userName = "";
        $scope.userAge = "";
        $scope.userCity = "";
        $scope.userAvatar = "";
    };
    $scope.deleteUser = function(index) {
       $scope.users.splice(index, 1);
    }
    $scope.show = true;
    $scope.toogleView = function () {
       $scope.show = !$scope.show;
    };
  })

.filter('custom', function() {
  return function(input, search) {
    if (!input) return input;
    if (!search) return input;
    var expected = ('' + search).toLowerCase();
      if(input.indexOf(search) > -1) {
        return input;
      } 
      return null;
  }
});