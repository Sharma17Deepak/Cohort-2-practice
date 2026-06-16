import { LeftBar } from "@/components/LeftBar";
import NavBar from "@/components/NavBar";
import { VideoGrid } from "@/components/VideoGrid";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <NavBar/> 
      <div className="flex">
        <LeftBar />
        <VideoGrid />
      </div>
    </div>
  );
}
