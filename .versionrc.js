const defaultStandardVersion = require("@davidsneighbour/standard-version-config");

const localStandardVersion = {
  bumpFiles: [
    ...defaultStandardVersion.bumpFiles,
    { filename: "data/dnb/icons/build.json", type: "json" },
  ],
};

module.exports = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
