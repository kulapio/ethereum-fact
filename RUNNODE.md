# Geth
geth --testnet --rpc --rpcapi "db,eth,net,web3,personal" --mine --etherbase "0xf28dafbfeb41bf32869c9d498da0d651d0206ed4" --gasprice "1000000000" --bootnodes "enode://20c9ad97c081d63397d7b685a412227a40e23c8bdc6688c6f37e97cfbc22d2b4d1db1510d8f61e6a8866ad7f0e17c02b14182d37ea7c3c8b9c2683aeb6b733a1@52.169.14.227:30303,enode://6ce05930c72abc632c58e2e4324f7c7ea478cec0ed4fa2528982cf34483094e9cbc9216e7aa349691242576d552a2a56aaeae426c5303ded677ce455ba1acd9d@13.84.180.240:30303" console

# Parity
## run node
parity --chain ropsten --warp --jsonrpc-cors=all --jsonrpc-apis=all --jsonrpc-hosts=all --jsonrpc-interface all --ipc-path /Users/totiz/Documents2/jsonrpc.ipc --ipc-apis=all
<!-- parity --chain ropsten --warp --jsonrpc-cors=all --jsonrpc-apis personal,eth -->

## run in geth compatibility mode
add --geth

## run geth with ipc
geth attach ~/.local/share/io.parity.ethereum/jsonrpc.ipc console

## run node in background
nohup parity --jsonrpc-apis personal,eth &
tail -f nohup.out
ps -ef|grep parity
kill <process id>


## net account
parity --chain ropsten account new

## unlock account
curl --data '{"method":"personal_unlockAccount","params":["0xde9078776c45e3d963ba84cd10f06e610ea6be64","password",null],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545

## account list
parity --chain ropsten account list

## clean database
parity db kill --chain ropsten

## Export hardcoded sync
parity export-hardcoded-sync --chain kovan

## Mining
