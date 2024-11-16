#!/bin/sh

# deploy on anvil1 & anvil2
hyperlane core deploy -r ./hyperlane --key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 --chain anvil1 -y \
& hyperlane core deploy -r ./hyperlane --key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 --chain anvil2 -y