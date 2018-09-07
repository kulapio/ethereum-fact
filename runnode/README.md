# Geth
``` bash
geth --testnet --rpc --rpcapi "db,eth,net,web3,personal" --mine --etherbase "0xf28dafbfeb41bf32869c9d498da0d651d0206ed4" --gasprice "1000000000" --bootnodes "enode://20c9ad97c081d63397d7b685a412227a40e23c8bdc6688c6f37e97cfbc22d2b4d1db1510d8f61e6a8866ad7f0e17c02b14182d37ea7c3c8b9c2683aeb6b733a1@52.169.14.227:30303,enode://6ce05930c72abc632c58e2e4324f7c7ea478cec0ed4fa2528982cf34483094e9cbc9216e7aa349691242576d552a2a56aaeae426c5303ded677ce455ba1acd9d@13.84.180.240:30303" console
```

# Parity
## configure
<<< @/runnode/config.toml

## run node
``` bash
parity --chain ropsten --warp --jsonrpc-cors=all --jsonrpc-apis=all --jsonrpc-hosts=all --jsonrpc-interface all --ipc-path ~/parity/jsonrpc.ipc --ipc-apis=all
<!-- parity --chain ropsten --warp --jsonrpc-cors=all --jsonrpc-apis personal,eth -->
```

## run in geth compatibility mode
``` bash
add --geth
```

## run geth with ipc
``` bash
geth attach ~/.local/share/io.parity.ethereum/jsonrpc.ipc console
```

## run node in background
``` bash
nohup parity --jsonrpc-apis personal,eth &
tail -f nohup.out
ps -ef|grep parity
kill <process id>
```


## net account
``` bash
parity --chain ropsten account new
```

## unlock account
``` bash
curl --data '{"method":"personal_unlockAccount","params":["0xde9078776c45e3d963ba84cd10f06e610ea6be64","password",null],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```

## account list
``` bash
parity --chain ropsten account list
```

## clean database
``` bash
parity db kill --chain ropsten
```

## Export hardcoded sync
``` bash
parity export-hardcoded-sync --chain kovan
```

# Mining
## Run parity
``` bash
parity --chain ropsten --author de9078776c45e3d963ba84cd10f06e610ea6be64 --stratum --stratum-interface=0.0.0.0 --stratum-port=9009
```

## Run miner
``` bash
ethminer -G -S 127.0.0.1:9009
```
