import { useWallets } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import {
  createWalletClient,
  custom,
  GetAddressesReturnType,
  WalletClient,
} from "viem";
import { anvil } from "viem/chains";
import { eip7702Actions } from "viem/experimental";

export function useWalletClient() {
  const { wallets } = useWallets();
  const [walletClient, setWalletClient] = useState<any>();
  const [address, setAddress] = useState<GetAddressesReturnType>();
  const wallet = wallets[0];

  async function setupWalletClient() {
    const provider = await wallet!.getEthereumProvider();
    const client = createWalletClient({
      chain: anvil,
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
