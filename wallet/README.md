---
title: Wallet
lang: en-US
---

## Wallet standard
The community choose [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) as standard for Ether wallets.
BIP44 is multi-Account Hierarchy for Deterministic Wallets.

We define the following 5 levels in BIP32 path:
```
m / purpose' / coin_type' / account' / change / address_index
```

the path look like this
```
m/44'/60'/0'/0/n
```


where a denotes the Account and n is the n-th generated address.
- ref: [EIP85](https://github.com/ethereum/EIPs/issues/85)

## List of all blockchain index
- [BIP44 Index List](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).

index | hexa       | symbol | coin
------|------------|--------|-----------------------------------
0     | 0x80000000 | BTC    | [Bitcoin](https://bitcoin.org/)
1     | 0x80000001 |        | Testnet (all coins)
2     | 0x80000002 | LTC    | [Litecoin](https://litecoin.org/)
43    | 0x8000002b | XEM    | [NEM](https://github.com/NemProject)
60    | 0x8000003c | ETH    | [Ether](https://ethereum.org/ether)
61    | 0x8000003d | ETC    | [Ether Classic](https://ethereumclassic.github.io)
75    | 0x8000004b | FJC    | [FujiCoin](http://www.fujicoin.org/)
128   | 0x80000080 | XMR    | [Monero](https://getmonero.org/)
133   | 0x80000085 | ZEC    | [Zcash](https://z.cash)
135   | 0x80000087 | STEEM  | [Steem](http://steem.io)
136   | 0x80000088 | XZC    | [ZCoin](https://zcoin.io)
144   | 0x80000090 | XRP    | [Ripple](https://ripple.com)
145   | 0x80000091 | BCH    | [Bitcoin Cash](https://www.bitcoincash.org)
148   | 0x80000094 | XLM    | [Stellar Lumens](https://www.stellar.org/)
194   | 0x800000c2 | EOS    | [EOS](https://eos.io)
195   | 0x800000c3 | TRX    | [Tron](https://tron.network/enindex.html)
200   | 0x800000c8 | OMNI   | [Omni](http://www.omnilayer.org)
888   | 0x80000378 | NEO    | [NEO](https://neo.org/)
889   | 0x80000379 | TOMO   | [TOMO](https://tomochain.com/)
1024  | 0x80000400 | ONT    | [Ontology](https://ont.io)
