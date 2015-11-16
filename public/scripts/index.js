var resApp = angular.module('resApp',['ngRoute']);


resApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/name', {
            templateUrl: "/routes/name.html"
        }).
        when('/contact', {
            templateUrl: "/routes/contact.html"
        }).
        when('/skills', {
            templateUrl: "/routes/skills.html"
        }).
        when('/jobs', {
            templateUrl: "/routes/jobs.html"
        }).
        when('/school', {
            templateUrl: "/routes/school.html"
        }).
        when('/volunteer', {
            templateUrl: "/routes/volunteer.html"
        }).
        when('/references', {
            templateUrl: "/routes/references.html"
        }).
        otherwise({
            redirectTo: '/name.html'
        })
}]);
