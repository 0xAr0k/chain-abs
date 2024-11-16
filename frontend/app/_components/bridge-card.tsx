"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WalletClient } from "viem";
import { useWalletClient } from "../_hooks/useWalletClient";
import { useState } from "react";
import { useOrder } from "../_hooks/useOrder";

export function CardWithForm() {
  const { address } = useWalletClient();
  const { openOrder } = useOrder();
  const [recipientAddress, setRecipientAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [fromToken, setFromToken] = useState<string>("");
  const [toToken, setToToken] = useState<string>("");
  const [originChainId, setOriginChainId] = useState<number>(0);
  const [destinationChainId, setDestinationChainId] = useState<number>(0);
  return (
    <Card className="w-[350px] font-mono">
      <CardHeader>
        <CardTitle className="font-mono">Exchange</CardTitle>
        <CardDescription>Swap Across Chains</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label>From</Label>
              <div className="flex flex-row  space-x-1 align-top">
                <div className="flex w-full">
                  <Select
                    onValueChange={(value) => setOriginChainId(Number(value))}
                  >
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Chain" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="31337">31337</SelectItem>
                      <SelectItem value="31338">31338</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex w-full">
                  <Select onValueChange={(value) => setFromToken(value)}>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Tokens" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="0x0Ea816e64248E5C2D3dbbe7700b74702f8e98734">
                        ITT
                      </SelectItem>
                      {/* <SelectItem value="DAI">DAI</SelectItem>
                      <SelectItem value="USDC">USDC</SelectItem> */}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">To</Label>
              <div className="flex flex-row  space-x-1 align-top">
                <div className="flex w-full">
                  <Select
                    onValueChange={(value) =>
                      setDestinationChainId(Number(value))
                    }
                  >
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Chain" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="31337">31337</SelectItem>
                      <SelectItem value="31338">31338</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex w-full">
                  <Select onValueChange={(value) => setToToken(value)}>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Tokens" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="0x0Ea816e64248E5C2D3dbbe7700b74702f8e98734">
                        ITT
                      </SelectItem>
                      {/* <SelectItem value="DAI">DAI</SelectItem>
                      <SelectItem value="USDC">USDC</SelectItem> */}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Label>Amount</Label>
              <Input
                type="number"
                placeholder="0.0"
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <Label>Receiver</Label>
              <Input
                type="text"
                placeholder="0x..."
                onChange={(e) => setRecipientAddress(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div>{originChainId}</div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button
          onClick={() =>
            openOrder(
              address!.toString(),
              recipientAddress,
              fromToken,
              toToken,
              amount,
              originChainId,
              destinationChainId
            )
          }
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
