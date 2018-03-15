var app =angular.module("app",["ngRoute"]);
app.config(function($routeProvider){
$routeProvider.when("/",{
    templateUrl:"templates/bookSearch.html",
    controller:function($scope,$http){
        $scope.search=function(){
             $http.get("http://it-ebooks-api.info/v1/search/"+$scope.searchText).then(function success (done){
                 console.log(done);
            $scope.Books=done.data.Books;
    },function failuer(resData)
    {
        console.log("Sorry No Data");
    });
    }
    }
})
});