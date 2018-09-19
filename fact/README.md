---
title: Ethereum fact
lang: en-US
---

# Ethereum Fact

# Topics
[[toc]]

## Pricing
| Storage        | Gas           | Eth  | USD  |
| ------------- |-------------:| -----:| -----:|
| 1 Word      | 20,000 | 0.00008 | $0.0688 |
| 1 kB      |    2.500,000   |   .01 | $86 |
| 1 MB |    2,500,000,000   |    10 | $8,600 |
**price at $860/ether**
- refrence [https://itnext.io/build-a-simple-ethereum-interplanetary-file-system-ipfs-react-js-dapp-23ff4914ce4e](https://itnext.io/build-a-simple-ethereum-interplanetary-file-system-ipfs-react-js-dapp-23ff4914ce4e)

## Solidity Design Pattern

### Library Driven Development in Solidity
- [https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736](https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736)

### DelegateProxy Contracts
- [https://blog.gnosis.pm/solidity-delegateproxy-contracts-e09957d0f201](https://blog.gnosis.pm/solidity-delegateproxy-contracts-e09957d0f201)

### Contract Registry
- [https://etherscan.io/address/0xe0569fd1c3f0affd7e08131a16c06f3381c9355a#code](https://etherscan.io/address/0xe0569fd1c3f0affd7e08131a16c06f3381c9355a#code)
- quickConvertPrioritized()

## Solidity fact
- Solidity is a limited language
- When executed, your code will run on every node of the network.
- So running Solidity on Ethereum is **expensive**.
- You cannot get data from the outside world (exp RESTFul Api call), but there's Oracle model to do this.
- No standard library for Array and String (like lowercase strings).
- ref [https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736](https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736)

## Hack cases
- Vulnerability in StandardToken.sol's implementation of transferFrom() [https://github.com/ether-camp/virtual-accelerator/issues/8](https://github.com/ether-camp/virtual-accelerator/issues/8)
- Parity wallet hack
[https://blog.zeppelin.solutions/on-the-parity-wallet-multisig-hack-405a8c12e8f7](https://blog.zeppelin.solutions/on-the-parity-wallet-multisig-hack-405a8c12e8f7)

[https://github.com/paritytech/parity-ethereum/blob/4d08e7b0aec46443bf26547b17d10cb302672835/js/src/contracts/snippets/enhanced-wallet.sol#L216](https://github.com/paritytech/parity-ethereum/blob/4d08e7b0aec46443bf26547b17d10cb302672835/js/src/contracts/snippets/enhanced-wallet.sol#L216)

## Nodes
Aug 2018
- mainnet (id 1): 14902
- ropsten (id 3): 115
- rinkeby (id 4): 42

## Two types of accounts
- User accounts (controlled by private keys)
- Contracts (controlled by code)

## Transaction
- nonce (anti-replay-attack)
- gasPrice (amount of ether per unit gas)
- gasLimit (maximum gas consumable)
- to (destination address)
- value (amount of ether to send)
- data (readable by contract code)
- v, r, s (ECDSA Signature values)

## Begining of Ethereum
- [[ANN] Ethereum: Welcome to the Beginning](https://bitcointalk.org/index.php?topic=428589.0)

## Testnet block time
- Ropsten: sub-30 seconds
- Kovan: 4 seconds
- Rinkeby: 15 seconds

## Defination
### What is an EIP?
EIP stands for Ethereum Improvement Proposal. An EIP is a design document providing information to the Ethereum community, or describing a new feature for Ethereum or its processes or environment. The EIP should provide a concise technical specification of the feature and a rationale for the feature. The EIP author is responsible for building consensus within the community and documenting dissenting opinions.
[https://eips.ethereum.org/EIPS/eip-1](https://eips.ethereum.org/EIPS/eip-1)

### EIP Types
- Core - improvements requiring a consensus fork
- Networking - includes improvements around devp2p (EIP8) and Light Ethereum Subprotocol, as well as proposed improvements to network protocol specifications of whisper and swarm.
- Interface - includes improvements around client API/RPC specifications and standards
- ERC - application-level standards and conventions, including contract standards such as token standards (ERC20).
 
## Token type
### ERC721 Stats
- [https://stat.bloxy.info/superset/dashboard/erc721/?standalone=true](https://stat.bloxy.info/superset/dashboard/erc721/?standalone=true)

### ERC20 Compatible
- ERC223 (tokenFallback) [https://github.com/Dexaran/ERC223-token-standard](https://github.com/Dexaran/ERC223-token-standard )
- ERC827 (transferAndCall) [https://github.com/ethereum/EIPs/issues/827](https://github.com/ethereum/EIPs/issues/827)

### ERCxx Comparison
|         | Cheap Bulk Transfers | Multiple Classes of NFT/FT | Works as Collectible | Wallet/Marketplace Compatibility |
|---------|----------------------|----------------------------|----------------------|----------------------------------|
| ERC721  | No                   | No                         | No                   | Yes                              |
| ERC20   | Yes                  | No                         | No                   | Yes                              |
| ERC1155 | Yes                  | Yes                        | Yes                  | No                               |
| ERC1178 | Yes                  | Yes                        | No                   | No                               |
ref [https://medium.com/loom-network/erc721x-a-smarter-token-for-the-future-of-crypto-collectibles-335ba5f706d1](https://medium.com/loom-network/erc721x-a-smarter-token-for-the-future-of-crypto-collectibles-335ba5f706d1)

### Learn solidity
- Loom netowrk launched [CryptoZombies](https://cryptozombies.io/), a live app enabling anyone to learn to code smart contracts on Ethereum (with over 200,000 students)

## Ethereum Alarm Clock
SCHEDULING OF TRANSACTIONS FOR DELAYED EXECUTION IN THE FUTURE.
- https://www.ethereum-alarm-clock.com/
