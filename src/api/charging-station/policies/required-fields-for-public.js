'use strict';

/**
 * `required-fields-for-public` policy
 */
const utils = require('@strapi/utils');
const {ValidationError} = utils.errors;

module.exports = (policyContext, config, { strapi }) => {
    const isPublic = policyContext.request.body.isPublic

    if (isPublic && (!policyContext.request.body.title || !policyContext.request.body.description || !policyContext.request.body.email_adress || !policyContext.request.body.geo_coordinates )) {
      throw new ValidationError('For public station, fields: title, description, email_adress, geo_coordinates is required ! ')
    }

    return true;
};
