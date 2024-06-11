
const ArtChain = artifacts.require('ArtChain')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(ArtChain, 'ArtChain NFTs', 'ACN', 10, accounts[1])
}