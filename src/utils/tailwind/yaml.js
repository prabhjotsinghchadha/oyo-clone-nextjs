const yaml = require('js-yaml');
const fs = require('fs');

exports.read = (path) => {
  try {
    const file = yaml.load(fs.readFileSync(`${path}`, 'utf8'));
    return file;
  } catch (e) {
    return null;
  }
};
