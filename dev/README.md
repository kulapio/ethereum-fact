---
title: Development
lang: en-US
---

# Development

## Solidity Design Pattern

### Library Driven Development in Solidity
- [https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736](https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736)

### DelegateProxy Contracts
- [https://blog.gnosis.pm/solidity-delegateproxy-contracts-e09957d0f201](https://blog.gnosis.pm/solidity-delegateproxy-contracts-e09957d0f201)

### Contract Registry
- [https://etherscan.io/address/0xe0569fd1c3f0affd7e08131a16c06f3381c9355a#code](https://etherscan.io/address/0xe0569fd1c3f0affd7e08131a16c06f3381c9355a#code)
- quickConvertPrioritized()

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

## Learn solidity
- Loom netowrk launched [CryptoZombies](https://cryptozombies.io/), a live app enabling anyone to learn to code smart contracts on Ethereum (with over 200,000 students)

## Yellow Paper
[ETHEREUM: A SECURE DECENTRALISED GENERALISED TRANSACTION LEDGER
BYZANTIUM](https://ethereum.github.io/yellowpaper/paper.pdf)

## Gas cost - EVM instructions
[Gas Costs from Yellow Paper -- EIP-150 Revision](https://docs.google.com/spreadsheets/d/1n6mRqkBz3iWcOlRem_mO09GtSKEKrAsfO7Frgx18pNU/edit#gid=0)


## Ethereum Alarm Clock
SCHEDULING OF TRANSACTIONS FOR DELAYED EXECUTION IN THE FUTURE.
- [https://www.ethereum-alarm-clock.com/](https://www.ethereum-alarm-clock.com/)

## Plasma
The basic idea here is that we can take assets from one chain and transfer them to another (called the “sidechain”) by locking the assets up on the primary chain (or “root chain”) and “creating” them again on the sidechain. When you want to go back, you simply need to “destroy” the asset on the sidechain and unlock them on the root chain

ref: [Learn Plasma](https://www.learnplasma.org/en/learn/framework.html)

### Original Plasma: Scalable Autonomous Smart Contracts
- [White Paper](https://plasma.io/plasma.pdf)
- [Web](https://plasma.io/)

### Loom network - Plasma Cash
- [White Paper](https://github.com/loomnetwork/plasma-paper/blob/master/plasma_cash.pdf)
- [Implementation](https://github.com/loomnetwork/plasma-cash)

### Learn
- [Learn Plasma](https://www.learnplasma.org/en/)
