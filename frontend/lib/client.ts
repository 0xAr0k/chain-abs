import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import { eip7702Actions } from "viem/experimental";

export const walletClient = createPublicClient({
  chain: sepolia,
  transport: http(),
}).extend(eip7702Actions());
