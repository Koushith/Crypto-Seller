// Goal here is to build the crypto exchage. which is 1 million by default. we are creating our own token and selling them at fixed price


const Token = artifacts.require('Token');

const EthSwap = artifacts.require('EthSwap');

module.exports = function(deployer) {
  //  Deploy token
  deployer.deploy(Token);
  const token = await Token.deployed()
  //  Deploy Ethswap
  deployer.deploy(EthSwap);
  const ethswap = await EthSwap.deployed()

  // Transfer all tokens to EthSwap(1 mil)
  await token.transfer(ethswap.adress, '1000000000000000000000000')
};
