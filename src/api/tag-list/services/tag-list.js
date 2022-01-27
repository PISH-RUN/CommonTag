'use strict';

/**
 * tag-list service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tag-list.tag-list');
