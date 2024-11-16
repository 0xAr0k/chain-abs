#!/bin/sh

# deploy on anvil1 & anvil2
hyperlane registry init --overrides ./hyperlane \
&& hyperlane core deploy -r ./hyperlane --key ${PRIVATE_KEY} --chain anvil1 -y \
& hyperlane core deploy -r ./hyperlane --key ${PRIVATE_KEY} --chain anvil2 -y