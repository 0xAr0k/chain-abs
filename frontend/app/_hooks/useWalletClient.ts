import { useWallets } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import {
  createWalletClient,
  custom,
  defineChain,
  GetAddressesReturnType,
  http,
  WalletClient,
} from "viem";
import { anvil } from "viem/chains";
import { eip7702Actions } from "viem/experimental";

const chainIds = {
  anvil1: defineChain({
    id: 31_337,
    name: "anvil1",
    nativeCurrency: {
      name: "Ether",
      decimals: 18,
      symbol: "ETH",
    },
    rpcUrls: {
      default: {
        http: ["http://localhost:8545"],
      },
    },
    testnet: true,
  }),
  anvil2: defineChain({
    id: 31_338,
    name: "anvil2",
    nativeCurrency: {
      name: "Ether",
      decimals: 18,
      symbol: "ETH",
    },
    rpcUrls: {
      default: {
        http: ["http://localhost:8546"],
      },
    },
    testnet: true,
  }),
};

export function useWalletClient() {
  const { wallets } = useWallets();
  const [walletClient, setWalletClient] = useState<any>();
  const [address, setAddress] = useState<GetAddressesReturnType>();
  const wallet = wallets[0];

  async function setupWalletClient() {
    const provider = await wallet!.getEthereumProvider();

    const client = createWalletClient({
      account: wallet.address as `0x{string}`,
      chain: chainIds.anvil1,
      transport: custom(provider),
    }).extend(eip7702Actions());

    const address = await client.getAddresses();
    console.log("walletClient: ", client);
    setWalletClient(client);
    setAddress(address);
  }

  useEffect(() => {
    if (wallets.length > 0) {
      setupWalletClient();
    }
  }, [wallets]);

  return {
    walletClient,
    address,
  };
}
