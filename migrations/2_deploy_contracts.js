var CrivlyCoin = artifacts.require("CrivlyCoin");

module.exports = function(deployer) {
  var name = "CrivlyCoin";
  var symbol = "CVC";
  var initialSupply = "25000000000000000000000000";
  var owner = "0x11c4f594f493dabD7630A9C0b9a72925187ab909";
  deployer.deploy(CrivlyCoin, name, symbol, initialSupply, owner);
};