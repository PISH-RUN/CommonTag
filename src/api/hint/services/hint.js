'use strict';

/**
 * hint service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hint.hint');
