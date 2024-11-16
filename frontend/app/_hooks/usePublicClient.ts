import { createPublicClient, http } from "viem";
import { anvil, mainnet } from "viem/chains";

export function usePublicClient() {
  const anvilClient = createPublicClient({
    chain: anvil,
    transport: http(),
  });

  const mainnetClient = createPublicClient({
    chain: mainnet,
    transport: http(),
  });

  return {
    anvilClient,
    mainnetClient,
  };
}
