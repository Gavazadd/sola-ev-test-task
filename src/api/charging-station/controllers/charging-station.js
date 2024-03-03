'use strict';

/**
 * charging-station controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::charging-station.charging-station');
