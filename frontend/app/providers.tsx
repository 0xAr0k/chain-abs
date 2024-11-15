"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId="your-privy-app-id"
      config={{
        appearance: {
          theme: "dark",
          accentColor: "#676FFF",
          // logo: "https://your-logo-url",
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
