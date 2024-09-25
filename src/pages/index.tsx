// src/pages/index.tsx
import { GambaButton } from "@/components/ui/GambaPlayButton";
import { GameGrid } from "@/components/game/GameGrid";
import { PLATFORM_REFERRAL_FEE } from "@/constants";
import RecentPlays from "@/components/game/RecentPlays/RecentPlays";
import { toast } from "sonner";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export default function HomePage() {
  const walletModal = useWalletModal();
  const wallet = useWallet();

  const copyInvite = () => {
    if (!wallet.publicKey) {
      return walletModal.setVisible(true);
    }
    const referralLink = `${location.host}?code=${wallet.publicKey.toString()}`;
    navigator.clipboard.writeText(referralLink);
    toast.success(
      `Copied! Share your link to earn a ${
        PLATFORM_REFERRAL_FEE * 100
      }% fee when players use this platform`,
    );
  };
  return (
    <>
     <div className="relative mx-auto flex flex-col gap-5 mt-20 pb-10 px-2.5 transition-all duration-250 ease-in-out sm:px-5 sm:pt-5 md:max-w-6xl">
      <div
        className="relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-lg lg:grid lg:grid-cols-3 gap-4 lg:p-10 bg-transparent"
        style={{
          height: "441px",  // Fixed height
          minHeight: "350px",  // Minimum height for responsiveness
          borderRadius: "20px",  // Matching border radius
        }}
      >
        <div
          style={{
            backgroundImage: "url(/seo.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: "perspective(800px) rotateX(40deg)",
            transformOrigin: "top center",
            zIndex: -1,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="bg-[#15152e]/80 rounded-lg p-4 lg:col-span-2 text-center lg:text-left">
          <div className="flex items-center justify-center md:justify-start">
            <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-md">
              Welcome to Sbets Casino
            </h1>
            <img src="/wave.gif" className="h-14" alt="Gamba Logo" />
          </div>
          <p className="my-2 text-white drop-shadow">
              CA: TBA!
          </p>
          <p className="my-2 text-sm max-w-sm">
            Share your link to earn a {PLATFORM_REFERRAL_FEE * 100}% fee on each play when players use this platform using your code.
          </p>
          <button
            className="bg-[#8851ff] hover:bg-[#9564ff] rounded-lg p-2 text-xs"
            onClick={copyInvite}
          >
            Copy Link
          </button>
        </div>

        <div className="whitespace-nowrap grid grid-cols-2 grid-rows-2 gap-2 mt-5 md:flex md:flex-col md:mt-0 md:justify-start">
          <button
            onClick={() => window.open("https://dexscreener.com/")}
            className="rounded-lg p-3 w-full lg:w-64 bg-black bg-opacity-70 border-2 border-[#0fe2fa] hover:bg-[#12100e] text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
          >
            Dex Screener
          </button>
          <button
            onClick={() => window.open("https://t.me/SBetsCasino")}
            className="rounded-lg p-3 w-full lg:w-64 bg-black bg-opacity-70 border-2 border-[#0fe2fa] hover:bg-[#12100e] text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
          >
            Telegram
          </button>
          <button
            onClick={() => window.open("https://twitter.com/")}
            className="rounded-lg p-3 w-full lg:w-64 bg-black bg-opacity-70 border-2 border-[#0fe2fa] hover:bg-[#12100e] text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
          >
            Twitter
          </button>
          <button
            onClick={() => window.open("https://gamba.so")}
            className="rounded-lg p-3 w-full lg:w-64 bg-black bg-opacity-70 border-2 border-[#0fe2fa] hover:bg-[#12100e] text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
          >
            Explorer
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center">Games</h2>
      <GameGrid />
      <h2 className="text-2xl font-bold text-center">Recent Plays</h2>
      <RecentPlays />
    </div>
  </>

 );
}
