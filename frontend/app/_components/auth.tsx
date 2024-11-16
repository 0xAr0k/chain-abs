"use client";
import { Button } from "@/components/ui/button";
import { usePrivy } from "@privy-io/react-auth";

export default function Auth() {
  const { login, logout, authenticated } = usePrivy();
  console.log("auth: ", authenticated);

  return (
    <Button
      variant="default"
      className="font-mono"
      onClick={
        !authenticated
          ? () => login({ loginMethods: ["email"] })
          : () => logout()
      }
    >
      {authenticated ? "Logout" : "Login"}
    </Button>
  );
}
