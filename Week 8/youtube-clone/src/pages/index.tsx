import VideoCard from "@/components/VideoCard";
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
      <VideoCard title={"30 days coding challenge | Figuring Out | Raj shamani clips"} image={"image.jpg"}
      thumbImg={"thumb.jpg"} author={"Raj shamani"} views={"840k"} timestamp={"5 days ago"}
      ></VideoCard>
    </div>
  );
}
