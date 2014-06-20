'use strict'
var config = require('./config.json')
angular.module('scrom.config', [])
.constant('API_URL', config.constants.api_url)
.constant('PROJECTS_PATH', config.constants.projects_path)
