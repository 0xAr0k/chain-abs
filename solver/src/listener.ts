import { getAddress, hexToBytes, Log, pad, toBytes, trim } from "viem";
import erc20Abi from "./abi/erc20.json";
import Hyperlane7683Abi from "./abi/Hyperlane7683.json";
import { publicClients, walletClients } from "./client";
import { env } from "./env";

if (!env.ROUTER_ADDRESS) throw new Error("ROUTER_ADDRESS is required");

type OpenEventLog = {
  orderId: string;
  resolvedOrder: {
    user: string;
    originChainId: bigint;
    openDeadline: number;
    fillDeadline: number;
    maxSpent: {
      token: string;
      amount: bigint;
      recipient: string;
      chainId: bigint;
    }[];
    minReceived: {
      token: string;
      amount: bigint;
      recipient: string;
      chainId: bigint;
    }[];
    fillInstructions: {
      destinationChainId: bigint;
      destinationSettler: string;
      originData: string;
    }[];
  };
};

const srcPublicClient = publicClients[31337];
const dstPublicClient = publicClients[31338];
const srcWalletClient = walletClients[31337];
const dstWalletClient = walletClients[31338];

srcPublicClient.watchContractEvent({
  abi: Hyperlane7683Abi,
  address: env.ROUTER_ADDRESS as `0x${string}`,
  eventName: "Open",
  onLogs: async (logs) => {
    const argLogs = logs as (Log & { args: OpenEventLog })[];

    await Promise.all(
      argLogs.map(async (log) => {
        const resolvedOrder = log.args.resolvedOrder;

        await Promise.all(
          resolvedOrder.maxSpent.map(async (maxSpent) => {
            const nonce = await dstPublicClient.getTransactionCount({
              address: dstWalletClient.account.address,
            });

            await dstWalletClient.writeContract({
              nonce,
              gas: BigInt(50000),
              abi: erc20Abi,
              address: trim(maxSpent.token as `0x{string}`),
              functionName: "approve",
              args: [env.ROUTER_ADDRESS, maxSpent.amount],
            });
          })
        );

        await new Promise((r) => setTimeout(r, 2000));

        await Promise.all(
          resolvedOrder.fillInstructions.map(async (instruction) => {
            const nonce = await dstPublicClient.getTransactionCount({
              address: dstWalletClient.account.address,
            });

            const tx = await dstWalletClient.writeContract({
              nonce: nonce + 1,
              gas: BigInt(50000),
              abi: Hyperlane7683Abi,
              address: env.ROUTER_ADDRESS as `0x${string}`,
              functionName: "fill",
              args: [
                log.args.orderId,
                instruction.originData,
                pad(dstWalletClient.account.address, { size: 32 }),
              ],
            });

            console.log(`intents executed: ${tx}`);
          })
        );
      })
    );
  },
});

console.log("Listening on intents order");
