import { createPublicClient, createWalletClient, custom } from "viem";
import { http } from "wagmi";
import { anvil, sepolia } from "viem/chains";
import { eip7702Actions } from "viem/experimental";
// import { useWallets } from "@privy-io/react-auth";
//
// const { wallets } = useWallets();
//
// const provider = await wallets[0]?.getEthereumProvider();

export const walletClient = createWalletClient({
  chain: anvil,
  transport: http(),
}).extend(eip7702Actions());

export const publicClient = createPublicClient({
  chain: anvil,
  transport: http(),
}).extend(eip7702Actions());

export const [address] = await walletClient.getAddresses();
console.log("account addr: ", address);
