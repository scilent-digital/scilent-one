/**
 * Main Tailwind CSS configuration exports
 * Provides easy access to different configuration variants
 */

const baseConfig = require('./base');
const nextjsConfig = require('./nextjs');

module.exports = {
  base: baseConfig,
  nextjs: nextjsConfig,
};