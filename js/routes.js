angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('guiaMDica.mDicos', {
    url: '/medicos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mDicos.html',
        controller: 'mDicosCtrl'
      }
    }
  })

  .state('guiaMDica.hospitales', {
    url: '/hospitales',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hospitales.html',
        controller: 'hospitalesCtrl'
      }
    }
  })

  .state('guiaMDica.laboratorios', {
    url: '/laboratorios',
    views: {
      'side-menu21': {
        templateUrl: 'templates/laboratorios.html',
        controller: 'laboratoriosCtrl'
      }
    }
  })

  .state('farmacias', {
    url: '/farmacias',
    templateUrl: 'templates/farmacias.html',
    controller: 'farmaciasCtrl'
  })

  .state('veterinarias', {
    url: '/veterinarias',
    templateUrl: 'templates/veterinarias.html',
    controller: 'veterinariasCtrl'
  })

  .state('tiendasOrtopedicas', {
    url: '/ortopedicas',
    templateUrl: 'templates/tiendasOrtopedicas.html',
    controller: 'tiendasOrtopedicasCtrl'
  })

  .state('etc', {
    url: '/etc',
    templateUrl: 'templates/etc.html',
    controller: 'etcCtrl'
  })

  .state('guiaMDica', {
    url: '/side-menu21',
    templateUrl: 'templates/guiaMDica.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/medicos')

  

});