# Ethereum Fact

# Pricing
- **20,000** gas for **1 Word** (8 bytes)
- **1 Word** cost **0.00008 Ether** (0.000000004 ether/gas).
- **1 kB** cost **.01 Ether**
- **1 MB** cost **10 Ether**
- **1 MB** cost **$8,600.00** ($860/ether)
- refrence [https://itnext.io/build-a-simple-ethereum-interplanetary-file-system-ipfs-react-js-dapp-23ff4914ce4e](https://itnext.io/build-a-simple-ethereum-interplanetary-file-system-ipfs-react-js-dapp-23ff4914ce4e)

# Solidity Design Pattern

## Library Driven Development in Solidity
- https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736

## DelegateProxy Contracts
- https://blog.gnosis.pm/solidity-delegateproxy-contracts-e09957d0f201

## Contract Registry
- https://etherscan.io/address/0xe0569fd1c3f0affd7e08131a16c06f3381c9355a#code
- quickConvertPrioritized()

# Solidity on Ethereum Fact
- Solidity is a limited language
- When executed, your code will run on every node of the network.
- So running Solidity on Ethereum is **expensive**.
- You cannot get data from the outside world (exp RESTFul Api call), but there's Oracle model to do this.
- No standard library for Array and String (like lowercase strings).
- ref https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736

# Hack cases
- Vulnerability in StandardToken.sol's implementation of transferFrom() https://github.com/ether-camp/virtual-accelerator/issues/8
- Parity wallet hack
https://blog.zeppelin.solutions/on-the-parity-wallet-multisig-hack-405a8c12e8f7
https://github.com/paritytech/parity-ethereum/blob/4d08e7b0aec46443bf26547b17d10cb302672835/js/src/contracts/snippets/enhanced-wallet.sol#L216

# Nodes - Aug 2018
- mainnet (id 1): 14902
- ropsten (id 3): 115
- rinkeby (id 4): 42

# Two types of accounts
- User accounts (controlled by private keys)
- Contracts (controlled by code)
