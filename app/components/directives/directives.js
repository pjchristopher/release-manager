releaseManagerApp.directive('conwayLogin', function(){
    return{
        restrict: 'E',
        templateUrl: 'components/directives/login.html'
    }
});

releaseManagerApp.directive('conwayRegionSelection', function(){
    return{
        restrict: 'E',
        templateUrl:'components/directives/region_selection.html'
    }
});

releaseManagerApp.directive('regions', function(){
    return{
        restrict: 'E',
        templateUrl: 'components/directives/regions.html'
    }
});