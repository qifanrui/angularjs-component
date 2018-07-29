'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList',
  'tableModule'
]).controller('homeCtrl', function ($scope) {
  $scope.title = 'homeCtrl';
  $scope.header = [{
      title: '主要信息1',
      style: {
        'width': '30vw'
      },
      url: 'table/view/view1.html'
    },
    {
      title: '主要信息2',
      style: {
        'width': '20vw'
      },
      url: 'table/view/view2.html'
    },
    {
      title: '主要信息3',
      style: {
        'width': '10vw'
      },
      url: 'table/view/view3.html'
    },
    {
      title: '主要信息4',
      style: {
        'width': '30vw'
      },
      url: 'table/view/view3.html'
    },
    {
      title: '主要信息5',
      style: {
        'width': '80vw'
      },
      url: 'table/view/view3.html'
    },
  ]
  $scope.data = [];
  for (let i = 0; i < 12; i++) {
    $scope.data.push({
      a: i,
      b: i * 2,
      c: i * 3
    })
  }

})