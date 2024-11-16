import { createPublicClient, createWalletClient, http } from "viem";
import { sepolia } from "viem/chains";
import { eip7702Actions } from "viem/experimental";
import { createConfig } from "wagmi";

export const walletClient = createWalletClient({
  chain: sepolia,
  transport: http(),
}).extend(eip7702Actions());

const [address] = await walletClient.getAddresses();
console.log("account addr: ", address);
