'use strict';

angular.module('myappAngular')
  .factory('Articles', function ($resource) {
    return $resource('api/v1/articles/:articleId', {
      articleId: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  });
