import {
  encodeAbiParameters,
  encodeFunctionData,
  encodePacked,
  keccak256,
  toBytes,
  zeroAddress,
} from "viem";
import { useWalletClient } from "./useWalletClient";
import { abi } from "@/config/abi.json";
import { usePublicClient } from "./usePublicClient";

export function useOrder() {
  const { walletClient, address } = useWalletClient();
  const { anvilClient } = usePublicClient();

  async function openOrder(
    senderAddress: string,
    receverAddress: string,
    fromToken: string,
    toToken: string,
    amount: number,
    originChainId: number,
    destinationChainId: number
  ) {
    // const authorization = await walletClient!.signAuthorization({
    //   account: address,
    //   contractAddress: "0x6ba98a3BCa12E02583B2Ca93Daf86C6D0574d843",
    // });
    const senderNonce = await anvilClient.getTransactionCount({
      address: senderAddress as `0x${string}`,
    });

    const ORDER_DATA_TYPE = `
  OrderData(
    bytes32 sender,
    bytes32 recipient,
    bytes32 inputToken,
    bytes32 outputToken,
    uint256 amountIn,
    uint256 amountOut,
    uint256 senderNonce,
    uint32 originDomain,
    uint32 destinationDomain,
    uint32 fillDeadline,
    bytes data
  )
`;

    const orderDataType = keccak256(toBytes(ORDER_DATA_TYPE.trim()));

    const fillDeadline = 4294967295;

    const orderData = encodeAbiParameters(
      [
        { type: "address" },
        { type: "address" },
        { type: "address" },
        { type: "address" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "uint32" },
        { type: "uint256" },
        { type: "uint32" },
        { type: "bytes" },
      ],
      [
        senderAddress as `0x${string}`,
        receverAddress as `0x${string}`,
        fromToken as `0x${string}`,
        toToken as `0x${string}`,
        BigInt(amount),
        BigInt(amount),
        BigInt(senderNonce),
        originChainId,
        BigInt(destinationChainId),
        fillDeadline,
        "0x",
      ]
    );

    try {
      const hash = await walletClient.writeContract({
        abi: abi,
        address: address,
        functionName: "open",
        args: [{ fillDeadline, orderDataType, orderData }],
        // authorizationList: [authorization],
      });

      return {
        hash,
      };
    } catch (error) {
      console.error(error);
    }
  }
  return { openOrder };
}
