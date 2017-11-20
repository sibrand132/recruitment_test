app.factory('sharedVariablesService', function () {

  let isAdmin = false;

  return {
    setIsAdmin:function (admin) {
      isAdmin = admin;
    },
    getIsAdmin: function () {
      return isAdmin;
    }
  }

});
