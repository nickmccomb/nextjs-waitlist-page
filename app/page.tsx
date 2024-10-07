import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-full h-80 bg-[#79c3cd] relative overflow-hidden">
          <Image
            src="/mobile-app.webp"
            alt="Mobile App Screenshots"
            fill
            className="object-contain mt-8 md:mt-24 px-14 object-bottom"
          />
        </div>

        <main className="flex flex-col gap-2 mt-8 justify-center px-6 pb-10">
          <Image
            src="/logo.png"
            alt="Mobile App Screenshots"
            width={120}
            height={120}
            className="object-contain rounded-full"
          />

          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
            Rememberall.ai
          </h1>
          <p className="text-gray-500 mb-6">
            A simple to use, cozy, reminder app for iOS and Android 🥰
          </p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
