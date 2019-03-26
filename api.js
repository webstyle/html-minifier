const fs = require('fs');

module.exports = (req, res) => {
  res.end(__filename);
}
