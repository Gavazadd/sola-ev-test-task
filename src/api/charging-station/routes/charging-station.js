'use strict';

/**
 * charging-station router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::charging-station.charging-station', {
  config:{
    create:{
      policies:['required-fields-for-public', 'how-many-station-connectors'],
    },
  }
});
