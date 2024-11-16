// temporary
// @TODO: Check back this method and finese it

import { abi } from "@/config/abi";
import { walletClient } from "@/lib/client";
import { encodeFunctionData, erc20Abi, parseEther, zeroAddress } from "viem";

// get the account address from wallet client

const createIntentsServices = <T>(services: T): T => ({
  ...services,
});

const contractAddr = "0x.....";

const [address] = await walletClient.getAddresses();

const authorization = await walletClient.signAuthorization({
  account: address,
  contractAddress: contractAddr,
  // delegate: true,
});

export const intentsServices = createIntentsServices({
  sendIntents: async (amount: number) => {
    // wallet should sign 2 transactions
    // 1. create intent for deposit
    // 2. create intent for actually sending the funds
    // const intents = await walletClient.sendTransaction({
    //   authorizationList: [authorization],
    //   data: encodeFunctionData({
    //     abi: abi,
    //     functionName: "execute",
    //     args: [
    //       [
    //         {
    //           data: "0x",
    //           to: "0xcb98643b8786950F0461f3B0edf99D88F274574D",
    //           value: parseEther("0.001"),
    //         },
    //         {
    //           data: "0x",
    //           to: "0xd2135CfB216b74109775236E36d4b433F1DF507B",
    //           value: parseEther("0.002"),
    //         },
    //       ],
    //     ],
    //   }),
    //   to: address,
    // });
  },
});
