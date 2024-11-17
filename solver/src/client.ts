import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { env } from "./env";

export const publicClients = {
  [env.ORDER_CHAIN_ID]: createPublicClient({
    transport: http(env.ORDER_CHAIN_RPC_URL),
  }),
  [env.FILL_CHAIN_ID]: createPublicClient({
    transport: http(env.FILL_CHAIN_RPC_URL),
  }),
};

if (!env.PRIVATE_KEY) throw new Error("PRIVATE_KEY is required");
export const account = privateKeyToAccount(env.PRIVATE_KEY as `0x${string}`);

export const walletClients = {
  [env.ORDER_CHAIN_ID]: createWalletClient({
    account,
    chain: {
      id: 31337,
      name: "Anvil1",
      nativeCurrency: {
        decimals: 18,
        name: "Tether",
        symbol: "ETH",
      },
      rpcUrls: {
        default: {
          http: ["http://localhost:8545"],
        },
      },
    },
    transport: http(env.ORDER_CHAIN_RPC_URL),
  }),
  [env.FILL_CHAIN_ID]: createWalletClient({
    account,
    chain: {
      id: 31338,
      name: "Anvil2",
      nativeCurrency: {
        decimals: 18,
        name: "Tether",
        symbol: "ETH",
      },
      rpcUrls: {
        default: {
          http: ["http://localhost:8546"],
        },
      },
    },
    transport: http(env.FILL_CHAIN_RPC_URL),
  }),
};
