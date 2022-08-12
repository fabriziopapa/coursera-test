(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
$scope.chkText = '';
$scope.msg = '';

  $scope.sayMessage = function () {
    var chk = $scope.fnumberofwords()
    if(chk == 0)
    $scope.msg = 'Please enter data first';
else if(chk<=3)
    $scope.msg = 'Enjoy!';
else if(chk>=4)
    $scope.msg = 'Too much!';
  };

  $scope.fnumberofwords = function () {
    var str = $scope.chkText ;
    var words = str.split(',') ;
   return words.length-1

  };
}

})();
