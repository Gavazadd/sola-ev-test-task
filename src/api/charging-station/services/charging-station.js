'use strict';

/**
 * charging-station service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::charging-station.charging-station');
