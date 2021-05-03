module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none),
      gas: 120000000,
      gasPrice: 1, // To cancel out gasPrice in tests.
    },

    main: {
      provider: () => new HDWalletProvider(process.env.WALLET_KEY, `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`),
      network_id: 1,
      gasPrice: 50000000000, // 50 GWei
      gas: 10000000,
    },

    kovan: {
      provider: () => new HDWalletProvider(process.env.WALLET_KEY, `https://kovan.infura.io/v3/${process.env.INFURA_PROJECT_ID}`),
      network_id: 42,
      skipDryRun: true,
      gas: 10000000,
    },

    ropsten: {
      provider: () => new HDWalletProvider(process.env.WALLET_KEY, `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`),
      network_id: 3,
      skipDryRun: true,
      gas: 8000000,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: ">=0.7 <0.8.0", // Fetch exact version from solc-bin (default: truffle's version)
      docker: false,
    },
  },
};
