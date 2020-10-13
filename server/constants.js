const PRODUCTION = 'production';
const DEVELOPMENT = 'development';
const environment = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : DEVELOPMENT;

module.exports = { environment, PRODUCTION, DEVELOPMENT };