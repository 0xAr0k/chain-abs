// temporary
// @TODO: Check back this method and finese it

import { abi } from "@/config/abi.json";
// import { walletClient } from "@/lib/client";
import {
  createWalletClient,
  encodeFunctionData,
  erc20Abi,
  http,
  parseEther,
  WalletClient,
  zeroAddress,
} from "viem";
import { anvil } from "viem/chains";
import { eip7702Actions } from "viem/experimental";

// get the account address from wallet client
//
