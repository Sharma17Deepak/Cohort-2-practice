import { LeftBar } from "@/components/LeftBar";
import NavBar from "@/components/NavBar";
import { VideoGrid } from "@/components/VideoGrid";

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
