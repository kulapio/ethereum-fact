---
title: Ethereum node
lang: en-US
---

# Run Ethereum Node

## Geth

### Basic run
``` bash
geth --cache=1024 --testnet --rpc --rpcapi "db,eth,net,web3,personal" --mine --etherbase "0xf28dafbfeb41bf32869c9d498da0d651d0206ed4" --gasprice "1000000000" --bootnodes "enode://20c9ad97c081d63397d7b685a412227a40e23c8bdc6688c6f37e97cfbc22d2b4d1db1510d8f61e6a8866ad7f0e17c02b14182d37ea7c3c8b9c2683aeb6b733a1@52.169.14.227:30303,enode://6ce05930c72abc632c58e2e4324f7c7ea478cec0ed4fa2528982cf34483094e9cbc9216e7aa349691242576d552a2a56aaeae426c5303ded677ce455ba1acd9d@13.84.180.240:30303" console
```

### Running mode
- Full - Sync: Gets the block headers, the block bodies, and validates every element from genesis block.
- Fast - Sync: Gets the block headers, the block bodies, it processes no transactions until current block - 64(*). Then it gets a snapshot state and goes like a full synchronization.
- Light - Sync: Gets only the current state. To verify elements, it needs to ask to full (archive) nodes for the corresponding tree leaves.
ref: [https://ethereum.stackexchange.com/questions/11297/what-is-geths-light-sync-and-why-is-it-so-fast?rq=1](https://ethereum.stackexchange.com/questions/11297/what-is-geths-light-sync-and-why-is-it-so-fast?rq=1)

### Running mode - Performance
| Dataset (blocks, states)              | Normal sync (time, db) | Fast sync (time, db) |
|---------------------------------------|------------------------|----------------------|
| Frontier, 357677 blocks, 42.4K states | 12:21 mins, 1.6 GB     | 2:49 mins, 235.2 MB  |
| Olympic, 837869 blocks, 10.2M states  | 4:07:55 hours, 21 GB   | 31:32 mins, 3.8 GB   |

## Parity
### configure
<<< @/runnode/config.toml

### run node
``` bash
parity --chain ropsten --warp --jsonrpc-cors=all --jsonrpc-apis=all --jsonrpc-hosts=all --jsonrpc-interface all --ipc-path ~/parity/jsonrpc.ipc --ipc-apis=all
<!-- parity --chain ropsten --warp --jsonrpc-cors=all --jsonrpc-apis personal,eth -->
```

### run in geth compatibility mode
``` bash
add --geth
```

### run geth with ipc
``` bash
geth attach ~/.local/share/io.parity.ethereum/jsonrpc.ipc console
```

### run node in background
``` bash
nohup parity --jsonrpc-apis personal,eth &
tail -f nohup.out
ps -ef|grep parity
kill <process id>
```


### net account
``` bash
parity --chain ropsten account new
```

### unlock account
``` bash
curl --data '{"method":"personal_unlockAccount","params":["0xde9078776c45e3d963ba84cd10f06e610ea6be64","password",null],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```

### account list
``` bash
parity --chain ropsten account list
```

### clean database
``` bash
parity db kill --chain ropsten
```

### Export hardcoded sync
``` bash
parity export-hardcoded-sync --chain kovan
```

## Mining
### Run parity
``` bash
parity --chain ropsten --author de9078776c45e3d963ba84cd10f06e610ea6be64 --stratum --stratum-interface=0.0.0.0 --stratum-port=9009
```

### Run miner
``` bash
ethminer -G -S 127.0.0.1:9009
```


## Run Raiden Node

### Run Ethereum
``` bash
# run node with geth
geth --testnet --fast --rpc --rpcaddr 0.0.0.0 --rpcport 8545 --rpccorsdomain "*" --rpcapi admin,db,eth,debug,miner,net,shh,txpool,personal,web3 console

# run node with parity
parity --chain ropsten --bootnodes "enode://20c9ad97c081d63397d7b685a412227a40e23c8bdc6688c6f37e97cfbc22d2b4d1db1510d8f61e6a8866ad7f0e17c02b14182d37ea7c3c8b9c2683aeb6b733a1@52.169.14.227:30303,enode://6ce05930c72abc632c58e2e4324f7c7ea478cec0ed4fa2528982cf34483094e9cbc9216e7aa349691242576d552a2a56aaeae426c5303ded677ce455ba1acd9d@13.84.180.240:30303"
```
::: tip
enode is optional
:::

### Run Raiden
``` bash
# run raiden with geth
~/Downloads/raiden-0.4.2-macOS --keystore-path /Users/totiz/Library/Ethereum/testnet/keystore

# run raiden with parity
~/Downloads/raiden-0.5.0-macOS  --keystore-path ~/Library/Application\ Support/io.parity.ethereum/keys/test
```


## Harmony
[Ethereum network private peer. Based on EthereumJ implementation.](https://github.com/ether-camp/ethereum-harmony)


