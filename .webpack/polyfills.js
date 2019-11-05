// require('@babel/polyfill') // Removed because already included in Milkman Tracking Page
require('whatwg-fetch');
const rejectionTracking = require('promise/lib/rejection-tracking')
const es6Extensions = require('promise/lib/es6-extensions')
const objectAssign = require('object-assign')

if (typeof Promise === 'undefined') {
  rejectionTracking.enable()
  window.Promise = es6Extensions
}

Object.assign = objectAssign
