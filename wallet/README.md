---
title: Wallet
lang: en-US
---

## Wallet standard
The community choose [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) as standard for Ether wallets.
BIP44 is multi-Account Hierarchy for Deterministic Wallets.

the path look like this
```
m/44'/60'/a'/0/n
```
where a denotes the Account and n is the n-th generated address.
- ref: [EIP85](https://github.com/ethereum/EIPs/issues/85)
