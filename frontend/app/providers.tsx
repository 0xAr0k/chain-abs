"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { PrivyProvider } from "@privy-io/react-auth";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
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
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
      </ThemeProvider>
    </PrivyProvider>
  );
}
