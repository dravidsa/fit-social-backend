'use strict';

/**
 * metric-stat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::metric-stat.metric-stat');
