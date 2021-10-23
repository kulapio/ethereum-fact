---
title: Development
lang: en-US
---

# Development

# Topics
[[toc]]

## Solidity Design Pattern

### Library Driven Development in Solidity
- [https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736](https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736)

### DelegateProxy Contracts
- [https://blog.gnosis.pm/solidity-delegateproxy-contracts-e09957d0f201](https://blog.gnosis.pm/solidity-delegateproxy-contracts-e09957d0f201)

### Contract Registry
- [https://etherscan.io/address/0xe0569fd1c3f0affd7e08131a16c06f3381c9355a#code](https://etherscan.io/address/0xe0569fd1c3f0affd7e08131a16c06f3381c9355a#code)
- quickConvertPrioritized()

### Interfaces & Abstract Contracts
- [Solidity: How to know when to use Abstract Contracts vs Interfaces](https://blog.upstate.agency/solidity-how-to-know-when-to-use-abstract-contracts-vs-interfaces-874cab860c56)

### Upgradeability with transparent proxy pattern
- [The transparent proxy pattern](https://blog.openzeppelin.com/the-transparent-proxy-pattern/)
- [Upgradeability using Unstructured Storage](https://blog.openzeppelin.com/upgradeability-using-unstructured-storage/)
- [EIP 1967: Standard Proxy Storage Slots](https://eips.ethereum.org/EIPS/eip-1967)
- [EIP 1822: Universal Upgradeable Proxy Standard (UUPS)](https://eips.ethereum.org/EIPS/eip-1822)
- [OpenZeppelin SDK Upgrades Pattern](https://docs.openzeppelin.com/sdk/2.6/pattern)

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

## Ethereum Virtual Machine Opcodes
- [Ethervm](https://ethervm.io/)

## Gas cost - EVM instructions
- [Gas Costs from Yellow Paper -- EIP-150 Revision](https://docs.google.com/spreadsheets/d/1n6mRqkBz3iWcOlRem_mO09GtSKEKrAsfO7Frgx18pNU/edit#gid=0)
- [Gas defined in go-ethereum](https://github.com/ethereum/go-ethereum/blob/a139041d409d0ffaf81c7cf931c6b24299a05705/params/protocol_params.go#L25)

## Transaction data gas usage
- 21,000 upfront.
- 4 for every zero byte.
- 68 for every non-zero byte.

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

### ZKSNARKs Plasma
- [ZKSNARKs Plasma](https://www.trustnodes.com/2019/01/06/zksnarks-plasma-eth-scaling-solution-of-500-tx-s-launched-on-testnet) 
- [Introducing Ignis: Fire Plasma](https://medium.com/plasma-ignis/presenting-ignis-plasma-of-fire-502fab5a6f17)
- [Github](https://github.com/matterinc/ignis)
- [Scale ethereum with snarks](https://github.com/barryWhiteHat/roll_up)
- [Test net](https://ignis.thematter.io/#/)

### ABI-Encoded tools
- https://abi.hashex.org/#

## Web Services
### Infura
- [Http & Websocket endpoints](https://infura.io/docs/gettingStarted/authentication)

### Thai Chain
- Http [https://rpc.tch.in.th](https://rpc.tch.in.th)
- Websocket [wss://ws.tch.in.th](wss://ws.tch.in.th)
- Explorer [https://exp.tch.in.th/](https://exp.tch.in.th/)

## Library
### OpenZeppelin
- OpenZeppelin Contracts is a library for secure smart contract development. [https://github.com/OpenZeppelin/openzeppelin-contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)

### Decimals
- Fixidity: A fixed point mathematics library for Solidity. [https://github.com/CementDAO/Fixidity](https://github.com/CementDAO/Fixidity)

## Ethereum Explorer
- [Etherscan](https://etherscan.io/)
- [Bloxy](https://bloxy.info/)
- [Ethplorer](https://ethplorer.io/)
- [Etherchain](https://www.etherchain.org/)
- [Blockscout](https://blockscout.com/eth/mainnet/)
- [Ethtective](https://ethtective.com/)
- [Palkeo](https://oko.palkeo.com/)
- [Blockchair](https://blockchair.com/)
- [Ethtx](https://ethtx.info/) (Gas profiling)

## Transaction Monitoring
- [Tenderly](https://tenderly.co/)

## Ethereum Storage
- [How to read Ethereum contract storage](https://medium.com/aigang-network/how-to-read-ethereum-contract-storage-44252c8af925)

## Ethereum Smart Contract Best Practices
- [Consensys](https://consensys.github.io/smart-contract-best-practices/software_engineering/#upgrading-broken-contracts)

## JSON RPC
- [Postman](https://documenter.getpostman.com/view/4117254/ethereum-json-rpc/RVu7CT5J?version=latest)
- [Document](https://github.com/ethereum/wiki/wiki/JSON-RPC)
