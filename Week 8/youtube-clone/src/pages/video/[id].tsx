import NavBar from "@/components/NavBar";
import { VideoCardHorizontal } from "@/components/VideoCardHorizontal";
import { VIDEOS } from "@/videos";
import { useRouter } from "next/router";

export default function VideoPage() {
    const router = useRouter();
    const videoId = Number(router.query.id);
    const currentVideo = VIDEOS.find(video => video.id === videoId) ?? VIDEOS[0];

    return <div className="p-4">
        <NavBar />
        <div className="grid gap-4 grid-cols-12">
            <div className="col-span-12 md:col-span-9 sm:col-span-8">
                <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/yaS7O6FQEkc"
                    title={currentVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                <div className="text-2xl pt-4">
                    {currentVideo.title}
                </div>
            </div>
            <div className="col-span-12 md:col-span-3 sm:col-span-4">
                {VIDEOS.map(video => <VideoCardHorizontal key={video.id} video={video} />)}
            </div>
        </div>
    </div>
}
