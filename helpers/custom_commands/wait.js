/**
 * This function will wait for the element present and visible
 * @param elementTag
 * @returns {exports}
 */
module.exports.command = function(elementTag) {
  return this
    .waitForElementPresent(elementTag)
    .waitForElementVisible(elementTag)
};