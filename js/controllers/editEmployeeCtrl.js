app.controller('editEmployee', ['$scope', '$http', '$location', '$stateParams', 'sharedVariablesService', function($scope, $http, $location, $stateParams, sharedVariablesService) {


        $scope.isAdmin = sharedVariablesService.getIsAdmin();

        $scope.changeIsAdmin = () =>{
          sharedVariablesService.setIsAdmin(!sharedVariablesService.getIsAdmin());
          $scope.isAdmin = sharedVariablesService.getIsAdmin();
        }

        $scope.positions = [ 'Admin', 'Developer', 'Manager', 'Tester', 'HR'];

        $scope.roles = ['User', 'Admin'];

        let promise = $http({method: 'GET', url: 'data/data.json'})
        .success((data)=>{
          $scope.employees = data;
          $scope.employee = $scope.employees.find(val => val.id == $stateParams.id)

          console.log("Success in retrieve data");
        })
        .error((error)=>{
          console.log("Error in retrieve data");
        })

        $scope.checkIfAdmin = (position) =>{
          if(!$scope.isAdmin){
            if(position == 'Admin' || position == 'Manager'){
              $("#warningModal").modal()
            }            
          }
        }

        $scope.save = (employee) =>{
                $scope.jsonEmployee = JSON.stringify(employee);
                $http({method: 'POST', url: ''})
                .then(()=>{
                  console.log("Success in submit changes");
                })

        }


}])
