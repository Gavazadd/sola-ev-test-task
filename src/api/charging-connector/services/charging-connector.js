'use strict';

/**
 * charging-connector service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::charging-connector.charging-connector');
