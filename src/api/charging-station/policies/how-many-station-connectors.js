'use strict';

/**
 * `how-many-station-connectors` policy
 */
const utils = require('@strapi/utils');
const {ValidationError} = utils.errors;

module.exports = (policyContext, config, {strapi}) => {
  const connectorsRelation = policyContext.request.body?.charging_connectors
  if (!connectorsRelation || connectorsRelation.length > 8) throw new ValidationError('charging_connectors value must be from 1 to 8 !')
  return true
};
