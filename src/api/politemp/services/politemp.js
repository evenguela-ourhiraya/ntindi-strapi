'use strict';

/**
 * politemp service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::politemp.politemp');
