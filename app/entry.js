require('./scss/main.scss');
require('angular-material/angular-material.scss');

const
  path = require('path'),
  angular = require('angular'),
  camelcase = require('camelcase'),
  pascalcase = require('pascalcase'),
  uiRouter = require('angular-ui-router'),
  ngTouch = require('angular-touch'),
  ngAnimate = require('angular-animate'),
  ngFileUpload = require('ng-file-upload'),
  ngMap = require('ngmap');
require('angular-aria');
require('angular-material');

const ways2go = angular.module('ways2go', [ngTouch, ngAnimate, uiRouter, ngFileUpload, 'ngMaterial', ngMap]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach( key => {
  ways2go.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  let module = context(key);
  ways2go.controller(name, module);
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  ways2go.service(name, module);
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  ways2go.component(name, module);
});

context = require.context('./filter/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  ways2go.filter(name, module);
});

context = require.context('./directive/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  ways2go.directive(name, module);
});