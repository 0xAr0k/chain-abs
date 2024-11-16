"use client";
import { CardWithForm } from "./_components/bridge-card";
import { useWallets } from "@privy-io/react-auth";
import { createWalletClient, custom, GetAddressesReturnType } from "viem";
import { anvil } from "viem/chains";
import { useEffect, useState } from "react";
import { useWalletClient } from "./_hooks/useWalletClient";

export default function Home() {
  const { walletClient, address } = useWalletClient();

  console.log("address: ", address);
  console.log("walletClient: ", walletClient);

  return (
    <div>
      <div className="flex h-[92vh] flex-col overflow-hidden items-center justify-center">
        <CardWithForm />
      </div>
    </div>
  );
}
