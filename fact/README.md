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

## Solidity fact
- Solidity is a limited language
- When executed, your code will run on every node of the network.
- So running Solidity on Ethereum is **expensive**.
- You cannot get data from the outside world (exp RESTFul Api call), but there's Oracle model to do this.
- No standard library for Array and String (like lowercase strings).
- ref [https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736](https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736)

## Block header
Block header consists of
- PREVHASH
- STATE_ROOT
- TX_ROOT
- RECEIPT_ROOT
- TIMESTAMP
- NUMBER
ref: [How does Ethereum work, anyway?](https://medium.com/@preethikasireddy/how-does-ethereum-work-anyway-22d1df506369)


## Hack cases
### Vulnerability in StandardToken.sol's implementation of transferFrom()
- [https://github.com/ether-camp/virtual-accelerator/issues/8](https://github.com/ether-camp/virtual-accelerator/issues/8)
### Parity wallet hack
- [https://blog.zeppelin.solutions/on-the-parity-wallet-multisig-hack-405a8c12e8f7](https://blog.zeppelin.solutions/on-the-parity-wallet-multisig-hack-405a8c12e8f7)
- [https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2018/september/smart-contract-insecurity-broken-access-control/](https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2018/september/smart-contract-insecurity-broken-access-control/)
- [https://github.com/paritytech/parity-ethereum/blob/4d08e7b0aec46443bf26547b17d10cb302672835/js/src/contracts/snippets/enhanced-wallet.sol#L216](https://github.com/paritytech/parity-ethereum/blob/4d08e7b0aec46443bf26547b17d10cb302672835/js/src/contracts/snippets/enhanced-wallet.sol#L216)

### NPM Package Vulnerability in Copay Wallets
[NPM Package Vulnerability in v5.0.2-5.1.0 of Copay Wallets](https://blog.bitpay.com/npm-package-vulnerability-copay/)

### batchOverflow Bug
[batchOverflow Bug in Multiple ERC20 Smart Contracts (CVE-2018–10299)](https://medium.com/@peckshield/alert-new-batchoverflow-bug-in-multiple-erc20-smart-contracts-cve-2018-10299-511067db6536)

### Deflationary tokens attack
[Incident with non-standard ERC20 deflationary tokens](https://medium.com/balancer-protocol/incident-with-non-standard-erc20-deflationary-tokens-95a0f6d46dea)

## Security study
### Reverse Engineering Of Blockchain Smart Contracts
- [https://recon.cx/2018/montreal/schedule/system/event_attachments/attachments/000/000/053/original/RECON-MTL-2018-Reversing_blockchains_smart_contracts.pdf](https://recon.cx/2018/montreal/schedule/system/event_attachments/attachments/000/000/053/original/RECON-MTL-2018-Reversing_blockchains_smart_contracts.pdf)

### Blockchain Security - JP Aumasson
[https://aumasson.jp/data/talks/balccon18.pdf](https://aumasson.jp/data/talks/balccon18.pdf)

### Smart contract sucurity scanner
[SECURITY SCANNER FOR ETHEREUM SMART CONTRACTS](https://securify.chainsecurity.com/)

### How to Exploit Blockchain Public Chain and Smart Contract Vulnerability
[PDF](@fact/Lijiafeng.pdf)

### Ethereum Smart Contract Audit CheckList
[Ethereum Smart Contract Audit CheckList](https://github.com/knownsec/Ethereum-Smart-Contracts-Security-CheckList/blob/master/Ethereum%20Smart%20Contract%20Audit%20CheckList.md?fbclid=IwAR2tSqBnWTCPWKri0H4yCp1dS2HrZa3hXmmjdyIO4Hh8JcLpVbJ5aKGLWKA)

### Automated Smart Contract Exploitation and Looting
[Automated Smart Contract Exploitation and Looting](https://blog.goodaudience.com/automating-smart-contract-exploitation-and-looting-d43e9740b41c?fbclid=IwAR0yaWX3x1rXVQ2B_C7CMcwTErXaUCTJQRqcLv_ertpu8t-PL45sF0K3pHI)

### CryptoCurrency Security Standard (CCSS)
[CCSS](https://cryptoconsortium.org/standards/CCSS)

### Beauty Chain (BEC) Integer OverFlow
[Beauty Chain (BEC) OverFlow](https://medium.com/certik/how-formal-verification-would-have-fortified-beauty-chain-bec-contract-f53e78159400)

### Zerocoin vulnerability
- [Further Disclosure on Zerocoin vulnerability](https://zcoin.io/further-disclosure-on-zerocoin-vulnerability/)
- [Cryptographic description of Zerocoin attack](https://zcoin.io/cryptographic-description-of-zerocoin-attack/)

### TEST YOUR H4CKING SKILL
- [ethernaut.openzeppelin.com](https://ethernaut.openzeppelin.com/) 

### HackPedia: 16 Solidity Hacks/Vulnerabilities, their Fixes and Real World Examples
- [16 Solidity Hacks/Vulnerabilities](https://hackernoon.com/hackpedia-16-solidity-hacks-vulnerabilities-their-fixes-and-real-world-examples-f3210eba5148)

### Reentrancy attack
- [Solution to 35C3 Junior CTF Challenge "Entrance"](https://labanskoller.se/blog/2019/01/07/solution-to-35c3-junior-ctf-challenge-entrance/)

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
 
## Token types
[Token types](../dev/#token-type)


## Financial service
- [compound finance](https://compound.finance/)
- [bloqboard](https://app.bloqboard.com/lend)
- [Loan Scan](https://loanscan.io/)
- [dharma](https://dharma.io/)
- [ETH Lend](https://ethlend.io/#/main)
- [https://www.blockmason.io/](https://www.blockmason.io/)
- [Quick Line](https://quickline.market/)

### Derivative
- [Open-Source Protocols for Decentralized Margin Trading and Derivatives](https://dydx.exchange/)
- [Bringing Derivatives to the Blockchain](https://marketprotocol.io/)

## Dao - Decentralized Autonomous Organization
- [Digix - Gold Coin](https://digix.global/)
- [Maker Dao](https://makerdao.com/)

## Solidity
- [Solidity Coverage](https://github.com/sc-forks/solidity-coverage)

## Stable Coin
- [Dai - Maker Dao](https://makerdao.com/dai)
- [Maker Dao Scan](https://makerscan.io/)

## Merkle Proofs in Ethereum
Every block header in Ethereum contains not just one Merkle tree, but three trees for three kinds of objects:
- Transactions
- Receipts (essentially, pieces of data showing the effect of each transaction)
- State
![An image](https://blog.ethereum.org/wp-content/uploads/2015/11/ethblockchain_full.png)

- [Ref](https://blog.ethereum.org/2015/11/15/merkling-in-ethereum/)

## How Ethereum Merkle Trees works
- [Ethereum Explained: Merkle Trees, World State, Transactions, and More](https://kauri.io/ethereum-explained-merkle-trees-world-state-transa/1f4196c3db7f41e5845f063dc1581a4e/a)
- [Diving into Ethereum’s world state](https://medium.com/cybermiles/diving-into-ethereums-world-state-c893102030ed)

## Defi - Decentralized Finance Protocol
### On-chain Asset Market Share
- [Defi Pulse](https://defipulse.com/)

### Top 5 DeFi
- [MakerDAO](https://makerdao.com/) (Stable coin)
- [Uniswap](https://uniswap.io/) (Dex)
- [Compound Finance](https://compound.finance/) (Loan)
- [Dharma Protocol](https://www.dharma.io/) (Loan)
- [Colendi](Colendi) (Credit scoring)

ref: [Top 5 DeFi (Decentralized Finance) Projects](https://www.mycryptopedia.com/top-5-defi-decentralized-finance-projects/)

## Sign data
- [JS Ethereum Signature Example](https://danfinlay.github.io/js-eth-personal-sign-examples/)

## Maker Dao
- [MKR Governance Dashboard](https://vote.makerdao.com/)
- [MKR Governance Stats](https://mkrgov.science/)
- [MKR DApps](https://oasis.app/)
- [MCD Collateral Auctions](https://daiauctions.com/)
- [MKR Burn Stats](https://makerburn.com/)

## Uniswap
- [Uniswap Stats](https://uniswap.info/)