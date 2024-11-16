import Image from "next/image";
import Auth from "./_components/auth";
import { CardWithForm } from "./_components/bridge-card";

export default function Home() {
  return (
    <div>
      <main className="flex h-[92vh] flex-col overflow-hidden items-center justify-center">
        <CardWithForm />
      </main>
    </div>
  );
}
