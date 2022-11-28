const withTM = require("next-transpile-modules")(["cronofy-elements"]);

module.exports = withTM({
  swcMinify: true,
  poweredByHeader: false,
});
