import { publicClient, walletClient } from "@/lib/client";
import { CardWithForm } from "./_components/bridge-card";

export default async function Home() {
  const [address] = await walletClient.getAddresses();
  console.log("account addr: ", address);

  return (
    <div>
      <div className="flex h-[92vh] flex-col overflow-hidden items-center justify-center">
        <CardWithForm />
      </div>
    </div>
  );
}
