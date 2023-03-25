const crypto = require('crypto');

const generateApiKey = () => {
  return crypto.randomBytes(16).toString('hex');
};

module.exports = generateApiKey;
