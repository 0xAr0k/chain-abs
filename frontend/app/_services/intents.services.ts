"use server";
// temporary
// @TODO: Check back this method and finese it

import { abi } from "@/config/abi";
// import { walletClient } from "@/lib/client";
import {
  createWalletClient,
  encodeFunctionData,
  erc20Abi,
  http,
  parseEther,
  zeroAddress,
} from "viem";
import { anvil } from "viem/chains";
import { eip7702Actions } from "viem/experimental";

// get the account address from wallet client

const createIntentsServices = <T>(services: T): T => ({
  ...services,
});

const walletClient = createWalletClient({
  chain: anvil,
  transport: http(),
}).extend(eip7702Actions());

const [address] = await walletClient.getAddresses();

const authorization = await walletClient.signAuthorization({
  account: address,
  contractAddress: zeroAddress,
});

// const intentServices = async () => {
//     const [address] = await walletClient.getAddresses();
//     const authorization = await walletClient.sign({
//       account: address,
//       contractAddress: zeroAddress,
//       // delegate: true,
//     });
//
// }

// const [address] = await walletClient.getAddresses();
//
// const authorization = await walletClient.signAuthorization({
//   account: address,
//   contractAddress: contractAddr,
//   // delegate: true,
// });
