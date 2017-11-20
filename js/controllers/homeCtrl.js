app.controller('home', ['$scope', '$http', '$location', 'sharedVariablesService', function($scope, $http, $location, sharedVariablesService) {

      $scope.isAdmin = sharedVariablesService.getIsAdmin();

      $scope.changeIsAdmin = () =>{
        sharedVariablesService.setIsAdmin(!sharedVariablesService.getIsAdmin());
        $scope.isAdmin = sharedVariablesService.getIsAdmin();
      }

      $scope.totalEmployeesDisplayed = 25;

      $scope.numEmployees = [10,25,50];

      $scope.go = (id) =>{

        $location.path('/edit/'+id);
      }

      $scope.remove = (id) => {
        $scope.employees = $scope.employees.filter(val => val.id!=id)
      }


        $http({method: 'GET', url: 'data/data.json'})
        .success((data)=>{
          $scope.employees = data;
          console.log("Success in retrieve data");
        })
        .error((error)=>{
          console.log("Error in retrieve data");
        })

        $(document).on('click', '[data-toggle="tooltip"]', function () {
          $(this).tooltip('hide');
        })

        $(function () {
        $("body").tooltip({
            selector: '[data-toggle="tooltip"]',
            container: 'body'
          });
        })

        $('[data-toggle="tooltip"]').on('click', function () {
          $(this).tooltip('hide')
       })

}])
