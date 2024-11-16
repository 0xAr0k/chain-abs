import { zeroAddress } from "viem";
import { useWalletClient } from "./useWalletClient";
import { abi } from "@/config/abi.json";

export function useOrder() {
  const { walletClient, address } = useWalletClient();

  async function openOrder(
    senderAddress: string,
    receverAddress: string,
    fromToken: string,
    toToken: string,
    amount: number,
    originChainId: number,
    destinationChainId: number,
  ) {
    const authorization = await walletClient!.signAuthorization({
      account: address,
      // TODO: change to filler contract addr
      contractAddress: zeroAddress,
    });

    const hash = await walletClient.writeContract({
      abi: abi,
      address: address,
      functionName: "order",
      args: [
        senderAddress,
        receverAddress,
        fromToken,
        toToken,
        amount,
        amount,
        originChainId,
        destinationChainId,
      ],
      authorizationList: [authorization],
    });

    return {
      hash,
    };
  }
  return { openOrder };
}
