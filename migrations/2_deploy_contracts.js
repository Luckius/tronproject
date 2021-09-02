var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var TronCase = artifacts.require("./TronCase.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin, 10000);
  deployer.deploy(TronCase, 'THaeyn4SFzp4R7rMmukPEML2WWiRuXpup9','TBEVbybmWbdnekJU2Yu6hWM9qMpYiDYc52','TW6kUTt6NjX4xD6ucb8WrdjtLRACXkc57P','TRafa1hCYxrivNyqHFXjSxr5qzJ75TtfFv');
};
