app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  /*~~ default state ~~*/
  $urlRouterProvider.otherwise('/');

  /*~~ no hash ~~*/
  $locationProvider.html5Mode(true);

  /*~~ define all states ~~*/
  $stateProvider
    .state({
      name: 'home',
      url: '/',
      templateUrl: '/ui_templates/_home.html'
    })
    .state({
      name: 'about',
      url: '/about',
      templateUrl: '/ui_templates/_about.html'
    })
    .state({
      name: 'work',
      url: '/work',
      templateUrl: '/ui_templates/_work.html'
    })
    .state({
      name: 'contact',
      url: '/contact',
      templateUrl: '/ui_templates/_contact.html'
    });
});
