const port = process.env.HOST_PORT || 9090

module.exports = {
  networks: {
    mainnet: {
      // Don't put your private key here:
      //privateKey: process.env.PRIVATE_KEY_MAINNET,
      privateKey: '76ceb3d9ccc564a768786f421ed8bb368c12f24830b1136de3d30b870e51c9ab',
      /*
      //76ceb3d9ccc564a768786f421ed8bb368c12f24830b1136de3d30b870e51c9ab
Create a .env file (it must be gitignored) containing something like

  export PRIVATE_KEY_MAINNET=4E7FECCB71207B867C495B51A9758B104B1D4422088A87F4978BE64636656243

Then, run the migration with:

  source .env && tronbox migrate --network mainnet

*/
      userFeePercentage: 100,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://api.trongrid.io',
      network_id: '1'
    },
    shasta: {
      privateKey: '0d123819a39401053c236f7a2298b552d1f00786a7bbfea2c4abac22346272e9',
      //privateKey: '20d38c2ea18ae1da0f1a45676baaf1a54d9adf1a9a97494a07bfa3c44046e8b3',
      userFeePercentage: 50,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '2'
    },
    nile: {
      privateKey: process.env.PRIVATE_KEY_NILE,
      userFeePercentage: 100,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://api.nileex.io',
      network_id: '3'
    },
    development: {
      // For trontools/quickstart docker image
      from: 'TBEVbybmWbdnekJU2Yu6hWM9qMpYiDYc52',
      privateKey: '76ceb3d9ccc564a768786f421ed8bb368c12f24830b1136de3d30b870e51c9ab',
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullNode: "https://api.trongrid.io:8090",
      solidityNode: "https://api.trongrid.io:8091",
      eventServer: "https://api.trongrid.io",
      network_id: "*" // Match any network id
    },
    compilers: {
      solc: {
        version: '0.5.4'
      }
    }
  }
}
