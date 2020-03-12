/**
 * AWS config.
 *
 * @module configs/aws
 */

module.exports = {
  region: 'us-east-1' /* Default AWS region */,
  profiles: {
    /* This are the AWS profiles to use for each stage */
    development: 'default',
    production: 'default',
    staging: 'default',
    local: 'default'
  },
  apiVersions: {
    ssm: '2014-11-06',
    s3: '2006-03-01'
  }
};
