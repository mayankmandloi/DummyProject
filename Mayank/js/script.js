var app =angular.module("app",["ngRoute"]);
app.config(function($routeProvider){
$routeProvider.when("/",{
    templateUrl:"templates/bookSearch.html",
    controller:function($scope,$http,bookBox){
        $scope.search=function(){
             $http.get("http://it-ebooks-api.info/v1/search/"+$scope.searchText).then(function success (done){
                 console.log(done);
            $scope.Books=done.data.Books;
            bookBox.Books=done.data.Books;
    },function failuer(resData)
    {
        console.log("Sorry No Data");
    });
    }
    }
})

$routeProvider.when("/book/:ID",{
    templateUrl:"templates/bookview.html",
    controller:function($scope,$routeParams,bookBox){
        $scope.id=$routeParams.ID;
        $scope.Books=bookBox.Books;
        console.log($routeParams);
    }
})
});

app.service("bookBox",function(){});