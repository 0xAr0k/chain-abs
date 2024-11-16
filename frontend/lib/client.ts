import { createPublicClient, createWalletClient, custom, http } from "viem";
import { anvil, sepolia } from "viem/chains";
import { eip7702Actions } from "viem/experimental";

export const publicClient = createPublicClient({
  chain: anvil,
  transport: http(),
}).extend(eip7702Actions());
