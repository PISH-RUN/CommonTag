'use strict';

/**
 * context service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::context.context');
