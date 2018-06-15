
 
(function(){
 
    angular
        .module("myApp")
        .controller("knigiShow", ListController);
 
    
 
    function ListController($scope,$http){
    var vm = this;
    
    vm.changeActiveBook = changeActiveBook;
   
    
     (function () {
        $http.get("http://127.0.0.1:8887/knigiMock.json")
            .then(function (response) {
                vm.data = response.data;
            }, function (error) {
                console.log(error);
            });
    })();  

 
    function changeActiveBook(index){
        vm.activeBook = index;
    }   
}
          
})();