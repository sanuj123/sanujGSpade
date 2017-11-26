app.controller("greenspadecontroller",function ($scope, $compile ,greenspadefactory) {
    $scope.dropdownList = function(){
       var promise = greenspadefactory.getList();
       promise.then(function (data) {
           console.log(data);
           $scope.categories = data.data.categories;
       },function(er){
           console.log(er);
       })
    };

    $scope.addCategory = function(){
        var divElement = angular.element(document.querySelector('#mainList'));
        var appendHtml = $compile('<customdirective></customdirective>')($scope);
        divElement.append(appendHtml);
    };
    $scope.addCat = function(){
        $scope.isDisable = true;
        var divElement = angular.element(document.querySelector('#mainList'));
        var appendHtml = $compile('<customdirective></customdirective>')($scope);
        divElement.append(appendHtml);
    };
});

app.directive("customdirective",function ($compile, $templateRequest, $sce) {
    return{
        restrict: 'E',
        replace: 'true',
        scope: {

        },
        link: function (scope, element, attrs) {
            var templateUrl = $sce.getTrustedResourceUrl('customdirective.html');
            $templateRequest(templateUrl).then(function(template) {
                var linkFn = $compile(template);
                var htmlString = linkFn(scope);
                element.append(htmlString);

            }, function() {
                // An error has occurred
            });

        },
        controller: function ($scope, $element, greenspadefactory) {
            $scope.dropdown = function(){
                var promise = greenspadefactory.getList();
                promise.then(function (data) {
                    console.log(data);
                    $scope.categories = data.data.categories;
                },function(er){
                    console.log(er);
                })
            };

            $scope.Delete = function ($event) {
                var el = $event.target;
                var targetelement =  angular.element(el).parent().parent().parent();
                targetelement.remove();
            }
        }
    }
})